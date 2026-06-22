export type Ambiente = {
  slug: string
  nome: string
  descricao: string
  imagem: string
  disponivel: boolean
  cor: string
}

export const ambientes: Ambiente[] = [
  {
    slug: 'banheiro',
    nome: 'Banheiro',
    descricao: 'Nichos, revestimentos e acabamentos exclusivos para o seu banheiro.',
    imagem: '/images/banheiro.webp',
    disponivel: true,
    cor: '#1a6b8a',
  },
  {
    slug: 'cozinha',
    nome: 'Cozinha',
    descricao: 'Bancadas e revestimentos para cozinhas modernas e funcionais.',
    imagem: '/images/cozinha.webp',
    disponivel: false,
    cor: '#8a5a1a',
  },
  {
    slug: 'sala',
    nome: 'Sala',
    descricao: 'Grandes formatos e acabamentos premium para ambientes amplos.',
    imagem: '/images/sala.webp',
    disponivel: false,
    cor: '#3a6b3a',
  },
  {
    slug: 'quarto',
    nome: 'Quarto',
    descricao: 'Revestimentos que unem aconchego e sofisticação.',
    imagem: '/images/quarto.webp',
    disponivel: false,
    cor: '#6b3a6b',
  },
  {
    slug: 'comercial',
    nome: 'Comercial',
    descricao: 'Soluções robustas para alto tráfego e espaços corporativos.',
    imagem: '/images/comercial.webp',
    disponivel: false,
    cor: '#3a3a6b',
  },
  {
    slug: 'externo',
    nome: 'Externo',
    descricao: 'Porcelanatos antiderrapantes e duráveis para áreas externas.',
    imagem: '/images/externa.webp',
    disponivel: false,
    cor: '#6b5a1a',
  },
]

export function getAmbiente(slug: string): Ambiente | undefined {
  return ambientes.find((a) => a.slug === slug)
}
