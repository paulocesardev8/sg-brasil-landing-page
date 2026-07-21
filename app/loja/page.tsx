"use client";
import { useState, useCallback, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { produtos, formatarPreco, agruparPorModelo, midiasDoProduto } from "@/lib/produtos";
import { ItemCarrinho, Produto } from "@/types/produtos";
import Carrinho from "@/components/Carrinho";
import ProductCarousel from "@/components/ProductCarousel";
import VideoModal from "@/components/VideoModal";
import Depoimentos from "@/components/Depoimentos";
import HeroVideoLoop from "@/components/HeroVideoLoop";
import { ShoppingCartIcon, CheckIcon } from "@heroicons/react/24/solid";

type Filtro = "Todos" | "Iris" | "Decora";

export default function LojaPage() {
  const [filtro, setFiltro] = useState<Filtro>("Todos");
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);
  const [adicionados, setAdicionados] = useState<Set<string>>(new Set());
  const [videoAberto, setVideoAberto] = useState<{ src: string; titulo: string } | null>(null);

  const grupos = useMemo(() => {
    const lista = filtro === "Todos" ? produtos : produtos.filter((p) => p.colecao === filtro);
    return agruparPorModelo(lista);
  }, [filtro]);

  const totalProdutosFiltrados = useMemo(
    () => grupos.reduce((s, g) => s + g.itens.length, 0),
    [grupos]
  );

  const adicionarAoCarrinho = useCallback((produto: Produto) => {
    setCarrinho((prev) => {
      const existe = prev.find((i) => i.produto.id === produto.id);
      if (existe) return prev;
      return [...prev, { produto, quantidade: 1 }];
    });
    setAdicionados((prev) => {
      const novo = new Set(prev);
      novo.add(produto.id);
      setTimeout(() => {
        setAdicionados((p) => {
          const s = new Set(p);
          s.delete(produto.id);
          return s;
        });
      }, 1500);
      return novo;
    });
  }, []);

  const atualizarQuantidade = useCallback((id: string, quantidade: number) => {
    setCarrinho((prev) =>
      prev.map((i) => (i.produto.id === id ? { ...i, quantidade } : i))
    );
  }, []);

  const removerDoCarrinho = useCallback((id: string) => {
    setCarrinho((prev) => prev.filter((i) => i.produto.id !== id));
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header da loja */}
      <header className="bg-black text-white sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-1.5 md:py-2 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo-branca.png"
              alt="SG Brasil Porcelanato"
              width={100}
              height={40}
              className="object-contain h-7 md:h-10 w-auto"
            />
          </Link>
          <a
            href="https://wa.me/5519996622666?text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20os%20nichos%20de%20porcelanato."
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#D12018] hover:text-white transition-colors hidden md:block"
          >
            Dúvidas? Fale conosco
          </a>
        </div>
      </header>

      {/* Banner hero da loja */}
      <section className="bg-black relative overflow-hidden flex items-center justify-center text-center aspect-[4/3] md:aspect-auto md:py-16 md:px-6 md:min-h-[70vh]">
        {/* Vídeo — fundo absoluto em ambos, mas seção mantém aspect-video no mobile pra não cortar nada */}
        <div className="absolute inset-0 opacity-90 md:opacity-75">
          <HeroVideoLoop
            videos={["/videos/hero/nichos-loop.mp4"]}
            poster="/videos/hero/nichos-poster.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/70 md:from-black/50 md:via-black/25 md:to-black/55" />
        </div>

        {/* Texto sobreposto */}
        <div className="relative z-10 max-w-3xl mx-auto px-4">
          <span className="inline-block bg-[#D12018] text-white text-[9px] md:text-xs font-black px-2.5 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-widest mb-2 md:mb-6">
            Entrega em todo o Estado de SP
          </span>
          <h2 className="text-xl md:text-6xl font-black text-white uppercase tracking-tight mb-1.5 md:mb-4 leading-tight drop-shadow-lg">
            Nichos de <span className="text-[#D12018]">Porcelanato</span>
          </h2>
          {/* Desktop: uma linha */}
          <p className="hidden md:block text-lg text-gray-200 font-medium max-w-xl mx-auto leading-snug drop-shadow-md">
            Selecione os produtos, informe a quantidade e receba o orçamento no WhatsApp.
          </p>
          {/* Mobile: duas linhas */}
          <p className="md:hidden text-[11px] text-gray-200 font-medium max-w-xl mx-auto leading-relaxed drop-shadow-md">
            Selecione os produtos, informe a quantidade
            <br />
            e receba o orçamento no WhatsApp.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-gray-50 border-b border-gray-100 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
          {[
            { n: "1", t: "Escolha os produtos", d: "Navegue pelo catálogo e adicione ao pedido" },
            { n: "2", t: "Informe a quantidade", d: "Ajuste o número de unidades de cada item" },
            { n: "3", t: "Receba o orçamento", d: "Finalizamos via WhatsApp com prazo e valor" },
          ].map((passo) => (
            <div key={passo.n} className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-[#D12018] text-white font-black text-lg flex items-center justify-center mb-3">
                {passo.n}
              </div>
              <h3 className="font-black text-black text-sm uppercase mb-1">{passo.t}</h3>
              <p className="text-xs text-gray-500">{passo.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Filtros */}
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">Coleção:</span>
          {(["Todos", "Iris", "Decora"] as Filtro[]).map((f) => (
            <button
              key={f}
              onClick={() => setFiltro(f)}
              className={`px-5 py-2 rounded-full text-sm font-black uppercase tracking-wide transition-all border-2 ${
                filtro === f
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-200 hover:border-black"
              }`}
            >
              {f === "Todos" ? "Todos" : `Coleção ${f}`}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-400 font-medium">
            {totalProdutosFiltrados} produtos
          </span>
        </div>
      </section>

      {/* Seções por modelo */}
      <section className="max-w-7xl mx-auto px-6 py-6 pb-24">
        <div className="space-y-14">
          {grupos.map((grupo) => (
            <div key={grupo.nome}>
              {/* Cabeçalho do modelo */}
              <div className="flex items-end justify-between mb-5 pb-3 border-b-2 border-gray-100">
                <div>
                  <span className="text-[10px] font-black text-[#D12018] uppercase tracking-[0.25em]">
                    Coleção {grupo.colecao}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-black uppercase tracking-tight">
                    {grupo.nome}
                  </h3>
                </div>
                <span className="text-xs text-gray-400 font-bold">
                  {grupo.itens.length} {grupo.itens.length === 1 ? "formato" : "formatos"}
                </span>
              </div>

              {/* Linha de variantes */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {grupo.itens.map((produto) => {
                  const noCarrinho = carrinho.some((i) => i.produto.id === produto.id);
                  const acabouDeAdicionar = adicionados.has(produto.id);

                  return (
                    <div
                      key={produto.id}
                      className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#D12018] hover:shadow-xl hover:shadow-[#D12018]/10 transition-all flex flex-col"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <ProductCarousel
                          midias={midiasDoProduto(produto)}
                          alt={`${produto.nome} ${produto.tamanho}`}
                          onOpenVideo={(src) =>
                            setVideoAberto({
                              src,
                              titulo: `${produto.nome} — ${produto.tamanho}`,
                            })
                          }
                        />
                        {produto.destaque && (
                          <span className="absolute top-3 left-3 bg-[#D12018] text-white text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider z-20 pointer-events-none">
                            Destaque
                          </span>
                        )}
                        {noCarrinho && (
                          <span className="absolute top-3 right-3 bg-black text-white text-[10px] font-black px-2 py-1 rounded-full uppercase z-20 pointer-events-none">
                            No pedido
                          </span>
                        )}
                        {produto.fotoEmBreve && (
                          <span className="absolute bottom-3 left-3 bg-white/95 text-black text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-wider z-20 pointer-events-none">
                            Foto em breve
                          </span>
                        )}
                      </div>

                      <div className="p-4 flex-1 flex flex-col">
                        <p className="text-xs text-gray-500 font-bold mb-2 uppercase tracking-wider">
                          {produto.tamanho}
                        </p>

                        <div className="mb-3 pb-3 border-b border-gray-100">
                          {produto.preco !== null ? (
                            <>
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                                Por unidade
                              </span>
                              <span className="text-xl font-black text-[#D12018]">
                                {formatarPreco(produto.preco)}
                              </span>
                            </>
                          ) : (
                            <>
                              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                                Valor
                              </span>
                              <span className="text-sm font-black text-[#D12018]">
                                Sob consulta
                              </span>
                            </>
                          )}
                        </div>

                        <button
                          onClick={() => adicionarAoCarrinho(produto)}
                          disabled={noCarrinho}
                          className={`w-full py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                            acabouDeAdicionar
                              ? "bg-green-500 text-white"
                              : noCarrinho
                              ? "bg-gray-100 text-gray-400 cursor-default"
                              : "bg-black text-white hover:bg-[#D12018]"
                          }`}
                        >
                          {acabouDeAdicionar ? (
                            <>
                              <CheckIcon className="w-4 h-4" /> Adicionado!
                            </>
                          ) : noCarrinho ? (
                            <>
                              <CheckIcon className="w-4 h-4" /> No pedido
                            </>
                          ) : (
                            <>
                              <ShoppingCartIcon className="w-4 h-4" /> Adicionar
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <Depoimentos />

      {/* Modal de vídeo */}
      <VideoModal
        aberto={videoAberto !== null}
        titulo={videoAberto?.titulo || ""}
        video={videoAberto?.src}
        onFechar={() => setVideoAberto(null)}
      />

      {/* Carrinho flutuante */}
      <Carrinho
        itens={carrinho}
        onAtualizar={atualizarQuantidade}
        onRemover={removerDoCarrinho}
      />
    </div>
  );
}
