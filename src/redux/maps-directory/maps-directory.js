const INITIAL_STATE = {
  sections: [
    {
      name: "Ayutthaya",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/ayutthaya.jpg",
      id: 1,
      linkUrl: "maps/ayutthaya"
    },
    {
      name: "Black Forest",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/black-forest.jpg",
      id: 2,
      linkUrl: "maps/black-forest"
    },
    {
      name: "Blizzard World",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/blizzard-world.jpg",
      id: 3,
      linkUrl: "maps/blizzard-world"
    },
    {
      name: "Busan",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/busan.jpg",
      id: 4,
      linkUrl: "maps/busan"
    },
    {
      name: "Castillo",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/castillo.jpg",
      id: 5,
      linkUrl: "maps/castillo"
    },
    {
      name: "Chateau Guillard",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/chateau-guillard.jpg",
      id: 6,
      linkUrl: "maps/chateau-guillard"
    },
    {
      name: "Dorado",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/dorado.jpg",
      id: 7,
      linkUrl: "maps/dorado"
    },
    {
      name: "EcoPoint: Antarctica",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/ecopoint-antarctica.jpg",
      id: 8,
      linkUrl: "maps/ecopoint-antarctica"
    },
    {
      name: "Eichenwalde",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/eichenwalde.jpg",
      id: 9,
      linkUrl: "maps/eichenwalde"
    },
    {
      name: "Hanamura",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/hanamura.jpg",
      id: 10,
      linkUrl: "maps/hanamura"
    },
    {
      name: "Havana",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/havana.jpg",
      id: 11,
      linkUrl: "maps/havana"
    },
    {
      name: "Hollywood",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/hollywood.jpg",
      id: 12,
      linkUrl: "maps/hollywood"
    },
    {
      name: "Horizon Lunar Colony",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/horizon-lunar-colony.jpg",
      id: 13,
      linkUrl: "maps/horizon-lunar-colony"
    },
    {
      name: "Ilios",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/ilios.jpg",
      id: 14,
      linkUrl: "maps/ilios"
    },
    {
      name: "Junkertown",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/junkertown.jpg",
      id: 15,
      linkUrl: "maps/junkertown"
    },
    {
      name: "King's Row",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/kings-row.jpg",
      id: 16,
      linkUrl: "maps/kings-row"
    },
    {
      name: "Lijiang Tower",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/lijiang-tower.jpg",
      id: 17,
      linkUrl: "maps/lijiang-tower"
    },
    {
      name: "Necropolis",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/necropolis.jpg",
      id: 18,
      linkUrl: "maps/necropolis"
    },
    {
      name: "Nepal",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/nepal.jpg",
      id: 19,
      linkUrl: "maps/nepal"
    },
    {
      name: "Numbani",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/numbani.jpg",
      id: 20,
      linkUrl: "maps/numbani"
    },
    {
      name: "Oasis",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/oasis.jpg",
      id: 20,
      linkUrl: "maps/oasis"
    },
    {
      name: "Paris",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/paris.jpg",
      id: 21,
      linkUrl: "maps/paris"
    },
    {
      name: "Petra",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/petra.jpg",
      id: 22,
      linkUrl: "maps/petra"
    },
    {
      name: "Rialto",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/rialto.jpg",
      id: 23,
      linkUrl: "maps/rialto"
    },
    {
      name: "Route 66",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/route-66.jpg",
      id: 24,
      linkUrl: "maps/route-66"
    },
    {
      name: "Temple of Anubis",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/temple-of-anubis.jpg",
      id: 25,
      linkUrl: "maps/temple-of-anubis"
    },
    {
      name: "Volskaya Industries",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/volskaya-industries.jpg",
      id: 26,
      linkUrl: "maps/volskaya-industries"
    },
    {
      name: "Watchpoint: Gibraltar",
      imageUrl:
        "https://static.playoverwatch.com/img/pages/maps/images/watchpoint-gibraltar.jpg",
      id: 27,
      linkUrl: "maps/watchpoint-gibraltar"
    }
  ]
};

const mapsDirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default mapsDirectoryReducer;
