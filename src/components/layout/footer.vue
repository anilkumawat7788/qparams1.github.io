<template>
  <div class="main-container">
    <div class="footer-main">
      <div class="footer-left1">
        <h1>About us</h1>
        <p>
          About us
          <br />Our team
          <br />Jobs
          <br />Contact us
        </p>
      </div>
      <div class="footer-left2">
        <h1>Support</h1>
        <p>
          Help
          <br />Project
          <br />Training
          <br />Technologies
        </p>
      </div>
      <div class="footer-center">
        <div class="footer-icons">
          <a href="#">
            <img src="@/assets/facebook.svg" class="icon-imgs" />
          </a>
          <a href="#">
            <img src="@/assets/instagram.svg" class="icon-imgs" />
          </a>
          <a href="#">
            <img src="@/assets/google.svg" class="icon-imgs" />
          </a>
          <a href="#">
            <img src="@/assets/linkedin.svg" class="icon-imgs1" />
          </a>
        </div>
        <img class="line-grey" src="@/assets/linegrey.svg" />
        <h1>ADDRESS</h1>
        <p>
          Qparams Technologies Pvt Ltd!
          <br />#1,Saroj Square,1st Floor, Silver Spring Rd,
          <br />Munnekolala, Marathahalli,
          <br />Bengaluru, Karnataka - 560037
        </p>
      </div>
      <div class="footer-right">
        <h1>SEND A MESSAGE / FOR QUERIES</h1>
        <b-container class="contact-box">
          <b-row>
            <b-col class="form-group">
              <div class="form-group">
                <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                  <b-form-group id="input-group-1" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.Name" required placeholder="Name"></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-2" label-for="input-2">
                    <b-form-input
                      id="input-2"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Email id"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-3" label-for="input-3">
                    <b-form-input id="input-3" v-model="form.phone" required placeholder="Ph No"></b-form-input>
                  </b-form-group>

                  <b-form-group id="input-group-4" label-for="input-4">
                    <b-form-input
                      id="textarea"
                      v-model="form.text"
                      required
                      placeholder="Your Text"
                      rows="3"
                      max-rows="6"
                    ></b-form-input>
                  </b-form-group>

                  <a href="#" class="btn btn-read">SUBMIT</a>
                </b-form>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
     
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
       
      },
      learns: [
        { text: "Select learning mode", value: null },
        "ONLINE",
        "OFFLINE"
      ],
      learns1: [
        { text: "Select your area of interest", value: null },
        "Design Verification",
        "Physical Design",
        "Static Timing Analysis",
        "Design For Test",
        "Cloud Computing",
        "Embedded and IOT"
      ],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.Name = "";
      this.form.lastName = "";
      this.form.phone = "";
      this.form.learn = null;
      this.form.text = "";
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style scoped>
.footer-main {
  margin-top: 2rem;
  position: relative;
  background: #f5f6f9 0% 0% no-repeat padding-box;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  padding: 2rem;
  flex-wrap: wrap;
  justify-content: space-around;
}
.footer-left1 {
  width: 13rem;
  height: 20rem;
  
}
.footer-left1 h1 {
  font-size: 2rem;

  padding: 0 0 0 1rem;
  color: #364e61;
}
.footer-left1 p {
  font-size: 1.2rem;
  text-align: left;
  padding: 1rem;
   color: #364e61;
}
.footer-left2 {
  width: 13rem;
  height: 20rem;
 
}
.footer-left2 h1 {
  font-size: 2rem;

  padding: 0 0 0 1rem;
  color: #364e61;
}
.footer-left2 p {
  font-size: 1.2rem;
  text-align: left;
  padding: 1rem;
   color: #364e61;
}

.footer-center {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 20rem;
  height: 20rem;
  
}

.footer-center h1{
  font-size: 1.8rem;
  text-align: left;
  color: #364e61;
  padding:0 0 0 5rem ;
  
}

.footer-center p{
  font-size: 1.1rem;
  text-align: center;
  color: #364e61;
  padding: 0 1rem 0 1rem;
}
.footer-icons{
  margin: .5rem 0 0 3rem;
}
.icon-imgs {
  height: 2rem;
  width: 3rem;
  
}
.icon-imgs1 {
  height: 2rem;
  width: 3rem;
}
 
.line-grey {
  width: 12rem;
  height: 1rem;
  margin: 0 0 0 3.2rem;
}
.footer-right {
  width: 21rem;
  height: 20rem;
 
 
  margin-bottom: 1rem;
}
.footer-right h1 {
  font-size: 1.5rem;

  padding: 0 0 1rem 1rem;
  color: #364e61;
}
#input-group-1 {
  width: 16.5rem;
}
#input-group-2 {
  width: 8rem;
  display: inline-block;
}
#input-group-3 {
  width: 8rem;
  display: inline-block;
  margin: 0.5rem;
}
#input-group-4 {
  width: 16.5rem;
}
.btn {
  height: 2.5rem;
  width: 16.5rem;
}
.btn-read {
  background: #364e61 0% 0% no-repeat padding-box;
  border-radius: 5px;
  color: white;
}

@media screen and (max-width: 800px) {
  .footer-main {
    margin-top: 2rem;
  }
  .footer-left1 {
    width: 8rem;
    height: 10rem;

    margin: 0 0 1rem 0;
    order: -1;
  }
  .footer-left1 h1 {
    font-size: 1.2rem ;
  }
  .footer-left1 p {
    font-size: 1rem;
  }
   .footer-left2 {
    width: 8rem;
    height: 10rem;

    margin: 0 0 1rem 0;
    order: -1;
  }
  .footer-left2 h1 {
    font-size: 1.3rem;
  }
  .footer-left2 p {
    font-size: 1rem;
  }
  
  .footer-center {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 17rem;
    height: 20rem;
    margin: 1rem 0 0 0;
  }
  .footer-icons{
  margin: .5rem 0 0 0;
}
.line-grey {
  width: 15rem;
  height: 1rem;
  margin: 0 0 0 1rem;
}
  .footer-center h1 {
    font-size: 1.3rem;
    text-align: center;
    color: #364e61;
    padding: 0 0 0 5rem;
  }
  .footer-center p {
    font-size: 1rem;
    text-align: center;
    padding: 0 1rem 0 1rem;
    color: #364e61;
  }
  .icon-imgs {
    height: 2rem;
    width: 3rem;
    margin-left: 1rem;
  }
  .icon-imgs1 {
    height: 2rem;
    width: 3rem;
    margin-left: 1rem;
  }
  .footer-right {
display: none;
}

 
}
</style>

