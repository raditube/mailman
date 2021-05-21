<template>
  <div class="about">
    <h1>{{subscription}}</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ChangeSubscription',
  data: function () {
    return {
      subscription: {}
    }
  },
  beforeMount() {
    console.log(process.env);
    axios.get(`https://${process.env.VUE_APP_BASE_API}/getSubscription/${this.$route.params.id}`)
    .then((response) => {
      this.subscription = response.data
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    // 
  }

}
</script>

<style>

</style>