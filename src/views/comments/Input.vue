<template>
    <v-container class="lighten-5 mb-6">
        <v-row class="justify-center" no-gutters style="height: 100px; width: 950px;">
            <img
                class="rounded-xl mr-2"
                height="50"
                width="50"
                src="https://images.unsplash.com/photo-1642698335289-e9073f8afb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <v-text-field
                @keyup.enter="addComment"
                class="ml-5"
                label="write your comments"
                v-model="comment"
                filled
                rounded
                dense
            >
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

        <div
            v-for="(comment, index) in comments"
            :key="index"
            :class="reply && commentId + 1 == n + 1 ? `mb-15` : ''"
        >
            <v-row class="mt-4" no-gutters>
                <v-col cols="6">
                    <Content :comment="comment" style="width: 1000px;" />
                </v-col>
            </v-row>
            <v-row no-gutters style="height: 40px;">
                <div class="d-flex pb-4 pl-10">
                    <div class="ml-15 pt-4 cursor-pointer font-8">
                        Like
                        <v-icon small>mdi-thumb-up</v-icon>
                    </div>

                    <div class="ml-6 pt-4 cursor-pointer" @click="toglleReply(comment.id)">
                        reply
                        <!-- <v-icon>mdi-pencil</v-icon> -->
                        <span class="ml-3">|</span>
                    </div>

                    <div class="ml-6 pt-4 cursor-pointer">
                        <p>4 replies</p>
                    </div>
                </div>
            </v-row>
            <div
                class="pt-6 pa-3 pb-5"
                v-for="(reply, index) in replies"
                :key="index"
                v-show="comment.id == reply.commentId"
            >
                <v-row class="ml-15" style="width: 800px;">
                    <Content :comment="reply" width="845" />
                </v-row>
                <v-row no-gutters style="height: 40px;">
                    <div class="d-flex pb-4 ml-4 pl-15">
                        <div class="ml-15 pt-4 cursor-pointer font-8">
                            Like
                            <v-icon small>mdi-thumb-up</v-icon>
                        </div>

                        <div class="ml-6 pt-4 cursor-pointer" @click="toglleReply(index)">
                            reply
                            <!-- <v-icon>mdi-pencil</v-icon> -->
                            <span class="ml-3">|</span>
                        </div>

                        <div class="ml-6 pt-4 cursor-pointer">
                            <p>4 replies</p>
                        </div>
                    </div>
                </v-row>
            </div>

            <v-row v-show="commentId == comment.id" no-gutters class="ml-15 pt-2 pb-10 pl-10">
                <div class="ml-8" style="height: 20px; width: 850px;">
                    <v-text-field
                        v-model="reply"
                        @keyup.enter="addReply(comment.id)"
                        label="write your reply..."
                        filled
                        rounded
                        dense
                    >
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
                                    <div
                                        slot="emoji-picker"
                                        slot-scope="{ emojis, insert, display }"
                                    >
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
                </div>
            </v-row>
        </div>
    </v-container>
</template>

<script>
import EmojiPicker from 'vue-emoji-picker';
import store from '../../store';
import Content from './Content.vue';
export default {
    name: 'Input',
    components: {
        EmojiPicker,
        Content,
    },
    data() {
        return {
            counter: 0,
            showReply: false,
            commentId: null,
            comment: '',
            reply: '',
            search: '',
        }
    },
    computed: {
        comments() {
            return this.$store.getters.comments;
        },
        replies() {
            return store.getters.replies;
        }
    },
    methods: {
        toglleReply(n) {
            this.showReply = !this.showReply;
            this.commentId = n;
        },

        addComment() {
            store.dispatch('addComment', this.comment);
            this.comment = '';

        },
        addReply(id) {
            store.dispatch('addReply', {
                commentId: id,
                content: this.reply
            });
            this.reply = '';
        },
        insert(emoji) {
            this.comment += emoji
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
