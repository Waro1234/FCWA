<template>
    <div class="col-lg-3 col-sm-6 col-12">
        <h4>{{name}}</h4>
        <div class="row">
            <div v-bind:class="{'col-12': true, noContainers: myStories.length === 0}">
                <draggable v-model="myStories" :options="{group: 'myStories'}" @end="save">
                    <user-story v-for="(story, index) in myStories" :key="index" :id="column + '' + index" :column="column + '' + index" :story="story"></user-story>
                </draggable>
            </div>
        </div>
        <!--<user-story></user-story>-->
        <!--<user-story></user-story>-->
        <!--<user-story></user-story>-->
        <!--<user-story></user-story>-->
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    import UserStory from '@/components/Userstory.vue'
    export default {
        name: "Column",
        methods: {
            save () {
                this.$store.dispatch('save')
            }
        },
        computed: {
            myStories: {
                get() {
                    return this.$store.getters.getBoardColumnStories(this.column);
                },
                set(value) {
                    this.$store.commit('updateList', {column: this.column, stories:value})
                }
            }
        },
        props: ['name','column'],
        components: {
            UserStory,
            draggable
        }
    }
</script>

<style scoped>
    /*.col{*/
        /*border-right:1px dashed #333;*/
    /*}*/
    .col-lg-3, .col-sm-6, .col-12{
        /*background: #323f56;*/
        color:white;
        padding-top: 5px;
    }
    h4{
        color: #fff;
    }
    .noContainers{
        min-height: 250px;
        background: #000;
    }
</style>