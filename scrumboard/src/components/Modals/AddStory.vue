<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add userstory</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="userStoryNumber">Number</label>
                            <input type="text" class="form-control" id="userStoryNumber">
                            <!--<small class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                        </div>
                        <div class="form-group">
                            <label for="userStoryDescription">Description</label>
                            <textarea class="form-control" id="userStoryDescription"></textarea>
                            <!--<small class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                        </div>
                        <div class="form-group">
                            <label for="userStoryHowToDemo">How to demo</label>
                            <textarea class="form-control" id="userStoryHowToDemo"></textarea>
                            <!--<small class="form-text text-muted">We'll never share your email with anyone else.</small>-->
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add story</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddStory"
    }
</script>

<style scoped>

</style>