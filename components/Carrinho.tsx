"use client";
import { useState, useEffect } from "react";
import { ItemCarrinho } from "@/types/produtos";
import { formatarPreco } from "@/lib/produtos";
import { ShoppingCartIcon, XMarkIcon, PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/solid";

type Props = {
  itens: ItemCarrinho[];
  onAtualizar: (id: string, quantidade: number) => void;
  onRemover: (id: string) => void;
};

type Cliente = {
  nome: string;
  cep: string;
  endereco: string;
  cidade: string;
};

const WHATSAPP = "5519996622666";

function formatarCEP(v: string): string {
  const nums = v.replace(/\D/g, "").slice(0, 8);
  if (nums.length <= 5) return nums;
  return `${nums.slice(0, 5)}-${nums.slice(5)}`;
}

function montarMensagem(itens: ItemCarrinho[], cliente: Cliente, totalProdutos: number): string {
  const linhas = itens.map((i) => {
    const precoStr = i.produto.preco !== null
      ? ` — ${formatarPreco(i.produto.preco)} cada`
      : " — sob consulta";
    return `• ${i.produto.nome} (${i.produto.tamanho}) — ${i.quantidade} un${precoStr}`;
  });
  const linhaTotal = totalProdutos > 0
    ? [`*Subtotal produtos:* ${formatarPreco(totalProdutos)}`, "(a confirmar com o frete)"]
    : [];
  const texto = [
    "Olá! Gostaria de solicitar um orçamento com frete pelos produtos abaixo:",
    "",
    "*PRODUTOS:*",
    ...linhas,
    "",
    ...linhaTotal,
    "",
    "*DADOS PARA COTAÇÃO DE FRETE:*",
    `Nome: ${cliente.nome}`,
    `CEP: ${cliente.cep}`,
    `Endereço: ${cliente.endereco}`,
    `Cidade: ${cliente.cidade}`,
    "",
    "Poderia me passar o valor dos produtos e do frete, por favor?",
  ].join("\n");
  return encodeURIComponent(texto);
}

export default function Carrinho({ itens, onAtualizar, onRemover }: Props) {
  const [aberto, setAberto] = useState(false);
  const [cliente, setCliente] = useState<Cliente>({
    nome: "",
    cep: "",
    endereco: "",
    cidade: "",
  });
  const [buscandoCep, setBuscandoCep] = useState(false);
  const [cepErro, setCepErro] = useState<string | null>(null);

  // Autocomplete de CEP via ViaCEP
  useEffect(() => {
    const cepLimpo = cliente.cep.replace(/\D/g, "");
    if (cepLimpo.length !== 8) {
      setCepErro(null);
      return;
    }

    let cancelado = false;
    setBuscandoCep(true);
    setCepErro(null);

    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      .then((r) => r.json())
      .then((data) => {
        if (cancelado) return;
        if (data.erro) {
          setCepErro("CEP não encontrado");
          return;
        }
        const rua = data.logradouro || "";
        const bairro = data.bairro || "";
        const enderecoMontado = [rua, bairro].filter(Boolean).join(", ");
        const cidadeMontada = [data.localidade, data.uf].filter(Boolean).join(" - ");
        setCliente((c) => ({
          ...c,
          endereco: enderecoMontado || c.endereco,
          cidade: cidadeMontada || c.cidade,
        }));
      })
      .catch(() => {
        if (!cancelado) setCepErro("Não foi possível buscar o CEP");
      })
      .finally(() => {
        if (!cancelado) setBuscandoCep(false);
      });

    return () => {
      cancelado = true;
    };
  }, [cliente.cep]);

  const totalItens = itens.reduce((s, i) => s + i.quantidade, 0);
  const totalProdutos = itens.reduce(
    (s, i) => s + (i.produto.preco !== null ? i.produto.preco * i.quantidade : 0),
    0
  );
  const temItemSobConsulta = itens.some((i) => i.produto.preco === null);

  const formularioOk =
    cliente.nome.trim().length >= 2 &&
    cliente.cep.replace(/\D/g, "").length === 8 &&
    cliente.endereco.trim().length >= 3 &&
    cliente.cidade.trim().length >= 2;

  const podeFinalizar = itens.length > 0 && formularioOk;

  const handleCheckout = () => {
    if (!podeFinalizar) return;
    const msg = montarMensagem(itens, cliente, totalProdutos);
    const url = `https://wa.me/${WHATSAPP}?text=${msg}`;
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout");
      (window as any).fbq("track", "Lead");
    }
    window.open(url, "_blank");
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setAberto(true)}
        className="fixed bottom-6 right-6 z-50 bg-[#D12018] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:bg-[#b01a14] transition-all hover:scale-110"
      >
        <ShoppingCartIcon className="w-7 h-7" />
        {totalItens > 0 && (
          <span className="absolute -top-1 -right-1 bg-white text-[#D12018] text-xs font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#D12018]">
            {itens.length}
          </span>
        )}
      </button>

      {/* Painel lateral */}
      {aberto && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/50" onClick={() => setAberto(false)} />
          <div className="relative w-full max-w-md bg-white h-full flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-xl font-black text-black uppercase">Seu Pedido</h2>
                <p className="text-xs text-gray-500 mt-0.5">Finalize via WhatsApp</p>
              </div>
              <button onClick={() => setAberto(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <XMarkIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Conteúdo scrollável (lista + formulário) */}
            <div className="flex-1 overflow-y-auto">
              {/* Lista de produtos */}
              <div className="p-6 space-y-4">
                {itens.length === 0 ? (
                  <div className="text-center py-16 text-gray-400">
                    <ShoppingCartIcon className="w-12 h-12 mx-auto mb-3 opacity-30" />
                    <p className="font-medium text-sm">Nenhum produto adicionado</p>
                    <p className="text-xs mt-1">Escolha os produtos no catálogo</p>
                  </div>
                ) : (
                  itens.map((item) => (
                    <div key={item.produto.id} className="flex gap-4 p-4 bg-gray-50 rounded-2xl">
                      <img
                        src={item.produto.imagem}
                        alt={item.produto.nome}
                        className="w-16 h-16 object-contain rounded-xl flex-shrink-0 bg-white p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-black text-black text-sm uppercase truncate">{item.produto.nome}</p>
                        <p className="text-xs text-gray-500">{item.produto.tamanho}</p>
                        <p className="text-xs font-bold mb-3 mt-0.5">
                          {item.produto.preco !== null ? (
                            <span className="text-black">
                              {formatarPreco(item.produto.preco)}
                              <span className="text-gray-400 font-medium"> / un</span>
                            </span>
                          ) : (
                            <span className="text-[#D12018]">Sob consulta</span>
                          )}
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => onAtualizar(item.produto.id, Math.max(1, item.quantidade - 1))}
                            className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#D12018] transition-colors"
                          >
                            <MinusIcon className="w-3 h-3 text-gray-600" />
                          </button>
                          <span className="font-bold text-sm w-12 text-center">{item.quantidade} un</span>
                          <button
                            onClick={() => onAtualizar(item.produto.id, item.quantidade + 1)}
                            className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:border-[#D12018] transition-colors"
                          >
                            <PlusIcon className="w-3 h-3 text-gray-600" />
                          </button>
                          <button
                            onClick={() => onRemover(item.produto.id)}
                            className="ml-auto p-1.5 hover:bg-red-50 rounded-full transition-colors"
                          >
                            <TrashIcon className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Formulário de dados para frete */}
              {itens.length > 0 && (
                <div className="px-6 pb-6 pt-2">
                  <div className="border-t border-gray-100 pt-6">
                    <h3 className="text-sm font-black text-black uppercase tracking-wider mb-1">
                      Dados para cotação
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">
                      Precisamos dessas informações para calcular o frete
                    </p>
                    <div className="space-y-3">
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                          Nome completo *
                        </label>
                        <input
                          type="text"
                          value={cliente.nome}
                          onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
                          placeholder="Seu nome"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                          CEP *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            inputMode="numeric"
                            value={cliente.cep}
                            onChange={(e) => setCliente({ ...cliente, cep: formatarCEP(e.target.value) })}
                            placeholder="00000-000"
                            maxLength={9}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                          />
                          {buscandoCep && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <div className="w-4 h-4 border-2 border-gray-300 border-t-[#D12018] rounded-full animate-spin" />
                            </div>
                          )}
                        </div>
                        {cepErro && <p className="text-xs text-[#D12018] mt-1 font-medium">{cepErro}</p>}
                        {!cepErro && !buscandoCep && cliente.endereco && cliente.cep.replace(/\D/g, "").length === 8 && (
                          <p className="text-xs text-green-600 mt-1 font-medium">✓ Endereço encontrado</p>
                        )}
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                          Endereço (rua, número, bairro) *
                        </label>
                        <input
                          type="text"
                          value={cliente.endereco}
                          onChange={(e) => setCliente({ ...cliente, endereco: e.target.value })}
                          placeholder="Ex: Rua das Flores, 123, Centro"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                          Cidade *
                        </label>
                        <input
                          type="text"
                          value={cliente.cidade}
                          onChange={(e) => setCliente({ ...cliente, cidade: e.target.value })}
                          placeholder="Ex: Campinas - SP"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer fixo */}
            <div className="p-6 border-t border-gray-100 space-y-3 bg-white">
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>Total de itens</span>
                <span className="text-black font-black">{totalItens} un</span>
              </div>
              {itens.length > 0 && (
                <div className="flex justify-between items-baseline pt-1 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-500 font-medium block">Subtotal produtos</span>
                    {temItemSobConsulta && (
                      <span className="text-[10px] text-[#D12018] font-bold">+ itens sob consulta</span>
                    )}
                  </div>
                  <span className="text-xl font-black text-[#D12018]">
                    {formatarPreco(totalProdutos)}
                  </span>
                </div>
              )}
              <p className="text-[10px] text-gray-400 text-center">
                * Frete calculado após envio dos dados
              </p>
              <button
                onClick={handleCheckout}
                disabled={!podeFinalizar}
                className="w-full bg-[#25D366] hover:bg-[#1ebe5d] disabled:bg-gray-200 disabled:text-gray-400 text-white font-black py-4 rounded-2xl text-base transition-all uppercase tracking-wide disabled:cursor-not-allowed"
              >
                {itens.length === 0
                  ? "Adicione produtos"
                  : !formularioOk
                  ? "Preencha os dados acima"
                  : "Solicitar orçamento no WhatsApp"}
              </button>
              <p className="text-center text-xs text-gray-400">
                Prazo e frete confirmados no WhatsApp
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
