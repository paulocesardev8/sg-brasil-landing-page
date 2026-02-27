import {
  Facebook,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-10 mt-20 border-t-4 border-[#D12018]">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
        
        {/* Lado Esquerdo: Textos da Empresa */}
        <div>
          <p className="text-lg font-semibold text-white">
            SG Brasil Porcelanato <span className="text-[#D12018] hidden sm:inline">•</span><br className="sm:hidden" /> Porcelanatos com preço de fábrica
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

        {/* Lado Direito: Redes Sociais e Privacidade */}
        <div className="flex flex-col items-center sm:items-end gap-3">
          <div className="flex gap-5 text-gray-300">
            <a
              href="https://www.instagram.com/sgbrasilporcelanato/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D12018] transition-colors duration-300"
              aria-label="Instagram da SG Brasil"
            >
              <Instagram size={24} />
            </a> 
            <a
              href="https://www.facebook.com/sgbrasilporcelanato"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D12018] transition-colors duration-300"
              aria-label="Facebook da SG Brasil"
            >
              <Facebook size={24} />
            </a>
          </div>
          
          <a href="/politica-de-privacidade" className="text-sm text-gray-400 hover:text-white transition-colors underline-offset-4 hover:underline mt-1">
             Política de Privacidade
          </a>
        </div>

      </div>
    </footer>
  );
}