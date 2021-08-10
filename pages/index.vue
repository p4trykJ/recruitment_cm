<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-container>
        <header class="py-10 white">
          <v-row no-gutters class="justify-start align-center">
            <v-col cols="auto" class="pr-2">
              <v-icon large color="sraka"> mdi-email-newsletter </v-icon>
            </v-col>
            <v-col cols="auto">
              <h1 class="text-h4 black--text">Wiadomości</h1>
            </v-col>
          </v-row>
        </header>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <section>
          <h1 class="text-h5">Moja skrzynka odbiorcza</h1>
        </section>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Index',
}
</script>
