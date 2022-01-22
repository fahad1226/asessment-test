<template>
    <v-container class="lighten-5 mb-6">
        <v-row class="justify-center" no-gutters style="height: 100px; width: 1000px;">
            <img
                class="rounded-xl mr-2"
                height="50"
                width="50"
                src="https://images.unsplash.com/photo-1642698335289-e9073f8afb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <v-text-field label="write your comments" v-model="input" filled rounded dense>
                <template slot="append">
                    <div>
                        <EmojiPicker @emoji="insert" :search="search">
                            <div
                                slot="emoji-invoker"
                                slot-scope="{ events: { click: clickEvent } }"
                                @click.stop="clickEvent"
                            >
                                <v-icon>mdi-emoticon-happy</v-icon>
                            </div>
                            <div slot="emoji-picker" slot-scope="{ emojis, insert, display }">
                                <div
                                    class="emoji-picker"
                                    :style="{ top: display.y + 'px', left: display.x + 'px' }"
                                >
                                    <div class="emoji-picker__search">
                                        <input type="text" v-model="search" v-focus />
                                    </div>
                                    <div>
                                        <div
                                            v-for="(emojiGroup, category) in emojis"
                                            :key="category"
                                        >
                                            <h5>{{ category }}</h5>
                                            <div class="emojis">
                                                <span
                                                    v-for="(emoji, emojiName) in emojiGroup"
                                                    :key="emojiName"
                                                    @click="insert(emoji)"
                                                    :title="emojiName"
                                                >{{ emoji }}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </EmojiPicker>
                    </div>

                    <v-icon class="ml-4">mdi-folder</v-icon>
                </template>
            </v-text-field>
        </v-row>
        <div v-for="n in 5" :key="n" :class="reply && commentId + 1 == n + 1 ? `mb-15` : ''">
            <v-row class="mt-4" no-gutters>
                <v-col cols="6">
                    <div class="d-flex" style="width: 1000px;">
                        <img
                            class="rounded-xl mr-2"
                            height="50"
                            width="50"
                            src="https://images.unsplash.com/photo-1642698335289-e9073f8afb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                        />
                        <v-card
                            outlined
                            gray
                            class="mx-auto"
                            max-width="900"
                            color="grey lighten-3"
                        >
                            <h1 class="text-overline pl-5">Elon Musk</h1>

                            <p class="pl-5">Tagline -working from home</p>

                            <p
                                class="pl-5 pt-4"
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestias est libero ut dolorum fugit sint sunt, facilis nesciunt praesentium laudantium,</p>
                        </v-card>
                        <v-menu left bottom>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item v-for="n in 5" :key="n" @click="() => { }">
                                    <v-list-item-title>Option {{ n }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-col>
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
import EmojiPicker from 'vue-emoji-picker';
export default {
    name: 'Input',
    components: {
        EmojiPicker,
    },
    data() {
        return {
            reply: false,
            commentId: null,
            input: '',
            search: '',
        }
    },
    methods: {
        toglleReply(n) {
            this.reply = !this.reply;
            this.commentId = n;
        },
        insert(emoji) {
            this.input += emoji
        },
    },
    directives: {
        focus: {
            inserted(el) {
                el.focus()
            },
        },
    },
}
</script>


<style>
@import "../../assets/css/emoji.css";

.center {
    margin-left: 500px;
}
.cursor-pointer {
    cursor: pointer;
}
</style>
