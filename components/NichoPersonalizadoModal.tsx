"use client";
import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  aberto: boolean;
  onFechar: () => void;
};

type BordaOpcao = "simples" | "dupla" | "nao-sei";

const WHATSAPP = "5519996622666";

const CORES_PADRAO = [
  "Iris Bianco",
  "Iris Nero",
  "Iris Crema",
  "Iris Grigio",
  "Decora Marmo",
  "Decora Opale",
  "Decora Gold",
  "Decora Ciment",
  "Outra cor",
];

const LOCAIS = [
  "Banheiro",
  "Cozinha",
  "Área externa",
  "Piscina",
  "Sala / Living",
  "Outro",
];

function formatarCEP(v: string): string {
  const nums = v.replace(/\D/g, "").slice(0, 8);
  if (nums.length <= 5) return nums;
  return `${nums.slice(0, 5)}-${nums.slice(5)}`;
}

function montarMensagem(dados: {
  largura: string;
  altura: string;
  profundidade: string;
  cor: string;
  corOutra: string;
  borda: BordaOpcao;
  quantidade: string;
  local: string;
  tamanhoParede: string;
  observacoes: string;
  nome: string;
  cep: string;
  endereco: string;
  cidade: string;
}): string {
  const corFinal =
    dados.cor === "Outra cor" && dados.corOutra.trim()
      ? `Outra cor — ${dados.corOutra.trim()}`
      : dados.cor;

  const bordaLabel: Record<BordaOpcao, string> = {
    simples: "Borda simples",
    dupla: "Borda dupla",
    "nao-sei": "Não sei / me orientem",
  };

  const linhas: string[] = [
    "Olá! Gostaria de um *NICHO PERSONALIZADO* com as seguintes especificações:",
    "",
    "*ESPECIFICAÇÕES:*",
    `Dimensões: ${dados.largura} × ${dados.altura} × ${dados.profundidade} cm`,
    `Cor/modelo: ${corFinal}`,
    `Tipo de borda: ${bordaLabel[dados.borda]}`,
    `Quantidade: ${dados.quantidade} ${Number(dados.quantidade) > 1 ? "unidades" : "unidade"}`,
  ];

  const temContexto = dados.local || dados.tamanhoParede.trim() || dados.observacoes.trim();
  if (temContexto) {
    linhas.push("", "*PROJETO:*");
    if (dados.local) linhas.push(`Local de instalação: ${dados.local}`);
    if (dados.tamanhoParede.trim()) linhas.push(`Tamanho da parede: ${dados.tamanhoParede.trim()}`);
    if (dados.observacoes.trim()) linhas.push(`Obs: ${dados.observacoes.trim()}`);
  }

  linhas.push(
    "",
    "*DADOS PRA COTAÇÃO:*",
    `Nome: ${dados.nome}`,
    `CEP: ${dados.cep}`,
    `Endereço: ${dados.endereco}`,
    `Cidade: ${dados.cidade}`,
    "",
    "Poderia me passar valor e prazo de fabricação?"
  );

  return encodeURIComponent(linhas.join("\n"));
}

export default function NichoPersonalizadoModal({ aberto, onFechar }: Props) {
  // Especificações
  const [largura, setLargura] = useState("");
  const [altura, setAltura] = useState("");
  const [profundidade, setProfundidade] = useState("");
  const [cor, setCor] = useState("");
  const [corOutra, setCorOutra] = useState("");
  const [borda, setBorda] = useState<BordaOpcao | "">("");
  const [quantidade, setQuantidade] = useState("1");

  // Contexto (opcional)
  const [local, setLocal] = useState("");
  const [tamanhoParede, setTamanhoParede] = useState("");
  const [observacoes, setObservacoes] = useState("");

  // Dados
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [buscandoCep, setBuscandoCep] = useState(false);
  const [cepErro, setCepErro] = useState<string | null>(null);

  // ESC + scroll lock
  useEffect(() => {
    if (!aberto) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onFechar();
    document.addEventListener("keydown", esc);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", esc);
    };
  }, [aberto, onFechar]);

  // Autocomplete CEP via ViaCEP
  useEffect(() => {
    const cepLimpo = cep.replace(/\D/g, "");
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
        setEndereco((v) => v || [rua, bairro].filter(Boolean).join(", "));
        setCidade((v) => v || [data.localidade, data.uf].filter(Boolean).join(" - "));
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
  }, [cep]);

  const dimensoesOk =
    Number(largura) > 0 && Number(altura) > 0 && Number(profundidade) > 0;
  const corOk = cor && (cor !== "Outra cor" || corOutra.trim().length >= 2);
  const especificacoesOk =
    dimensoesOk && corOk && borda !== "" && Number(quantidade) > 0;
  const dadosOk =
    nome.trim().length >= 2 &&
    cep.replace(/\D/g, "").length === 8 &&
    endereco.trim().length >= 3 &&
    cidade.trim().length >= 2;
  const podeEnviar = especificacoesOk && dadosOk;

  const handleEnviar = () => {
    if (!podeEnviar) return;
    const msg = montarMensagem({
      largura,
      altura,
      profundidade,
      cor,
      corOutra,
      borda: borda as BordaOpcao,
      quantidade,
      local,
      tamanhoParede,
      observacoes,
      nome,
      cep,
      endereco,
      cidade,
    });
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Lead", { content_name: "nicho-personalizado" });
    }
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  };

  if (!aberto) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onFechar}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 relative shrink-0">
          <button
            onClick={onFechar}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors"
            aria-label="Fechar"
          >
            <XMarkIcon className="w-5 h-5" />
          </button>
          <span className="text-[10px] font-black text-[#D12018] uppercase tracking-widest">
            Nicho sob medida
          </span>
          <h3 className="text-xl font-black text-black uppercase mt-1 tracking-tight">
            Orçamento personalizado
          </h3>
          <p className="text-xs text-gray-500 mt-2 leading-relaxed">
            Preencha as especificações e receba o valor direto no seu WhatsApp.
          </p>
        </div>

        {/* Body scrollable */}
        <div className="flex-1 overflow-y-auto px-6 pt-5 pb-2 space-y-7">
          {/* Bloco 1 — Especificações */}
          <div>
            <div className="flex items-baseline justify-between pb-2 mb-3 border-b border-dashed border-gray-200">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-black">
                01 · Especificações do nicho
              </span>
            </div>

            {/* Dimensões */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {[
                { label: "Largura", value: largura, setter: setLargura },
                { label: "Altura", value: altura, setter: setAltura },
                { label: "Profund.", value: profundidade, setter: setProfundidade },
              ].map(({ label, value, setter }) => (
                <div key={label}>
                  <label className="text-[9px] font-bold text-gray-500 uppercase tracking-wider text-center block mb-1">
                    {label} <span className="text-[#D12018]">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      inputMode="numeric"
                      value={value}
                      onChange={(e) => setter(e.target.value.replace(/\D/g, ""))}
                      placeholder="0"
                      className="w-full px-2 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-center text-lg font-black focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors tabular-nums"
                    />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] text-gray-400 font-medium pointer-events-none">cm</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Cor */}
            <div className="mb-3">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                Cor / modelo <span className="text-[#D12018]">*</span>
              </label>
              <select
                value={cor}
                onChange={(e) => setCor(e.target.value)}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23666'%3e%3cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.4a.75.75 0 01-1.08 0l-4.25-4.4a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3e%3c/svg%3e")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                  backgroundSize: "18px",
                }}
              >
                <option value="">Selecione…</option>
                {CORES_PADRAO.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
              {cor === "Outra cor" && (
                <input
                  type="text"
                  value={corOutra}
                  onChange={(e) => setCorOutra(e.target.value)}
                  placeholder="Descreva a cor/material desejado"
                  className="mt-2 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                />
              )}
            </div>

            {/* Borda */}
            <div className="mb-3">
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2 block">
                Tipo de borda <span className="text-[#D12018]">*</span>
              </label>
              <div className="flex gap-2 flex-wrap">
                {([
                  { v: "simples", l: "Borda simples" },
                  { v: "dupla", l: "Borda dupla" },
                  { v: "nao-sei", l: "Não sei" },
                ] as { v: BordaOpcao; l: string }[]).map((opt) => (
                  <button
                    key={opt.v}
                    type="button"
                    onClick={() => setBorda(opt.v)}
                    className={`px-4 py-2 rounded-full text-xs font-bold border-2 transition-all ${
                      borda === opt.v
                        ? "bg-[#D12018] text-white border-[#D12018]"
                        : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    {opt.l}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantidade */}
            <div>
              <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                Quantidade <span className="text-[#D12018]">*</span>
              </label>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setQuantidade(String(Math.max(1, Number(quantidade) - 1)))}
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 hover:border-[#D12018] flex items-center justify-center font-black text-lg text-gray-600 transition-colors"
                >
                  −
                </button>
                <input
                  type="text"
                  inputMode="numeric"
                  value={quantidade}
                  onChange={(e) => setQuantidade(e.target.value.replace(/\D/g, "") || "1")}
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-center text-base font-black focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors tabular-nums"
                />
                <button
                  type="button"
                  onClick={() => setQuantidade(String(Number(quantidade) + 1))}
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 hover:border-[#D12018] flex items-center justify-center font-black text-lg text-gray-600 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Bloco 2 — Contexto (opcional) */}
          <div>
            <div className="flex items-baseline justify-between pb-2 mb-3 border-b border-dashed border-gray-200">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-black">
                02 · Contexto do projeto
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#BA8213]">
                Opcional
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Local de instalação
                </label>
                <select
                  value={local}
                  onChange={(e) => setLocal(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23666'%3e%3cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.4a.75.75 0 01-1.08 0l-4.25-4.4a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "18px",
                  }}
                >
                  <option value="">Selecione…</option>
                  {LOCAIS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Tamanho da parede
                </label>
                <input
                  type="text"
                  value={tamanhoParede}
                  onChange={(e) => setTamanhoParede(e.target.value)}
                  placeholder="Ex: 200 × 240 cm"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Observações
                </label>
                <textarea
                  value={observacoes}
                  onChange={(e) => setObservacoes(e.target.value)}
                  placeholder="Ex: preciso encaixar entre 2 boxes de vidro…"
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Bloco 3 — Dados */}
          <div className="pb-4">
            <div className="flex items-baseline justify-between pb-2 mb-3 border-b border-dashed border-gray-200">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-black">
                03 · Dados pra cotação
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Nome completo <span className="text-[#D12018]">*</span>
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  CEP <span className="text-[#D12018]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="numeric"
                    value={cep}
                    onChange={(e) => setCep(formatarCEP(e.target.value))}
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
                {!cepErro && !buscandoCep && endereco && cep.replace(/\D/g, "").length === 8 && (
                  <p className="text-xs text-green-600 mt-1 font-medium">✓ Endereço encontrado</p>
                )}
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Endereço <span className="text-[#D12018]">*</span>
                </label>
                <input
                  type="text"
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  placeholder="Rua, número, bairro"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Cidade <span className="text-[#D12018]">*</span>
                </label>
                <input
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Cidade - UF"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer fixo */}
        <div className="p-5 border-t border-gray-100 space-y-2 bg-white shrink-0">
          <button
            onClick={handleEnviar}
            disabled={!podeEnviar}
            className="w-full bg-[#25D366] hover:bg-[#1ebe5d] disabled:bg-gray-200 disabled:text-gray-400 text-white font-black py-4 rounded-2xl text-sm uppercase tracking-wide transition-all disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.85 14.03c-.25.7-1.46 1.32-2.02 1.4-.55.08-1.19.11-1.9-.12-.44-.13-1-.32-1.72-.63-3.03-1.31-5.01-4.36-5.16-4.56-.15-.2-1.24-1.65-1.24-3.14 0-1.49.78-2.22 1.06-2.53.28-.31.62-.39.83-.39s.42.01.6.02c.19.01.44-.07.69.53.25.6.86 2.09.94 2.24.08.15.13.33.03.53-.1.2-.15.32-.3.5s-.32.4-.45.54c-.15.15-.3.31-.13.61.17.3.76 1.26 1.64 2.04 1.12 1 2.08 1.31 2.38 1.46.3.15.47.13.65-.08.18-.2.75-.88.95-1.18.2-.3.4-.25.68-.15.28.1 1.77.84 2.07.99.3.15.5.22.57.35.08.13.08.75-.17 1.45Z" />
            </svg>
            {podeEnviar ? "Enviar pelo WhatsApp" : "Preencha os campos obrigatórios"}
          </button>
          <p className="text-center text-[11px] text-gray-400">
            Resposta em até 1 dia útil
          </p>
        </div>
      </div>
    </div>
  );
}
