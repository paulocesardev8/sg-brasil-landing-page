"use client";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

type Props = {
  titulo: string;
  subtitulo: string;
  onClick: () => void;
  className?: string;
};

export default function NichoPersonalizadoCard({ titulo, subtitulo, onClick, className = "" }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative w-full text-left overflow-hidden rounded-3xl transition-all hover:scale-[1.005] ${className}`}
      style={{
        background: "linear-gradient(135deg, #000 0%, #1a1a1a 60%, #0a0a0a 100%)",
      }}
    >
      {/* Borda tracejada dourada */}
      <div
        className="absolute inset-1.5 rounded-2xl border-2 border-dashed pointer-events-none transition-colors"
        style={{ borderColor: "rgba(176, 128, 28, 0.55)" }}
      />

      {/* Padrão sutil de fundo (linhas diagonais douradas) */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, #BA8213 20px, #BA8213 21px)",
        }}
      />

      {/* Badge SOB MEDIDA */}
      <span className="absolute top-6 right-6 text-[10px] font-black uppercase tracking-[0.22em] bg-[#BA8213] text-black px-2.5 py-1 rounded-full z-10">
        Sob medida
      </span>

      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        {/* Ícone régua com marcações — símbolo claro de "medida sob medida" */}
        <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#BA8213]/15 border border-[#BA8213]/30 flex items-center justify-center">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            stroke="#BA8213"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {/* Corpo da régua (rotacionada 30 graus pra ficar dinâmica) */}
            <g transform="rotate(-30 20 20)">
              <rect x="4" y="16" width="32" height="8" rx="1" />
              {/* Marcações (traços de medida) */}
              <line x1="9" y1="16" x2="9" y2="19" />
              <line x1="13" y1="16" x2="13" y2="21" />
              <line x1="17" y1="16" x2="17" y2="19" />
              <line x1="21" y1="16" x2="21" y2="21" />
              <line x1="25" y1="16" x2="25" y2="19" />
              <line x1="29" y1="16" x2="29" y2="21" />
              <line x1="33" y1="16" x2="33" y2="19" />
            </g>
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-tight mb-2">
            {titulo}
          </h3>
          <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed max-w-xl">
            {subtitulo}
          </p>
        </div>

        {/* CTA */}
        <div className="shrink-0">
          <span className="inline-flex items-center gap-2 bg-[#D12018] group-hover:bg-[#b01a14] text-white font-black text-xs md:text-sm uppercase tracking-widest px-6 py-4 rounded-full transition-colors">
            Solicitar orçamento
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </button>
  );
}
