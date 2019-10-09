<template>
  <div>
    <h3> {{ date | dateFormatter }} </h3>
    <button @click="test" >Test</button>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  filters: {
    dateFormatter(dt: Date): string {
      return dt.toString();
    },
  },
})
export default class Method extends Vue {
  private date: Date = new Date();

  private test(): void {
    this.date = new Date();
  }
}
</script>
