const followedChannels = [
  {
    user: "casimito",
    title:
      "AO VIVO E COM IMAGENS: BRASIL X SUÍÇA | RODADA 2 | FASE DE GRUPOS | COPA DO MUNDO 2022",
    game: "Just Chatting",
    viewers: 294283,
    tags: ["Português"],
    avatar: "/users/casimito.png",
    color: "#C0F500",
  },
  {
    user: "alanzoka",
    title: "EAI VIZINHO, BÃO?",
    game: "Scorn",
    viewers: 10920,
    tags: ["Português"],
    avatar: "/users/alanzoka.png",
  },
  {
    user: "YoDa",
    title: "MINECRAFT HOJE MEIO DIA",
    game: "League of Legends",
    viewers: 7467,
    tags: ["Português"],
    avatar: "/users/YoDa.png",
    color: "#4156BE",
  },
  {
    user: "Baiano",
    title: "BAIANALISTA Prêmio CBLOL 🏆 🔥!cortes",
    game: "League of Legends",
    viewers: 7430,
    tags: ["Português"],
    avatar: "/users/Baiano.png",
    color: "#FFA435",
  },
  {
    user: "frttt",
    title: "RANKEADAS TRYHARD RUMO AO TOPO - !aulas !lojatl !liquid+",
    game: "VALORANT",
    viewers: 4300,
    tags: ["Português"],
    avatar: "/users/frttt.png",
  },
  {
    user: "Coreano",
    title:
      "Rankeads 15s até umas 18:00, depois tiro delay e jogo outra coisa | !youtube !vods !loudclub",
    game: "VALORANT",
    viewers: 3405,
    tags: ["Português"],
    avatar: "/users/Coreano.png",
    color: "#000000",
  },
  {
    user: "Felps",
    title: "497ª | clica.",
    game: "Cookie Clicker",
    viewers: 2231,
    tags: ["Português"],
    avatar: "/users/Felps.png",
    color: "#FF3D6C",
  },
  {
    user: "TFToddy",
    title: "#2 BR - 1763 PDLs - BUSCANDO O TOP 1 BR!!!",
    game: "Teamfight Tactics",
    viewers: 1879,
    tags: ["Português"],
    avatar: "/users/TFToddy.png",
    color: "#1E1B5E",
  },
  {
    user: "Prizzaa",
    title: "VAMO FOFOCAR SIM e irl em tokyo mais tarde",
    game: "Just Chatting",
    viewers: 723,
    tags: ["Português"],
    avatar: "/users/Prizzaa.png",
    color: "#FAB3FF",
  },
  {
    user: "laribasgal",
    title: "QUERO CAFEEEEEEE !zap !regras",
    game: "VALORANT",
    viewers: 623,
    tags: ["Português"],
    avatar: "/users/laribasgal.png",
    color: "#F5F064",
  },
  {
    user: "nuuhfps",
    title: "🟢🟢 [Radiante] To jogando mal 🟢🟢 - !Samsung !aimlab !exitlag",
    game: "VALORANT",
    viewers: 561,
    tags: ["Português"],
    avatar: "/users/nuuhfps.png",
    color: "#EFF133",
  },
  {
    user: "PatoPapao",
    title: "sub por pena? 🥺 | !cronograma !pokemon",
    game: "League of Legends",
    viewers: 532,
    tags: ["Português"],
    avatar: "/users/PatoPapao.png",
    color: "#00C7AC",
  },
];

const recommendedChannels = [
  {
    user: "Recommended 1",
    game: "Minecraft",
    viewers: 1100,
    tags: ["English"],
  },
  {
    user: "Recommended 2",
    game: "Terraria",
    viewers: 70,
    tags: ["English"],
  },
  {
    user: "Recommended 3",
    game: "VALORANT",
    viewers: 4800,
    tags: ["English"],
  },
  {
    user: "Recommended 4",
    game: "Overwatch 2",
    viewers: 19,
    tags: ["English"],
  },
  {
    user: "Recommended 5",
    game: "League of Legends",
    viewers: 436,
    tags: ["English"],
  },
  {
    user: "Recommended 6",
    game: "Teamfight Tactics",
    viewers: 248,
    tags: ["English"],
  },
];

const games = [
  {
    name: "VALORANT",
    image: "/assets/valorant.jpg",
    viewers: 108200,
    tags: ["Shooter", "FPS"],
  },
  {
    name: "Cookie Clicker",
    image: "/assets/cookie-clicker.jpg",
    viewers: 2231,
    tags: ["Point and Click"],
  },
  {
    name: "Minecraft",
    image: "/assets/minecraft.jpg",
    viewers: 136620,
    tags: ["MMO"],
  },
  {
    name: "Software and Game Development",
    image: "/assets/development.jpg",
    viewers: 5230,
    tags: ["IRL", "Creative"],
  },
  {
    name: "Just Chatting",
    image: "/assets/just-chatting.jpg",
    viewers: 376239,
    tags: ["IRL"],
  },
  {
    name: "Music",
    image: "/assets/music.jpg",
    viewers: 32502,
    tags: ["IRL", "Creative"],
  },
  {
    name: "League of Legends",
    image: "/assets/league-of-legends.jpg",
    viewers: 93854,
    tags: ["MOBA", "Action"],
  },
  {
    name: "Teamfight Tactics",
    image: "/assets/teamfight-tactics.jpg",
    viewers: 16440,
    tags: ["Strategy"],
  },
  {
    name: "Genshin Impact",
    image: "/assets/genshin-impact.jpg",
    viewers: 26602,
    tags: ["Action", "RPG"],
  },
  {
    name: "Sports",
    image: "/assets/sports.jpg",
    viewers: 446829,
    tags: ["IRL"],
  },
  {
    name: "Pokémon Scarlet/Violet",
    image: "/assets/pokemon-scarlet.jpg",
    viewers: 61320,
    tags: ["RPG"],
  },
  {
    name: "Red Dead Redemption 2",
    image: "/assets/red-read-redemption.jpg",
    viewers: 2630,
    tags: ["Action"],
  },
  {
    name: "God of War Ragnarök",
    image: "/assets/gow-ragnarock.jpg",
    viewers: 16720,
    tags: ["Action"],
  },
  {
    name: "Overwatch 2",
    image: "/assets/overwatch-2.jpg",
    viewers: 42320,
    tags: ["FPS", "Shooter"],
  },
  {
    name: "Celeste",
    image: "/assets/celeste.jpg",
    viewers: 4120,
    tags: ["Platformer"],
  },
  {
    name: "Art",
    image: "/assets/art.jpg",
    viewers: 12720,
    tags: ["Creative", "IRL"],
  },
];

const categories = [
  {
    name: "Games",
    image: "/assets/games.svg",
  },
  {
    name: "IRL",
    image: "/assets/irl.svg",
  },
  {
    name: "Music",
    image: "/assets/music.svg",
  },
  {
    name: "Esports",
    image: "/assets/esports.svg",
  },
  {
    name: "Creative",
    image: "/assets/creative.svg",
  },
];

export { followedChannels, recommendedChannels, games, categories };
