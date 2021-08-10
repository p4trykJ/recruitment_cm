<template>
  <v-list>
    <v-row no-gutters :class="{ 'flex-column': isFlexColumn }">
      <v-col v-for="(item, i) in items" :key="i" cols="auto">
        <v-list-item :to="item.to" nuxt exact>
          <v-list-item-content>
            <v-list-item-title
              :class="{ 'white--text': !isFlexColumn }"
              v-text="item.name"
            />
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-list>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    items: {
      type: Array,
      required: true,
    },
    isFlexColumn: {
      type: Boolean,
      default: true,
    },
  },
}
</script>
