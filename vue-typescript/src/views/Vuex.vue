<template>
  <div>
    <div>
      <input v-model="name" />
      <button @click="search">查询号码</button>
    </div>
    <div>
      {{ name }}电话号码是：{{ mobile }}
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { State, Mutation, Action } from 'vuex-class';
import { IState } from '../store';

@Component
export default class Vuex extends Vue {
  private name: string = 'Luo';

  @State('mobile') private mobile?: string;

  @Mutation('changeMobile') changeMobile?: (state: IState, { mobile }: IMobile) => void;
  
  @Action('loadMobile') loadMobile?: (name: string) => void;

  created(): void {
    this.search();
  }

  search(): void {
    this.loadMobile!(this.name);
  }
}

export interface IMobile {
  mobile: string
}

</script>
