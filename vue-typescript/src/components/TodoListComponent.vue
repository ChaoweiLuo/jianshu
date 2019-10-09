<template>
  <ul>
    <li v-for="(item, index) in list" :key="index" >
      {{ item }}
      <button @click="remove(item)" >X</button>
    </li>
  </ul>
</template>

<script lang="ts">
import { Emit, Prop, Component, Vue } from 'vue-property-decorator';

@Component({name: 'TodoListComponent'})
export default class TodoListComponent extends Vue {
  @Prop() list?: string[];
  // @Prop() remove?: (item:string)=>void;
  @Emit('removeItem')
  private remove(item:string):void {

  }
}

</script>
