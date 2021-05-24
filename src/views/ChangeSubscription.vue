<template>
  <div class="container">
    <Loading v-if="this.loading" />
    <div class="column__one" v-if="!this.loading">
      <h1>Emails</h1>
      <h2>{{subscription.email}}</h2>
      <h2>Your email subscription is <span v-if="subscription.activated === true">active</span><span v-if="subscription.activated === false">inactive</span></h2>
      <!-- <div>Stop sending me any e-mails</div> -->
    </div>

    <div class="column__two" v-if="!this.loading">
      <h3>Subscriptions</h3>
        <FormulateForm
          @submit="submitHandler"
          >
          <div class="control-group">
            <label for="checkboxA" class="control control-checkbox">
            <input type="checkbox" id="checkboxA" v-model="newsletter">
            Newsletter
            <div class="control_indicator"></div>
            </label>
          <br/>
            <label for="checkboxB" class="control control-checkbox">
            <input type="checkbox" id="checkboxB" v-model="disinfo_report">
            Monthly YouTube Disinformation Report
            <div class="control_indicator"></div>
            </label>

          </div>

          <div class="submit__container">
            <FormulateInput
              type="submit"
              label="Change Subscription"
            />
            <Verify v-if="submitting" />
          </div>
        </FormulateForm>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loading from '../components/Loading.vue'
import Verify from '../components/Verify.vue'

export default {
  name: 'ChangeSubscription',
  components: {
    Loading, Verify
  },
  data: function () {
    return {
      loading: true,
      submitting: false,
      newsletter: false,
      disinfo_report: false,
      subscription: {},
      currentMeta: {
        id: "x"
      }
    }
  },
  beforeMount() {
    console.log(process.env);
    axios.get(`https://${process.env.VUE_APP_BASE_API}/getSubscription/${this.$route.params.id}`)
    .then((response) => {
      this.subscription = response.data;

      this.currentMeta.id = this.subscription.id
      this.newsletter = this.subscription.newsletter;
      this.disinfo_report = this.subscription.disinfo_report;

      this.loading = false;
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    // 
  },
  methods: {
    async submitHandler () {
      this.submitting = true;

      axios.patch(`https://${process.env.VUE_APP_BASE_API}/changeSubscription`, {
        id: this.currentMeta.id,
        newsletter: this.newsletter,
        disinfo_report: this.disinfo_report
      })
      .then(() => {
        setTimeout(() => { this.submitting = false }, 1000);
      }, (error) => {
        console.log(error);
      });


      // await this.$axios.post('/my/api', data)
      // alert(`Thank you, ${data.name}`)
    }
  }

}
</script>

<style>
@media (max-width: 900px)
{
  .column__one {
    width: 100% !important;
  }

  .column__two {
    width: 100% !important;
    margin-top: 2rem;
  }

  .container {
    flex-direction: column;
    /* align-items:center; */
  }
}

@media (max-width: 1224px)
{
  .column__one {
    width: 50% !important;
  }

  .column__two {
    width: 50% !important;
  }
}


.container {
  margin-top: 5rem;
  display: flex;
}

.column__one {
  width: 33.33%;
}

.column__two {
  width: 66.65%;
}

.submit__container {
  display: flex;
}

button {
  background-color: white; 
  border: none;
  font-family: 'Ilisarniq-Regular';
  /* color: white; */
  padding: .85rem 2rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;
}

button:hover {
  background-color: #DC92FF;
  color: white;
}

.control {
    font-family: 'Ilisarniq-Regular';
    display: block;
    position: relative;
    padding-left: 39px;
    margin-bottom: 16px;
    padding-top: 8px;
    cursor: pointer;
    font-size: 16px;
}
    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
.control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 30px;
    width: 30px;
    background: #464646;
    border: 0px solid #000000;
    border-radius: 0px;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #4e4e4e;
}

.control input:checked ~ .control_indicator {
    background: #DC92FF;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: #0e6647d;
}
.control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
}
.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after {
    display: block;
}
.control-checkbox .control_indicator:after {
    left: 10px;
    top: 7px;
    width: 8px;
    height: 8px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}
.control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #7b7b7b;
}
</style>