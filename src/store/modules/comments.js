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
            if (payload.hasOwnProperty("image") === false) {
                const index = state.replies.indexOf(payload);
                if (index > -1) {
                    state.replies.splice(index, 1);
                }
                console.log(state.replies);
            } else {
                const index = state.comments.indexOf(payload);
                if (index > -1) {
                    state.comments.splice(index, 1);
                }
                console.log(state.comments);
            }
        },
        updateCommentChanges(state, payload) {
            const objIndex = state.comments.findIndex((obj) => obj == payload);
            console.log("edit comment object", objIndex);
            state.comments[objIndex].content = payload.content;
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
        saveCommentChanges({ commit }, payload) {
            commit("updateCommentChanges", payload);
        },
    },
    getters: {
        comments: (state) => state.comments,
        replies: (state) => state.replies,
    },
};

export default commentsModule;
