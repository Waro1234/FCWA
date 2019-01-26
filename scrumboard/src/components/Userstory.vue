<template>
    <div class="card-flip" v-on:click="flipMe">
        <div class="flip">
            <div class="front">
                <!-- front content -->
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>{{story.number}}. {{story.title}}</b></h5>
                        <p class="card-text">{{story.points}} points</p>
                        <!--<a href="#" class="btn btn-warning">Go somewhere</a>-->
                    </div>
                </div>
            </div>
            <div class="back">
                <!-- back content -->
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>How to Demo</b></h5>
                        <p class="card-text" v-if="story.howToDemo.length > 0">{{story.howToDemo}}</p>
                        <p class="card-text" v-if="story.howToDemo.length === 0">Sorry this story has no how to demo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Userstory",
        methods : {
            flipMe () {
                if (document.getElementById(this.column).classList.contains('flipped')) {
                    document.getElementById(this.column).classList.remove('flipped');
                } else {
                    document.getElementById(this.column).classList.add('flipped');
                }
            }
        },
        props: ['story', 'column']
    }
</script>

<style scoped>
    .card{
        height: 150px;
    }
    .card-flip {
        -webkit-perspective: 1000px;
        perspective: 1000px;
        color: #2c3e50;
        cursor: pointer;
    }
    .card-flip .card {
        transition: 250ms;
    }
    .card-flip:hover .card{
        background: #eee;
    }
    .card-flip.flipped .flip {
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }

    .card-flip,
    .front,
    .back {
        width: 100%;
        height: 170px;
    }

    .flip {
        transition: 0.6s;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        position: relative;
    }

    .front,
    .back {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    .front {
        z-index: 2;
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }

    .back {
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }


</style>