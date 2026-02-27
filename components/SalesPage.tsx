"use client"
import Image from "next/image";
import { 
  CheckCircleIcon, 
  StarIcon,
  ArrowRightIcon,
  TruckIcon,
  UserGroupIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/solid';

// --- DADOS DA EMPRESA ---
const empresa = {
  whatsappLink: "https://wa.me/5519996622666?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20SG%20Brasil%20e%20gostaria%20de%20falar%20com%20um%20especialista%20para%20solicitar%20um%20or%C3%A7amento.",
  instagram: "https://www.instagram.com/sgbrasilporcelanato/"
}; 

// --- DADOS DE CONTEÚDO ---
const modulos = [
  { numero: "01", titulo: "Curadoria Premium", desc: "Seleção rigorosa de grandes formatos e as últimas tendências mundiais em acabamentos." },
  { numero: "02", titulo: "Atendimento Técnico", desc: "Orientação especializada sobre paginação e o material ideal para cada ambiente." },
  { numero: "03", titulo: "Logística Segura", desc: "Frota própria e cuidado total para garantir que seu material chegue impecável." },
  { numero: "04", titulo: "Cálculo de Precisão", desc: "Ajudamos a calcular a metragem exata com margem de segurança, evitando desperdícios." },
  { numero: "05", titulo: "Showroom Exclusivo", desc: "Ambientes montados para você visualizar o resultado final da sua obra." },
];
 
const ambientes = [
  { nome: "Comercial", img: "/images/comercial.webp", desc: "Resistência para alto tráfego" },
  { nome: "Externo", img: "/images/externa.webp", desc: "Antiderrapante e durável" },
  { nome: "Banheiro", img: "/images/banheiro.webp", desc: "Sofisticação e higiene" },
  { nome: "Cozinha", img: "/images/cozinha.webp", desc: "Praticidade na limpeza" },
  { nome: "Quarto", img: "/images/quarto.webp", desc: "Aconchego premium" },
];
 
const colecoes = [
  { nome: "Madeiras", img: "/images/madeira-colecao.webp", desc: "Aconchego natural" },
  { nome: "Mármores", img: "/images/marmore-colecao.webp", desc: "Clássico atemporal" },
  { nome: "Cimentos", img: "/images/cimento-colecao.webp", desc: "Modernidade urbana" },
];

export default function SalesPage() {
  
  // FUNÇÃO ROBUSTA DE SCROLL SUAVE
  const scrollToContato = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const section = document.getElementById('contato');
    if (section) {
      // Usa window.scrollTo em vez de scrollIntoView para evitar bugs do Chrome
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#000000] font-sans selection:bg-[#D12018] selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/textura-porcelanato.webp" 
            alt="Textura SG Brasil" 
            fill 
            priority
            className="object-cover opacity-60 z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white/90 z-10"></div>
        </div>

        <div className="relative z-20 text-center max-w-5xl">
{/* LOGO OFICIAL COM SOMBRA/BRILHO BRANCO */}
          <div className="mb-8 flex justify-center">
            <Image 
              src="/images/logo-branca.png" /* a sua logo original preta e vermelha */
              alt="Logo SG Brasil Porcelanato" 
              width={250} 
              height={100} 
              // Esse drop-shadow abaixo cria o "Glow" branco ao redor da imagem!
              className="object-contain]"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-[#BA8213]/50 text-[#BA8213] text-sm font-semibold mb-8 backdrop-blur-md">
            <StarIcon className="w-4 h-4" />
            <span> REFERÊNCIA EM ALTO PADRÃO</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-white uppercase drop-shadow-lg">
            Sinta a <span className="text-[#D12018]">Textura</span> da <br/>Sofisticação
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-medium drop-shadow-md">
            Porcelanatos de <span className="text-white">alto padrão</span> que unem a resistência da tecnologia com a beleza natural das pedras.
          </p>
          
          {/* BOTÃO HERO ATUALIZADO (Agora é um <button> de verdade para não interferir na rota) */}
          <button 
            onClick={scrollToContato}
            className="bg-[#D12018] hover:bg-[#b01a14] text-white font-bold py-5 px-12 rounded-xl text-xl shadow-2xl transition-all transform hover:scale-105 inline-block cursor-pointer"
          >
            SAIBA MAIS
          </button>
        </div>
      </section>

      {/* 2. DIFERENCIAIS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl sm:text-5xl font-black text-center mb-16 uppercase tracking-tighter text-black">
            Por que escolher a <span className="text-[#D12018]">SG Brasil</span>?
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8">
            {modulos.map((item, i) => (
              <div key={i} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] bg-gray-50 p-8 rounded-[32px] border border-gray-100 hover:shadow-2xl transition-all relative overflow-hidden group">
                <span className="absolute -right-4 -top-4 text-9xl font-black text-[#D12018]/5 group-hover:text-[#D12018]/10 transition-colors select-none italic">
                  {item.numero}
                </span>

                <div className="relative z-10">
                  <div className="text-[#D12018] font-bold text-xs mb-3 tracking-[0.2em] uppercase">
                    Diferencial {item.numero}
                  </div>
                  <h3 className="text-2xl font-black text-black mb-4 uppercase">{item.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEÇÃO AMBIENTES */}
      <section className="w-full bg-black relative border-t border-b border-gray-800"> 
        <div className="bg-white py-12 px-6 text-center">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-black">
              Ambientes <span className="text-[#D12018]">Inspiradores</span>
            </h2>
            <p className="text-gray-500 mt-2">Escolha onde você quer aplicar a excelência SG Brasil</p>
        </div>
 
        <div className="flex flex-col md:flex-row w-full h-[70vh] md:h-[80vh]">
          {ambientes.map((amb, i) => (
            <div 
              key={i} 
              className="relative flex-1 transition-all duration-700 ease-in-out hover:flex-[3] group overflow-hidden border-b md:border-b-0 md:border-r border-white/20 last:border-0"
            >
              <Image 
                src={amb.img} 
                alt={amb.nome} 
                fill 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all duration-500" />
              
              <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-end md:pb-16 p-4"> 
                <h3 className="
                    text-white font-black text-2xl md:text-4xl uppercase tracking-[0.2em]
                    whitespace-nowrap transition-all duration-500 ease-in-out
                    md:-rotate-90 group-hover:rotate-0
                    group-hover:text-[#BA8213] group-hover:mb-4 
                    shadow-black drop-shadow-lg
                ">
                  {amb.nome}
                </h3>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 flex flex-col items-center">
                  <p className="text-white text-sm md:text-lg font-medium mb-6 drop-shadow-md text-center max-w-xs">
                    {amb.desc}
                  </p>
                  
                  {/* BOTÃO AMBIENTES ATUALIZADO */}
                  <button 
                    onClick={scrollToContato}
                    className="bg-[#D12018] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#D12018] transition-colors cursor-pointer"
                  >
                  SAIBA MAIS
                  </button>                
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SEÇÃO COLEÇÕES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
            <h2 className="text-3xl font-black uppercase text-black mb-4">Coleções por <span className="text-[#D12018]">Tipologia</span></h2>
            <div className="w-24 h-1 bg-[#BA8213] mx-auto"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {colecoes.map((col, i) => (
               <div key={i} className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg">
                 <Image src={col.img} alt={col.nome} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                 
                 <div className="absolute bottom-8 left-8">
                   <h3 className="text-3xl font-black text-white uppercase mb-2 group-hover:text-[#BA8213] transition-colors">{col.nome}</h3>
                   <p className="text-gray-300 text-sm">{col.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>
  
      {/* 5. CTA FINAL */}
      <section id="contato" className="py-24 px-6 bg-[#f8f8f8]">
        <div className="max-w-4xl mx-auto bg-[#000000] rounded-[40px] p-8 sm:p-16 shadow-2xl relative overflow-hidden border-4 border-gray-100"> 
          <div className="absolute top-0 right-0 bg-[#D12018] text-white font-bold px-8 py-3 rounded-bl-3xl tracking-widest text-xs uppercase">
            SG Brasil Porcelanato
          </div>

          <div className="text-center mb-12 relative z-10">
            <h3 className="text-3xl sm:text-5xl font-black text-white mb-6 uppercase">
              Pronto para dar o <span className="text-[#D12018]">próximo passo?</span>
            </h3>
            <p className="text-gray-400 text-lg font-medium">Solicite agora uma cotação e receba uma consultoria exclusiva para o seu projeto.</p>
          </div>

          <div className="space-y-6 mb-12 text-left max-w-2xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <CheckCircleIcon className="w-6 h-6 text-[#D12018] shrink-0" />
                <span className="text-gray-200 text-sm font-bold">Orçamento detalhado</span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <TruckIcon className="w-6 h-6 text-[#D12018] shrink-0" />
                <span className="text-gray-200 text-sm font-bold">Entrega Segura</span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <UserGroupIcon className="w-6 h-6 text-[#D12018] shrink-0" />
                <span className="text-gray-200 text-sm font-bold">Suporte Técnico</span>
              </div>
              <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <ShieldCheckIcon className="w-6 h-6 text-[#D12018] shrink-0" />
                <span className="text-gray-200 text-sm font-bold">Garantia Total</span>
              </div>
            </div>
          </div>

          <div className="text-center relative z-10">
            <a 
              href={empresa.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-block bg-[#D12018] hover:bg-[#b01a14] text-white font-black py-5 px-10 rounded-xl text-xl shadow-xl transition-all transform hover:-translate-y-1"
            >
              FALAR COM UM ESPECIALISTA
            </a>
            <p className="text-xs text-gray-500 mt-6 uppercase tracking-widest font-bold">
              Showroom: Atendimento presencial e online
            </p>
          </div>
        </div>
      </section>

      {/* NOVA SEÇÃO: MAPA (ANTES DO RODAPÉ) */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black text-black uppercase tracking-tighter mb-2">
              Venha visitar nosso <span className="text-[#D12018]">Showroom</span>
            </h2>
            <p className="text-gray-600 font-medium">Estamos de portas abertas para te receber. Veja como chegar:</p>
          </div>
          
          <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-xl border-4 border-white relative">
            <iframe 
              /* COLE O LINK DO MAPA DO GOOGLE AQUI DENTRO DO SRC */
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1355.9083110831991!2d-47.53949436662839!3d-22.44545276181219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c7d1a4471d627f%3A0x37252793da91cbb6!2sSG%20BRASIL%20PORCELANATO!5e1!3m2!1spt-BR!2sbr!4v1772117940646!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

       <div className="mb-8 flex justify-center">
            <Image 
              src="/images/logo.png" /* Puxando a versão toda branca! */
              alt="Logo SG Brasil Porcelanato" 
              width={250} 
              height={100} 
              className="object-contain"
            />
          </div>

    </div>
  );
}