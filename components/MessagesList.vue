<template>
  <v-virtual-scroll
    :bench="20"
    :items="messages"
    height="400px"
    item-height="64"
  >
    <template #default="{ item }">
      <v-list-item :key="item.id">
        <v-list-item-action>
          <v-btn fab small depressed color="primary">
            {{ item.id }}
          </v-btn>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title>
            User Database Record <strong>ID {{ item.title }}</strong>
          </v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-icon small> mdi-open-in-new </v-icon>
        </v-list-item-action>
      </v-list-item>

      <v-divider></v-divider>
    </template>
  </v-virtual-scroll>
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
}
</script>
