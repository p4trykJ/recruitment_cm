<template>
  <v-row no-gutters class="flex-column fill-height">
    <v-col cols="12">
      <v-container>
        <header class="py-10 white">
          <v-row no-gutters class="justify-start align-center">
            <v-col cols="auto" class="pr-2">
              <v-icon x-large color="success"> mdi-email-open-outline </v-icon>
            </v-col>
            <v-col cols="auto">
              <h1 class="text-h4 black--text">Wiadomości</h1>
            </v-col>
          </v-row>
        </header>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <!-- <v-row no-gutters class="flex-column">
          <v-col>
            <header>
              <h1 class="text-h5">Moja skrzynka odbiorcza</h1>
            </header>
          </v-col>
          <v-col style="flex: 1 0 auto">
            <section>
              <messages-list :messages="messages"> </messages-list>
            </section>
          </v-col>
        </v-row> -->
        <header>
          <h1 class="text-h5">Moja skrzynka odbiorcza</h1>
        </header>
        <section>
          <messages-list :messages="messages"> </messages-list>
        </section>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Index',
  async asyncData({ $axios }) {
    const messages = await $axios.$get('/api/messages')
    // console.log('  ip', messages)
    return { messages }
  },
}
</script>
