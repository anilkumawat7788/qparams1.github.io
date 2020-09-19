<template>
  <div class="main-container">
    <headers />
    <div class="about-section">
      <div class="about-heading">
            <h2>WHO WE ARE</h2>
            <p>
              “Q Params” is the Corporate and Private Trainings, offering quality training and certifications across India.
              <br />“Q Params Technologies” stands an Institute that never compromises in its Quality Training.
              <br />A group of highly skilled and experienced engineers worked in reputed companies and having
              <br />knowledge in all aspect of VLSI design will be guiding aspirants.
            </p>        
      </div>
<div class="index-box">
        <b-row>
          <b-col col="4" sm="3">
            <img class="vision-img" src="@/assets/vision.svg" />
          </b-col>
          <b-col col="8" sm="9">
            <p>
              Our Vison is to create high Quality tool of hardware engineers by
              <br />giving practical industry level training to students
            </p>
          </b-col>
        </b-row>
    </div>
      <div class="index-box1">
        <b-row>
          <b-col col="4" sm="3">
            <img class="mision-img" src="@/assets/mission.svg" />
          </b-col>
          <b-col col="8" sm="9">
            <p>QPARAM is the only training institute where all the course contents are mentored by the working professions from semiconductor industry.</p>
          </b-col>
        </b-row>
    </div>
      </div>
  
  <div class="heading-second"> <h2>OUR FOUNDERS</h2></div>
    <div class="about-section1">
      <div class="about-box">
        <b-row>
          <b-col sm="4">
            <img class="mision-img" src="@/assets/p2.png" />
          </b-col>
          <b-col sm="8">
            <h2>Zonai Haris</h2>
            <h3>Co-Founder MD</h3>
            <p>
              "I got placed as Embedded Engineer in Qualcomm which is
              the most memorable moment of my life. Every Embedded
             Engineer would have dreamt of joining a company like
             Qualcomm but I was able to fulfill this dream with the
              immense support of Qparams."
            </p>
          </b-col>
        </b-row>
      </div>
      <div class="about-box">
        <b-row>
          <b-col sm="4">
            <img class="mision-img" src="@/assets/p2.png" />
          </b-col>
          <b-col sm="8">
            <h2>Zonai Haris</h2>
            <h3>Co-Founder MD</h3>
             <p>
              "I got placed as Embedded Engineer in Qualcomm which is
              the most memorable moment of my life. Every Embedded
             Engineer would have dreamt of joining a company like
             Qualcomm but I was able to fulfill this dream with the
              immense support of Qparams."
            </p>
          </b-col>
        </b-row>
       </div>
        </div>
         <div class="heading-second1"> <h2>Placements</h2></div>
    <div class="about-section3">
      <div class="about-placement">
      <h2>
        Placement are integrated part of our training program
        <br />Dedicated team of experienced HR's are successful in
        <br />bringing better opportunity to our Students.
      </h2>
      <a href="/placement" class="btn btn-read">Know more</a>
      </div>
 <!-- <div class="center-img">
      <img class="placement-img" src="@/assets/p2.png" />
    </div> -->
    
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
  }
};
</script>
<style scoped>
.about-section {
  position:relative;
  width: auto;
  background: #fcac66 0% 0% no-repeat padding-box;
  
 display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  opacity: 1;
}
.about-heading h2 {
  text-align: center;
  color: white;
  padding-top: 50px;
  font-size: 2.4em;
}
.about-heading p {
  text-align: center;
  padding-top: 40px;
  color: white;
  padding-bottom:20rem;
  font-size: 1.3em;
}
.index-box {
  position: absolute;
  width: 80rem;
  height: 10rem;
  top: 20rem;
  left: 17rem;
  z-index: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001f;
  border-radius: 10px;
  opacity: 1;
}
.index-box img {
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-left: 3rem;
}
.index-box p {
  text-align: left;

  font-size: 1.3rem;
  padding-top: 2rem;

  letter-spacing: 0px;
  color: #7a7a7a;
  opacity: 1;
}
.index-box1 {
  position: absolute;
  width: 80rem;
  height: 10rem;
  top: 34rem;
  left: 17rem;
  z-index: 1;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #0000001f;
  border-radius: 10px;
  opacity: 1;
}
.index-box1 img {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-left: 3rem;
}
.index-box1 p {
  text-align: left;

  font-size: 1.3rem;
  padding-top: 2rem;

  letter-spacing: 0px;
  color: #7a7a7a;
  opacity: 1;
}
.about-section1 {
  margin-top: 3rem;
  background-color: #fcfcfc;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.heading-second h2 {
  text-align: center;
  padding-top: 9rem;
}
.heading-second1 h2 {
  text-align: center;
  padding-top: 9rem;
}
.about-box {
  width: 55rem;
  height: 19rem;
  background-color: #ffffff;
  margin: 4rem;
  box-shadow: 0px 8px 0px #017efc;
  border: 1px solid #7070702b;
  border-radius: 19px;
}

.about-box img {
  border-radius: 50%;
  width: 8rem;
  height: 9rem;
  margin-left: 2rem;
  margin-top: 2rem;
}
.about-box h2 {
  text-align: left;
  font-size: 1.5rem;
  padding-top: 2rem;

  letter-spacing: 0px;
  color: #364e61;
}
.about-box h3 {
  text-align: left;
  font-size: 1rem;
  letter-spacing: 0px;
  color: #364e61;
  opacity: 1;
}
.about-box p {
  text-align: left;
  padding: 1rem 8rem 0 0 ;
  font-size: 1rem;
  letter-spacing: 0px;
  color: #364e61;
  opacity: 1;
}

.about-section3 {
     position: relative;
    background-image: url("../../assets/p2.png");
    background-size: 100% 100%;
 display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3rem 20rem 1rem 20rem;
  height:60vh;
}

.about-placement h2 {
  font-size: 1.5rem;
  text-align: center;
  padding-top: 7rem;
  line-height: 1.5;
  color: white;
  z-index: 1;
}
.btn {
  height: 2.5rem;
  width: 9rem;
  border-radius: 4px;
}
.btn-read {
  background: #ffffff 0% 0% no-repeat padding-box;
  color: #364e61;
  border-radius: 4px;
  border-radius: 4px;
  margin-left: 13rem;
  margin-top: 9rem;
}

@media screen and (max-width: 800px) {
 .about-heading h2 {
  padding-top: 1rem;
  font-size: 1.5rem;
}
.about-heading p {
  
  padding-top: 1rem;
  color: white;
  padding-bottom:2rem;
  font-size: .9rem;
}
.index-box {
  position: absolute;
  width: auto;
  height: auto;
  top: 22rem;
  left: 1rem;
  right:1rem;

}
.index-box img {
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-left: 1rem;
  width:7rem;
  height:7rem;
}
.index-box p {
  font-size: 1rem;
  padding-top: .1rem;
}
.index-box1 {
  position: absolute;
  width: auto;
  height: auto;
  top: 38rem;
  left: 1rem;
  right:1rem;

}
.index-box1 img {
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-left: 1rem;
  width:7rem;
  height:7rem;
}
.index-box1 p {
  font-size: 1rem;
  padding-top: .1rem;
}
.about-section1 {
  margin-top: 1rem;
   flex-direction: row;
 
}
.heading-second h2 {
  padding-top: 37rem;
}
.about-box {
  width: 55rem;
  height: 25rem;
  background-color: #ffffff;
  margin: 1rem 1rem 1rem 1rem; 
}
.about-box img {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  margin-left: 7rem;
  margin-top: 1rem;
}
.about-box h2 {
  font-size: 1.2rem;
  padding-top: 1rem;
  padding-left:7rem;
}
.about-box h3 {
  text-align: left;
  font-size: .9rem;
   padding-left:7rem;
  
}
.about-box p {
  text-align: center;
  font-size: .9rem;
  padding: 1rem 1rem 0 1rem ;
  
}
.heading-second1 h2 {
  text-align: center;
  padding-top: 2rem;
}
.about-section3 {
  margin: 2rem 1rem 1rem 1rem;
  height:60vh;
}
.about-placement h2 {
  font-size: 1.1rem;
  padding: 4rem 1rem 0 1rem;
  
}
.btn-read {
  margin-left: 7rem;
  margin-top: 1.5rem;
}
}
</style>