"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Package, Truck, Wrench, HardHat, Layers, ArrowLeft,
  CheckCircle2, ChevronRight, Send, AlertCircle,
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
    itens: ["Perfis formados a frio (Z, U, Ômega)", "Chapas e bobinas galvanizadas", "Perfis laminados", "Tubos estruturais"],
  },
  {
    icon: Package,
    titulo: "Coberturas e Vedações",
    itens: ["Lonas PVC e lonas técnicas", "Telhas metálicas e termoacústicas", "Telhas translúcidas", "Calhas e rufos"],
  },
  {
    icon: Wrench,
    titulo: "Fixação e Acabamentos",
    itens: ["Parafusos e conectores estruturais", "Ancoragens e chumbadores", "Tintas e tratamentos anticorrosivos", "Vedantes e silicones industriais"],
  },
  {
    icon: Truck,
    titulo: "Logística e Transporte",
    itens: ["Transporte de carga pesada e especial", "Locação de caminhões munck e guindastes", "Logística de longa distância", "Armazenagem e distribuição"],
  },
  {
    icon: HardHat,
    titulo: "Serviços e Mão de Obra",
    itens: ["Soldagem e caldeiraria", "Içamento e movimentação de cargas", "Fundações e serviços civis", "Locação de equipamentos de obra"],
  },
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
            className="inline-flex items-center gap-2 text-sm font-semibold text-white border border-white/30 hover:border-white px-4 py-2 rounded-lg transition-all mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" aria-hidden="true" />
            Institucional
          </Link>
          <p className="text-cobersteel-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Seja um Parceiro
          </p>
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

      {/* Categorias */}
      <section className="bg-dark-steel py-20">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categorias.map((cat) => (
              <div key={cat.titulo} className="bg-dark-mid border border-dark-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-cobersteel-blue/20 border border-cobersteel-blue/30 flex items-center justify-center mb-4">
                  <cat.icon className="w-5 h-5 text-cobersteel-blue" aria-hidden="true" />
                </div>
                <h3
                  className="font-black uppercase text-white text-sm mb-4"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {cat.titulo}
                </h3>
                <ul className="space-y-2">
                  {cat.itens.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-[#94A3B8]">
                      <ChevronRight className="w-3 h-3 text-cobersteel-blue flex-shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requisitos + Processo */}
      <section className="bg-dark-mid py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">

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
              CADASTRE SUA <span className="text-cobersteel-blue">EMPRESA</span>
            </h2>
          </div>

          {enviado ? (
            <div className="bg-dark-mid border border-cobersteel-gold/30 rounded-xl p-10 text-center">
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
              className="bg-dark-mid border border-dark-border rounded-xl p-8 space-y-5"
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
