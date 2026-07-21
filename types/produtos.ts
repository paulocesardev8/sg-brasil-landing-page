export type Produto = {
  id: string;
  nome: string;
  colecao: "Iris" | "Decora";
  tamanho: string;
  preco: number | null; // null = sob consulta
  descricao: string;
  imagem: string;
  imagensExtras?: string[]; // fotos adicionais para o carrossel
  destaque?: boolean;
  video?: string; // caminho do vídeo de demonstração (opcional)
  fotoEmBreve?: boolean; // se true, mostra "Foto em breve" no card
};

export type ItemCarrinho = {
  produto: Produto;
  quantidade: number;
};
