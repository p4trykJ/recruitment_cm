<template>
  <v-row no-gutters class="flex-column">
    <v-col>
      <v-list-item
        class="white--text py-2"
        :style="{ 'background-color': $vuetify.theme.defaults.light.primary }"
      >
        <v-list-item-content>
          <v-list-item-title> Tytuł (data) </v-list-item-title>
        </v-list-item-content>
        <v-list-item-content class="pl-2">
          <v-list-item-title> Użytkownik</v-list-item-title>
        </v-list-item-content>
        <v-list-item-action> </v-list-item-action>
      </v-list-item>
    </v-col>
    <v-col class="flex-grow-0">
      <v-virtual-scroll
        v-show="hasAnyMessage"
        class="border"
        :bench="200"
        :items="messages"
        height="60vh"
        item-height="77"
      >
        <template #default="{ item }">
          <v-list-item
            :key="item.id"
            class="py-2"
            @click="$emit('openMessage', item.title, item.message)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
              <v-list-item-subtitle v-text="item.date"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-content class="pl-2">
              <v-list-item-title v-text="item.user"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-icon small> mdi-open-in-new </v-icon>
            </v-list-item-action>
          </v-list-item>
        </template>
      </v-virtual-scroll>
    </v-col>
    <v-col v-show="!hasAnyMessage">
      <v-list-item class="text-center border">
        <v-list-item-content>
          <v-list-item-title>
            Nie znaleziono pasujących wiadomości
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MessagesList',
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  computed: {
    hasAnyMessage() {
      return this.messages.length > 0
    },
  },
}
</script>

<style lang="scss" scoped>
.border {
  border: 1px solid #80808059;
}
</style>
