"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { porcelanatos, Porcelanato } from "@/data/porcelanatos"

const FILTROS_USO = ["Todos", "Piso", "Parede", "Externo"]
const FILTROS_ACABAMENTO = ["Todos", "Polido Brilhante", "Acetinado", "Natural", "Antiderrapante"]

function PorcelanatoCard({ produto }: { produto: Porcelanato }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-gray-100 aspect-square shadow-md hover:shadow-xl transition-shadow duration-300">
      <Image
        src={produto.imagem}
        alt={produto.nome}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      {produto.melhorPreco && (
        <div className="absolute top-3 left-3 bg-[#BA8213] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          Melhor Preço
        </div>
      )}
      {produto.destaque && !produto.melhorPreco && (
        <div className="absolute top-3 left-3 bg-[#D12018] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          Destaque
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <span className="text-[10px] font-bold text-[#BA8213] uppercase tracking-[0.2em]">
          {produto.colecao} · {produto.formato} cm
        </span>
        <h3 className="text-white font-black text-lg uppercase leading-tight mt-1 group-hover:text-[#BA8213] transition-colors">
          {produto.nome}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-white/60 text-xs">{produto.acabamento}</span>
          {produto.preco && (
            <span className="ml-auto text-white font-bold text-sm">
              R$ {produto.preco.toFixed(2)}/m²
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function PorcelanatoPage() {
  const [filtroRetrabalhado, setFiltroRetrabalhado] = useState<"todos" | "premium" | "retrabalhado">("todos")
  const [filtroUso, setFiltroUso] = useState("Todos")
  const [filtroAcabamento, setFiltroAcabamento] = useState("Todos")

  const filtrados = porcelanatos.filter((p) => {
    if (filtroRetrabalhado === "premium" && p.melhorPreco) return false
    if (filtroRetrabalhado === "retrabalhado" && !p.melhorPreco) return false
    if (filtroUso !== "Todos" && !p.uso.includes(filtroUso.toLowerCase())) return false
    if (filtroAcabamento !== "Todos" && p.acabamento !== filtroAcabamento) return false
    return true
  })

  const totalPremium = porcelanatos.filter((p) => !p.melhorPreco).length
  const totalRetrabalhado = porcelanatos.filter((p) => p.melhorPreco).length

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className="bg-black px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-white/10">
        <Link href="/">
          <Image src="/images/logo-branca.png" alt="SG Brasil" width={120} height={48} className="object-contain" />
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Início</Link>
          <Link href="/porcelanatos" className="text-[#D12018] text-sm font-bold">Porcelanatos</Link>
          <Link href="/ambientes/banheiro" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Nichos</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative bg-black py-20 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/textura-porcelanato.webp" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <span className="inline-block text-[#BA8213] text-xs font-bold uppercase tracking-[0.3em] mb-4">
            SG Brasil Porcelanato
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
            Catálogo de <span className="text-[#D12018]">Porcelanatos</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Grandes formatos e acabamentos exclusivos. Encontre o porcelanato ideal para cada ambiente.
          </p>
        </div>
      </section>

      {/* SELETOR PREMIUM / RETRABALHADO */}
      <section className="bg-gray-50 border-b border-gray-200 px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => setFiltroRetrabalhado("todos")}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
              filtroRetrabalhado === "todos"
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
            }`}
          >
            Todos os produtos
          </button>
          <button
            onClick={() => setFiltroRetrabalhado("premium")}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
              filtroRetrabalhado === "premium"
                ? "bg-[#D12018] text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
            }`}
          >
            Linha Premium
            {totalPremium > 0 && <span className="ml-2 opacity-60 font-normal">({totalPremium})</span>}
          </button>
          <button
            onClick={() => setFiltroRetrabalhado("retrabalhado")}
            className={`px-8 py-3 rounded-xl font-bold text-sm transition-all ${
              filtroRetrabalhado === "retrabalhado"
                ? "bg-[#BA8213] text-white shadow-lg"
                : "bg-white text-gray-600 border border-gray-200 hover:border-gray-400"
            }`}
          >
            Melhor Preço
            {totalRetrabalhado > 0 && <span className="ml-2 opacity-60 font-normal">({totalRetrabalhado})</span>}
          </button>
        </div>

        {filtroRetrabalhado === "retrabalhado" && (
          <div className="max-w-2xl mx-auto mt-4 bg-[#BA8213]/10 border border-[#BA8213]/30 rounded-xl px-6 py-3 text-center">
            <p className="text-sm text-[#8a6010] font-medium">
              Porcelanatos de alta qualidade com preço especial. Mesma durabilidade e resistência da linha premium.
            </p>
          </div>
        )}
      </section>

      {/* FILTROS SECUNDÁRIOS */}
      <section className="sticky top-[65px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Uso</span>
            <div className="flex gap-1">
              {FILTROS_USO.map((f) => (
                <button
                  key={f}
                  onClick={() => setFiltroUso(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    filtroUso === f ? "bg-[#D12018] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Acabamento</span>
            <div className="flex gap-1 flex-wrap">
              {FILTROS_ACABAMENTO.map((f) => (
                <button
                  key={f}
                  onClick={() => setFiltroAcabamento(f)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                    filtroAcabamento === f ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <span className="ml-auto text-xs text-gray-400 font-medium">
            {filtrados.length} produto{filtrados.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* GRID */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {porcelanatos.length === 0 ? (
          // Estado vazio — catálogo sendo preparado
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
              <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-black uppercase mb-3">Catálogo em preparação</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-8">
              Estamos catalogando nosso acervo completo de porcelanatos. Em breve você poderá explorar
              toda a nossa linha premium e retrabalhada aqui.
            </p>
            <a
              href="https://wa.me/5519996622666?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20os%20porcelanatos%20da%20SG%20Brasil."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D12018] hover:bg-[#b01a14] text-white font-black py-4 px-10 rounded-xl text-base shadow-lg transition-all hover:scale-105"
            >
              CONSULTAR VIA WHATSAPP
            </a>
          </div>
        ) : filtrados.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">Nenhum produto encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtrados.map((p) => <PorcelanatoCard key={p.slug} produto={p} />)}
          </div>
        )}
      </main>

      {/* FOOTER CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-6 text-center">
        <p className="text-gray-500 text-sm mb-2">Precisa de ajuda para escolher?</p>
        <h2 className="text-2xl font-black text-black uppercase mb-6">
          Fale com um <span className="text-[#D12018]">especialista</span>
        </h2>
        <a
          href="https://wa.me/5519996622666?text=Ol%C3%A1%21%20Vi%20o%20cat%C3%A1logo%20de%20porcelanatos%20da%20SG%20Brasil%20e%20gostaria%20de%20um%20or%C3%A7amento."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#D12018] hover:bg-[#b01a14] text-white font-black py-4 px-10 rounded-xl text-base shadow-lg transition-all hover:scale-105"
        >
          SOLICITAR ORÇAMENTO VIA WHATSAPP
        </a>
      </section>
    </div>
  )
}
