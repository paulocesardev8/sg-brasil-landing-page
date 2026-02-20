import Image from "next/image";
import FormAgendamento from "./FormAgendamento"; // Certifique-se que este arquivo existe
import { 
  CheckCircleIcon, 
  LightBulbIcon, 
  ChatBubbleBottomCenterTextIcon, 
  CpuChipIcon, 
  RocketLaunchIcon, 
  AdjustmentsHorizontalIcon, 
  ChartBarIcon, 
  PresentationChartLineIcon, 
  SparklesIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/solid';

// --- DADOS ---

const roteiroAulas = [
  {
    icon: <AdjustmentsHorizontalIcon className="h-8 w-8 text-blue-400" />,
    title: "Estrutura e Configuração",
    description: "Configuramos sua conta de anúncios do zero, da forma correta, evitando bloqueios e problemas futuros.",
  },
  {
    icon: <PresentationChartLineIcon className="h-8 w-8 text-blue-400" />,
    title: "Objetivos de Campanha",
    description: "Você vai entender qual objetivo usar para cada momento do seu funil, seja para atrair, engajar ou vender.",
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-blue-400" />,
    title: "Criação de Criativos",
    description: "Aprendemos a estruturar e testar imagens e vídeos que realmente chamam a atenção e convertem.",
  },
  {
    icon: <UserGroupIcon className="h-8 w-8 text-blue-400" />,
    title: "Públicos e Segmentação",
    description: "Vamos encontrar seus clientes ideais, testando públicos de interesses, semelhantes (lookalike) e remarketing.",
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-blue-400" />,
    title: "Análise e Otimização",
    description: "Você aprenderá a ler as métricas que importam para tomar decisões inteligentes e otimizar seus orçamentos.",
  },
  {
    icon: <RocketLaunchIcon className="h-8 w-8 text-blue-400" />,
    title: "Estratégias de Escala",
    description: "Quando os resultados aparecerem, vou te mostrar como escalar suas campanhas de forma segura para vender ainda mais.",
  },
];

const diferenciais = [
  { icon: <LightBulbIcon className="h-8 w-8 text-lime-400 mb-4" />, title: "Diagnóstico Personalizado", description: "Cada aula começa entendendo sua realidade e onde está o gargalo. Nada genérico, é direto no que vai te destravar." },
  { icon: <RocketLaunchIcon className="h-8 w-8 text-lime-400 mb-4" />, title: "Aplicação Imediata", description: "Você sai da aula com estratégias práticas e já aplicáveis, mesmo que nunca tenha anunciado nada." },
  { icon: <CpuChipIcon className="h-8 w-8 text-lime-400 mb-4" />, title: "Inteligência Artificial ao seu favor", description: "Uso real e simplificado de IA pra acelerar seus anúncios, criativos e estrutura de campanha." },
  { icon: <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-lime-400 mb-4" />, title: "Suporte direto e humanizado", description: "Nada de chatbot. Você fala direto com quem vai te ensinar — com empatia e foco no resultado." },
];

const comoFunciona = [
  { title: "Preencha o formulário", description: "Insira seus dados e siga para o WhatsApp para finalizar o agendamento." },
  { title: "Agende com Paulo", description: "Você será atendido diretamente para alinhar o melhor dia e horário." },
  { title: "Receba o link da aula", description: "Tudo organizado para você receber o link com antecedência." },
  { title: "Aula ao vivo e prática", description: "Aula personalizada via Google Meet, com aplicação na hora." },
  { title: "Suporte remoto", description: "Auxílio com ferramenta que facilita o aprendizado de forma didática." },
  { title: "Receba o replay da aula", description: "Gravação completa da sua aula enviada após o término." },
];

const depoimentos = [
  { nome: 'Rafael', cargo: 'Hipnoterapeuta', fraseDestaque: 'A mentoria dele abriu o leque e me deu o direcionamento que faltava.', tipo: 'video', videoId: 'Qc7Q2fy41H8' },
  { nome: 'Osires', cargo: 'Professor e Acupunturista', fraseDestaque: 'Aprendi a anunciar do zero e gerei vendas de sessões de acupuntura.', tipo: 'video', videoId: 'eH6d_45k2dM' },
  { nome: 'Ronald', cargo: 'Loja de roupas', fraseDestaque: 'Tinha dificuldade em estruturar campanha, o Paulo foi simples e me explicou passo a passo.', tipo: 'texto', imagemUrl: '/images/ronald.png'},
  { nome: 'Ana Flávia', cargo: 'Vendedora', fraseDestaque: 'Que paciência incrível desse rapaz. Me direcionou e explicou várias vezes em minhas dúvidas.', tipo: 'texto', imagemUrl: '/images/anaflavia.png'},
  { nome: 'Antônio', cargo: 'Fisioterapeuta', fraseDestaque: 'Fechei meu primeiro paciente vindo dos anúncios, graças as suas orientações', tipo: 'texto', imagemUrl: '/images/antonio.png'},
];

export default function HeroAula() {
  return (
    <>
      {/* SEÇÃO HERO (TOPO) */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 py-16 text-center bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3b82f633,transparent)] -z-10"></div>
        
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-8 max-w-4xl animate-fadeInUp">
          Transforme cliques em vendas com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-700">Tráfego Pago e Inteligência Artificial</span>
        </h1>
        
        <p className="text-lg sm:text-2xl text-gray-300 mb-8 max-w-2xl animate-fadeInUp animation-delay-200">
          Aulas 1:1 sob medida pra você aplicar agora, direto com quem vive disso todos os dias.
        </p>
        
        <a href="#agendar" className="bg-green-600 hover:bg-green-500 text-white font-semibold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 animate-fadeInUp animation-delay-400 transform hover:scale-110 hover:shadow-green-500/50 relative group inline-block">
          <span className="relative z-10">💡 Quero aprender com você</span>
        </a>
        
        <p className="text-sm text-gray-400 mt-4 animate-fadeInUp animation-delay-600">
          ⚡ Vagas limitadas por semana – atendimento individual
        </p>
        
        <div className="mt-12 w-full max-w-xs sm:max-w-sm animate-fadeInUp animation-delay-800 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-800/50">
          {/* Ajuste de largura/altura aqui é crucial se não usar fill */}
          <Image 
            src="/images/paulo-hero-nova.jpg" 
            alt="Paulo Cesar, mentor especialista" 
            width={400} 
            height={400} 
            className="w-full h-auto object-cover" 
            priority 
          />
        </div>
      </section>

      {/* SEÇÃO "QUEM É PAULO?" */}
      <section className="mt-32 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Quem é Paulo?</h2>
        <p className="text-gray-500 text-lg">
          Especialista em tráfego pago e IA com mais de <span className="text-white font-bold">5 anos de experiência</span> e <span className="text-white font-bold">+R$5 milhões gerenciados</span> em anúncios. Apaixonado por ensinar de forma simples e objetiva, entregando clareza e resultado desde a primeira aula.
        </p>
      </section>
      {/* SEÇÃO "DIFERENCIAIS" */}
      <section className="mt-32 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Por que essas aulas são diferentes?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {diferenciais.map((item) => (
            <div key={item.title} className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl transition-all duration-300 hover:bg-gray-800/60 hover:-translate-y-2 ring-1 ring-white/10">
              {item.icon}
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 text-md">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO "ROTEIRO" */}
      <section className="mt-32 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Nosso Roteiro Para o Sucesso
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Um passo a passo completo, cobrindo tudo que você precisa para criar campanhas lucrativas e com estratégia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roteiroAulas.map((topico, index) => (
            <div key={index} className="bg-gray-900 p-8 rounded-2xl ring-1 ring-white/10 flex flex-col items-start transition-all duration-300 hover:ring-blue-500 hover:-translate-y-2">
              <div className="bg-gray-800 p-3 rounded-lg self-start mb-6">
                {topico.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{topico.title}</h3>
              <p className="text-gray-300 text-md">
                {topico.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      
      {/* SEÇÃO 'VOCÊ ESTÁ NO LUGAR CERTO SE...' */}
      <section className="mt-32 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Você está no lugar certo se...
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-red-400 mb-2">...você se sente travado:</h3>
            {[ "Pra quem já tentou rodar anúncios e travou no caminho", "Pra quem está começando e quer evitar erros caros", "Pra quem tá cansado de conteúdos gravados e genéricos", "Pra quem não sabe analisar e otimizar os resultados" ].map(item => (
              <div key={item} className="flex items-start space-x-3 p-4 bg-red-900/20 rounded-lg ring-1 ring-red-500/30">
                <svg className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">...você busca resultados:</h3>
            {[ "Pra quem quer vender mais e gastar menos com tráfego", "Pra quem busca clareza e orientação estratégica real", "Pra quem precisa analisar e otimizar suas campanhas", "Pra quem prefere aprender com alguém que vive disso todo dia" ].map(item => (
              <div key={item} className="flex items-start space-x-3 p-4 bg-blue-900/20 rounded-lg ring-1 ring-blue-500/30">
                <CheckCircleIcon className="h-6 w-6 text-green-400 mt-1 flex-shrink-0"/>
                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO "COMO FUNCIONA NA PRÁTICA" */}
      <section className="mt-32 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
          Como funciona na prática?
        </h2>
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 mb-4">
            "Vou te pegar pela mão e te mostrar como fazer, como pensar e ser estratégico."
          </p>
          <div className="w-full max-w-2xl mx-auto aspect-[9/16] md:aspect-video">
             {/* Ajustei o aspect ratio para ser responsivo (vertical no mobile, video no desk se preferir, ou mantem 9/16 se for um Short) */}
            <iframe className="w-full h-full rounded-lg shadow-lg" src="https://www.youtube.com/embed/5X1TDEdmVGg?rel=0&modestbranding=1" title="Explicação das aulas" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
          </div>
          <p className="text-md text-gray-500 mt-4">
            No vídeo acima, eu detalho o método que vamos aplicar, cobrindo desde a configuração da sua conta até a otimização e escala das suas campanhas.
          </p>
        </div>
        <div className="relative border-l-2 border-blue-500/30 ml-6">
          {comoFunciona.map((passo, index) => (
            <div key={passo.title} className="mb-10 ml-10">
              <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full ring-8 ring-gray-900 text-white font-bold">{index + 1}</span>
              <h3 className="text-xl font-semibold text-white mb-1">{passo.title}</h3>
              <p className="text-gray-400">{passo.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEÇÃO "PROJETOS EM DESTAQUE" */}
      <section className="mt-32 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Experiência Prática em Projetos Reais
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Além de ensinar, eu aplico estas estratégias diariamente em projetos que geram resultados concretos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col transition-all duration-300 hover:bg-gray-800/60 hover:-translate-y-2 ring-1 ring-white/10">
            <h3 className="text-2xl font-semibold text-white mb-3">Landing Pages</h3>
            <p className="text-gray-300 text-md mb-6 flex-grow">Criação de páginas com foco em conversão usando Next.js, Tailwind e copy persuasiva.</p>
            <span className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full self-start">FOCO EM CONVERSÃO</span>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col transition-all duration-300 hover:bg-gray-800/60 hover:-translate-y-2 ring-1 ring-white/10">
            <h3 className="text-2xl font-semibold text-white mb-3">E-commerce Estratégico</h3>
            <p className="text-gray-300 text-md mb-6 flex-grow">Campanhas segmentadas com ROAS otimizado e automações inteligentes.</p>
            <span className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full self-start">ROI 5+</span>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl flex flex-col transition-all duration-300 hover:bg-gray-800/60 hover:-translate-y-2 ring-1 ring-white/10">
            <h3 className="text-2xl font-semibold text-white mb-3">Produto Digital Escalado</h3>
            <p className="text-gray-300 text-md mb-6 flex-grow">Criação de funil e testes A/B para leads qualificados e alto engajamento.</p>
            <span className="bg-green-500/10 text-green-400 text-xs font-bold px-3 py-1 rounded-full self-start">+300 LEADS</span>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE DEPOIMENTOS */}
      <section className="mt-32 py-20 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Não Acredite Apenas em Mim
            </h2>
            <p className="text-lg text-gray-400 mt-4">
              Veja o que meus alunos dizem sobre a transformação que tiveram.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">      
            {/* Card Rafael */}
            <div className="bg-gray-900 rounded-2xl p-6 ring-1 ring-white/10 shadow-lg">
              <div className="w-full max-w-2xl mx-auto aspect-[9/16]">
                <iframe className="w-full h-full rounded-lg shadow-lg" src="https://www.youtube.com/embed/stDFx9zhY7A?si=aTP-m2WIkzkHoH5w" title="Rafael, depoimento" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
              </div>
              <blockquote className="mt-6 text-xl text-gray-200 italic">
                “A mentoria dele abriu o leque e me deu o direcionamento que faltava.”
              </blockquote>
              <p className="mt-4 font-semibold text-white">Rafael</p>
              <p className="text-sm text-blue-400">Hipnoterapeuta</p>
            </div>

            {/* Card Osires */}
            <div className="bg-gray-900 rounded-2xl p-6 ring-1 ring-white/10 shadow-lg">
              <div className="w-full max-w-2xl mx-auto aspect-[9/16]">
                <iframe className="w-full h-full rounded-lg shadow-lg" src="https://youtube.com/embed/1T2ZvgThsxY?si=IdU0sogcp5X6-Bnr" title="Osires, depoimento" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
              </div>
              <blockquote className="mt-6 text-xl text-gray-200 italic">
                “Aprendi a anunciar do zero e gerei vendas de sessões de acupuntura.”
              </blockquote>
              <p className="mt-4 font-semibold text-white">Osires</p>
              <p className="text-sm text-blue-400">Professor e Acupunturista</p>
            </div>

                        {/* Card Tom */}
            <div className="bg-gray-900 rounded-2xl p-6 ring-1 ring-white/10 shadow-lg">
              <div className="w-full max-w-2xl mx-auto aspect-[9/16]">
                <iframe className="w-full h-full rounded-lg shadow-lg" src="https://www.youtube.com/embed/vAMwz-Ql2HE?rel=0&modestbranding=1" title="Osires, depoimento" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy"></iframe>
              </div>
              <blockquote className="mt-6 text-xl text-gray-200 italic">
                “Contratei agências e não tive o resultado que o Paulo me trouxe.”
              </blockquote>
              <p className="mt-4 font-semibold text-white">Tom</p>
              <p className="text-sm text-blue-400">Fisioterapeuta</p>
            </div>
          </div>

          <div className="text-center my-16">
            <p className="text-gray-500">E muitas outras histórias de sucesso...</p>
          </div>

          {/* Depoimentos Texto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {depoimentos.filter(d => d.tipo === 'texto').map(depoimento => (
                <div key={depoimento.nome} className="bg-gray-900 p-8 rounded-2xl flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-700 mb-4 ring-4 ring-blue-500/50 overflow-hidden relative">
                        {depoimento.imagemUrl && ( 
                          <Image 
                            src={depoimento.imagemUrl} 
                            alt={`Foto de ${depoimento.nome}`} 
                            fill 
                            className="object-cover"
                          /> 
                        )}
                    </div>
                    <blockquote className="text-lg text-gray-300 flex-grow">“{depoimento.fraseDestaque}”</blockquote>
                    <footer className="mt-6">
                        <p className="font-bold text-white">{depoimento.nome}</p>
                        <p className="text-sm text-gray-400">{depoimento.cargo}</p>
                    </footer>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO DE AGENDAMENTO (FORMULÁRIO) */}
      <section id="agendar" className="mt-32 mb-20 max-w-lg mx-auto bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-2xl shadow-2xl">
        <h3 className="text-3xl font-bold mb-4 text-white text-center">Pronto para transformar seus resultados?</h3>
        <p className="text-gray-100 mb-8 text-md text-center">
          Preencha com seu melhor contato para agendar sua aula 1:1 diretamente comigo no WhatsApp.
        </p>
        
        {/* Verifica se o componente existe antes de usar */}
        <FormAgendamento />
        
        <p className="text-xs text-gray-200 mt-4 text-center">
          Você será redirecionado para o WhatsApp assim que preencher. Sem compromisso.
        </p>
      </section>
    </>
  );
}