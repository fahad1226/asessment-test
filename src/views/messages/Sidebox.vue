<template>
    <v-card max-width="500" min-width="500" height="885" class="mx-auto ml-15">
        <div>
            <div class="d-flex">
                <h3 class="ma-4 pt-2">Messaging</h3>

                <!-- <div v-if="showMessageSearch">
                    <v-text-field
                        v-model="$store.state.messagesModule.message"
                        
                        prepend-inner-icon="mdi-magnify"
                        label="search message"
                        color="blue"
                        placeholder="search message"
                        outlined
                        dense
                    ></v-text-field>
                </div>-->

                <v-spacer></v-spacer>

                <v-icon
                    @click="showMessageSearch = !showMessageSearch"
                    class="pt-2 pr-4"
                >mdi-square-edit-outline</v-icon>
            </div>

            <v-text-field
                v-show="showUserSearch"
                v-model="user"
                class="pa-3"
                prepend-inner-icon="mdi-magnify"
                :append-icon="showUserSearch ? 'mdi-account-search' : 'mdi-android-messages'"
                @click:append="toggleUser"
                label="search user"
                color="black"
                placeholder="search user"
                outlined
                dense
            ></v-text-field>
            <v-text-field
                v-show="!showUserSearch"
                v-model="$store.state.messagesModule.message"
                class="pa-3"
                prepend-inner-icon="mdi-magnify"
                :append-icon="showUserSearch ? 'mdi-account-search' : 'mdi-android-messages'"
                @click:append="toggleUser"
                label="search message"
                color="black"
                placeholder="search message"
                outlined
                dense
            ></v-text-field>
            <!-- <v-text-field
                v-model="$store.state.messagesModule.message"
                class="pa-3"
                prepend-inner-icon="mdi-magnify"
                label="search message"
                color="blue"
                placeholder="search message"
                outlined
                dense
            ></v-text-field>-->
        </div>

        <v-list three-line class="pb-4">
            <template v-for="(item, index) in filterUser">
                <!-- <v-subheader  :key="item.header" v-text="item.header"></v-subheader> -->
                <v-divider></v-divider>

                <v-list-item :key="index">
                    <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle class="d-sm-none d-md-flex" v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <v-divider></v-divider>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: 'Sidebox',
    data() {
        return {
            user: '',
            showUserSearch: false,
            items: [

                {
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    title: "Jon Doe",
                    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                },
                {
                    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                    title: 'Abdul Motaleb',
                    subtitle: `<span><b>you sent an attachment</b></span>`,
                },
                {
                    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    title: "Fahad Bin Munir",
                    subtitle:
                        'Do you have Paris recommendations? Have you ever been?',
                },
                {
                    avatar: "https://media.istockphoto.com/photos/middle-age-man-portrait-picture-id1285124274?b=1&k=20&m=1285124274&s=170667a&w=0&h=tdCWjbu8NxR_vhU3Tri7mZcfUH6WdcYWS1aurF4bbKI=",
                    title: "Hadisur Rahman",
                    subtitle:
                        'Have any ideas about what we should get Heidi for her birthday? 😁😁',
                },
                {
                    avatar: "https://media.istockphoto.com/photos/portrait-of-a-black-man-with-braids-picture-id1308469855?b=1&k=20&m=1308469855&s=170667a&w=0&h=qa7juJE4iVSvTdgxVRd3Ultzt_kYwDicgQBzGGQ03B4=",
                    title: "Tamim Iqbal",
                    subtitle:
                        '😁😁',
                },
                {
                    avatar: "https://phantom-marca.unidadeditorial.es/5acc32a5424da1f42b9faa3df2838408/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/08/16310995271113.jpg",
                    title: "Leonardo De Caprio",
                    subtitle: "Hey Fahad, Did you watch Don't look Up?😁",
                },
                // { divider: true, inset: false },

            ],
        }
    },
    computed: {
        filterUser() {
            if (this.user) {
                return this.items.filter((user) => {
                    console.log(user);
                    return user.title.toLowerCase().includes(this.user.toLowerCase());
                });
            } else {
                return this.items;
            }
        },
    },
    methods: {
        toggleUser() {
            this.showUserSearch = !this.showUserSearch;
        }
    }
}
</script>