<template>
  <v-app>
    <v-app-bar app style="padding: 0 5vh" tag="nav" color="primary">
      <v-img src="/logotype.svg" max-width="140px"></v-img>
      <v-spacer></v-spacer>
      <v-icon class="d-md-none" @click="isDrawerVisible = !isDrawerVisible">
        mdi-menu
      </v-icon>
      <nav-menu
        :is-flex-column="false"
        style="background-color: inherit"
        class="d-none d-md-block"
        :items="menus"
      ></nav-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="isDrawerVisible"
      bottom
      absolute
      :class="{ 'd-none': !isDrawerVisible }"
    >
      <nav-menu :items="menus"></nav-menu>
    </v-navigation-drawer>
    <v-btn class="button--floating" fab fixed right color="success">
      <v-icon> mdi-message-outline </v-icon>
    </v-btn>
    <v-main>
      <!-- <v-container> -->
      <Nuxt />
      <!-- </v-container> -->
    </v-main>
    <v-footer app>
      <v-spacer></v-spacer>
      <span>&copy; p4tryk {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    isDrawerVisible: false,
    menus: [
      { name: 'Panel', path: '/panel' },
      { name: 'Ustawienia', path: '/settings' },
      { name: 'Język', path: '/languages' },
    ],
  }),
}
</script>

<style lang="scss" scped>
.button--floating {
  z-index: 6;
  bottom: 45px;
}
</style>
