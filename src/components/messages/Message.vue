<template>
    <div :class="`${this.$vuetify.breakpoint.width > 1264 ? 'container lighten-5' : 'lighten-5'}`">
        <v-row>
            <v-col cols="0" md="4" class="d-none d-sm-flex" sm="4" lg="4">
                <Sidebox />
            </v-col>
            <v-col cols="12" md="8" sm="8" lg="8">
                <ChatWindow
                    :key="componentKey"
                    height="880px"
                    :users="users"
                    :show-send-icon="true"
                    :rooms-loaded="true"
                    :rooms="rooms"
                    :messages="filterMessage"
                    :single-room="true"
                    :messages-loaded="true"
                    :textarea-action-enabled="true"
                    :show-reaction-emojis="true"
                    :message-actions="messageActions"
                    :show-audio="false"
                    :show-search="true"
                    @send-message="sendMessage"
                    @open-file="openFile"
                    @send-message-reaction="sendReaction"
                    @edit-message="editMessage"
                    @delete-message="deleteMessage"
                />

                <!-- <v-textarea
                    v-model="message"
                    @keyup.enter="sendMessage"
                    class="pt-1"
                    solo
                    name="input-7-1"
                    color="grey lighten-15"
                    label="Write your messages..."
                    auto-grow
                ></v-textarea>-->
            </v-col>
        </v-row>
    </div>
</template>


<script>
import Chatbox from "@/views/messages/Chatbox.vue";
import Sidebox from "@/views/messages/Sidebox.vue";
import ChatWindow from 'vue-advanced-chat';
import 'vue-advanced-chat/dist/vue-advanced-chat.css';
export default {
    name: "Message",
    components: { ChatWindow, Chatbox, Sidebox },
    data() {
        return {
            currentUserId: 1234,
            componentKey: 0,
            messageActions: [
                {
                    name: 'replyMessage',
                    title: 'Reply'
                },
                {
                    name: 'editMessage',
                    title: 'Edit Message',
                    onlyMe: false
                },
                {
                    name: 'deleteMessage',
                    title: 'Delete Message',
                    onlyMe: false
                },
                {
                    name: 'forwardMessages',
                    title: 'Forward'
                },
                {
                    name: 'selectMessages',
                    title: 'Select',
                    onlyMe: true
                },

            ]
        }
    },
    computed: {
        //...mapGetters(['messages']),
        rooms() {
            return store.getters.rooms;
        },
        messages() {
            return store.getters.messages;
        },
        users() {
            return store.getters.users;
        },
        filterMessage() {
            if (this.$store.state.messagesModule.message) {
                return this.messages.filter((message) => {
                    console.log(message);
                    return message.content.toLowerCase().includes(this.$store.state.messagesModule.message.toLowerCase());
                });
            } else {
                return this.messages;
            }
        }

    },

    methods: {
        forceRerender() {
            this.componentKey += 1;
        },
        sendMessage(message) {
            console.log('reply messages here', message);
            store.dispatch('sendMessage', message);
        },
        openFile(message) {
            window.open(message.file.file.url, '_blank');
        },
        sendReaction(messageId, reaction) {
            console.log('emoji will added hre');
            store.dispatch('sendReaction', messageId);
            this.forceRerender()
        },
        editMessage(message) {
            store.dispatch('editMessage', message);
            console.log('replyiong mesaage', message);
        },
        deleteMessage(message) {
            store.dispatch('deleteMessage', message);
            console.log('deleteing message', message);
        },
        // replyMessage() {
        //     console.log('replying message');
        // }

    },

}
</script>