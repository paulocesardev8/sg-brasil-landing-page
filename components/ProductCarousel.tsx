"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

type Midia = { tipo: "imagem" | "video"; src: string };

type Props = {
  midias: Midia[];
  alt: string;
  onOpenVideo?: (src: string) => void;
};

export default function ProductCarousel({ midias, alt, onOpenVideo }: Props) {
  const [index, setIndex] = useState(0);
  const total = midias.length;
  const atual = midias[index];
  const temVideo = midias.some((m) => m.tipo === "video");

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIndex((i) => (i === total - 1 ? 0 : i + 1));
  };

  const irPara = (i: number, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIndex(i);
  };

  const abrirVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (atual.tipo === "video" && onOpenVideo) {
      onOpenVideo(atual.src);
    }
  };

  return (
    <div className="relative w-full h-full group/carousel bg-gradient-to-br from-gray-50 to-gray-100">
      {atual.tipo === "imagem" ? (
        <Image
          src={atual.src}
          alt={alt}
          fill
          className="object-contain p-3"
        />
      ) : (
        <button
          type="button"
          onClick={abrirVideo}
          className="absolute inset-0 w-full h-full bg-black flex items-center justify-center overflow-hidden group/video"
          aria-label="Assistir vídeo em tela cheia"
        >
          <video
            key={atual.src}
            src={atual.src}
            preload="metadata"
            muted
            playsInline
            className="w-full h-full object-contain pointer-events-none"
          />
          <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/55 transition-colors flex flex-col items-center justify-center gap-1.5">
            <PlayCircleIcon className="w-16 h-16 text-white drop-shadow-2xl group-hover/video:scale-110 transition-transform" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest drop-shadow-md">
              Assistir vídeo
            </span>
          </div>
        </button>
      )}

      {total > 1 && (
        <>
          {/* Setinhas — visíveis em mobile, aparecem no hover em desktop */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-white shadow-lg flex items-center justify-center z-10 transition-all md:opacity-0 md:group-hover/carousel:opacity-100 hover:scale-110"
            aria-label="Foto anterior"
          >
            <ChevronLeftIcon className="w-4 h-4 text-black" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-1.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/95 hover:bg-white shadow-lg flex items-center justify-center z-10 transition-all md:opacity-0 md:group-hover/carousel:opacity-100 hover:scale-110"
            aria-label="Próxima foto"
          >
            <ChevronRightIcon className="w-4 h-4 text-black" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-white/60 backdrop-blur-sm px-2 py-1 rounded-full">
            {midias.map((m, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => irPara(i, e)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-5 bg-[#D12018]"
                    : "w-1.5 bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Ir para mídia ${i + 1}`}
              />
            ))}
          </div>

          {/* Indicador de vídeo quando não está na aba de vídeo */}
          {temVideo && atual.tipo !== "video" && (
            <div className="absolute top-2 right-2 bg-black/70 text-white text-[9px] font-black px-2 py-1 rounded-full uppercase tracking-wider z-10 flex items-center gap-1">
              <PlayCircleIcon className="w-3 h-3" />
              Vídeo
            </div>
          )}
        </>
      )}
    </div>
  );
}
