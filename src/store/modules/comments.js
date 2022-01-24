const commentsModule = {
    state: () => ({
        counter: 0,
        comments: [],
        replies: [],
    }),
    mutations: {
        updateComment(state, payload) {
            console.log("from state", payload);
            state.comments.push({ id: state.counter++, content: payload });
        },

        updateReply(state, payload) {
            console.log("from reply state", payload);
            state.replies.push({
                commentId: payload.commentId,
                content: payload.content,
            });
        },
    },
    actions: {
        addComment({ commit }, payload) {
            commit("updateComment", payload);
        },

        addReply({ commit }, payload) {
            commit("updateReply", payload);
        },
    },
    getters: {
        comments: (state) => state.comments,
        replies: (state) => state.replies,
    },
};

export default commentsModule;
