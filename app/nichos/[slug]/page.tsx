"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProduto, Cor } from "@/data/produtos"
import { CheckCircleIcon } from "@heroicons/react/24/solid"
import { ArrowLeftIcon } from "@heroicons/react/24/outline"

const WA_BASE = "https://wa.me/5519996622666?text="

function buildWaMessage(produtoNome: string, cor: string, tamanho: string) {
  const msg = `Olá! Vi o catálogo da SG Brasil e tenho interesse no *${produtoNome}* na cor *${cor}* (${tamanho} cm). Gostaria de um orçamento!`
  return WA_BASE + encodeURIComponent(msg)
}

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const produto = getProduto(params.slug)
  if (!produto) notFound()

  const [corSelecionada, setCorSelecionada] = useState<Cor>(produto.cores[0])

  const tipoLabel =
    produto.tipo === "embutir"
      ? produto.orientacao === "vertical" ? "Embutir Vertical" : "Embutir Horizontal"
      : "Sobrepor"

  const bordaInfo = produto.borda === "dupla" ? "Borda Dupla" : null

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className="bg-black px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-white/10">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/logo-branca.png" alt="SG Brasil" width={120} height={48} className="object-contain" />
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Início</Link>
          <Link href="/nichos" className="text-[#D12018] text-sm font-bold">Catálogo</Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* BREADCRUMB */}
        <Link
          href="/nichos"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#D12018] transition-colors mb-8 font-medium"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Voltar ao catálogo
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* IMAGEM */}
          <div className="sticky top-28">
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
              <Image
                src={produto.imagemDetalhe}
                alt={produto.nome}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              {bordaInfo && (
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {bordaInfo}
                </div>
              )}
            </div>

            {/* Cor selecionada — preview */}
            <div className="mt-4 flex items-center gap-3 p-4 rounded-2xl border border-gray-200 bg-gray-50">
              <div
                className="w-10 h-10 rounded-full border-2 border-white shadow-md shrink-0"
                style={{ backgroundColor: corSelecionada.hex }}
              />
              <div>
                <p className="font-bold text-black text-sm">{corSelecionada.nome}</p>
                <p className="text-xs text-gray-500">{corSelecionada.acabamento}</p>
              </div>
            </div>
          </div>

          {/* DETALHES */}
          <div>
            <span className="text-[#BA8213] text-xs font-bold uppercase tracking-[0.25em]">
              Village Cortes Especiais · {tipoLabel}
            </span>
            <h1 className="text-3xl md:text-4xl font-black text-black uppercase tracking-tight mt-2 mb-1">
              {produto.nome}
            </h1>
            <p className="text-gray-500 text-base mb-8">{produto.subtitulo}</p>

            {/* SELETOR DE COR */}
            <div className="mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Cor — <span className="text-black">{corSelecionada.nome}</span>
              </p>
              <div className="flex flex-wrap gap-3">
                {produto.cores.map((cor) => (
                  <button
                    key={cor.id}
                    title={cor.nome}
                    onClick={() => setCorSelecionada(cor)}
                    className={`w-9 h-9 rounded-full border-2 transition-all ${
                      corSelecionada.id === cor.id
                        ? "border-[#D12018] scale-110 shadow-lg"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: cor.hex }}
                  />
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {produto.cores.map((cor) => (
                  <button
                    key={cor.id}
                    onClick={() => setCorSelecionada(cor)}
                    className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all ${
                      corSelecionada.id === cor.id
                        ? "bg-black text-white border-black"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {cor.nome}
                  </button>
                ))}
              </div>
            </div>

            {/* SPECS */}
            <div className="mb-8">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                Especificações Técnicas
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-4 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide">Medida</th>
                      <th className="text-center px-4 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide">A (cm)</th>
                      <th className="text-center px-4 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide">L (cm)</th>
                      <th className="text-center px-4 py-2.5 text-xs font-bold text-gray-400 uppercase tracking-wide">P (cm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="px-4 py-3 font-semibold text-gray-700">Externa</td>
                      <td className="px-4 py-3 text-center text-gray-600">{produto.medidasExternas.A}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{produto.medidasExternas.L}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{produto.medidasExternas.P}</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-700">Interna</td>
                      <td className="px-4 py-3 text-center text-gray-600">{produto.medidasInternas.A}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{produto.medidasInternas.L}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{produto.medidasInternas.P}</td>
                    </tr>
                    {produto.medidasFuro && (
                      <tr>
                        <td className="px-4 py-3 font-semibold text-gray-700">Furo na Parede</td>
                        <td className="px-4 py-3 text-center text-gray-600">{produto.medidasFuro.A}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{produto.medidasFuro.L}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{produto.medidasFuro.P}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              {produto.numPrateleiras && (
                <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                  <CheckCircleIcon className="w-3.5 h-3.5 text-[#D12018]" />
                  {produto.numPrateleiras} prateleira{produto.numPrateleiras > 1 ? "s" : ""} inclusa{produto.numPrateleiras > 1 ? "s" : ""}
                </p>
              )}
            </div>

            {/* DIFERENCIAIS */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[
                "Porcelanato de alta qualidade",
                "Borda dupla acabamento premium",
                produto.tipo === "sobrepor" ? "Sem quebra de parede" : "Encaixe preciso na parede",
                "Disponível em 8 acabamentos",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <CheckCircleIcon className="w-4 h-4 text-[#D12018] shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            {/* PREÇO */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 mb-6 text-center">
              <p className="text-xs text-gray-400 uppercase tracking-widest font-bold mb-1">Preço sob consulta</p>
              <p className="text-gray-600 text-sm">Entre em contato para receber o melhor valor.</p>
            </div>

            {/* CTA */}
            <a
              href={buildWaMessage(produto.nome, corSelecionada.nome, produto.tamanho)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#D12018] hover:bg-[#b01a14] text-white font-black py-5 px-8 rounded-xl text-lg shadow-xl transition-all hover:scale-[1.02]"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.554 4.1 1.524 5.825L.057 23.927l6.256-1.641A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.807 9.807 0 01-5.002-1.368l-.359-.213-3.713.974.99-3.615-.234-.372A9.808 9.808 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
              </svg>
              SOLICITAR ORÇAMENTO
            </a>
            <p className="text-center text-xs text-gray-400 mt-3">
              Cor selecionada: <strong className="text-gray-600">{corSelecionada.nome}</strong> · {produto.tamanho} cm
            </p>
          </div>
        </div>

        {/* OUTROS TAMANHOS */}
        <section className="mt-20 pt-12 border-t border-gray-100">
          <h2 className="text-xl font-black text-black uppercase mb-6">
            Outros <span className="text-[#D12018]">tamanhos disponíveis</span>
          </h2>
          <Link
            href="/nichos"
            className="inline-flex items-center gap-2 bg-black text-white font-bold py-3 px-6 rounded-xl text-sm hover:bg-gray-800 transition-colors"
          >
            Ver catálogo completo →
          </Link>
        </section>
      </main>
    </div>
  )
}
