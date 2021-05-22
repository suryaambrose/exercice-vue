const tasksModule = {
  state: () => {
    const dishes = [
      {
        id: 1,
        image: "https://i.imgur.com/0umadnY.jpg",
        name: "Burger",
        description:
          "Un hamburger est un sandwich composé d'une ou plusieurs tranches de viande hachée, généralement du bœuf, placées dans un petit pain ou une brioche.",
        note: 4
      },
      {
        id: 2,
        image: "https://i.imgur.com/b9zDbyb.jpg",
        name: "Pizza",
        description:
          "La pizza est un plat savoureux d'origine italienne, consistant en une base généralement ronde et aplatie de pâte levée à base de blé.",
        note: 5
      },
      {
        id: 3,
        image: "https://i.imgur.com/RbKjUjB.jpg",
        name: "Petits choux",
        description:
          "Le chou de Bruxelles est une variété de chou, plante herbacée de la famille des Brassicaceae. C’est vraiement pas bon...",
        note: 1
      },
      {
        id: 4,
        image: "https://i.imgur.com/xAuhNVg.jpg",
        name: "BBQ Ribs",
        description:
          "Les BBQ ribs ou barbecue ribs sont des grands classiques très appréciés partout dans le monde.",
        note: 5
      }
    ];
    return {
      dishes: dishes,
      nextId: dishes.length + 1,
    };
  },
  getters: {
    dishes: state => state.dishes,
    newDishId: state => state.nextId,
  },
  mutations: {
    addDish (state, newDish) {
      // add new dish
      state.dishes = [
        ...state.dishes,
        {
          ...newDish,
        }
      ];
      state.nextId += 1;
    },
    removeDish (state, dishIdToRemove) {
      // filter dishes to remove unwanted element
      state.dishes = state.dishes.filter(dish => dish.id != dishIdToRemove);
    }
  },
  actions: {
    addDish ({ commit }, newDish) {
      commit('addDish', newDish);
    },
    removeDish ({ commit }, dishIdToRemove) {
      commit('removeDish', dishIdToRemove);
    }
  },
};

export default tasksModule;
