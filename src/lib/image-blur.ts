/**
 * LQIPs (miniaturas de 16px, geradas via sharp) para as fotos/banners "grandes"
 * do site — hero da home, banners de página interna, fotos de produto e a foto
 * institucional. Usadas como `blurDataURL` no next/image para o primeiro paint
 * já mostrar algo nítido o bastante em vez de um bloco sólido/vazio enquanto a
 * imagem em resolução real ainda está baixando.
 */
export const IMAGE_BLUR: Record<string, string> = {
  "/images/image.webp":
    "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAADwAQCdASoQAAgAA4BaJbACdAD0ZuYmWuAA/r4dYW+s8nNC9JAQDmXkJvXJ8cDlocQrePujNV+XZsU0V/hQjuk2nUuA45Yo5X6J4CafZQkYSUVbo0AAAA==",
  "/images/quem-somos-banner.webp":
    "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAwAgCdASoQAAkAA4BaJYwCdAYs3UO5KGWiwADb+tGA7OH8o+EzUnRTal/ooqxFcZum6Zg/XWQB0SLwdS3FhanzuNTTBaDGkf1pRagAAAA=",
  "/images/geral/montsteel.webp":
    "data:image/webp;base64,UklGRloAAABXRUJQVlA4IE4AAAAwAgCdASoQAAkAA4BaJYwCdAYs3UO5KGWiwADb+tGA7OH8o+EzUnRTal/ooqxFcZum6Zg/XWQB0SLwdS3FhanzuNTTBaDGkf1pRagAAAA=",
  "/images/normas-abnt-banner.webp":
    "data:image/webp;base64,UklGRmIAAABXRUJQVlA4IFYAAAAwAgCdASoQAAkAA4BaJYwCdH8AF7w+SewiwAD+6k2/4pfhzZ28Vy6UhOsGQ412nKfJdKnDHhJl/ZA8cZmEAedhIPbghH5iaDV8/DBw2cPpnLUM1IoAAA==",
  "/images/fornecedores-banner.webp":
    "data:image/webp;base64,UklGRnAAAABXRUJQVlA4IGQAAACQAgCdASoQAAkAA4BaJYwCdEf/i1m+a2UVMMcR4AD+8OzN9Cb0kO3S1Eji9KpAA8euuTYU6Y9HuBR8SqxdNb+Vlu5eMpOoE0pb/5L62563Sm8Ydswty4sBCSb/AKpdG4S8AAAA",
  "/images/privacidade-banner.webp":
    "data:image/webp;base64,UklGRlAAAABXRUJQVlA4IEQAAADwAQCdASoQAAkAA4BaJQBOgCP/Q18KgAAA/vXPbSxud3r39CBDC0ENIV3jJSy8x5blUuprcqdxsAh/ktUCaHBdcmgAAA==",
  "/images/servicos/banner.webp":
    "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAQAgCdASoQAAkAA4BaJYwCdAYtpq9Yv1uAAP7m5rce5xibGvWRnk3zsuOK7+zXcVyfkRrjwsDjd7d4xUZoEoSxUpqYHKb/s5a78VZmhC2JgIAA",
  "/images/orcamento-banner.webp":
    "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAADwAQCdASoQAAkAA4BaJYwCdH8AFwwLrYAA/vFviXmh73b6gATWmeWwOpR/r3gMz87UM7Qm35pj/2w28FcmBUcRGtZ3IDqXlrFf9VB021sFRWgA",
  "/images/blog-banner.webp":
    "data:image/webp;base64,UklGRl4AAABXRUJQVlA4IFIAAAAQAgCdASoQAAkAA4BaJZAC7AEfZSSZXjQAAP710aEY5owAFeb/8A8vYcXNoMTpbvBbDfqUvZW+vXUEZFcXxNAf+Y0fiJOPvQ1X6b62JTaVEIAA",
  "/images/data.webp":
    "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAADQAQCdASoQAAgAA4BaJaQAAvwUd4DbgAD+QLjZyqC/gXZATPVnbIbcxHIXdVITBPDt37ZclRxsrN9g55QMomWh1EaE/rJaLlsIWMIA",
  "/images/produtos/galpao-de-lona.webp":
    "data:image/webp;base64,UklGRlQAAABXRUJQVlA4IEgAAAAQAgCdASoQAAkAA4BaJaACdAEO9RvwzDuAAP7GBh3jNZwu6+30f8hcIqR16exLErdlUL1uLyLds3ep7vS3xiY5UwltlqjoAAA=",
  "/images/produtos/galpao-metalico.webp":
    "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAACwAQCdASoQAAkAA4BaJZwC7ADy0GAAAP3VO9whkc3T2Sz1H2sdwO72biRRkjtrfdKjZ9TD6uvwP97v/Y/HMxT8AAA=",
  "/images/produtos/galpao-coberecosteeel-hibrido.webp":
    "data:image/webp;base64,UklGRmwAAABXRUJQVlA4IGAAAAAQAgCdASoQAAoAA4BaJagAAud1j4lGVEpQAP7nr9X6YvDuxUB5vdDABnZOBAeToayUke0fBuQpjjCDMe62pU0dRZWlVvoGtw6gpAtJ54JZwMv/pwtyDbvu+/mvdSJDgAA=",
  "/images/produtos/mezaninos-metalicos.webp":
    "data:image/webp;base64,UklGRlgAAABXRUJQVlA4IEwAAACQAQCdASoQAAkAA4BaJZQAAgyJ6AAA/n51qP2mIv14GnUeyovdK6u4HEd1g06g/974QW+T7eVmmFPn5CePe29rhv4+hyS4n8ANQAAA",
  "/images/produtos/projetos-especiais.webp":
    "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAwAgCdASoQAAkAA4BaJZQC7AEfcH2F71fMAAD+2abshAjf4DlPBg/bnS/j2rvG0+Kr19I/4S8vJLvNxRog7Rh/qTDB4AAA",
  "/images/produtos/niveladoras-de-doca.webp":
    "data:image/webp;base64,UklGRlwAAABXRUJQVlA4IFAAAADQAQCdASoQAAkAA4BaJZQCdAD6jOSjwAD+7QlxUIuQZtTg2frGZX14V7GLox+BYGrx7SUKkF2hlU14wtuGFly1iDELKL3cWrvpayVFlooAAA==",
};
