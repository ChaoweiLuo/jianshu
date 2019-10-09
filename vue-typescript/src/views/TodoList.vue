<template>
  <div>
    <TodoListComponent :list="list" @removeItem="removeItem" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator';
import TodoListComponent from '@/components/TodoListComponent.vue';


@Component({
  components: {
    [TodoListComponent.name]: TodoListComponent,
  }
})
export default class TodoList extends Vue {
  private list: string[]= ['item 1', 'item 2', 'item 3', 'item 4'];

  private removeItem(item: string): void {
    const index = this.list.indexOf(item);
    this.list.splice(index, 1);
  }
}

</script>
