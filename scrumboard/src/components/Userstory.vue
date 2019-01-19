<template>
    <div class="card-flip">
        <div class="flip">
            <div class="front">
                <!-- front content -->
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <!--<a href="#" class="btn btn-warning">Go somewhere</a>-->
                    </div>
                </div>
            </div>
            <div class="back">
                <!-- back content -->
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">How to Demo</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Userstory"
    }
</script>

<style scoped>
    .card{
        height: 230px;
    }
    .card-flip {
        -webkit-perspective: 1000px;
        perspective: 1000px;
        color: #2c3e50;
    }
    .card-flip:hover .flip, .card-flip.hover .flip {
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }

    .card-flip,
    .front,
    .back {
        width: 100%;
        height: 250px;
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