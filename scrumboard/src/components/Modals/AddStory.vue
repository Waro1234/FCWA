<template>
    <div class="modal fade" id="addStoryModal" tabindex="-1" role="dialog" aria-labelledby="addStoryModal"
         aria-hidden="true">
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
                            <input type="number" class="form-control" v-model="form.number" value=""
                                   id="userStoryNumber">
                            <small class="form-text text-danger" v-if="errors.numberError.length > 0">
                                {{errors.numberError}}
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="userStoryDescription">Description</label>
                            <textarea class="form-control" v-model="form.description"
                                      id="userStoryDescription"></textarea>
                            <small class="form-text text-danger" v-if="errors.descriptionError.length > 0">
                                {{errors.descriptionError}}
                            </small>
                        </div>
                        <div class="form-group">
                            <label for="userStoryHowToDemo">How to demo</label>
                            <textarea class="form-control" id="userStoryHowToDemo" v-model="form.howToDemo"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary" v-on:click="addStory">Add story</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import JQuery from 'jquery'

    let $ = JQuery;
    export default {
        name: "AddStory",
        data() {
            return {
                column: 0,
                form: {
                    number: null,
                    description: '',
                    howToDemo: ''
                },
                errors: {
                    numberError: '',
                    descriptionError: ''
                }
            }
        },
        methods: {
            addStory() {
                if (Number.isNaN(this.form.number) || this.form.number <= 0) {
                    this.errors.numberError = 'This has to be a valid number above 0'
                } else {
                    this.errors.numberError = ''
                }
                if (this.form.description.length <= 0) {
                    this.errors.descriptionError = 'Description needs to be longer than 0 characters'
                } else {
                    this.errors.descriptionError = ''
                }

                if (this.errors.numberError.length === 0 && this.errors.descriptionError.length === 0) {
                    $("#addStoryModal").modal('hide');
                    console.log(JSON.stringify({column: this.column, data: this.form}))
                    this.$store.dispatch('addUserStory', {column: this.column, data: this.form})
                }
            }
        }
    }
</script>

<style scoped>

</style>