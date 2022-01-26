<template>
    <div class="d-flex">
        <img
            class="rounded-xl mr-2"
            height="50"
            width="50"
            src="https://images.unsplash.com/photo-1642698335289-e9073f8afb03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <v-card
            outlined
            gray
            class="d-flex justify-space-between align-start mx-auto"
            max-width="900"
            :min-width="width || 900"
            color="grey lighten-3"
        >
            <div>
                <h4 class="text-overline pl-5">Elon Musk</h4>

                <p class="pl-5 text-caption mb-3">Tagline -- working from home</p>

                <img
                    v-if="comment.image"
                    class="pl-6"
                    width="400"
                    height="150"
                    :src="comment.image"
                />

                <div
                    v-if="showEditForm && commentId === comment"
                    style="width: 800px;"
                    class="ml-4 pt-4"
                >
                    <v-text-field
                        v-model="comment.content"
                        label="Edit Comment"
                        clearable
                        single-line
                        outlined
                    ></v-text-field>
                    <div class="d-flex pb-2">
                        <v-btn @click="saveChanges(comment)" color="cyan">Save changes</v-btn>
                        <v-btn @click="showEditForm = false" class="ml-4" color="primary">cancel</v-btn>
                    </div>
                </div>

                <p v-else class="pl-5 pt-4">{{ comment.content }}</p>
            </div>
            <v-spacer></v-spacer>
            <time class="font-13 pt-3 mr-4">17h</time>
            <div class="mr-2 pt-1">
                <v-menu left bottomc class="mr-15">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list dense>
                        <v-list-item-group color="secondary">
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-pencil</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title @click="showEdit(comment)">Edit</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <!-- <v-divider inset></v-divider> -->
                            <v-list-item>
                                <v-list-item-icon>
                                    <v-icon>mdi-delete</v-icon>
                                </v-list-item-icon>
                                <v-list-item-content>
                                    <v-list-item-title @click="deleteComment(comment)">Delete</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list-item-group>
                    </v-list>

                    <!-- <v-btn @click="deleteComment(comment)">Delete</v-btn>

                    <v-btn @click="showEdit(comment)">Edit</v-btn>-->
                </v-menu>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: ['comment', 'width'],
    data() {
        return {
            showEditForm: false,
            commentId: {}
        }
    },
    methods: {
        deleteComment(comment) {
            console.log('deleting repky comment');
            store.dispatch('deleteComment', comment);
            //this.$emit('deleteComment', n);
        },
        showEdit(comment) {
            this.showEditForm = true;
            this.commentId = comment;
            //this.$emit('editComment', comment)
        },
        // cancelEditing(comment) {
        //     this.showEditForm = false;
        // },
        saveChanges(comment) {
            store.dispatch('saveCommentChanges', comment);
            this.showEditForm = false;
        }
    }
}
</script>