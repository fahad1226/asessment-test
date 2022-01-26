<template>
    <div>
        <v-responsive :aspect-ratio="16 / 9">
            <v-card height="750px" outlined>
                <v-card-text>
                    <h3 class="font-weight-bold">Dorothea Rahu</h3>
                    <p>los angels</p>
                    <hr />
                    <img
                        class="rounded-xl mr-2 mt-4"
                        height="50"
                        width="50"
                        src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
                    />

                    <p class="text-h6 text--primary">Fahad Bin Munir</p>
                    <p>at Los angels</p>

                    <p class="middle_line">
                        <span>Jan 20, 2022</span>
                    </p>
                    <!-- 
                    <div >
                        <div class="d-flex">
                            <img
                                class="rounded-xl mr-2 mt-4"
                                height="50"
                                width="50"
                                src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
                            />
                            <h3 class="ml-5 mt-7">{{ message }}</h3>
                        </div>
                        <p class="ml-15">11:33 pm</p>
                    </div>-->

                    <div class="float-right">
                        <div class="d-flex">
                            <h3 class="mt-8">Hii</h3>
                            <img
                                class="rounded-xl ml-10 mt-4"
                                height="50"
                                width="45"
                                src="https://media.istockphoto.com/photos/profile-of-a-female-doctor-picture-id1313720249?b=1&k=20&m=1313720249&s=170667a&w=0&h=Z13IkuY6kFGRX1dnsMsTbE6Mvsp9a85OCu-Slr9ECr8="
                            />
                        </div>
                        <p class="pr-15">11:33 pm</p>
                    </div>
                    <div class="pt-5">
                        <div v-for="message in messages" :key="message">
                            <div class="d-flex pt-4">
                                <img
                                    class="rounded-xl mr-2 mt-4"
                                    height="50"
                                    width="45"
                                    src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
                                />
                                <h3 class="ml-2 mt-7">{{ message }}</h3>
                            </div>
                            <p class="ml-15">11:33 pm</p>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-responsive>

        <v-textarea
            v-model="message"
            @keyup.enter="sendMessage"
            class="pt-1"
            solo
            name="input-7-1"
            color="grey lighten-15"
            label="Write your messages..."
            auto-grow
        ></v-textarea>
        <v-input readonly color="black" append-icon="mdi-dots-vertical">
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-send</v-icon>
            </v-btn>
            <template slot="prepend">
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
                            :style="{
                                top: '783' + 'px',
                                left: display.x + 'px',
                            }"
                        >
                            <div class="emoji-picker__search">
                                <input type="text" v-model="search" v-focus />
                            </div>
                            <div>
                                <div
                                    v-for="(
                                                emojiGroup, category
                                            ) in emojis"
                                    :key="category"
                                >
                                    <h5>{{ category }}</h5>
                                    <div class="emojis">
                                        <span
                                            v-for="(
                                                        emoji, emojiName
                                                    ) in emojiGroup"
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
                <input type="file" ref="file" style="display: none" />
                <v-icon @click="$refs.file.click()" class="ml-2 px-3">mdi-paperclip</v-icon>
                <v-icon class="ml-2 px-3">mdi-image-area</v-icon>
            </template>
        </v-input>

        <br />
        <br />
        <br />
        <br />
    </div>
</template>

<script>
import EmojiPicker from "vue-emoji-picker";
import Sidebox from "./Sidebox.vue";
export default {
    components: {
        EmojiPicker,
        Sidebox
    },
    data() {
        return {
            search: '',
            message: '',
            messages: []
        }
    },
    methods: {
        sendMessage() {
            this.messages.push(this.message)
            this.message = '';
        },
        insert(emoji) {
            //
        },
    },
    directives: {
        focus: {
            inserted(el) {
                el.focus();
            },
        },
    },
};
</script>

<style>
@import "../../assets/css/emoji.css";

.middle_line {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid rgb(66, 64, 64);
    line-height: 0.1em;
    margin: 10px 0 20px;
}

.middle_line span {
    background: #fff;
    padding: 0 10px;
}
</style>
