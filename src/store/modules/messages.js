const messagesModule = {
    state: () => ({
        rooms: [
            {
                roomId: 1,
                roomName: "Fahad Bin Munir",
                avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                unreadCount: 4,
                index: 3,
                lastMessage: {
                    content: "Last message received",
                    senderId: 1234,
                    username: "John Doe",
                    timestamp: "10:20",
                    saved: true,
                    distributed: false,
                    seen: false,
                    new: true,
                },
                users: [
                    {
                        _id: 1234,
                        username: "Fahad Bin Munir",
                        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                        status: {
                            state: "online",
                            lastChanged: "today, 14:30",
                        },
                    },
                ],
                typingUsers: [4321],
            },
        ],
        message: "",

        messages: [
            {
                _id: 7890,
                indexId: 124094,
                content: "JavaScript is awesome!",
                senderId: 1234,
                username: "John Doe",
                avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                date: "13 November",
                timestamp: "10:20",
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
                        name: "My File",
                        size: 67351,
                        type: "png",
                        audio: true,
                        duration: 14.4,
                        url: "https://media.istockphoto.com/photos/headshot-portrait-of-smiling-ethnic-businessman-in-office-picture-id1300512215?b=1&k=20&m=1300512215&s=170667a&w=0&h=LsZL_-vvAHB2A2sNLHu9Vpoib_3aLLkRamveVW3AGeQ=",
                        //preview: "data:image/png;base64,iVBORw0KGgoAA",
                    },
                ],
                reactions: {
                    "🥰": [1234],
                },
            },
        ],

        currentUserId: 1234,
    }),
    mutations: {
        updateSendMessage(state, payload) {
            console.log(payload.files);
            let id = Math.random().toString(16).slice(2);
            let indexId = new Date().getTime();
            if (payload.files) {
                state.messages.push({
                    _id: id,
                    commit_id: 7342,
                    indexId: indexId,
                    content: payload.content,
                    senderId: 1234,
                    system: false,
                    saved: true,
                    distributed: true,
                    seen: true,
                    deleted: false,
                    failure: false,
                    disableActions: false,
                    disableReactions: false,
                    files: [
                        {
                            name: payload.files[0].name,
                            size: payload.files[0].size,
                            audio: true,
                            duration: 14.4,
                            type: payload.files[0].type,
                            url: payload.files[0].localUrl,
                            //progress: 100,
                        },
                    ],
                    username: "Fahad Bin Munir",
                    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    date: "13 November",
                    timestamp: "10:20",
                    system: false,
                });
            } else {
                state.messages.push({
                    _id: id,
                    commit_id: 7342,
                    indexId: indexId,
                    content: payload.content,
                    senderId: 1234,
                    username: "Fahad Bin Munir",
                    saved: true,
                    distributed: true,
                    seen: true,
                    deleted: false,
                    failure: false,
                    disableActions: false,
                    disableReactions: false,
                    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    date: "13 November",
                    timestamp: "10:20",
                    system: false,
                    replyMessage: payload.replyMessage,
                });
            }
        },
        updateSendReaction(state, payload) {
            let objIndex = state.messages.findIndex(
                (obj) => obj._id == payload.messageId
            );
            const yourKeyVariable = payload.reaction.unicode;
            state.messages[objIndex].reactions = {
                [yourKeyVariable]: [345345],
            };
        },
        updateEditMessage(state, payload) {
            let objIndex = state.messages.findIndex(
                (obj) => obj._id == payload.messageId
            );
            state.messages[objIndex]["content"] = payload.newContent;
        },
        updateDeleteMessage(state, payload) {
            const index = state.messages.indexOf(payload.message);
            console.log("from vuex index delete", index);
            if (index > -1) {
                state.messages.splice(index, 1);
            }
        },
    },
    actions: {
        sendMessage({ commit }, payload) {
            commit("updateSendMessage", payload);
        },
        sendReaction({ commit }, payload) {
            commit("updateSendReaction", payload);
        },
        editMessage({ commit }, payload) {
            commit("updateEditMessage", payload);
        },
        deleteMessage({ commit }, payload) {
            commit("updateDeleteMessage", payload);
        },
    },
    getters: {
        rooms: (state) => state.rooms,
        messages: (state) => state.messages,
        users: (state) => state.users,
    },
};

export default messagesModule;
