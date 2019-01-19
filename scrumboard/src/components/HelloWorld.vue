<template>
  <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <column :name="'Todo'"></column>
            <column :name="'Doing'"></column>
            <column :name="'Testing'"></column>
            <column :name="'Done'"></column>
            <floating-action-button></floating-action-button>
            <add-story-modal></add-story-modal>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  import Column from '@/components/Column.vue'
  import FloatingActionButton from '@/components/FloatingActionButton.vue'
  import AddStoryModal from '@/components/Modals/AddStory.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    Column,
    FloatingActionButton,
    AddStoryModal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .card{
    background: #272f3e;
  }
  .card-body{
    padding: 0 15px;
  }
  .row{
    position: relative;
  }
</style>
