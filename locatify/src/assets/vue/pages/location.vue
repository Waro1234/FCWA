<template>
    <f7-page>
        <f7-navbar title="Add location" back-link="Back" sliding></f7-navbar>
        <form class="list" id="location-form">
            <div class="block">
                <div class="row">
                    <div class="col-40">
                        <div class="location-pic-container" @click="takeAPic()">
                            <img id="pic" class="location-pic" src="" alt="Take a picture first"/>
                            <input id="hidden-pic" type="hidden" name="pic">
                        </div>
                    </div>
                    <div class="col-60">
                        <div class="row align-items-center">
                            <div class="col-70">
                                <div class="item-content item-input pl0">
                                    <div class="item-inner">
                                        <div class="item-title item-label">Address</div>
                                        <div class="item-input-wrap">
                                            <input id="location" name="address" type="text"
                                                   placeholder="Location address">
                                            <span class="input-clear-button"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-30">
                                <div class="col button button-fill button-round" @click="getMyLocation()">
                                    <f7-icon icon="fa fa-map-marker fa-fw"></f7-icon>
                                </div>
                            </div>
                        </div>
                        <div class="row" v-if="geoLocationFailed">
                            <div class="col-100 text-color-red">
                                {{geoLocationFailedMessage}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="item-content item-input">
                <div class="item-inner">
                    <div class="item-title item-label">Location name</div>
                    <div class="item-input-wrap">
                        <input name="name" type="text" placeholder="Name of the location">
                        <span class="input-clear-button"></span>
                    </div>
                </div>
            </div>
            <div class="item-content item-input">
                <div class="item-inner">
                    <div class="item-title item-label">Description</div>
                    <div class="item-input-wrap">
                        <textarea name="desc" class="" placeholder="What makes this place so great"></textarea>
                        <span class="input-clear-button"></span>
                    </div>
                </div>
            </div>
        </form>
        <f7-fab color="blue" @click="saveLocation()">
            <f7-icon icon="fa fa-save fa-fw"></f7-icon>
        </f7-fab>

    </f7-page>
</template>
<script>
    export default {
        data() {
            return {
                self: this,
                geoLocationFailedMessage: 'Failed to get location. Fill it in yourself please',
                geoLocationFailed: false,
                gpsRetries: 6
            };
        },
        methods: {
            takeAPic() {
                navigator.camera.getPicture(
                    function (imageURI) {
                        document.getElementById("pic").src = imageURI;
                        document.getElementById("hidden-pic").value = imageURI;
                    },
                    function () {
                        document.getElementById("hidden-pic").value = "not allowed";
                    },
                    {
                        quality: 50,
                        destinationType: Camera.DestinationType.FILE_URI,
                        sourceType: Camera.PictureSourceType.CAMERA
                    }
                )
            },
            getMyLocation() {
                this.geoLocationFailed = false
                let gpsOptions = {maximumAge: 300000, timeout: 10000, enableHighAccuracy: true};

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition((position) => {
                            this.$f7.request.get("http://dev.virtualearth.net/REST/v1/Locations/"
                                + position.coords.latitude + "," + position.coords.longitude +
                                "?key=Akm4ylRdOiWjoGte1-zpg7mgOO6X7MPNuqYtRWvOo7DYmsWQ0CjqAbOR-WLq1yZb", function (data) {
                                console.log(data);
                                let formattedAddress = JSON.parse(data)["resourceSets"][0]["resources"][0]["address"]["formattedAddress"];
                                document.getElementById("location").value = formattedAddress;
                            });
                        },
                        () => {
                            this.geoLocationFailed = true
                        },
                        gpsOptions
                    )
                }
            },
            saveLocation() {
                LocationEmitter.$emit("saveLocation", this.$f7.form.convertToData("#location-form"));
                this.$f7router.back();
            }
        },
        created() {
            this.getMyLocation();
        }
    };
</script>
<style>
    .location-pic-container {
        flex: 1;
        height: 80px;
        border: 1px solid #000;
    }

    .location-pic {
        width: 100%;
        height: 100%;
    }

    .pl0 {
        padding-left: 0 !important;
    }
</style>
