"use client";
import { useEffect } from "react";
import { XMarkIcon, PlayCircleIcon } from "@heroicons/react/24/solid";

type Props = {
  aberto: boolean;
  titulo: string;
  video?: string;
  onFechar: () => void;
};

export default function VideoModal({ aberto, titulo, video, onFechar }: Props) {
  useEffect(() => {
    if (!aberto) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const escListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
    };
    document.addEventListener("keydown", escListener);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", escListener);
    };
  }, [aberto, onFechar]);

  if (!aberto) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onFechar}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onFechar}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
          aria-label="Fechar"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <span className="text-[10px] font-black text-[#D12018] uppercase tracking-widest">
            Vídeo demonstrativo
          </span>
          <h3 className="text-xl font-black text-black uppercase mt-1">{titulo}</h3>
        </div>

        <div className="relative aspect-video bg-black">
          {video ? (
            <video
              src={video}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Seu navegador não suporta vídeo.
            </video>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white gap-4 p-8 text-center">
              <PlayCircleIcon className="w-16 h-16 text-white/40" />
              <div>
                <p className="text-lg font-black uppercase tracking-wider">Vídeo em breve</p>
                <p className="text-sm text-white/60 mt-2 max-w-sm">
                  Estamos preparando o vídeo demonstrativo deste produto.
                  Enquanto isso, entre em contato para mais informações.
                </p>
              </div>
              <a
                href="https://wa.me/5519996622666?text=Ol%C3%A1%21%20Gostaria%20de%20ver%20o%20v%C3%ADdeo%20demonstrativo%20do%20nicho."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-black text-xs uppercase tracking-wider px-6 py-3 rounded-full transition-colors"
              >
                Falar no WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
