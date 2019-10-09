<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <p>Author: {{ name }}</p>
    <p>
      {{ content }}
    </p>
    <ul>
      <li v-for="item in list" :key="item"> {{ item }} </li>
    </ul>
    <button @click="test('hello world ')" >new content</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Test extends Vue {
  private title?: string = 'This is title';

  private firstName: string = 'Shuaige';

  private lastName: string = 'Luo';

  private content?: string = 'content in here';

  private list: number[] = [1, 2, 3, 4, 5];

  private get name():string {
    return `${this.firstName} ${this.lastName}`;
  }

  private test(msg: string):void {
    this.content = `new content is: ${msg} ${(new Date()).toString()}`;
  }
}

</script>
