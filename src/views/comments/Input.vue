<template>
    <v-container class="lighten-5 mb-6 center">
        <v-row class="justify-center" no-gutters style="height: 100px; width: 1000px;">
            <img
                class="rounded-xl mr-2"
                height="50"
                width="50"
                src="https://images.unsplash.com/photo-1642698335289-e9073f8afb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <v-text-field label="write your comments" filled rounded dense>
                <template slot="append">
                    <v-icon>mdi-emoticon-happy</v-icon>
                    <v-icon class="ml-4">mdi-folder</v-icon>
                </template>
            </v-text-field>
        </v-row>
        <!-- :class="reply && commentId + 1 == n + 1 ? `mb-10` : ''" -->
        <div v-for="n in 5" :key="n" :class="reply && commentId + 1 == n + 1 ? `mb-15` : ''">
            <v-row class="mt-4" no-gutters>
                <div class="d-flex" style="width: 1000px;">
                    <img
                        class="rounded-xl mr-2"
                        height="50"
                        width="50"
                        src="https://images.unsplash.com/photo-1642698335289-e9073f8afb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    />
                    <v-card outlined gray min-width="950px">
                        <div>
                            <h1 class="text-overline pl-5">Elon Musk</h1>

                            <p class="pl-5">Tagline -working from home</p>

                            <p
                                class="pl-5 pt-10"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias est libero ut dolorum fugit sint sunt, facilis nesciunt praesentium laudantium,</p>
                        </div>
                    </v-card>
                </div>
            </v-row>
            <v-row no-gutters style="height: 40px;">
                <div class="d-flex pb-4">
                    <div class="ml-15 pt-4 cursor-pointer">
                        <v-icon>mdi-thumb-up</v-icon>
                    </div>

                    <div class="ml-6 pt-4 cursor-pointer" @click="toglleReply(n)">
                        <v-icon>mdi-pencil</v-icon>
                    </div>

                    <div class="ml-8 pt-4 cursor-pointer">
                        <p>4 replies</p>
                    </div>
                </div>
            </v-row>
            <v-row
                v-show="reply && commentId == n"
                no-gutters
                class="ml-10 pt-3 pl-5"
                style="height: 20px; width: 900px;"
            >
                <v-text-field label="write your comments" filled rounded dense>
                    <template slot="append">
                        <v-icon>mdi-emoticon-happy</v-icon>
                        <v-icon class="ml-4">mdi-folder</v-icon>
                    </template>
                </v-text-field>
            </v-row>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'Input',
    data() {
        return {
            reply: false,
            commentId: null,
        }
    },
    methods: {
        toglleReply(n) {
            this.reply = !this.reply;
            this.commentId = n;
        }
    }
}
</script>


<style>
.center {
    margin-left: 500px;
}
.cursor-pointer {
    cursor: pointer;
}
/* .v-field__control {
    fon
/* .v-field__control {
    font-style: normal;
    border-radius: 10px;
} */

/* .v-field__control {
    font-style: normal;
    border-radius: 10px;
} */

/* .vue__box {
    background-color: darkgrey;
    font-style: italic;
} */

/* .image__rounded {
    border-radius: 10px;
    margin-top: 5px;
    margin-right: 10px;
} */
</style>