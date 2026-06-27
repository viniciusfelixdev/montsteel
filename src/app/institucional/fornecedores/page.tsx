"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Package, Truck, Wrench, HardHat, Layers, ArrowLeft,
  CheckCircle2, ChevronDown, Send, AlertCircle,
  ChevronLeft, ChevronRight,
} from "lucide-react";
import CustomSelect from "@/components/shared/CustomSelect";
import { CONTACT_INFO } from "@/lib/constants";

const CATEGORIA_OPTIONS = [
  { value: "aco", label: "Aço e Perfis Metálicos" },
  { value: "coberturas", label: "Coberturas e Vedações" },
  { value: "fixacao", label: "Fixação e Acabamentos" },
  { value: "logistica", label: "Logística e Transporte" },
  { value: "servicos", label: "Serviços e Mão de Obra" },
  { value: "outro", label: "Outro" },
];

const ATUACAO_OPTIONS = [
  { value: "local", label: "Local (cidade/região)" },
  { value: "estadual", label: "Estadual" },
  { value: "regional", label: "Regional (2–4 estados)" },
  { value: "nacional", label: "Nacional" },
];

const categorias = [
  {
    icon: Layers,
    titulo: "Aço e Perfis Metálicos",
    itens: [
      {
        nome: "Tubos Quadrados e Retangulares",
        descricao: "Tubos estruturais de seção quadrada e retangular para colunas, vigas e contraventamentos. Trabalhamos com diversas bitolas e espessuras de parede, conforme o dimensionamento de cada projeto.",
      },
      {
        nome: "Perfis Laminados (I, W, H, U)",
        descricao: "Perfis laminados a quente para estruturas de grande porte e altas cargas. Usados em pilares e vigas principais de galpões metálicos e mezaninos.",
      },
      {
        nome: "Perfis Formados a Frio (Z, U, Ômega)",
        descricao: "Perfis conformados a frio para terças, longarinas e estruturas secundárias. Solução leve e econômica para vencer vãos com eficiência estrutural.",
      },
      {
        nome: "Chapas e Bobinas Galvanizadas",
        descricao: "Chapas e bobinas de aço com revestimento galvanizado para maior resistência à corrosão, empregadas em peças, conexões e fechamentos.",
      },
    ],
  },
  {
    icon: Package,
    titulo: "Coberturas e Vedações",
    itens: [
      {
        nome: "Lonas PVC e Lonas Técnicas",
        descricao: "Lonas de PVC de alta densidade com proteção UV e antichama, usadas na cobertura dos galpões de lona e híbridos. Alta durabilidade frente a chuva, vento e radiação solar.",
      },
      {
        nome: "Telhas Metálicas e Termoacústicas",
        descricao: "Telhas de aço simples e com isolamento termoacústico (sanduíche), para conforto térmico e redução de ruído em ambientes industriais.",
      },
      {
        nome: "Telhas Translúcidas",
        descricao: "Telhas translúcidas em policarbonato ou poliéster para aproveitamento de luz natural, reduzindo o consumo de energia com iluminação artificial.",
      },
      {
        nome: "Calhas e Rufos",
        descricao: "Sistema de captação e condução de águas pluviais, fabricado sob medida para a geometria de cada cobertura.",
      },
    ],
  },
  {
    icon: Wrench,
    titulo: "Fixação e Acabamentos",
    itens: [
      {
        nome: "Parafusos e Conectores Estruturais",
        descricao: "Parafusos de alta resistência e conectores estruturais para ligações seguras entre os elementos metálicos, conforme as normas aplicáveis.",
      },
      {
        nome: "Ancoragens e Chumbadores",
        descricao: "Chumbadores e ancoragens para fixação da estrutura à fundação, dimensionados para as cargas de cada projeto.",
      },
      {
        nome: "Tintas e Tratamentos Anticorrosivos",
        descricao: "Sistemas de pintura e tratamento de superfície que prolongam a vida útil da estrutura, inclusive em ambientes agressivos e corrosivos.",
      },
      {
        nome: "Vedantes e Silicones Industriais",
        descricao: "Selantes e vedantes industriais para estanqueidade de juntas, sobreposições de telhas e pontos de fixação.",
      },
    ],
  },
  {
    icon: Truck,
    titulo: "Logística e Transporte",
    itens: [
      {
        nome: "Transporte de Carga Pesada e Especial",
        descricao: "Transporte de estruturas e peças de grande porte, incluindo cargas com dimensões especiais, para obras em todo o país.",
      },
      {
        nome: "Caminhões Munck e Guindastes",
        descricao: "Locação de caminhões munck e guindastes para o içamento e a movimentação das estruturas no canteiro de obra.",
      },
      {
        nome: "Logística de Longa Distância",
        descricao: "Operação logística para atendimento nacional, com planejamento de rotas e prazos de entrega para qualquer região.",
      },
      {
        nome: "Armazenagem e Distribuição",
        descricao: "Estrutura de armazenagem e distribuição de materiais para apoiar o cronograma de fornecimento das obras.",
      },
    ],
  },
  {
    icon: HardHat,
    titulo: "Serviços e Mão de Obra",
    itens: [
      {
        nome: "Soldagem e Caldeiraria",
        descricao: "Serviços de soldagem e caldeiraria com profissionais qualificados para fabricação e ajustes estruturais em campo e em fábrica.",
      },
      {
        nome: "Içamento e Movimentação de Cargas",
        descricao: "Equipes e equipamentos especializados em içamento e movimentação segura de cargas durante a montagem.",
      },
      {
        nome: "Fundações e Serviços Civis",
        descricao: "Execução de fundações e serviços civis complementares necessários à implantação da estrutura metálica.",
      },
      {
        nome: "Locação de Equipamentos de Obra",
        descricao: "Locação de equipamentos e plataformas de trabalho em altura para apoio à montagem e manutenção.",
      },
    ],
  },
];

const suppliers: { name: string; file: string; dark?: boolean }[] = [
  { name: "Gerdau", file: "gerdau.png" },
  { name: "Usiminas", file: "usiminas.png" },
  { name: "ArcelorMittal", file: "arcelor.png" },
  { name: "CSN", file: "csn.png" },
  { name: "Vallourec", file: "vallourec.png" },
  { name: "Ternium", file: "ternium.png" },
  { name: "Aço Cearense", file: "aco-cearense.png" },
  { name: "Ruukki", file: "ruukki.png", dark: true },
];

const requisitos = [
  "Documentação fiscal e tributária em dia (CNPJ ativo, certidões negativas)",
  "Capacidade de atendimento em múltiplos estados brasileiros",
  "Qualidade comprovada de materiais com certificados de origem",
  "Cumprimento de prazos e comprometimento com cronogramas de obra",
  "Responsabilidade ambiental e conformidade com legislação trabalhista",
];

const etapas = [
  { num: "01", titulo: "Envio do Cadastro", desc: "Preencha o formulário abaixo com os dados da sua empresa e área de atuação." },
  { num: "02", titulo: "Análise", desc: "Nossa equipe de suprimentos avalia o perfil e entra em contato em até 5 dias úteis." },
  { num: "03", titulo: "Homologação", desc: "Fornecedores aprovados recebem o kit de homologação com os requisitos técnicos e documentais." },
  { num: "04", titulo: "Parceria Ativa", desc: "Após homologado, você passa a receber cotações e oportunidades de negócio com a CoberSteel." },
];

export default function FornecedoresPage() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState(false);
  const [form, setForm] = useState({
    razaoSocial: "",
    cnpj: "",
    responsavel: "",
    email: "",
    telefone: "",
    categoria: "",
    atuacao: "",
    mensagem: "",
  });
  const [categoriaAberta, setCategoriaAberta] = useState<string | null>(categorias[0].titulo);
  const [itemAberto, setItemAberto] = useState<string | null>(null);

  const supplierTrackRef = useRef<HTMLDivElement>(null);
  const supplierPausedRef = useRef(false);
  const suppliersLoop = [...suppliers, ...suppliers];

  useEffect(() => {
    const el = supplierTrackRef.current;
    if (!el) return;
    let raf: number;
    const speed = 0.5;
    const step = () => {
      if (el && !supplierPausedRef.current) {
        el.scrollLeft += speed;
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const nudgeSuppliers = (dir: number) => {
    const el = supplierTrackRef.current;
    if (!el) return;
    const half = el.scrollWidth / 2;
    const amount = 260;
    if (el.scrollLeft >= half) el.scrollLeft -= half;
    if (dir < 0 && el.scrollLeft < amount) el.scrollLeft += half;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro(false);
    setEnviando(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "fornecedor", ...form }),
      });
      if (!res.ok) throw new Error("Falha no envio");
      setEnviado(true);
    } catch {
      setErro(true);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/fornecedores-banner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#0F0F0F]/75" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/institucional/quem-somos"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-black/50 backdrop-blur-sm border border-white/10 hover:bg-black/70 hover:border-white/30 px-4 py-2 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Institucional
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-cobersteel-gold" aria-hidden="true" />
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest">Institucional</p>
          </div>
          <h1
            className="text-5xl sm:text-7xl font-black uppercase tracking-tight text-white mb-4"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            CADASTRO DE <span className="text-cobersteel-blue">FORNECEDORES</span>
          </h1>
          <p className="text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            A CoberSteel busca parceiros comprometidos com qualidade, prazo e responsabilidade. Se a sua empresa fornece materiais, equipamentos ou serviços para o setor industrial, cadastre-se e faça parte da nossa cadeia de suprimentos.
          </p>
        </div>
      </section>

      {/* Carrossel de fornecedores */}
      <section className="bg-dark-steel py-16 overflow-hidden" aria-labelledby="fornecedores-carousel-titulo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <h2
            id="fornecedores-carousel-titulo"
            className="text-3xl font-black uppercase text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            NOSSOS PRINCIPAIS FORNECEDORES
          </h2>
          <p className="mt-3 text-sm text-[#94A3B8]">
            Parceiros homologados que garantem a qualidade e a rastreabilidade de cada projeto
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => { supplierPausedRef.current = true; }}
          onMouseLeave={() => { supplierPausedRef.current = false; }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-dark-steel to-transparent" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-dark-steel to-transparent" aria-hidden="true" />

          <button
            type="button"
            onClick={() => nudgeSuppliers(-1)}
            aria-label="Fornecedores anteriores"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark-steel/90 border border-dark-border text-white flex items-center justify-center shadow-lg hover:bg-cobersteel-blue hover:border-cobersteel-blue transition-colors"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => nudgeSuppliers(1)}
            aria-label="Próximos fornecedores"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-dark-steel/90 border border-dark-border text-white flex items-center justify-center shadow-lg hover:bg-cobersteel-blue hover:border-cobersteel-blue transition-colors"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>

          <div
            ref={supplierTrackRef}
            className="no-scrollbar flex items-center gap-6 overflow-x-auto px-14"
          >
            {suppliersLoop.map((s, i) => (
              <div
                key={`${s.file}-${i}`}
                className={`shrink-0 rounded-xl px-8 py-5 flex items-center justify-center ${
                  s.dark ? "bg-dark-steel" : "bg-white"
                }`}
                aria-hidden={i >= suppliers.length}
              >
                <Image
                  src={`/images/suppliers/${s.file}`}
                  alt={s.name}
                  width={160}
                  height={80}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">O que buscamos</p>
            <h2
              className="text-4xl sm:text-5xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              CATEGORIAS DE <span className="text-cobersteel-blue">FORNECIMENTO</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden divide-y divide-dark-border border border-dark-border">
            {categorias.map((cat) => {
              const aberta = categoriaAberta === cat.titulo;
              return (
                <div key={cat.titulo} className="bg-dark-steel">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setCategoriaAberta(aberta ? null : cat.titulo)}
                      aria-expanded={aberta}
                      className="w-full flex items-center gap-4 px-5 sm:px-6 py-5 text-left hover:bg-cobersteel-blue/5 transition-colors"
                    >
                      <span className="w-10 h-10 rounded-lg bg-cobersteel-blue/20 flex items-center justify-center flex-shrink-0">
                        <cat.icon className="w-5 h-5 text-cobersteel-blue" aria-hidden="true" />
                      </span>
                      <span
                        className="flex-1 font-black uppercase text-white text-base sm:text-lg"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      >
                        {cat.titulo}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-cobersteel-blue flex-shrink-0 transition-transform duration-300 ${aberta ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    className={`grid transition-all duration-300 ease-out ${aberta ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                  >
                    <div className="overflow-hidden">
                      <ul className="px-3 sm:px-4 pb-4 pl-14 sm:pl-[4rem] space-y-1.5">
                        {cat.itens.map((item) => {
                          const chave = `${cat.titulo}__${item.nome}`;
                          const itemOpen = itemAberto === chave;
                          return (
                            <li key={item.nome} className="rounded-lg bg-dark-mid/60 overflow-hidden">
                              <button
                                type="button"
                                onClick={() => setItemAberto(itemOpen ? null : chave)}
                                aria-expanded={itemOpen}
                                className="w-full flex items-center gap-2.5 px-4 py-3 text-left hover:bg-cobersteel-blue/5 transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-cobersteel-blue flex-shrink-0" aria-hidden="true" />
                                <span className="flex-1 text-sm font-semibold text-white">{item.nome}</span>
                                <ChevronDown
                                  className={`w-4 h-4 text-cobersteel-blue flex-shrink-0 transition-transform duration-300 ${itemOpen ? "rotate-180" : ""}`}
                                  aria-hidden="true"
                                />
                              </button>
                              <div
                                className={`grid transition-all duration-300 ease-out ${itemOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                              >
                                <div className="overflow-hidden">
                                  <p className="px-4 pb-4 pl-8 text-sm text-[#94A3B8] leading-relaxed">
                                    {item.descricao}
                                  </p>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Requisitos + Processo */}
      <section className="bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-14">

            {/* Requisitos */}
            <div>
              <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">Critérios</p>
              <h2
                className="text-4xl font-black uppercase text-white mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                REQUISITOS PARA <span className="text-cobersteel-blue">HOMOLOGAÇÃO</span>
              </h2>
              <ul className="space-y-4">
                {requisitos.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cobersteel-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-[#94A3B8] leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Processo */}
            <div>
              <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">Como funciona</p>
              <h2
                className="text-4xl font-black uppercase text-white mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                PROCESSO DE <span className="text-cobersteel-blue">CADASTRO</span>
              </h2>
              <div className="space-y-5">
                {etapas.map((e) => (
                  <div key={e.num} className="flex gap-5 items-start">
                    <span
                      className="text-3xl font-black text-cobersteel-blue/30 leading-none flex-shrink-0 w-10"
                      style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                      aria-hidden="true"
                    >
                      {e.num}
                    </span>
                    <div>
                      <p className="font-black uppercase text-white text-sm mb-1" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
                        {e.titulo}
                      </p>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="bg-dark-steel py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">Formulário</p>
            <h2
              className="text-4xl font-black uppercase text-white"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              CADASTRE SUA EMPRESA
            </h2>
          </div>

          {enviado ? (
            <div className="bg-dark-mid rounded-xl p-10 text-center">
              <CheckCircle2 className="w-12 h-12 text-cobersteel-gold mx-auto mb-4" aria-hidden="true" />
              <h3
                className="text-2xl font-black uppercase text-white mb-2"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Cadastro Recebido!
              </h3>
              <p className="text-[#94A3B8] text-sm">
                Nossa equipe de suprimentos analisará o perfil da sua empresa e entrará em contato em até 5 dias úteis.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-dark-mid rounded-xl p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                    Razão Social *
                  </label>
                  <input
                    type="text"
                    name="razaoSocial"
                    required
                    value={form.razaoSocial}
                    onChange={handleChange}
                    className="w-full bg-dark-steel border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-cobersteel-blue transition-colors"
                    placeholder="Nome da empresa"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                    CNPJ *
                  </label>
                  <input
                    type="text"
                    name="cnpj"
                    required
                    value={form.cnpj}
                    onChange={handleChange}
                    className="w-full bg-dark-steel border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-cobersteel-blue transition-colors"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                    Responsável *
                  </label>
                  <input
                    type="text"
                    name="responsavel"
                    required
                    value={form.responsavel}
                    onChange={handleChange}
                    className="w-full bg-dark-steel border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-cobersteel-blue transition-colors"
                    placeholder="Nome do contato"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full bg-dark-steel border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-cobersteel-blue transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-dark-steel border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-cobersteel-blue transition-colors"
                  placeholder="contato@suaempresa.com.br"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <CustomSelect
                  label="Categoria de Fornecimento"
                  required
                  variant="blue"
                  name="categoria"
                  value={form.categoria}
                  onChange={(v) => setForm((prev) => ({ ...prev, categoria: v }))}
                  options={CATEGORIA_OPTIONS}
                />
                <CustomSelect
                  label="Área de Atuação"
                  required
                  variant="blue"
                  name="atuacao"
                  value={form.atuacao}
                  onChange={(v) => setForm((prev) => ({ ...prev, atuacao: v }))}
                  options={ATUACAO_OPTIONS}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#94A3B8] uppercase tracking-wider mb-2">
                  Descreva seus produtos ou serviços
                </label>
                <textarea
                  name="mensagem"
                  rows={4}
                  value={form.mensagem}
                  onChange={handleChange}
                  className="w-full bg-dark-steel border border-dark-border rounded-lg px-4 py-3 text-sm text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-cobersteel-blue transition-colors resize-none"
                  placeholder="Descreva o que sua empresa oferece, diferenciais, capacidade de atendimento, etc."
                />
              </div>

              {erro && (
                <div className="flex items-center gap-2 bg-red-900/30 border border-red-700/50 rounded-lg px-4 py-3 text-sm text-red-300">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  Erro ao enviar. Tente novamente ou fale conosco pelo WhatsApp.
                </div>
              )}

              <button
                type="submit"
                disabled={enviando}
                className="inline-flex items-center justify-center gap-2 w-full py-4 bg-cobersteel-gold text-dark-steel font-bold text-sm uppercase rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                {enviando ? "Enviando..." : "Enviar Cadastro"}
              </button>

              <p className="text-xs text-[#94A3B8] text-center">
                Seus dados são tratados com confidencialidade conforme nossa{" "}
                <Link href="/institucional/privacidade" className="text-cobersteel-blue hover:text-white transition-colors">
                  Política de Privacidade
                </Link>.
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
