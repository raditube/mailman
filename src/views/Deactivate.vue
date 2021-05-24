<template>
  <div class="container__deactivated">
    <h2>We just deactivated your email subscription</h2>
    <p>If you would like to be informated in a less obtrusive way then please consider following us on <a href="https://www.twitter.com/raditube_com">Twitter</a>.<br/>
    If you unsubscribed yourself by mistake, and would like to reactivate your email subscription then please <router-link :to="'../activate/' + currentMeta.id">click here</router-link>.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Deactivate',
  data: function() {
    return {
      currentMeta: {
        id: ""
      }
    }
  },
  beforeMount() {
    this.currentMeta.id = this.$route.params.id;
  },
  mounted() {
    axios.patch(`https://${process.env.VUE_APP_BASE_API}/changeSubscription`, {
      id: this.currentMeta.id,
      activated: false
    })
    .then(() => {
    }, (error) => {
      console.log(error);
    });
  } 

}
</script>

<style>
.container__deactivated {
  margin-top: 5rem;
}

p {
  font-family: 'Ilisarniq-Regular';
  font-weight: 100;
}

a, a:visited {
  color: white;
}
</style>