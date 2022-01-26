<template>
    <div :class="`${this.$vuetify.breakpoint.width > 1264 ? 'container lighten-5' : 'lighten-5'}`">
        <!-- <ChatWindow :current-user-id="currentUserId" :rooms="rooms" :messages="messages" /> -->
        <v-row>
            <v-col cols="0" md="4" class="d-none d-sm-flex" sm="4" lg="4">
                <Sidebox />
            </v-col>
            <v-col cols="12" md="8" sm="8" lg="8">
                <!-- <Chatbox /> -->
                <ChatWindow
                    height="880px"
                    :users="users"
                    :show-send-icon="true"
                    :rooms="rooms"
                    :messages="messages"
                    :single-room="true"
                    :messages-loaded="true"
                    :textarea-action-enabled="true"
                    @send-message="test"
                    @send-message-reaction="haha"
                />
                <button @click="test">sdfsdfsdf</button>
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
import eventBus from '@/eventBus.js';
import Chatbox from "@/views/messages/Chatbox.vue";
import Sidebox from "@/views/messages/Sidebox.vue";
import ChatWindow from 'vue-advanced-chat';
import 'vue-advanced-chat/dist/vue-advanced-chat.css';
export default {
    name: "Message",
    components: { ChatWindow, Chatbox, Sidebox },
    data() {
        return {
            rooms: [
                {
                    roomId: 1,
                    roomName: 'Room 1',
                    avatar: 'assets/imgs/people.png',
                    unreadCount: 4,
                    index: 3,
                    lastMessage: {
                        content: 'Last message received',
                        senderId: 1234,
                        username: 'John Doe',
                        timestamp: '10:20',
                        saved: true,
                        distributed: false,
                        seen: false,
                        new: true
                    },
                    users: [
                        {
                            _id: 1234,
                            username: 'John Doe',
                            avatar: 'assets/imgs/doe.png',
                            status: {
                                state: 'online',
                                lastChanged: 'today, 14:30'
                            }
                        },
                        {
                            _id: 4321,
                            username: 'John Snow',
                            avatar: 'assets/imgs/snow.png',
                            status: {
                                state: 'offline',
                                lastChanged: '14 July, 20:00'
                            }
                        }
                    ],
                    typingUsers: [4321]
                }
            ],
            message: '',

            messages: [
                {
                    _id: 7890,
                    indexId: 124094,
                    content: 'Hahah lol 1',
                    senderId: 1234,
                    username: 'John Doe',
                    avatar: 'assets/imgs/doe.png',
                    date: '13 November',
                    timestamp: '10:20',
                    system: false,
                    saved: true,
                    distributed: true,
                    seen: true,
                    deleted: false,
                    failure: true,
                    disableActions: false,
                    disableReactions: false,
                    files: [
                        {
                            name: 'My File',
                            size: 67351,
                            type: 'png',
                            audio: true,
                            duration: 14.4,
                            url: 'https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=',
                            preview: 'data:image/png;base64,iVBORw0KGgoAA',
                            progress: 88
                        }
                    ],
                    reactions: {
                        '😁': [
                            1234, // USER_ID
                            4321
                        ],
                        '🥰': [
                            1234
                        ],
                        '🤣': [
                            1236
                        ],
                    },
                    replyMessage: {
                        content: 'Reply Message',
                        senderId: 4321,
                        files: [
                            {
                                name: 'My Replied File',
                                size: 67351,
                                type: 'png',
                                audio: true,
                                duration: 14.4,
                                url: 'https://firebasestorage.googleapis.com/...',
                                preview: 'data:image/png;base64,iVBORw0KGgoAA...'
                            }
                        ]
                    },

                },
                {
                    _id: 7890,
                    indexId: 12092,
                    content: 'Hahah lol 1',
                    senderId: 1234,
                    username: 'John Doe',
                    avatar: 'assets/imgs/doe.png',
                    date: '13 November',
                    timestamp: '10:20',
                    system: false,
                    saved: true,
                    distributed: true,
                    seen: true,
                    deleted: false,
                    failure: true,
                    disableActions: false,
                    disableReactions: false,
                    files: [
                        {
                            name: 'My File',
                            size: 67351,
                            type: 'png',
                            audio: true,
                            duration: 14.4,
                            url: 'https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=',
                            preview: 'data:image/png;base64,iVBORw0KGgoAA',
                            progress: 88
                        }
                    ],
                    reactions: {
                        '😁': [
                            1234, // USER_ID
                            4321
                        ],
                        '🥰': [
                            1234
                        ],
                        '🤣': [
                            1236
                        ],
                    },
                    replyMessage: {
                        content: 'Reply Message',
                        senderId: 4321,
                        files: [
                            {
                                name: 'My Replied File',
                                size: 67351,
                                type: 'png',
                                audio: true,
                                duration: 14.4,
                                url: 'https://firebasestorage.googleapis.com/...',
                                preview: 'data:image/png;base64,iVBORw0KGgoAA...'
                            }
                        ]
                    },

                }
            ],
            users: {
                USER_ID_1: {
                    _id: 1,
                    username: 'User 1'
                },
                USER_ID_2: {
                    _id: 2,
                    username: 'User 2'
                },
                USER_ID_3: {
                    _id: 3,
                    username: 'User 2'
                }
            },
            currentUserId: 1234
        }
    },
    methods: {
        sendMessage() {
            this.messages.push({
                _id: 7342,
                indexId: 12352,
                content: 'My namew is fahad',
                senderId: 1234,
                username: 'John Doe',
                avatar: 'assets/imgs/doe.png',
                date: '13 November',
                timestamp: '10:20',
                system: false,
            })
        },
        test() {
            console.log('Hello');
            eventBus.$on('send-message', () => {
                console.log('Custom event triggered!')
            })
        },
        haha() {
            console.log('emoji will added hre');
        }
    },
    mounted() {
        eventBus.$on('custom-event', () => {
            console.log('Custom event triggered!')
        })
    }
}
</script>