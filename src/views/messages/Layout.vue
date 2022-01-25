<template>
    <v-container class="lighten-5">
        <v-row>
            <v-col cols="4">
                <v-card max-width="450" class="mx-auto">
                    <v-toolbar color="cyan" dark>
                        <v-toolbar-title>Inbox</v-toolbar-title>

                        <v-spacer></v-spacer>

                        <v-btn icon>
                            <v-icon>mdi-magnify</v-icon>
                        </v-btn>
                    </v-toolbar>

                    <v-list three-line>
                        <template v-for="(item, index) in items">
                            <v-subheader
                                v-if="item.header"
                                :key="item.header"
                                v-text="item.header"
                            ></v-subheader>

                            <v-divider
                                v-else-if="item.divider"
                                :key="index"
                                :inset="item.inset"
                            ></v-divider>

                            <v-list-item v-else :key="item.title">
                                <v-list-item-avatar>
                                    <v-img :src="item.avatar"></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title
                                        v-html="item.title"
                                    ></v-list-item-title>
                                    <v-list-item-subtitle
                                        v-html="item.subtitle"
                                    ></v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-card>
            </v-col>

            <v-col cols="8">
                <v-card class="mx-auto" height="900px" min-width="1000">
                    <v-card-text>
                        <div>Dorothea Rahu</div>
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

                        <div>
                            <div class="d-flex">
                                <img
                                    class="rounded-xl mr-2 mt-4"
                                    height="50"
                                    width="50"
                                    src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
                                />
                                <h3 class="ml-5 mt-7">Hii</h3>
                            </div>
                            <p class="ml-15">11:33 pm</p>
                        </div>

                        <div class="float-right">
                            <div class="d-flex">
                                <h3 class="mt-8">Hii</h3>
                                <img
                                    class="rounded-xl ml-10 mt-4"
                                    height="50"
                                    width="50"
                                    src="https://media.istockphoto.com/photos/profile-of-a-female-doctor-picture-id1313720249?b=1&k=20&m=1313720249&s=170667a&w=0&h=Z13IkuY6kFGRX1dnsMsTbE6Mvsp9a85OCu-Slr9ECr8="
                                />
                            </div>
                            <p class="pr-15">11:33 pm</p>
                        </div>
                        <div class="pt-15">
                            <div class="d-flex pt-4">
                                <img
                                    class="rounded-xl mr-2 mt-4"
                                    height="50"
                                    width="50"
                                    src="https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ="
                                />
                                <h3 class="ml-5 mt-7">Hii</h3>
                            </div>
                            <p class="ml-15">11:33 pm</p>
                        </div>
                        <div class="float-right">
                            <div class="d-flex">
                                <h3 class="mt-8">Hii</h3>

                                <img
                                    class="rounded-xl ml-10 mt-4"
                                    height="50"
                                    width="50"
                                    src="https://media.istockphoto.com/photos/profile-of-a-female-doctor-picture-id1313720249?b=1&k=20&m=1313720249&s=170667a&w=0&h=Z13IkuY6kFGRX1dnsMsTbE6Mvsp9a85OCu-Slr9ECr8="
                                />
                            </div>
                            <p class="pr-15">11:33 pm</p>
                        </div>
                    </v-card-text>
                </v-card>
                <v-textarea
                    name="input-7-1"
                    color="grey lighten-15"
                    filled
                    label="Write your messages..."
                    auto-grow
                ></v-textarea>
                <v-input
                    readonly
                    color="black"
                    append-icon="mdi-send"
                >
                    <template slot="prepend">
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
                                    :style="{
                                        top: display.y + 'px',
                                        left: display.x + 'px',
                                    }"
                                >
                                    <div class="emoji-picker__search">
                                        <input
                                            type="text"
                                            v-model="search"
                                            v-focus
                                        />
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
                                                    >{{ emoji }}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </EmojiPicker>
                        <input type="file" ref="file" style="display: none" />
                        <v-icon @click="$refs.file.click()" class="ml-2 px-3"
                            >mdi-paperclip</v-icon
                        >
                        <v-icon class="ml-2 px-3">mdi-image-area</v-icon>
                    </template>
                </v-input>
            </v-col>
        </v-row>
    </v-container>

    <!-- <v-main>
            <v-container class="py-8 px-6" fluid>
                <v-row>
                    <v-col v-for="card in cards" :key="card" cols="12">
                        <v-card>
                            <v-subheader>{{ card }}</v-subheader>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
    </v-main>-->
</template>

<script>
import EmojiPicker from "vue-emoji-picker";
export default {
    components: {
        EmojiPicker,
    },
    data: () => ({
        items: [
            { header: "Today" },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                title: "Brunch this weekend?",
                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                title: "Oui oui",
                subtitle:
                    '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                title: "Birthday gift",
                subtitle:
                    '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
            },
            { divider: true, inset: true },
            {
                avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                title: "Recipe to try",
                subtitle:
                    '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
            },
        ],
    }),
    methods: {
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
