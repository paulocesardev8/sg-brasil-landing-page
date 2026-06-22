export type Cor = {
  id: string
  nome: string
  acabamento: 'Polido Brilhante' | 'Acetinado'
  hex: string
}

export type MedidasNicho = {
  A: number
  L: number
  P: number
}

export type Produto = {
  slug: string
  nome: string
  subtitulo: string
  tipo: 'embutir' | 'sobrepor'
  orientacao: 'horizontal' | 'vertical' | null
  borda: 'dupla' | null
  tamanho: string
  imagemListagem: string
  imagemDetalhe: string
  cores: Cor[]
  medidasExternas: MedidasNicho
  medidasInternas: MedidasNicho
  medidasFuro?: MedidasNicho
  numPrateleiras?: number
  destaque?: boolean
  ambientes: string[]
}

const CORES_POLIDO: Cor[] = [
  { id: 'iris-bianco',   nome: 'Íris Bianco',   acabamento: 'Polido Brilhante', hex: '#F0EDE8' },
  { id: 'decora-marmo',  nome: 'Decora Marmo',  acabamento: 'Polido Brilhante', hex: '#D8D0C8' },
  { id: 'iris-grigio',   nome: 'Íris Grigio',   acabamento: 'Polido Brilhante', hex: '#9A9694' },
  { id: 'decora-gold',   nome: 'Decora Gold',   acabamento: 'Polido Brilhante', hex: '#C4A464' },
  { id: 'iris-crema',    nome: 'Íris Crema',    acabamento: 'Polido Brilhante', hex: '#D8C4A4' },
  { id: 'decora-opale',  nome: 'Decora Opale',  acabamento: 'Polido Brilhante', hex: '#5C5650' },
]

const CORES_ACETINADO: Cor[] = [
  { id: 'decora-ciment', nome: 'Decora Ciment', acabamento: 'Acetinado', hex: '#B0ABA4' },
  { id: 'iris-nero',     nome: 'Íris Nero',     acabamento: 'Acetinado', hex: '#1E1E1E' },
]

const TODAS_AS_CORES: Cor[] = [...CORES_POLIDO, ...CORES_ACETINADO]

const CORES_SOBREPOR: Cor[] = [
  { id: 'iris-bianco',   nome: 'Íris Bianco',   acabamento: 'Polido Brilhante', hex: '#F0EDE8' },
  { id: 'decora-marmo',  nome: 'Decora Marmo',  acabamento: 'Polido Brilhante', hex: '#D8D0C8' },
  { id: 'iris-grigio',   nome: 'Íris Grigio',   acabamento: 'Polido Brilhante', hex: '#9A9694' },
  { id: 'decora-ciment', nome: 'Decora Ciment', acabamento: 'Acetinado',        hex: '#B0ABA4' },
  { id: 'iris-crema',    nome: 'Íris Crema',    acabamento: 'Polido Brilhante', hex: '#D8C4A4' },
  { id: 'decora-opale',  nome: 'Decora Opale',  acabamento: 'Polido Brilhante', hex: '#5C5650' },
  { id: 'decora-gold',   nome: 'Decora Gold',   acabamento: 'Polido Brilhante', hex: '#C4A464' },
  { id: 'iris-nero',     nome: 'Íris Nero',     acabamento: 'Acetinado',        hex: '#1E1E1E' },
]

export const produtos: Produto[] = [
  // --- EMBUTIR HORIZONTAL ---
  {
    slug: 'embutir-horizontal-30x60',
    nome: 'Nicho de Embutir 30x60',
    subtitulo: 'Porcelanato Borda Dupla — Horizontal',
    tipo: 'embutir',
    orientacao: 'horizontal',
    borda: 'dupla',
    tamanho: '30x60',
    imagemListagem: '/images/nichos/embutir-30x60-a.jpg',
    imagemDetalhe: '/images/nichos/embutir-30x60-a.jpg',
    cores: TODAS_AS_CORES,
    medidasExternas: { A: 38, L: 68, P: 11 },
    medidasInternas: { A: 30, L: 60, P: 10 },
    medidasFuro:     { A: 35, L: 65, P: 10 },
    ambientes: ['banheiro'],
    destaque: true,
  },
  {
    slug: 'embutir-horizontal-30x30',
    nome: 'Nicho de Embutir 30x30',
    subtitulo: 'Porcelanato Borda Dupla — Horizontal',
    tipo: 'embutir',
    orientacao: 'horizontal',
    borda: 'dupla',
    tamanho: '30x30',
    imagemListagem: '/images/nichos/embutir-30x30-a.jpg',
    imagemDetalhe: '/images/nichos/embutir-30x30-a.jpg',
    cores: TODAS_AS_CORES,
    medidasExternas: { A: 38, L: 38, P: 11 },
    medidasInternas: { A: 30, L: 30, P: 10 },
    medidasFuro:     { A: 35, L: 35, P: 10 },
    ambientes: ['banheiro'],
  },
  {
    slug: 'embutir-horizontal-30x80',
    nome: 'Nicho de Embutir 30x80',
    subtitulo: 'Porcelanato Borda Dupla — Horizontal',
    tipo: 'embutir',
    orientacao: 'horizontal',
    borda: 'dupla',
    tamanho: '30x80',
    imagemListagem: '/images/nichos/embutir-30x60-a.jpg',
    imagemDetalhe: '/images/nichos/embutir-30x60-a.jpg',
    cores: TODAS_AS_CORES,
    medidasExternas: { A: 38, L: 88, P: 11 },
    medidasInternas: { A: 30, L: 80, P: 10 },
    medidasFuro:     { A: 35, L: 85, P: 10 },
    ambientes: ['banheiro'],
  },
  {
    slug: 'embutir-horizontal-30x100',
    nome: 'Nicho de Embutir 30x100',
    subtitulo: 'Porcelanato Borda Dupla — Horizontal',
    tipo: 'embutir',
    orientacao: 'horizontal',
    borda: 'dupla',
    tamanho: '30x100',
    imagemListagem: '/images/nichos/embutir-30x60-a.jpg',
    imagemDetalhe: '/images/nichos/embutir-30x60-a.jpg',
    cores: TODAS_AS_CORES,
    medidasExternas: { A: 38, L: 108, P: 11 },
    medidasInternas: { A: 30, L: 100, P: 10 },
    medidasFuro:     { A: 35, L: 105, P: 10 },
    ambientes: ['banheiro'],
  },

  // --- EMBUTIR VERTICAL ---
  {
    slug: 'embutir-vertical-30x60',
    nome: 'Nicho Vertical de Embutir 30x60',
    subtitulo: 'Porcelanato Borda Dupla — Vertical com Prateleira',
    tipo: 'embutir',
    orientacao: 'vertical',
    borda: 'dupla',
    tamanho: '30x60',
    imagemListagem: '/images/nichos/embutir-vertical-30x60-a.jpg',
    imagemDetalhe: '/images/nichos/embutir-vertical-30x60-a.jpg',
    cores: TODAS_AS_CORES,
    medidasExternas: { A: 68, L: 38, P: 11 },
    medidasInternas: { A: 60, L: 30, P: 10 },
    medidasFuro:     { A: 65, L: 35, P: 10 },
    numPrateleiras: 1,
    ambientes: ['banheiro'],
    destaque: true,
  },
  {
    slug: 'embutir-vertical-30x100',
    nome: 'Nicho Vertical de Embutir 30x100',
    subtitulo: 'Porcelanato Borda Dupla — Vertical com 2 Prateleiras',
    tipo: 'embutir',
    orientacao: 'vertical',
    borda: 'dupla',
    tamanho: '30x100',
    imagemListagem: '/images/nichos/embutir-vertical-30x60-a.jpg',
    imagemDetalhe: '/images/nichos/embutir-vertical-30x60-a.jpg',
    cores: TODAS_AS_CORES,
    medidasExternas: { A: 108, L: 38, P: 11 },
    medidasInternas: { A: 100, L: 30, P: 10 },
    medidasFuro:     { A: 105, L: 35, P: 10 },
    numPrateleiras: 2,
    ambientes: ['banheiro'],
  },

  // --- SOBREPOR ---
  {
    slug: 'sobrepor-30x60',
    nome: 'Nicho de Sobrepor 30x60',
    subtitulo: 'Porcelanato — Instalação sem Quebra de Parede',
    tipo: 'sobrepor',
    orientacao: null,
    borda: null,
    tamanho: '30x60',
    imagemListagem: '/images/nichos/sobrepor-30x60-a.jpg',
    imagemDetalhe: '/images/nichos/sobrepor-30x60-a.jpg',
    cores: CORES_SOBREPOR,
    medidasExternas: { A: 38, L: 68, P: 8 },
    medidasInternas: { A: 30, L: 60, P: 7 },
    ambientes: ['banheiro'],
    destaque: true,
  },
  {
    slug: 'sobrepor-30x30',
    nome: 'Nicho de Sobrepor 30x30',
    subtitulo: 'Porcelanato — Instalação sem Quebra de Parede',
    tipo: 'sobrepor',
    orientacao: null,
    borda: null,
    tamanho: '30x30',
    imagemListagem: '/images/nichos/sobrepor-30x60-a.jpg',
    imagemDetalhe: '/images/nichos/sobrepor-30x60-a.jpg',
    cores: CORES_SOBREPOR,
    medidasExternas: { A: 38, L: 38, P: 8 },
    medidasInternas: { A: 30, L: 30, P: 7 },
    ambientes: ['banheiro'],
  },
  {
    slug: 'sobrepor-30x80',
    nome: 'Nicho de Sobrepor 30x80',
    subtitulo: 'Porcelanato — Instalação sem Quebra de Parede',
    tipo: 'sobrepor',
    orientacao: null,
    borda: null,
    tamanho: '30x80',
    imagemListagem: '/images/nichos/sobrepor-30x60-a.jpg',
    imagemDetalhe: '/images/nichos/sobrepor-30x60-a.jpg',
    cores: CORES_SOBREPOR,
    medidasExternas: { A: 38, L: 88, P: 8 },
    medidasInternas: { A: 30, L: 80, P: 7 },
    ambientes: ['banheiro'],
  },
  {
    slug: 'sobrepor-30x100',
    nome: 'Nicho de Sobrepor 30x100',
    subtitulo: 'Porcelanato — Instalação sem Quebra de Parede',
    tipo: 'sobrepor',
    orientacao: null,
    borda: null,
    tamanho: '30x100',
    imagemListagem: '/images/nichos/sobrepor-30x60-a.jpg',
    imagemDetalhe: '/images/nichos/sobrepor-30x60-a.jpg',
    cores: CORES_SOBREPOR,
    medidasExternas: { A: 38, L: 108, P: 8 },
    medidasInternas: { A: 30, L: 100, P: 7 },
    ambientes: ['banheiro'],
  },
]

export function getProduto(slug: string): Produto | undefined {
  return produtos.find((p) => p.slug === slug)
}
