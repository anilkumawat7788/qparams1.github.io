<template>
  <div class="main-container">
    <headers />
    <div class="contact-section">
      <div class="contact-heading">
        <h2>CONTACT US</h2>
       <p>Suggestions,Questions or Comments Reach out to us .We'd be happy to help</p>
      </div>
    </div>
    <div class="contact-query">
      <h1>
        If you get any questions
        <br />Please do not hesitate to send us a message
      </h1>
    </div>
    <div class="contact-box">
          <div class="form-group1">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
              <b-form-group id="input-group-1" label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.firstName"
                  required
                  placeholder="First Name"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label-for="input-2">
                <b-form-input id="input-2" v-model="form.lastName" required placeholder="Last Name"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-3" label-for="input-3">
                <b-form-input
                  id="input-3"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-4" label-for="input-4">
                <b-form-input id="input-4" v-model="form.phone" required placeholder="Phone number"></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-5" label-for="input-5">
                <b-form-select id="input-5" v-model="form.learn" :options="learns" required></b-form-select>
              </b-form-group>
              <b-form-group id="input-group-6" label-for="input-6">
                <b-form-select id="input-6" v-model="form.learn1" :options="learns1" required></b-form-select>
              </b-form-group>

              <b-form-group id="input-group-7" label-for="input-7">
                <b-form-input
                  id="textarea"
                  v-model="form.text"
                  required
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-8">
                <b-form-checkbox-group v-model="form.checked" id="checkboxes-8">
                  <b-form-checkbox value="me">
                    I accept QPARAMS terms and
                    conditions
                  </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
              

              <b-button type="submit" variant="primary">Submit</b-button>
              
            </b-form>
          </div>
       
          <div class="blue">
            <h2>HEADQUARTERS</h2>
            <p>
              Qparams Technologies Pvt Ltd #1, saroj Square, 1st floor Silver Spring Rd, Munnekalal, Marathahalli, Bangaluru, Karnataka 560036
              <br />+91 7676708195
            </p>
            <h2>EMAIL US</h2>
            <p>
              info@qparams.com
              <br />Anusha@qparams.com
            </p>
          </div>
          </div>
        
  
    <div class="google-map">
      <h2>To reach to our destination</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3055641084225!2d77.70980911413498!3d12.952288718807873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13f7f289253b%3A0x86fa1f5eea62a05f!2sQparams%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1597343826641!5m2!1sen!2sin"
        width="1600"
        height="450"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
    <footers />
  </div>
</template>
<script>
import headers from "@/components/layout/header.vue";
import footers from "@/components/layout/footer.vue";
export default {
  components: {
    headers,
    footers
  },
  data() {
    return {
      form: {
        email: "",
        name: "",
        learn: null,
        learn1: null,
        checked: []
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
      this.form.firstName = "";
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
.contact-section {
  background: #FF9E48 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  opacity: 1;
}
.contact-heading {
  width: auto;
}
.contact-heading h2 {
  text-align: center;
  font-style: bold;
  color: white;
  padding-top: 10rem;
  font-size: 2.5rem;
}
.contact-heading p {
  text-align: center;
  font-size: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 7rem;
  color: white;
}
.contact-query h1 {
  font-size: 2rem;
  text-align: left;
  margin-left: 20.5rem;
  margin-top: 5rem;
font-family: 'Fjalla One', sans-serif;
  letter-spacing: 0px;
  color: #7a7a7a;
  opacity: 1;
}
.contact-box {
  margin:8rem 8rem 0 5rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  opacity: 1;
  background: #FFFFFF 0% 0% no-repeat padding-box;
box-shadow: 0px 3px 9px #00000026;
opacity: 0.9;
}
.form-group1{
  width:40rem;
  height:25rem;
  margin:2rem;
}
.blue {
  background: transparent linear-gradient(312deg, #017efc 0%, #0052b8 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 0px 6px 9px #00000026;
  width: 30rem;
  height: 25rem;
  float: right;
  margin:2rem;
}
.blue h2 {
  padding: 2rem;
  font-size: 1.5rem;
  text-align: center;
  color: #ffffff;
}
.blue p {
  padding: 0.1rem;
  font-size: 1.1rem;
  text-align: center;
  color: #ffffff;
}
.google-map {
  margin-top: 3rem;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
}
.google-map h2 {
  text-align: center;
  margin-left: 20.5rem;
  padding-bottom: 3rem;
font-size: 2rem;
  letter-spacing: 0px;
  font-family: 'Fjalla One', sans-serif;
  color: #7a7a7a;
  opacity: 1;
}
.google-map iframe {
  margin-left: 5rem;
}
#input-group-1 {
  display: inline-block;
}
#input-group-2 {
  display: inline-block;
  margin: 1rem;
}
#input-group-3 {
  display: inline-block;
}
#input-group-4 {
  margin: 1rem;
  display: inline-block;
}
#input-group-5 {
  display: inline-block;
  margin-top: 1rem;
}
#input-group-6 {
  margin-left: 1.7rem;
  margin-top: 1rem;
  display: inline-block;
}
#input-group-7 {
  display: inline-block;
  width: 28.5rem;
}
#input-group-8 {
  display: inline-block;
  margin: 1rem;
}
.btn-primary{
  width: 13rem;
  margin: 1rem 0 0 7rem;
  border: none;
  color: #fff;
  background: #364E61 0% 0% no-repeat padding-box;
border-radius: 5px;
opacity: 1;
}

@media screen and (max-width: 800px) {
 .contact-heading h2 {
  padding-top: 2rem;
  font-size: 1.5rem;
}
.contact-heading p {
  font-size: 1rem;
  padding: 1rem 1rem 3rem 1rem;
}
.contact-query h1 {
  font-size: 1.5rem;
  text-align: left;
  margin-left: 2rem;
  padding-right: 1rem;
  margin-top: 3rem;

}
.contact-box {
  margin-top:3rem;
   margin:3rem 1rem 0 1rem;
  

}
.form-group1{
  width:auto;
  height:20rem;
  margin-top:1rem;
}
#input-group-1 {
  margin-left: 2rem;
  margin-top: .5rem;
  width:15rem;
}
#input-group-2 {

  margin-left: 2rem;
  margin-top:.5rem;
  width:15rem;
}
#input-group-3 {
 margin-left: 2rem;
 margin-top:.5rem;
 width:15rem;
}
#input-group-4 {
 margin-left: 2rem;
 margin-top:.5rem;
 width:15rem;
  
}
#input-group-5 {
 margin-top:.5rem;
  margin-left: 2rem;
  width:15rem;
}
#input-group-6 {
margin-left: 2rem;
margin-top:.5rem;
width:15rem;

 
}
#input-group-7 {
  margin-left: 2rem;
  margin-top:.5rem;
 width:15rem;
}
#input-group-8 {
  margin-left: 2rem;
  margin-top: .5rem;
}
#submit-button{
  margin-left:6rem;

}
.blue {
  width: auto;
  height: 25rem;
  margin:16rem 1rem 1rem 1rem;
}
.blue h2 {
  padding: 2rem 1rem 1rem 1rem;
  font-size: 1.3rem;
}
.blue p {
  padding: 0.1rem .5rem .5rem .5rem;
  font-size: 1rem;
}
.btn-primary{
  width: 13rem;
  margin: 1rem 0 0 2.5rem;
}
.google-map {
  margin-top: 2rem;
 
}
.google-map h2 {
  text-align: center;
  margin-left: 2rem;
  padding:2rem 0 2rem 0;
  font-size: 1.5rem;

}
.google-map iframe {
  margin: 1rem 1rem 0 1rem;
  width:100%;
  height:12rem;
}
}
</style>