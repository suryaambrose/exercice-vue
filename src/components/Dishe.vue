<template>
  <q-card class="card">
    <q-img :src="dishe.image ? dishe.image : 'statics/image-placeholder.png'" basic contain>
      <div class="absolute-bottom text-h6">
        {{ dishe.name }}
      </div>
    </q-img>

    <q-card-section>
      <q-rating
        :value="dishe.note"
        size="2em"
        color="orange"
        readonly
        class="q-mt-sm"
      />
    </q-card-section>

    <q-card-section>
      {{ dishe.description }}
      <span v-if="!dishe.description" class="text-italic">Aucun description fournie</span>
    </q-card-section>

    <q-card-actions class="absolute-bottom" align="right">
      <q-btn @click="showFormDishe = true" icon="edit" color="blue" flat
        >Modifier</q-btn
      >
      <q-btn @click="showDeletionConfirmation = true" icon="delete" color="red" flat>Supprimer</q-btn>
    </q-card-actions>

    <q-dialog v-model="showFormDishe">
      <form-dishe action="modify" v-bind:initialDish="dishe" />
    </q-dialog>

    <q-dialog v-model="showDeletionConfirmation">
      <q-card>
        <q-card-section class="row items-center">
          <q-icon name="delete_forever" color="red" size="md"/>
          <span class="q-ml-sm">C'est pourtant un super plat. Êtes-vous sûr ?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Annuler" color="primary" v-close-popup />
          <q-btn @click="deleteDish()" flat label="Supprimer" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-card>
</template>

<script>
export default {
  props: ["dishe"],
  data() {
    return {
      showFormDishe: false,
      showDeletionConfirmation: false,
    };
  },
  components: {
    "form-dishe": require("components/FormDishe.vue").default
  },
  methods: {
    deleteDish () {
      this.$store.dispatch('removeDish', this.dishe.id)
    }
  }
};
</script>

<style>
.card {
  min-height: 400px;
  max-width: 250px;
  width: 250px;
  transition: background 0.3s;
}
.card-clickable {
  cursor: pointer;
}
.card-clickable:hover {
  background: #bdbdbd !important;
}
.card .q-img {
  max-height: 180px;
}
.card .q-img__image {
  background-size: cover !important;
}
.card .q-rating__icon {
  opacity: 0.2;
}
.card .q-rating__icon--active {
  opacity: 1;
}
</style>
