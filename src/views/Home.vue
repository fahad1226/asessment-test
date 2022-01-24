<template>
  <v-app id="inspire">
    <v-app-bar app flat>
      <v-avatar :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'" size="32"></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="link in links" :key="link">{{ link }}</v-tab>
      </v-tabs>

      <v-avatar class="hidden-sm-and-down" color="grey darken-1 shrink" size="32"></v-avatar>
    </v-app-bar>

    <v-main class="lighten-3">
      <v-container>
        <v-row justify="center">
          <v-col cols="10" lg="8">
            <v-sheet min-height="70vh" rounded="lg">
              <Input />
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Input from "./comments/Input.vue";

export default {
  data: () => ({
    links: [
      "Comments",
      "Messages"
    ],
  }),
  components: { Input }
}
</script>

