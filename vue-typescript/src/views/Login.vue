<template>
  <div class="container">
    <div class="main">
      <div>
        <Input v-model="userName" placeholder="username"/>
      </div>
      <div>
        <Input v-model="password" placeholder="password" type="password"/>
      </div>
      <div>
        <Button @click="login" >Login</Button>
        <Button @click="reset" >reset</Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Button, Input, Icon } from 'iview';

@Component({
  components: {
    [Button.name]: Button,
    [Input.name]: Input,
    [Icon.name]: Icon,
  },
})
export default class Login extends Vue {
  private userName:string = '';

  private password:string = '';

  private login(): void {
    console.log('login:', this.userName, this.password);
  }

  private reset(): void {
    this.userName = '';
    this.password = '';
  }
}
</script>
<style>
  .container {
    text-align: center;
  }
  .main {
    width: 300px;
    margin: 100px auto;
  }
</style>
