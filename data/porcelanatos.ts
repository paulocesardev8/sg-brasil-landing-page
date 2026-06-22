export type AcabamentoPorcelanato = 'Polido Brilhante' | 'Acetinado' | 'Natural' | 'Safe'

export type Porcelanato = {
  slug: string
  codigo: string
  nome: string
  colecao: string
  formato: string
  acabamento: AcabamentoPorcelanato
  uso: string[]
  ambientes: string[]
  melhorPreco: boolean   // linha com valor especial (porcelanatos padronizados)
  imagem: string
  destaque?: boolean
  preco?: number
}

// ─── FORMATO 83x83cm ────────────────────────────────────────────────────────

const F83 = '83x83'

// ─── FORMATO 61,8x61,8cm ────────────────────────────────────────────────────

const F61 = '61,8x61,8'

// ─── COLEÇÕES ────────────────────────────────────────────────────────────────

export const porcelanatos: Porcelanato[] = [

  // ── 83x83 ── RIMINI CARRARA ─────────────────────────────────────────────
  {
    slug: 'rimini-carrara-plus',
    codigo: 'DP83300',
    nome: 'Rimini Carrara Plus',
    colecao: 'Decore',
    formato: F83,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'quarto'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/rimini-carrara.jpg',
    destaque: true,
  },
  {
    slug: 'rimini-carrara-lux-plus',
    codigo: 'DP83500',
    nome: 'Rimini Carrara Lux Plus',
    colecao: 'Decore',
    formato: F83,
    acabamento: 'Polido Brilhante',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'quarto'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/rimini-carrara.jpg',
  },
  {
    slug: 'golden-calacatta-lux-plus',
    codigo: 'DP83501',
    nome: 'Golden Calacatta Lux Plus',
    colecao: 'Decore',
    formato: F83,
    acabamento: 'Polido Brilhante',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'quarto'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/rimini-carrara.jpg',
    destaque: true,
  },

  // ── 83x83 ── ÔNYX LYON ──────────────────────────────────────────────────
  {
    slug: 'onyx-lyon-plus',
    codigo: 'DP83304',
    nome: 'Ônyx Lyon Plus',
    colecao: 'Decore',
    formato: F83,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['banheiro', 'sala'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/onyx-york.jpg',
  },
  {
    slug: 'onyx-lyon-lux-plus',
    codigo: 'DP83502',
    nome: 'Ônyx Lyon Lux Plus',
    colecao: 'Decore',
    formato: F83,
    acabamento: 'Polido Brilhante',
    uso: ['piso', 'parede'],
    ambientes: ['banheiro', 'sala'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/onyx-york.jpg',
    destaque: true,
  },

  // ── 83x83 ── YORK ───────────────────────────────────────────────────────
  {
    slug: 'york-platina-plus',
    codigo: 'DP83301',
    nome: 'York Platina Plus',
    colecao: 'Decore',
    formato: F83,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/onyx-york.jpg',
  },
  {
    slug: 'york-kraft-plus',
    codigo: 'DP83302',
    nome: 'York Kraft Plus',
    colecao: 'Decore',
    formato: F83,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/onyx-york.jpg',
  },
  {
    slug: 'york-kraft-out-plus',
    codigo: 'DP83303',
    nome: 'York Kraft Out Plus',
    colecao: 'Decore',
    formato: F83,
    acabamento: 'Safe',
    uso: ['piso', 'externo'],
    ambientes: ['externo', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/onyx-york.jpg',
  },

  // ── 61,8x61,8 ── ALPES GOLD ─────────────────────────────────────────────
  {
    slug: 'alpes-gold',
    codigo: 'DP61100',
    nome: 'Alpes Gold',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'quarto'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/alpes-gold.jpg',
    destaque: true,
  },
  {
    slug: 'alpes-gold-lux',
    codigo: 'DP61400',
    nome: 'Alpes Gold Lux',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Polido Brilhante',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'quarto'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/alpes-gold.jpg',
  },
  {
    slug: 'carrara-niquel',
    codigo: 'DP61701',
    nome: 'Carrara Níquel',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'quarto'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/alpes-gold.jpg',
  },
  {
    slug: 'carrara-niquel-lux',
    codigo: 'DP61405',
    nome: 'Carrara Níquel Lux',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Polido Brilhante',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'quarto'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/alpes-gold.jpg',
  },

  // ── 61,8x61,8 ── MARMO PALLADIO ─────────────────────────────────────────
  {
    slug: 'marmo-palladio-beige',
    codigo: 'DP61102',
    nome: 'Marmo Palladio Beige',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/marmo-palladio.jpg',
  },
  {
    slug: 'marmo-palladio-beige-lux',
    codigo: 'DP61402',
    nome: 'Marmo Palladio Beige Lux',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Polido Brilhante',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/marmo-palladio.jpg',
    destaque: true,
  },
  {
    slug: 'marmo-palladio-gris',
    codigo: 'DP61103',
    nome: 'Marmo Palladio Gris',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/marmo-palladio.jpg',
  },
  {
    slug: 'marmo-palladio-gris-lux',
    codigo: 'DP61403',
    nome: 'Marmo Palladio Gris Lux',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Polido Brilhante',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/marmo-palladio.jpg',
  },

  // ── 61,8x61,8 ── COZINHA ────────────────────────────────────────────────
  {
    slug: 'habitare-blue',
    codigo: 'DP61110',
    nome: 'Habitare Blue',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['parede'],
    ambientes: ['cozinha'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-cozinha.jpg',
  },
  {
    slug: 'fusion-snow',
    codigo: 'DP61112',
    nome: 'Fusion Snow',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['cozinha', 'sala'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-cozinha.jpg',
  },
  {
    slug: 'metro-grigio',
    codigo: 'DP61113',
    nome: 'Metro Grigio',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['cozinha', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-cozinha.jpg',
  },
  {
    slug: 'titanium-out',
    codigo: 'DP61111',
    nome: 'Titanium Out',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Safe',
    uso: ['piso', 'externo'],
    ambientes: ['externo', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-cozinha.jpg',
  },

  // ── 61,8x61,8 ── CHICAGO GRAY ───────────────────────────────────────────
  {
    slug: 'chicago-gray',
    codigo: 'DP61108',
    nome: 'Chicago Gray',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['quarto', 'sala'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-gray.jpg',
    destaque: true,
  },
  {
    slug: 'chicago-gray-nat',
    codigo: 'DP61702',
    nome: 'Chicago Gray Nat',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Natural',
    uso: ['piso', 'parede'],
    ambientes: ['quarto', 'sala'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-gray.jpg',
  },

  // ── 61,8x61,8 ── CHICAGO BEGE / CONCRET ─────────────────────────────────
  {
    slug: 'chicago-bege',
    codigo: 'DP61105',
    nome: 'Chicago Bege',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['banheiro', 'sala'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-bege-concret.jpg',
    destaque: true,
  },
  {
    slug: 'chicago-bege-nat',
    codigo: 'DP61700',
    nome: 'Chicago Bege Nat',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Natural',
    uso: ['piso', 'parede'],
    ambientes: ['banheiro', 'sala'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-bege-concret.jpg',
  },
  {
    slug: 'chicago-concret',
    codigo: 'DP61106',
    nome: 'Chicago Concret',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['banheiro', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-bege-concret.jpg',
  },
  {
    slug: 'chicago-concret-nat',
    codigo: 'DP61701',
    nome: 'Chicago Concret Nat',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Natural',
    uso: ['piso', 'parede'],
    ambientes: ['banheiro', 'comercial'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-bege-concret.jpg',
  },
  {
    slug: 'chicago-concret-out',
    codigo: 'DP61107',
    nome: 'Chicago Concret Out',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Safe',
    uso: ['piso', 'externo'],
    ambientes: ['externo', 'banheiro'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/chicago-bege-concret.jpg',
  },

  // ── 61,8x61,8 ── ÔNIX BRULÉE / MAHAL ────────────────────────────────────
  {
    slug: 'onix-brulee',
    codigo: 'DP61104',
    nome: 'Ônix Brulée',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Acetinado',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'banheiro'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/onix-mahal.jpg',
  },
  {
    slug: 'onix-brulee-lux',
    codigo: 'DP61404',
    nome: 'Ônix Brulée Lux',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Polido Brilhante',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'banheiro'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/onix-mahal.jpg',
    destaque: true,
  },
  {
    slug: 'mahal-lux',
    codigo: 'DP61405',
    nome: 'Mahal Lux',
    colecao: 'Decore',
    formato: F61,
    acabamento: 'Polido Brilhante',
    uso: ['piso', 'parede'],
    ambientes: ['sala', 'quarto'],
    melhorPreco: true,
    imagem: '/images/porcelanatos/onix-mahal.jpg',
    destaque: true,
  },
]

export function getPorcelanato(slug: string): Porcelanato | undefined {
  return porcelanatos.find((p) => p.slug === slug)
}

export function getPorcelanatosPorAmbiente(ambiente: string): Porcelanato[] {
  return porcelanatos.filter((p) => p.ambientes.includes(ambiente))
}
