import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getAmbiente } from "@/data/ambientes"
import { produtos } from "@/data/produtos"
import ProdutosGrid from "./ProdutosGrid"

export default async function AmbientePage({ params }: { params: Promise<{ ambiente: string }> }) {
  const { ambiente: ambienteSlug } = await params
  const ambiente = getAmbiente(ambienteSlug)
  if (!ambiente || !ambiente.disponivel) notFound()

  const produtosDoAmbiente = produtos.filter((p) => p.ambientes.includes(ambienteSlug))

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className="bg-black px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-white/10">
        <Link href="/">
          <Image src="/images/logo-branca.png" alt="SG Brasil" width={120} height={48} className="object-contain" />
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Início</Link>
          <Link href="/ambientes" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Ambientes</Link>
          <span className="text-[#D12018] text-sm font-bold">{ambiente.nome}</span>
        </nav>
      </header>

      {/* HERO DO AMBIENTE */}
      <section className="relative h-64 md:h-80">
        <Image src={ambiente.imagem} alt={ambiente.nome} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end px-10 pb-10">
          <Link href="/ambientes" className="text-white/60 hover:text-white text-sm mb-3 transition-colors">
            ← Todos os ambientes
          </Link>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            {ambiente.nome}
          </h1>
          <p className="text-gray-300 mt-2 max-w-lg">{ambiente.descricao}</p>
        </div>
      </section>

      {/* GRID COM FILTROS (client component) */}
      <ProdutosGrid produtos={produtosDoAmbiente} ambienteNome={ambiente.nome} ambienteSlug={ambienteSlug} />

      {/* FOOTER CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-6 text-center">
        <p className="text-gray-500 text-sm mb-2">Precisa de ajuda para escolher?</p>
        <h2 className="text-2xl font-black text-black uppercase mb-6">
          Fale com um <span className="text-[#D12018]">especialista</span>
        </h2>
        <a
          href={`https://wa.me/5519996622666?text=${encodeURIComponent(`Olá! Vi os produtos de ${ambiente.nome} no site da SG Brasil e gostaria de um orçamento.`)}`}
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
