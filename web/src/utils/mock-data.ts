import { Category, Story } from '@/types';

export const MOCK_DATA: Story[] = [
  {
    id: 1,
    slug: 'chapeuzinho-vermelho',
    title: 'Chapeuzinho Vermelho',
    youtube_video_id: 'ImJ8C5gpshs',
    description: 'Uma história clássica sobre uma menina e um lobo.',
    duration: 742,
    category: Category.ANIMATED,
    questions: [
      {
        question: 'Qual era a cor do chapéu da menina?',
        options: [
          { text: 'Vermelho', is_correct: true },
          { text: 'Azul', is_correct: false },
          { text: 'Verde', is_correct: false },
        ],
      },
      {
        question: 'Para onde Chapeuzinho Vermelho estava indo?',
        options: [
          { text: 'Para a casa da avó', is_correct: true },
          { text: 'Para a escola', is_correct: false },
          { text: 'Para o mercado', is_correct: false },
        ],
      },
      {
        question: 'Quem Chapeuzinho encontrou na floresta?',
        options: [
          { text: 'O Lobo Mau', is_correct: true },
          { text: 'Um caçador', is_correct: false },
          { text: 'Um urso', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'os-tres-porquinhos',
    title: 'Os Três Porquinhos',
    youtube_video_id: 'mgSIYg-Astg',
    description: 'A história de três irmãos porquinhos enfrentando um lobo.',
    duration: 703,
    category: Category.CLASSIC,
    questions: [
      {
        question: 'O que usou o terceiro porquinho para construir sua casa?',
        options: [
          { text: 'Palha', is_correct: false },
          { text: 'Madeira', is_correct: false },
          { text: 'Tijolos', is_correct: true },
        ],
      },
      {
        question: 'Quantos porquinhos aparecem na história?',
        options: [
          { text: 'Dois', is_correct: false },
          { text: 'Três', is_correct: true },
          { text: 'Quatro', is_correct: false },
        ],
      },
      {
        question: 'Como o lobo tentou derrubar a casa de tijolos?',
        options: [
          { text: 'Com uma marreta', is_correct: false },
          { text: 'Soprando', is_correct: true },
          { text: 'Colocando fogo', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'davi-e-golias',
    title: 'Davi e Golias',
    youtube_video_id: '6yHDJp2wmks',
    description: 'A épica batalha entre Davi e o gigante Golias.',
    duration: 655,
    category: Category.RELIGIOUS,
    questions: [
      {
        question: 'Qual arma Davi usou para derrotar Golias?',
        options: [
          { text: 'Uma funda', is_correct: true },
          { text: 'Uma espada', is_correct: false },
          { text: 'Uma lança', is_correct: false },
        ],
      },
      {
        question: 'Quem era o inimigo dos israelitas na história?',
        options: [
          { text: 'Os filisteus', is_correct: true },
          { text: 'Os egípcios', is_correct: false },
          { text: 'Os babilônios', is_correct: false },
        ],
      },
      {
        question: 'Por que Davi acreditava que venceria Golias?',
        options: [
          { text: 'Porque confiava em Deus', is_correct: true },
          { text: 'Porque tinha treinado muito', is_correct: false },
          { text: 'Porque era maior que Golias', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 4,
    slug: 'o-patinho-feio',
    title: 'O Patinho Feio',
    youtube_video_id: 'Am9rpdE8sWI',
    description: 'A história de um patinho que se transforma em um belo cisne.',
    duration: 590,
    category: Category.CLASSIC,
    questions: [
      {
        question: 'Por que os outros animais zombavam do patinho?',
        options: [
          { text: 'Porque ele era diferente', is_correct: true },
          { text: 'Porque ele era barulhento', is_correct: false },
          { text: 'Porque ele era pequeno', is_correct: false },
        ],
      },
      {
        question: 'O que o patinho encontrou no final da história?',
        options: [
          { text: 'Outros cisnes', is_correct: true },
          { text: 'Uma nova casa', is_correct: false },
          { text: 'Uma família de patos', is_correct: false },
        ],
      },
      {
        question: 'Qual é a lição da história?',
        options: [
          { text: 'A beleza está dentro de nós', is_correct: true },
          { text: 'É importante ser rápido', is_correct: false },
          { text: 'Não confie em estranhos', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'pinoquio',
    title: 'Pinóquio',
    youtube_video_id: 'kOjy9HAPpPw',
    description:
      'As aventuras de um boneco de madeira que quer ser um menino de verdade.',
    duration: 670,
    category: Category.NEW,
    questions: [
      {
        question: 'O que acontecia quando Pinóquio mentia?',
        options: [
          { text: 'Seu nariz crescia', is_correct: true },
          { text: 'Ele se tornava pequeno', is_correct: false },
          { text: 'Sua pele ficava vermelha', is_correct: false },
        ],
      },
      {
        question: 'Quem criou Pinóquio?',
        options: [
          { text: 'Gepeto', is_correct: true },
          { text: 'Um mago', is_correct: false },
          { text: 'Uma fada', is_correct: false },
        ],
      },
      {
        question: 'Qual é a lição da história?',
        options: [
          { text: 'Sempre diga a verdade', is_correct: true },
          { text: 'Nunca saia de casa', is_correct: false },
          { text: 'Confie em estranhos', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'cinderela',
    title: 'Cinderela',
    youtube_video_id: 'p2enZJmvvUM',
    description:
      'A história de uma jovem que se torna princesa graças a um sapatinho de cristal.',
    duration: 610,
    category: Category.CLASSIC,
    questions: [
      {
        question: 'O que Cinderela perdeu ao fugir do baile?',
        options: [
          { text: 'Um sapatinho de cristal', is_correct: true },
          { text: 'Uma tiara', is_correct: false },
          { text: 'Um colar', is_correct: false },
        ],
      },
      {
        question: 'Quem ajudou Cinderela a ir ao baile?',
        options: [
          { text: 'Uma fada madrinha', is_correct: true },
          { text: 'Sua madrasta', is_correct: false },
          { text: 'Seu pai', is_correct: false },
        ],
      },
      {
        question: 'Como o príncipe encontrou Cinderela?',
        options: [
          { text: 'Procurando quem calçava o sapatinho', is_correct: true },
          { text: 'Perguntando no reino', is_correct: false },
          { text: 'Com a ajuda da fada madrinha', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'a-pequena-sereia',
    title: 'A Pequena Sereia',
    youtube_video_id: 'lt5Qw9zgX0Q',
    description: 'Uma sereia que sonha em viver entre os humanos.',
    duration: 650,
    category: Category.MUSIC,
    questions: [
      {
        question: 'O que a sereia queria mais que tudo?',
        options: [
          { text: 'Viver como humana', is_correct: true },
          { text: 'Ser a rainha do mar', is_correct: false },
          { text: 'Falar com animais', is_correct: false },
        ],
      },
      {
        question: 'O que a Pequena Sereia deu em troca de suas pernas?',
        options: [
          { text: 'Sua voz', is_correct: true },
          { text: 'Suas joias', is_correct: false },
          { text: 'Seu cabelo', is_correct: false },
        ],
      },
      {
        question: 'Com quem a Pequena Sereia se apaixonou?',
        options: [
          { text: 'Um príncipe', is_correct: true },
          { text: 'Um pescador', is_correct: false },
          { text: 'Um marinheiro', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 8,
    slug: 'o-magico-de-oz',
    title: 'O Mágico de Oz',
    youtube_video_id: 'Oxt7rJ1rkKg',
    description: 'As aventuras de Dorothy em um mundo mágico.',
    duration: 720,
    category: Category.ANIMATED,
    questions: [
      {
        question: 'Qual era o objetivo de Dorothy?',
        options: [
          { text: 'Voltar para casa', is_correct: true },
          { text: 'Encontrar o Mágico', is_correct: false },
          { text: 'Fugir da Bruxa', is_correct: false },
        ],
      },
      {
        question: 'Quem acompanhava Dorothy na jornada?',
        options: [
          { text: 'Leão, Espantalho e Homem de Lata', is_correct: true },
          { text: 'Um cão mágico', is_correct: false },
          { text: 'Um mago', is_correct: false },
        ],
      },
      {
        question: 'O que os sapatos mágicos faziam?',
        options: [
          { text: 'Levavam Dorothy para casa', is_correct: true },
          { text: 'Deixavam-na invisível', is_correct: false },
          { text: 'Davam poderes mágicos', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 9,
    slug: 'alice-no-pais-das-maravilhas',
    title: 'Alice no País das Maravilhas',
    youtube_video_id: 'vgFcWIYBRLY',
    description: 'A jornada surreal de Alice em um mundo encantado.',
    duration: 730,
    category: Category.MODERN,
    questions: [
      {
        question: 'Quem Alice seguiu no início da história?',
        options: [
          { text: 'O Coelho Branco', is_correct: true },
          { text: 'O Gato Risonho', is_correct: false },
          { text: 'O Chapeleiro Maluco', is_correct: false },
        ],
      },
      {
        question: 'O que fazia o Gato Risonho?',
        options: [
          { text: 'Sumia e aparecia', is_correct: true },
          { text: 'Conduzia Alice', is_correct: false },
          { text: 'Era o vilão', is_correct: false },
        ],
      },
      {
        question: 'Quem comandava o País das Maravilhas?',
        options: [
          { text: 'A Rainha de Copas', is_correct: true },
          { text: 'O Chapeleiro Maluco', is_correct: false },
          { text: 'O Coelho Branco', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 10,
    slug: 'festa-no-ceu',
    title: 'Festa no Céu',
    youtube_video_id: 'DeS-jOVF0lo',
    description:
      'A história do jabuti que foi à festa no céu e como seu casco ficou rachado.',
    duration: 680,
    category: Category.OTHER,
    questions: [
      {
        question: 'Como o jabuti chegou à festa no céu?',
        options: [
          { text: 'Escondido dentro de um violino', is_correct: true },
          { text: 'Voando com asas mágicas', is_correct: false },
          { text: 'Acompanhado por um pássaro', is_correct: false },
        ],
      },
      {
        question: 'O que aconteceu ao jabuti quando caiu do céu?',
        options: [
          { text: 'Seu casco quebrou', is_correct: true },
          { text: 'Ele perdeu a memória', is_correct: false },
          { text: 'Ele não conseguiu voltar para casa', is_correct: false },
        ],
      },
      {
        question: 'Qual é a lição da história?',
        options: [
          { text: 'A esperteza pode ter consequências', is_correct: true },
          { text: 'Nunca confie em ninguém', is_correct: false },
          {
            text: 'Ser rápido é mais importante que ser esperto',
            is_correct: false,
          },
        ],
      },
    ],
  },
  {
    id: 11,
    slug: 'joao-e-o-pe-de-feijao',
    title: 'João e o Pé de Feijão',
    youtube_video_id: 'zlIisu4mxiY',
    description:
      'A aventura de João ao escalar um pé de feijão gigante e encontrar um gigante.',
    duration: 700,
    category: Category.CLASSIC,
    questions: [
      {
        question: 'O que João trocou pelo feijão mágico?',
        options: [
          { text: 'Uma vaca', is_correct: true },
          { text: 'Uma galinha', is_correct: false },
          { text: 'Um cavalo', is_correct: false },
        ],
      },
      {
        question: 'O que João encontrou no topo do pé de feijão?',
        options: [
          { text: 'Um castelo com um gigante', is_correct: true },
          { text: 'Um lago mágico', is_correct: false },
          { text: 'Uma bruxa', is_correct: false },
        ],
      },
      {
        question: 'O que João trouxe do castelo do gigante?',
        options: [
          { text: 'Uma galinha que botava ovos de ouro', is_correct: true },
          { text: 'Um saco de moedas', is_correct: false },
          { text: 'Uma harpa mágica', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 12,
    slug: 'independencia-do-brasil',
    title: 'Independência do Brasil',
    youtube_video_id: 'hktuUnfPNA8',
    description:
      'A história do processo de independência do Brasil e o grito do Ipiranga.',
    duration: 720,
    category: Category.EDUCATIONAL,
    questions: [
      {
        question: 'Quem proclamou a independência do Brasil?',
        options: [
          { text: 'Dom Pedro I', is_correct: true },
          { text: 'Dom João VI', is_correct: false },
          { text: 'Tiradentes', is_correct: false },
        ],
      },
      {
        question: 'Em que ano o Brasil declarou sua independência?',
        options: [
          { text: '1822', is_correct: true },
          { text: '1808', is_correct: false },
          { text: '1889', is_correct: false },
        ],
      },
      {
        question: 'Qual foi a famosa frase associada à independência?',
        options: [
          { text: 'Independência ou Morte!', is_correct: true },
          { text: 'Liberdade ou Morte!', is_correct: false },
          { text: 'Paz e Progresso!', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 13,
    slug: 'a-bela-e-a-fera',
    title: 'A Bela e a Fera',
    youtube_video_id: 'ndqVp-pr6T0',
    description: 'A história de Bela, que descobre a beleza interior da Fera.',
    duration: 740,
    category: Category.ANIMATED,
    questions: [
      {
        question: 'Por que Bela foi morar no castelo da Fera?',
        options: [
          { text: 'Para salvar seu pai', is_correct: true },
          { text: 'Porque era seu sonho', is_correct: false },
          { text: 'Porque foi capturada', is_correct: false },
        ],
      },
      {
        question: 'O que quebrou o feitiço sobre a Fera?',
        options: [
          { text: 'O amor verdadeiro de Bela', is_correct: true },
          { text: 'Um beijo de Bela', is_correct: false },
          { text: 'A destruição de uma rosa mágica', is_correct: false },
        ],
      },
      {
        question: 'Qual é a lição principal da história?',
        options: [
          { text: 'A verdadeira beleza está no interior', is_correct: true },
          { text: 'Sempre siga seus sonhos', is_correct: false },
          { text: 'Nunca confie em estranhos', is_correct: false },
        ],
      },
    ],
  },
  {
    id: 14,
    slug: 'jonas',
    title: 'Jonas',
    youtube_video_id: 'pwtaRC8_cuA',
    description: 'A história bíblica de Jonas e o grande peixe.',
    duration: 690,
    category: Category.RELIGIOUS,
    questions: [
      {
        question: 'Por que Jonas foi engolido por um grande peixe?',
        options: [
          { text: 'Porque desobedeceu a Deus', is_correct: true },
          { text: 'Porque caiu no mar por acidente', is_correct: false },
          { text: 'Porque estava pescando', is_correct: false },
        ],
      },
      {
        question: 'Quanto tempo Jonas ficou dentro do grande peixe?',
        options: [
          { text: 'Três dias e três noites', is_correct: true },
          { text: 'Um dia e uma noite', is_correct: false },
          { text: 'Uma semana', is_correct: false },
        ],
      },
      {
        question: 'Qual cidade Jonas foi enviado para pregar?',
        options: [
          { text: 'Nínive', is_correct: true },
          { text: 'Jerusalém', is_correct: false },
          { text: 'Babilônia', is_correct: false },
        ],
      },
    ],
  },
];
