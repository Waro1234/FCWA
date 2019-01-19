<template>
    <div class="col-lg-3 col-sm-6 col-12">
        <h4>{{name}}</h4>
        <user-story></user-story>
        <a href="#" class="btn btn-light">Go somewhere</a>

        <!--<user-story></user-story>-->
        <!--<user-story></user-story>-->
        <!--<user-story></user-story>-->
        <!--<user-story></user-story>-->
    </div>
</template>

<script>
    import UserStory from '@/components/Userstory.vue'
    export default {
        name: "Column",
        props: ['name'],
        components: {
            UserStory
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
</style>