<template>
  <q-page class="q-pa-lg">
    <q-pull-to-refresh @refresh="refresh">
      <div class="row q-gutter-lg">
        <dishe v-for="dishe in dishes" :key="dishe.id" :dishe="dishe" />

        <add-button @click="showFormDishe = true" />

        <q-dialog v-model="showFormDishe">
          <form-dishe action="add" />
        </q-dialog>
      </div>
    </q-pull-to-refresh>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      showFormDishe: false
    }
  },
  computed: {
    dishes () {
      return this.$store.getters.dishes;
    }
  },
  components: {
    dishe: require("components/Dishe.vue").default,
    "add-button": require("components/AddButton.vue").default,
    "form-dishe": require("components/FormDishe.vue").default
  },
  methods: {
    refresh (done) {
      // Do stuff to retrieve data
      setTimeout(() => {
        done();
      }, 1000)
    }
  }
};
</script>
