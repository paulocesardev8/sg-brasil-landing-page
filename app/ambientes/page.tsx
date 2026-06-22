import Image from "next/image"
import Link from "next/link"
import { ambientes } from "@/data/ambientes"

export default function AmbientesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HEADER */}
      <header className="bg-black px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-white/10">
        <Link href="/">
          <Image src="/images/logo-branca.png" alt="SG Brasil" width={120} height={48} className="object-contain" />
        </Link>
        <nav className="flex gap-6">
          <Link href="/" className="text-white/60 hover:text-white text-sm font-medium transition-colors">Início</Link>
          <Link href="/ambientes" className="text-[#D12018] text-sm font-bold">Ambientes</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="bg-black py-20 px-6 text-center">
        <span className="inline-block text-[#BA8213] text-xs font-bold uppercase tracking-[0.3em] mb-4">
          SG Brasil Porcelanato
        </span>
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Escolha seu <span className="text-[#D12018]">Ambiente</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Encontre os produtos ideais para cada espaço da sua obra.
        </p>
      </section>

      {/* GRID DE AMBIENTES */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ambientes.map((amb) => (
            <div key={amb.slug} className="relative group">
              {amb.disponivel ? (
                <Link href={`/ambientes/${amb.slug}`} className="block">
                  <AmbienteCard amb={amb} />
                </Link>
              ) : (
                <div className="opacity-60 cursor-not-allowed">
                  <AmbienteCard amb={amb} />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    Em breve
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>

      {/* FOOTER CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-16 px-6 text-center">
        <p className="text-gray-500 text-sm mb-2">Não encontrou o que procura?</p>
        <h2 className="text-2xl font-black text-black uppercase mb-6">
          Fale com um <span className="text-[#D12018]">especialista</span>
        </h2>
        <a
          href="https://wa.me/5519996622666?text=Ol%C3%A1%21%20Gostaria%20de%20conhecer%20os%20produtos%20da%20SG%20Brasil."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#D12018] hover:bg-[#b01a14] text-white font-black py-4 px-10 rounded-xl text-base shadow-lg transition-all hover:scale-105"
        >
          FALAR VIA WHATSAPP
        </a>
      </section>
    </div>
  )
}

function AmbienteCard({ amb }: { amb: (typeof ambientes)[0] }) {
  return (
    <div className="relative h-80 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
      <Image
        src={amb.imagem}
        alt={amb.nome}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h2 className="text-white font-black text-2xl uppercase tracking-tight group-hover:text-[#D12018] transition-colors duration-300">
          {amb.nome}
        </h2>
        <p className="text-gray-300 text-sm mt-1 leading-snug">{amb.descricao}</p>
        {amb.disponivel && (
          <span className="inline-block mt-3 text-[#BA8213] text-xs font-bold uppercase tracking-widest">
            Ver produtos →
          </span>
        )}
      </div>
    </div>
  )
}
