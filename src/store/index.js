import Vue from "vue";
import Vuex from "vuex";

// Importer votre module ici et l'ajouter au Store (ligne 19)
import tasksModule from './tasks';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // Votre module ici (mettre une virgule à la fin de la ligne 18)
      tasks: tasksModule,
    },
    mutations: {
      initialiseStore(state) {
        // Check if the ID exists
        if(localStorage.getItem('prestashop')) {
          this.replaceState(
            Object.assign(state, JSON.parse(localStorage.getItem('prestashop')))
          );
        }
      }
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  });

  Store.subscribe((mutation, state) => {
    // Store the state object as a JSON string
    localStorage.setItem('prestashop', JSON.stringify(state));
  });

  return Store;
}
