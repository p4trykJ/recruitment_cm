<template>
  <v-dialog
    key="dialog"
    :value="value"
    transition="dialog-bottom-transition"
    max-width="600"
  >
    <v-card>
      <v-card-title class="ma-0 white--text text-h5 primary">
        {{ title }}
      </v-card-title>

      <v-card-text>
        <div class="text-subtitle-1 pa-12">{{ message }}</div>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn text @click="$emit('close')">Zamknij</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'MessageDialog',
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
}
</script>
