"use client";
import { useState } from "react";
import { StarIcon, ChatBubbleLeftEllipsisIcon, XMarkIcon } from "@heroicons/react/24/solid";

type Depoimento = {
  nome: string;
  cidade: string;
  texto: string;
  estrelas: number;
  inicial: string;
  cor: string;
};

const WHATSAPP = "5519996622666";

const depoimentos: Depoimento[] = [
  {
    nome: "Fernanda R.",
    cidade: "Campinas • SP",
    texto: "Comprei os nichos Iris Bianco para a piscina e ficou lindo! Chegou tudo certinho, muito bem embalado. Atendimento nota 10.",
    estrelas: 5,
    inicial: "F",
    cor: "#D12018",
  },
  {
    nome: "Ricardo M.",
    cidade: "São Paulo • SP",
    texto: "Instalei o Decora Marmo no meu banheiro e a qualidade é impressionante. Superou minhas expectativas. Recomendo demais!",
    estrelas: 5,
    inicial: "R",
    cor: "#BA8213",
  },
  {
    nome: "Juliana S.",
    cidade: "Piracicaba • SP",
    texto: "O Iris Nero deu um toque de sofisticação no meu box. Frete pra minha cidade foi rapidíssimo. SG Brasil ganhou um cliente fiel.",
    estrelas: 5,
    inicial: "J",
    cor: "#1f2937",
  },
  {
    nome: "Marcos P.",
    cidade: "Sorocaba • SP",
    texto: "Excelente qualidade do produto e atendimento personalizado. Me ajudaram no cálculo e na paginação. Obra ficou perfeita.",
    estrelas: 5,
    inicial: "M",
    cor: "#D12018",
  },
  {
    nome: "Carla A.",
    cidade: "Jundiaí • SP",
    texto: "Comprei o Decora Gold para uma parede de destaque na sala. O acabamento é incrível, parece mármore de verdade. Amei!",
    estrelas: 5,
    inicial: "C",
    cor: "#BA8213",
  },
  {
    nome: "Diego F.",
    cidade: "Campinas • SP",
    texto: "Meu segundo pedido com eles. Da primeira, fiquei muito satisfeito com o produto e o serviço. Voltei com confiança total.",
    estrelas: 5,
    inicial: "D",
    cor: "#1f2937",
  },
];

export default function Depoimentos() {
  const [formAberto, setFormAberto] = useState(false);
  const [nome, setNome] = useState("");
  const [cidade, setCidade] = useState("");
  const [texto, setTexto] = useState("");
  const [estrelas, setEstrelas] = useState(5);

  const handleEnviar = () => {
    if (!nome.trim() || !texto.trim()) return;
    const msg = encodeURIComponent(
      [
        "Olá! Gostaria de deixar meu depoimento sobre a SG Brasil:",
        "",
        `*Nome:* ${nome}`,
        cidade ? `*Cidade:* ${cidade}` : "",
        `*Avaliação:* ${"⭐".repeat(estrelas)}`,
        "",
        "*Depoimento:*",
        texto,
      ]
        .filter(Boolean)
        .join("\n")
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
    setFormAberto(false);
    setNome("");
    setCidade("");
    setTexto("");
    setEstrelas(5);
  };

  return (
    <section className="bg-white py-20 px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Prova social
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-black uppercase tracking-tight mb-3">
            O que dizem <span className="text-[#D12018]">nossos clientes</span>
          </h2>
          <p className="text-gray-500 font-medium max-w-2xl mx-auto">
            Depoimentos reais de quem já escolheu a SG Brasil Porcelanato
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {depoimentos.map((dep, i) => (
            <div
              key={i}
              className="bg-gray-50 border-2 border-gray-100 hover:border-[#D12018] hover:shadow-lg transition-all rounded-3xl p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: dep.estrelas }).map((_, j) => (
                  <StarIcon key={j} className="w-4 h-4 text-[#BA8213]" />
                ))}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed font-medium flex-1 mb-4">
                “{dep.texto}”
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                  style={{ backgroundColor: dep.cor }}
                >
                  {dep.inicial}
                </div>
                <div className="min-w-0">
                  <p className="font-black text-black text-sm truncate">{dep.nome}</p>
                  <p className="text-xs text-gray-500">{dep.cidade}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setFormAberto(true)}
            className="inline-flex items-center gap-2 bg-black hover:bg-[#D12018] text-white font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-colors"
          >
            <ChatBubbleLeftEllipsisIcon className="w-5 h-5" />
            Deixe seu depoimento
          </button>
        </div>
      </div>

      {/* Modal do formulário */}
      {formAberto && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/70"
          onClick={() => setFormAberto(false)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setFormAberto(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="w-5 h-5 text-gray-600" />
            </button>

            <div className="p-6 border-b border-gray-100">
              <span className="text-[10px] font-black text-[#D12018] uppercase tracking-widest">
                Prova social
              </span>
              <h3 className="text-xl font-black text-black uppercase mt-1">
                Deixe seu depoimento
              </h3>
              <p className="text-xs text-gray-500 mt-2">
                Enviaremos seu texto pelo WhatsApp para aprovação e publicação no site
              </p>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Sua avaliação
                </label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setEstrelas(n)}
                      className="p-1"
                    >
                      <StarIcon
                        className={`w-8 h-8 transition-colors ${
                          n <= estrelas ? "text-[#BA8213]" : "text-gray-200"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Seu nome *
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Nome completo"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Cidade
                </label>
                <input
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Ex: Campinas - SP"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1 block">
                  Seu depoimento *
                </label>
                <textarea
                  value={texto}
                  onChange={(e) => setTexto(e.target.value)}
                  placeholder="Conte como foi sua experiência com a SG Brasil…"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:border-[#D12018] focus:bg-white transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleEnviar}
                disabled={!nome.trim() || !texto.trim()}
                className="w-full bg-[#25D366] hover:bg-[#1ebe5d] disabled:bg-gray-200 disabled:text-gray-400 text-white font-black py-4 rounded-2xl text-sm uppercase tracking-wide transition-all disabled:cursor-not-allowed"
              >
                Enviar depoimento
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
