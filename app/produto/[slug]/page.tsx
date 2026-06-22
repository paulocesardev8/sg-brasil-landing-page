import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProduto } from "@/data/produtos"
import ProdutoDetalhe from "./ProdutoDetalhe"

export default async function ProdutoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const produto = getProduto(slug)
  if (!produto) notFound()

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
        </nav>
      </header>

      <ProdutoDetalhe produto={produto} />
    </div>
  )
}
