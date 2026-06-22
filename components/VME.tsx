export default function SecaoResultados() {
  return (
    <section className="bg-[#050505] text-white px-8 py-16 mt-12 rounded-[32px] shadow-2xl w-full text-center max-w-5xl mx-auto border border-[#BA8213]/20 relative overflow-hidden group">
      
      {/* Detalhe visual: Brilho Dourado no Topo */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#BA8213] to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

      <p className="text-2xl sm:text-4xl font-black leading-tight mb-6 uppercase tracking-tight">
        🏗️ Mais de <span className="text-[#BA8213]">10.000m²</span> de sonhos entregues.
      </p>
      
      <p className="text-lg text-gray-400 max-w-3xl mx-auto font-medium leading-relaxed">
        A escolha confiável dos principais <span className="text-white">arquitetos</span> e construtoras da região. 
        Garantimos a sofisticação que o seu projeto exige com a <span className="text-[#D12018]">segurança de entrega</span> que você precisa.
      </p>
    </section>
  );
}