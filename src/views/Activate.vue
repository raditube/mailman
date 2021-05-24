<template>
  <div class="container">
    <Loading />
  </div>
</template>

<script>
import axios from "axios";
import Loading from "../components/Loading.vue"

export default {
  name: 'Activate',
  components: {
    Loading
  },
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
      activated: true
    })
    .then(() => {
      this.$router.push({ name: 'ChangeSubscription', params: { id: this.currentMeta.id } })
    }, (error) => {
      console.log(error);
    });
  } 

}
</script>

<style>

</style>