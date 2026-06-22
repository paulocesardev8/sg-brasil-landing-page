"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Produto } from "@/data/produtos"

const TIPOS = [
  { id: "todos",    label: "Todos" },
  { id: "embutir",  label: "Embutir" },
  { id: "sobrepor", label: "Sobrepor" },
]
const TAMANHOS = ["Todos", "30x30", "30x60", "30x80", "30x100"]

function ProdutoCard({ produto }: { produto: Produto }) {
  const label =
    produto.tipo === "embutir"
      ? produto.orientacao === "vertical" ? "Embutir Vertical" : "Embutir Horizontal"
      : "Sobrepor"

  return (
    <Link href={`/produto/${produto.slug}`} className="group block">
      <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3] shadow-md group-hover:shadow-xl transition-shadow duration-300">
        <Image
          src={produto.imagemListagem}
          alt={produto.nome}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {produto.destaque && (
          <div className="absolute top-3 left-3 bg-[#D12018] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Mais Vendido
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="text-[10px] font-bold text-[#BA8213] uppercase tracking-[0.2em]">
            {label} · {produto.tamanho} cm
          </span>
          <h3 className="text-white font-black text-lg uppercase leading-tight mt-1 group-hover:text-[#BA8213] transition-colors">
            {produto.nome}
          </h3>
          <div className="flex items-center gap-1.5 mt-3">
            {produto.cores.slice(0, 6).map((cor) => (
              <span
                key={cor.id}
                title={cor.nome}
                className="w-4 h-4 rounded-full border border-white/40 shadow"
                style={{ backgroundColor: cor.hex }}
              />
            ))}
            {produto.cores.length > 6 && (
              <span className="text-white/70 text-xs">+{produto.cores.length - 6}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

type Props = {
  produtos: Produto[]
  ambienteNome: string
  ambienteSlug: string
}

export default function ProdutosGrid({ produtos, ambienteNome, ambienteSlug }: Props) {
  const [tipoFiltro, setTipoFiltro] = useState("todos")
  const [tamanhoFiltro, setTamanhoFiltro] = useState("Todos")

  const filtrados = produtos.filter((p) => {
    const matchTipo = tipoFiltro === "todos" || p.tipo === tipoFiltro
    const matchTamanho = tamanhoFiltro === "Todos" || p.tamanho === tamanhoFiltro
    return matchTipo && matchTamanho
  })

  return (
    <>
      {/* FILTROS */}
      <section className="sticky top-[65px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tipo</span>
            <div className="flex gap-1">
              {TIPOS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTipoFiltro(t.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    tipoFiltro === t.id ? "bg-[#D12018] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Tamanho</span>
            <div className="flex gap-1">
              {TAMANHOS.map((t) => (
                <button
                  key={t}
                  onClick={() => setTamanhoFiltro(t)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                    tamanhoFiltro === t ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {t === "Todos" ? t : `${t} cm`}
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
        {filtrados.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <p className="text-lg font-medium">Nenhum produto encontrado com esses filtros.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtrados.map((p) => <ProdutoCard key={p.slug} produto={p} />)}
          </div>
        )}
      </main>
    </>
  )
}
