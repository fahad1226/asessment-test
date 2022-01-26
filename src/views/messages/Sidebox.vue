<template>
    <v-card max-width="500" height="885" class="mx-auto ml-15">
        <div>
            <div class="d-flex">
                <h3 class="ma-4 pt-2">Messaging</h3>

                <v-spacer></v-spacer>
                <v-icon class="pt-2 pr-4">mdi-square-edit-outline</v-icon>
            </div>

            <v-text-field
                class="pa-3"
                prepend-inner-icon="mdi-magnify"
                label="search messages"
                color="black"
                placeholder="search messages"
                outlined
                dense
            ></v-text-field>
        </div>

        <v-list three-line class="pb-4">
            <template v-for="(item, index) in items">
                <v-subheader v-if="item.header" :key="item.header" v-text="item.header"></v-subheader>

                <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>

                <v-list-item v-else :key="item.title">
                    <v-list-item-avatar>
                        <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title v-html="item.title"></v-list-item-title>
                        <v-list-item-subtitle class="d-sm-none d-md-flex"  v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: 'Sidebox',
    data() {
        return {
            items: [
                { header: "Today" },
                {
                    avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                    title: "Jon Doe",
                    subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                },
                { divider: true, inset: false },
                {
                    avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                    title: 'Abdul Motaleb',
                    subtitle: `<span><b>you sent an attachment</b></span>`,
                },
                { divider: true, inset: false },
                {
                    avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                    title: "Fahad Bin Munir",
                    subtitle:
                        'Do you have Paris recommendations? Have you ever been?',
                },
                { divider: true, inset: false },
                {
                    avatar: "https://media.istockphoto.com/photos/middle-age-man-portrait-picture-id1285124274?b=1&k=20&m=1285124274&s=170667a&w=0&h=tdCWjbu8NxR_vhU3Tri7mZcfUH6WdcYWS1aurF4bbKI=",
                    title: "Hadisur Rahman",
                    subtitle:
                        'Have any ideas about what we should get Heidi for her birthday? 😁😁',
                },
                { divider: true, inset: false },
                {
                    avatar: "https://media.istockphoto.com/photos/portrait-of-a-black-man-with-braids-picture-id1308469855?b=1&k=20&m=1308469855&s=170667a&w=0&h=qa7juJE4iVSvTdgxVRd3Ultzt_kYwDicgQBzGGQ03B4=",
                    title: "Tamim Iqbal",
                    subtitle:
                        '😁😁',
                },

                { divider: true, inset: false },

            ],
        }
    }
}
</script>