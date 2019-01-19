<template>
    <button type="button" class="fab" data-toggle="modal" data-target="#addStoryModal">+</button>
</template>

<script>
    export default {
        name: "FloatingActionButton"
    }
</script>

<style scoped>
.fab{
    position: absolute;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align:center;
    font-size:35px;
    background-color:#ffc107;
    border:none;
    border-radius:50%;
    color:white;
    right: 5px;
    bottom: 5px;
    -webkit-box-shadow: 0px 0px 30px -6px rgba(255, 193, 7,0.75);
    -moz-box-shadow: 0px 0px 30px -6px rgba(255, 193, 7,0.75);
    box-shadow: 0px 0px 30px -6px rgba(255, 193, 7,0.75);
    cursor: pointer;
    transition: 250ms;
}
    .fab:hover{
        background:#e0a800;
    }
    @media screen and (max-width: 634px) {
        .fab{
            position: fixed;
            right: 16px;
            bottom: 16px;
        }
    }
</style>