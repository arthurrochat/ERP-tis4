<template>
  <v-app>
    <v-app-bar app color="#00ACC1" dark>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light"><div class="bold">PEC</div>tômetro</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content class="app-content">
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
  a {
    text-decoration: none;
    color: #000000 !important;
  }

  .app-content {
    margin-top: 18px;
    background: rgba(0, 172, 193, 0.09);
    padding: 50px !important;
  }

  .bold {
    font-weight: 600;
    display: inline;
  }

  .v-content__wrap {
    display: flex !important;
  }
</style>