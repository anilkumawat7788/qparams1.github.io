<template>
  <div class="main-container">
    <headers />
    <div class="home-header">
      <div class="home-heading">
        <h1>QPARMS</h1>
        <h2>Growth Accelerated</h2>
        <p>
          QParam Technology institute that
          <br />
          <strong>never compromise</strong> in quality training
          <a href="/contact" class="btn btn-pink">JOIN US</a>
        </p>
        <div class="qparams-course">
          <div class="qparams-box">
            <h3>PHYSICAL DESIGN</h3>
          </div>
          <div class="qparams-box">
            <h3>INTENET OF THINGS</h3>
          </div>
          <div class="qparams-box">
            <h3>DESIGN VERIFICATION</h3>
          </div>
          <div class="qparams-box">
            <h3>EMBEDDED & IOT</h3>
          </div>
        </div>
      </div>
    </div>
<div class="extra-cource">
  <div class="cource-background">
    <h3>PHYSICAL DESIGN</h3>
      <h3>INTENET OF THINGS</h3>
        <h3>EMBEDDED & IOT</h3>
          <h3>DESIGN VERIFICATION</h3>
    </div>
    <a href="/contact" class="btn btn-pink2">JOIN US</a>
  </div>
    <div class="courses-news1">
      <div class="box-1">
        <img class="news-img" src="@/assets/p14.png" />

        <h1>Why Qparams</h1>
        <P>
          Qparams is the only training institute
          where all the course contents are
         mentored by the working professionals
          from semiconductor industry.

        </P>
      </div>
      <div class="box-2">
        <img class="news-img" src="@/assets/p15.png" />

        <h1>Training Calendar</h1>
       <P>
          Qparams is the only training institute
          where all the course contents are
         mentored by the working professionals
          from semiconductor industry
        </P>
      </div>
      <div class="box-3">
        <img class="news-img" src="@/assets/p16.png" />

        <h1>Placement Update</h1>
       <P>
          Qparams is the only training institute
          where all the course contents are
         mentored by the working professionals
          from semiconductor industry
        </P>
      </div>
    </div>
    <div class="sub-heading">
      <div class="technology">
        <span class="special-color">
          <h1>Be a master in Technology</h1>
        </span>
        <h1>
          Qparam corp and private
          <br />Growth Accelerated
        </h1>
        <a href="#" class="btn btn-white">Join us</a>
      </div>
    </div>

    <div class="client-heading">
      <h1>OUR CLIENTS</h1>
      <div class="our-clients">
        <div class="client-img">
          <img class="box-img" src="@/assets/p18.png" />
        </div>
        <div class="client-box">
          <div class="box-5">
            <img class="google-img" src="@/assets/p19.png" />
          </div>

          <div class="box-5"></div>

          <div class="box-5"></div>

          <div class="box-5"></div>

          <div class="box-5">
            <img class="google-img" src="@/assets/p19.png" />
          </div>

          <div class="box-5"></div>

          <div class="box-51"></div>
          <div class="box-51"></div>
        </div>
      </div>
    </div>
    <div class="testimonials-heading">
      <h2>TESTIMONIALS</h2>
      <div class="testimonials-section">
        <div class="box-6">
          <b-row>
            <b-col sm="4">
              <img class="mision-img" src="@/assets/p2.png" />
              <h1>Mahendra</h1>
              <hr class="line" />

              <h3>Intel</h3>
            </b-col>
            <b-col sm="8">
              <p>
                "I got placed as Embedded Engineer in
               Qualcomm which is the most memorable
               moment of my life. Every Embedded Engineer would have dreamt of joining a
                company like Qualcomm but I was able to
               fulfill this dream with the immense
                support of Qparams."
              </p>
            </b-col>
          </b-row>
        </div>
        <div class="box-6">
          <b-row>
            <b-col sm="4">
              <img class="mision-img" src="@/assets/p2.png" />
              <h1>Hema M</h1>
              <hr class="line" />
              <span class="paragraf">
                <h3>Qualcomm</h3>
              </span>
            </b-col>
            <b-col sm="8">
              <p>
                "I got placed as Embedded Engineer in
               Qualcomm which is the most memorable
               moment of my life. Every Embedded Engineer would have dreamt of joining a
                company like Qualcomm but I was able to
               fulfill this dream with the immense
                support of Qparams."
              </p>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
    <div class="vision-qparams">
      <div class="qparams-img">
        <img class="qparams-logo" src="@/assets/p12.png" />
      </div>
      <div class="about-qparams">
        <p>
          <strong>Our vision</strong> it to create high quality pool of hardware engineers by
     giving practical industry level training to students. Covering the
          existing gap between industry requirement and exposure of students.
          Our certification Design Verification, Embedded, Cloud, IOT courses is
          structured to fill the gap that exist between the fresh graduates from
          colleges and the industry in terms of technical and soft skill
          requirements
        </p>
      </div>
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
.home-header {
  position: relative;
  background-image: linear-gradient(
      90deg,
      rgba(255, 158, 72, 0.34),
      rgba(54, 78, 97, 0.34)
    ),
    url("../../assets/p10.png");
  background-size: 100% 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.home-heading {
  position: relative;
}
.home-heading h1 {
  font-size: 5rem;
  text-align: left;
  padding: 10rem 0 1rem 10rem;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  text-shadow: 0px 3px 6px #0023957d;
  opacity: 1;
}

.home-heading h2 {
  text-align: left;
  padding-left: 10rem;
  font-size: 2rem;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0px;
  color: #ffffff;
  opacity: 1;
}
.btn {
  height: 3.2rem;
  width: 9rem;
}

.btn-pink {
  position: absolute;
  background: transparent linear-gradient(90deg, #ff9e48 0%, #c51d4a 100%) 0% 0%
    no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 22px;
  color: white;
  left: 84rem;
  bottom: 10rem;
  font-size: 1.3rem;
  width: 12rem;
  height: 4rem;
  padding: 1rem;
}

.home-heading p {
  padding: 1rem 0 1rem 10rem;
  font-size: 1.4rem;
  color: white;
  line-height: 1.8;
  opacity: 1;
}
.qparams-course {
  background-image: linear-gradient(
    to right bottom,
    rgba(0, 0, 0, 0.48),
    rgba(0, 0, 0, 0.48)
  );
  border-radius: 9px;
  margin: 3rem 0 8rem 10rem;
  width: 32rem;
  height: 8rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.qparams-box {
  margin: 1rem 0 0 0.5rem;
  width: 15rem;
  height: 3rem;
}
.qparams-box h3 {
  font-size: 1.2rem;
  color: #ffffff;
}
.extra-cource{
  display: none;
}
.courses-news1 {
  margin-top: 5rem;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
}
.box-1 {
  height: 28rem;
  width: 20rem;
  margin: 2rem;
  background-image: linear-gradient(180deg, #ffffff 50%, #4cbc49 50%);
  box-shadow: 0px 6px 9px #00000029;
  border-radius: 6px;
}
.box-2 {
  height: 28rem;
  width: 20rem;
  margin: 2rem;
  background-image: linear-gradient(180deg, #ffffff 50%, #c51d4a 50%);
  box-shadow: 0px 6px 9px #00000029;
  border-radius: 6px;
}
.box-3 {
  height: 28rem;
  width: 20rem;
  margin: 2rem;
  background-image: linear-gradient(180deg, #ffffff 50%, #ffa833 50%);
  box-shadow: 0px 6px 9px #00000029;
  border-radius: 6px;
}
.box-1 h1 {
  position: relative;
  text-align: center;
  font-size: 1.5rem;
  padding-top: 16rem;
  color: white;
}
.box-2 h1 {
  text-align: center;
  font-size: 1.5rem;
  padding-top: 16rem;
  color: white;
  text-shadow: 0px 3px 6px #198d16;
}
.box-3 h1 {
  text-align: center;
  font-size: 1.5rem;
  padding-top: 16rem;
  color: white;
  text-shadow: 0px 3px 6px #ef7305;
}
.box-1 p {
  position: relative;
  text-align: center;
  font-size: 1.1rem;
  color: white;
}
.box-2 p {
  position: relative;
  text-align: center;
  font-size: 1.1rem;
  color: white;
}
.box-3 p {
  position: relative;
  text-align: center;
  font-size: 1.1rem;
  color: white;
  text-shadow: 0px 0.5px 1px #b95700;
}
.news-img {
  height: 14.3rem;
  width: 20rem;
  float: left;
}
.sub-heading {
  margin-top: 5rem;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: url("../../assets/p17.png");
  background-size: 100% 100%;
  opacity: 0.9;
}
.technology {
  position: relative;
}
.technology .special-color h1 {
  font-size: 3rem;
  text-align: left;
  padding: 10rem 0 0 10rem;
  color: #d81d4a;
  font-family: "Open Sans", sans-serif;
  text-shadow: 0px 3px 6px #910b2b3d;
}
.sub-heading h1 {
  font-size: 2.5rem;
  text-align: left;
  padding: 2rem 0 3rem 10rem;
  line-height: 1.5;
  font-family: "Open Sans", sans-serif;
  color: #7a7a7a;
}

.btn-white {
  background: transparent linear-gradient(106deg, #ffffff 0%, #e6e6e6 100%) 0%
    0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 20px;
  opacity: 1;
  color: #3b68fc;
  margin: 2rem 0 10rem 10rem;
  font-size: 1.5rem;
  width: 12rem;
  height: 4rem;
  padding-top: 0.7rem;
}

.heading-second h1 {
  text-align: center;
  font-size: 1rem;
}

.project-img {
  height: 10rem;
  width: 20rem;
  margin-left: 1.5rem;
}

.client-heading {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: 0;
  position: relative;
  background: #f3f3f3 0% 0% no-repeat padding-box;
}
.client-heading h1 {
  text-align: left;
  padding-left: 10rem;
  padding-top: 5rem;
  font-size: 3rem;
  font-family: "Open Sans", sans-serif;
  letter-spacing: 0px;
  color: #ff9e48;
  text-shadow: 0px 3px 6px #0000001a;
  opacity: 1;
}
.our-clients {
  position: relative;
  background: #ffffff 0% 0% no-repeat padding-box;
  margin: 7rem 0 12rem 10rem;
  width: 92rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.client-img {
 
  width: 30rem;
  height: 20rem;
  margin: 5rem 0 5rem 0;
}
.box-img {
  width: 25rem;
  height: 19rem;
}
.client-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
 
  width: 45rem;
  height: 20rem;
  margin: 5rem 0 5rem 0;
}
.box-5 {
  height: 8rem;
  width: 8rem;
  background: transparent linear-gradient(135deg, #e6e6e6 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 18px 25px 25px #dfdfdf8a;
  border: 1px solid #707070;
  border-radius: 15px;
  margin: 0 1rem 0 1rem;
}
.box-51 {
  height: 8rem;
  width: 8rem;
  background: transparent linear-gradient(135deg, #e6e6e6 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
  box-shadow: 18px 25px 25px #dfdfdf8a;
  border: 1px solid #707070;
  border-radius: 15px;
  margin: 0 1rem 0 1rem;
}
.google-img {
  width: 6rem;
  height: 4rem;
  margin: 2rem 0 0 1rem;
}
.testimonials-heading {
  background: #fcac66 0% 0% no-repeat padding-box;
}
.testimonials-heading h2 {
  text-align: center;
  color: #ffffff;
  font-family: "Open Sans", sans-serif;
  padding-top: 5rem;
  font-size: 2.4em;
}
.testimonials-section {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  border: 6px solid #fcac66;
  opacity: 1;
}
.box-6 {
  width: 32rem;
  height: 20rem;
  background-color: #ffffff;
  margin: 3rem 3rem 10rem 3rem;
  box-shadow: 0px 8px 0px #017efc;
  border: 1px solid #7070702b;
  border-radius: 19px;
}

.box-6 img {
  border-radius: 50%;
  width: 8rem;
  height: 9rem;
  margin-left: 2rem;
  margin-top: 2rem;
}
.box-6 h1 {
  text-align: left;
  font-size: 1.2rem;
  padding-top: 3rem;
  padding-left: 2rem;
  letter-spacing: 0px;
  color: #364e61;
}
.box-6 h3 {
  text-align: left;
  font-size: 1rem;
  padding-top: 0.1rem;
  padding-left: 2rem;
  color: #364e61;
  opacity: 1;
}
.box-6 p {
  text-align: left;
  font-size: 1.1rem;
  letter-spacing: 0px;
  padding: 2.5rem .5rem 0 0;
  color: #364e61;
  opacity: 1;
}
.line {
  background: #364e61;
  width: 70%;
  margin-left: 2rem;
}

.vision-qparams {
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 2rem;
}
.qparams-logo {
  width: 18rem;
  height: 9rem;
}
.qparams-img {
  margin: 4rem 2rem 2rem 2rem;
}
.about-qparams{
  width: 50rem;
}
.about-qparams p {
  text-align: left;
  padding-left: 2rem;
  font-size: 1.4rem;
  font-style: Italic;
  line-height: 2.2;
  letter-spacing: 0px;
  color: #7a7a7a;
}

@media screen and (max-width: 800px) {
  .home-header {
    position: relative;
  }
  .home-heading h1 {
    font-size: 1.8rem;
     padding: 4rem 0 1rem 2rem;
  }
  .home-heading h2 {
    padding-left: 2rem;
    font-size: 1.3rem;
  }
  .home-heading p {
    font-size: 1rem;
    line-height: 1.5;
    padding:0 0 1rem 2rem;
  }
  .qparams-course {
 display: none;
}
 
  .btn-pink {
    display: none;
  }
  .extra-cource{
    margin-top: 3rem;
 position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: center;
}
.cource-background{
  width: 18rem;
  height: 15rem;
  background: #535353;
  border-radius:9px ;
}
.cource-background h3{
  padding: 1.1rem 0 .5rem 0;
 font-size: 1.2rem;
 color: #fff;
 text-align: center;
}
.btn-pink2 {
  
  background: transparent linear-gradient(90deg, #ff9e48 0%, #c51d4a 100%) 0% 0%
    no-repeat padding-box;
  border: 1px solid #ffffff;
  border-radius: 9px;
  margin-top: 4rem;
  color: white;
  font-size: 1rem;
  width: 18rem;
  padding: .8rem;
}
  .courses-news1 {
    margin-top: 3rem;
  }
  .box-1 {
    height: 27rem;
  width: 18rem;
    margin: 1rem;
     background:#4cbc49 ;
  }
  .box-1 h1 {
  padding-top: 13rem;
  color: white;
}
.box-1 p {
 padding: 1rem .5rem 0 .5rem;
  font-size: 1.1rem;
  color: white;
}
.box-2 {
  margin: 3rem 0 3rem 0;
  height: 27rem;
  width: 18rem;
    margin: 1rem;
     background:#c51d4a;
  }
  .box-2 h1 {
  padding-top: 13rem;
  color: white;
}
.box-2 p {
 padding: 1rem .5rem 0 .5rem;
  font-size: 1.1rem;
  color: white;
}
.box-3 {
  height: 27rem;
  width: 18rem;
    margin: 1rem;
     background:#ffa833;
  }
  .box-3 h1 {
  padding-top: 13rem;
  color: white;
}
.box-3 p {
 padding: 1rem .5rem 0 .5rem;
  font-size: 1.1rem;
  color: white;
}
  .news-img {
  height: 10.3rem;
  width: 18rem;
  float: left;
}
  .sub-heading {
    margin-top: 0;
    position: relative;
  }
  .technology {
position: relative;
  }
  .sub-heading .special-color h1 {
    font-size: 1rem;
    text-align: left;
    padding-left: 1rem;
    color: #d81d4a;
    text-shadow: 0px 3px 6px #910b2b3d;
  }
 .technology .special-color h1 {
  font-size: 1.4rem;
  text-align: left;
  padding: 4rem 0 0 3rem;
  
}
  .sub-heading h1 {
  font-size: 1.2rem;
  text-align: left;
  padding: 0 0 8rem 3rem;
  line-height: 1.3;
  
}
.btn-white {
  border-radius: 9px;
  position: absolute;
    top:80%;
    left: 53%;
      transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  font-size: 1rem;
  width: 12rem;
  height: 3rem;
  margin: 0;
  padding-top: 0.7rem;
}
  .client-heading h1 {
    text-align: center;
    padding-left: 3rem;
    padding-top: 2rem;
    font-size: 1.3rem;
  }
  .our-clients {
  position: relative;
  background: #ffffff 0% 0% no-repeat padding-box;
  margin: 1rem 0 3rem 0;
  height:13rem;
  justify-content: none;
 
}
.client-img {
  width: 38%;
  height: 60%;
  margin: 3rem 0 0 0;
}
.box-img {
  width: 100%;
  height: 100%;
}
.client-box {
  width: 60%;
  height: 60%;
  margin: 3rem 0 0 0;
}
  .box-5 {
    height:34%;
    width: 25%;
    border-radius: 9px;
    margin:.5rem .5rem 0 .5rem;
  }
  .box-51 {
   display: none;
  }
  .google-img {
  width: 2rem;
  height: 1rem;
  margin: 0;
}
  .testimonials-section {
    margin-top: 1rem;
    flex-direction: row;
    position: relative;
  }
  .testimonials-heading h2 {
    padding-top: 2rem;
    font-size: 1.5rem;
  }
  .box-6 {
    position: relative;
    width: 30rem;
    height: 26rem;
     margin: 1rem .5rem 2rem 1rem;
    
  }
  .line {
    width: 25%;
    position: absolute;
    top:77%;
    left: 45%;
      transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  }

  .box-6 img {
    position: absolute;
    top:35%;
    left: 53%;
      transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
    border-radius: 50%;
    width: 6rem;
    height: 6rem;
    margin: 0;
  }
  .box-6 h1 {
    text-align: center;
    font-size: 1.2rem;
    padding-top: 9rem;
    
  }
  .box-6 p {
    text-align: center;
    font-size: 1rem;
    padding: 0.1rem 1rem .5rem 1rem;
  }
  .mision-img {
    width: 3rem;
    height: 2rem;
  }
  .box-6 h3 {
    text-align: center;
    padding-top: 0;
    
  }
  .vision-qparams {
    margin-top: 0.5rem;
  }
  .about-qparams p {
    line-height: 1.8;
    text-align: left;
    padding-left: 0.5rem;
    font-size: 1.1rem;
  }
}
</style>