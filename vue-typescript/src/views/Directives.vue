<template>
  <div>
    <div v-author="author" >
      {{ content }}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({
  directives: {
    author: {
      bind(el, binding) {
        el.title = ` Author is: ${binding.value}`;
      },
    },
  },
})
export default class Directives extends Vue {
  private content:string = 'This is a test message!';

  private author: string = 'Luo';
}
</script>
