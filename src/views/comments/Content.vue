<template>
    <div class="d-flex">
        <img
            class="rounded-xl mr-2"
            height="50"
            width="50"
            src="https://images.unsplash.com/photo-1642698335289-e9073f8afb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <v-card
            outlined
            gray
            class="d-flex justify-space-between align-start mx-auto"
            max-width="900"
            :min-width="width || 900 "
            color="grey lighten-3"
        >
            <div>
                <h4 class="text-overline pl-5">Elon Musk</h4>

                <p class="pl-5 text-caption mb-3">Tagline -- working from home</p>

                <p class="pl-5 pt-4">{{ comment.content }}</p>
            </div>
            <v-spacer></v-spacer>
            <time class="font-13 pt-3 mr-4">17h</time>
            <div class="mr-2 pt-1">
                <v-menu left bottomc class="mr-15">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-btn>Delete</v-btn>
                </v-menu>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: ['comment', 'width']
}
</script>