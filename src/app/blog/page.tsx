import { redirect } from "next/navigation";
import { BLOG_URL } from "@/lib/constants";

// O blog é hospedado em WordPress num subdomínio separado (blog.cobersteel.com.br).
// Esta rota apenas redireciona /blog para lá, cobrindo links antigos e acessos diretos.
export default function BlogRedirect() {
  redirect(BLOG_URL);
}
