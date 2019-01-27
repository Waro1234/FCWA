<template>
    <f7-page>
        <f7-navbar>
            <div class="title">Locatify</div>
        </f7-navbar>
        <f7-list class="components-list searchbar-found">
            <div class="card" v-if="locations.length < 1">
                <div class="card-content card-content-padding">
                   You don't have any locations yet.
                </div>
            </div>
            <div class="card" v-for="(data, index) in locations">
                <div class="card-header"><b>{{data.name}}</b></div>
                <div class="card-content card-content-padding">
                    <div class="row">
                        <div class="col-35">
                            <img class="card-pic" v-bind:src="data.pic" v-bind:alt="data.pic">
                        </div>
                        <div class="col-65">
                            <div class="row">
                                {{data.address}}
                            </div>
                            <div class="row">
                                {{data.desc}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="col button color-gray" @click="shareLocation(data.address)">Share</button>
                    <button class="col button color-red" @click="deleteLocation(index)">Delete</button>
                </div>
            </div>
        </f7-list>
        <f7-fab color="blue" @click="gotoLocationPage">
            <f7-icon icon="fa fa-plus fa-fw"></f7-icon>
        </f7-fab>
    </f7-page>
</template>
<script>
    import F7FabButton from "framework7-vue/components/fab-button";
    import F7Fab from "framework7-vue/components/fab";
    import F7Icon from "framework7-vue/components/icon";
    import F7ListItem from "framework7-vue/components/list-item";

    const STORAGE_KEY = "locations";

    export default {
        components: {
            F7ListItem,
            F7Icon,
            F7Fab,
            F7FabButton
        },
        methods: {
            gotoLocationPage() {
                this.$f7router.navigate("/location/");
            },
            deleteLocation(index){
                if(index === 0){
                    this.locations.shift();
                }else if(index === this.locations.length-1){
                    this.locations.pop();
                }else {
                    this.locations.splice(index, 1);
                }
                this.save();
            },
            shareLocation(address){
                window.plugins.socialsharing.shareWithOptions(
                    {
                        message: address,
                        subject: "Locatify location",
                        chooserTitle: "Share to"
                    },
                    function () {
                        alert("Successfully shared your location");
                    },
                    function () {
                        alert("Failed to share your location");
                    }
                )
            },
            save(){
                localStorage.setItem(STORAGE_KEY, JSON.stringify(this.locations));
            }
        },
        data() {
            return {
                locations: []
            }
        },
        created() {
            LocationEmitter.$on("saveLocation", (args) => {
                this.locations.unshift(args);
                this.save();
            });

            let itms = JSON.parse(localStorage.getItem(STORAGE_KEY));
            if (itms != null && typeof itms !== 'undefined' && itms.length > 0) {
                this.locations = itms;
            }
            else {
                this.locations = [];
            }

        }
    };

</script>
<style>
    .card-pic{
        width: 100%;
        height: 75px;
    }
</style>
