<template>
  <v-app id="inspire">
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
  components: { Input }
}
</script>

