import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const slug = request.nextUrl.searchParams.get("slug");

  if (secret !== process.env.REVALIDATION_TOKEN) {
    return NextResponse.json({ message: "Token inválido" }, { status: 401 });
  }

  try {
    const paths = ["/blog"];
    revalidatePath("/blog");

    if (slug) {
      paths.push(`/blog/${slug}`);
      revalidatePath(`/blog/${slug}`);
    }

    return NextResponse.json({ revalidated: true, paths });
  } catch {
    return NextResponse.json({ message: "Erro ao revalidar" }, { status: 500 });
  }
}
