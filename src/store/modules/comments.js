const commentsModule = {
    state: () => ({
        counter: 0,
        comments: [],
        replies: [],
    }),
    mutations: {
        updateComment(state, payload) {
            state.comments.push({
                id: state.counter++,
                content: payload.content,
                image: payload.image,
            });
        },

        updateReply(state, payload) {
            state.replies.push({
                commentId: payload.commentId,
                content: payload.content,
            });
        },

        updateDeleteComment(state, payload) {
            console.log(payload);
            const index = state.comments.indexOf(payload);
            if (index > -1) {
                state.comments.splice(index, 1);
            }
            console.log(state.comments);
        },
    },
    actions: {
        addComment({ commit }, payload) {
            commit("updateComment", payload);
        },

        addReply({ commit }, payload) {
            commit("updateReply", payload);
        },

        deleteComment({ commit }, payload) {
            commit("updateDeleteComment", payload);
        },
    },
    getters: {
        comments: (state) => state.comments,
        replies: (state) => state.replies,
    },
};

export default commentsModule;
