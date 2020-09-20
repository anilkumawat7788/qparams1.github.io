<template>
  <div class="main-container">
    <headers />
    <div class="courses-news">
      <div class="news-heading">
        <h2>NEWS & EVENTS</h2>
      </div>
      <div class="slider">
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <b-carousel-slide>
            <div class="technology-heading">
              <h3>Nano Technology New updates on fire</h3>
              <p>Indian institute of Technology is invented new technology</p>
              <div class="btn-section">
                <a
                  href="https://eandt.theiet.org/content/articles/2020/07/us-army-lab-finds-safeguards-for-quantum-communications/"
                  class="btn btn-explore"
                >Explore more>></a>
              </div>
            </div>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="900"
                height="300"
                src="../../assets/p20.png"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide>
            <div class="technology-heading">
              <h3>Nano Technology New updates on fire</h3>
              <p>Indian institute of Technology is invented new technology</p>
              <div class="btn-section">
                <a
                  href="https://eandt.theiet.org/content/articles/2020/07/us-army-lab-finds-safeguards-for-quantum-communications/"
                  class="btn btn-explore"
                >Explore more>></a>
              </div>
            </div>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="../../assets/p20.png"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>
      </div>
    </div>
    <div class="heading-second">
      <h1>Suggested Topics</h1>
    </div>
    <div class="courses-news1">
      <div class="box-1">
        <a href="#">
          <img class="news-img" src="@/assets/p6.png" />
        </a>
        <h1>Technology</h1>
      </div>
      <div class="box-1">
        <a href="#">
          <img class="news-img" src="@/assets/p6.png" />
        </a>
        <h1>Job vacancies</h1>
      </div>

      <div class="box-1">
        <a href="#">
          <img class="news-img" src="@/assets/p6.png" />
        </a>
        <h1>Entertainment</h1>
      </div>
    </div>
    <div class="courses-news2">
      <div class="news-box">
        <b-row>
          <b-col sm="3">
            <img class="news-img1" src="@/assets/p9.jpg" />
          </b-col>
          <b-col sm="6">
            <h3>
              US Army Lab finds safeguards
              <br />for quantum communications
              <br />
              <br />
              <span class="spical-news">Uploaded 27 July 2020 12.30pm</span>
            </h3>

            <p>Quantum information science is a rapidly growing interdisciplinary field exploring new ways of storing, manipulating and communicating information. Researchers aim to...</p>
            <a
              href="https://eandt.theiet.org/content/articles/2020/07/us-army-lab-finds-safeguards-for-quantum-communications/"
            ></a>
          </b-col>
          <b-col sm="3">
            <span class="spical-icon1">
              <a href="#">
                <b-icon icon="bookmark"></b-icon>
              </a>
            </span>
            <span class="spical-icon2">
              <a href="#">
                <b-icon icon="reply-fill"></b-icon>
              </a>
            </span>
            <a
              href="https://eandt.theiet.org/content/articles/2020/07/us-army-lab-finds-safeguards-for-quantum-communications/"
              class="btn btn-read"
            >View Details</a>
          </b-col>
        </b-row>
      </div>

      <div class="news-box">
        <b-row>
          <b-col sm="3">
            <img class="news-img1" src="@/assets/p9.jpg" />
          </b-col>
          <b-col sm="6">
            <h3>
              US Army Lab finds safeguards
              <br />for quantum communications
              <br />
              <br />
              <span class="spical-news">Uploaded 27 July 2020 12.30pm</span>
            </h3>

            <p>Quantum information science is a rapidly growing interdisciplinary field exploring new ways of storing, manipulating and communicating information. Researchers aim to...</p>
            <a
              href="https://eandt.theiet.org/content/articles/2020/07/us-army-lab-finds-safeguards-for-quantum-communications/"
            ></a>
          </b-col>
          <b-col sm="3">
            <span class="spical-icon1">
              <a href="#">
                <b-icon icon="bookmark"></b-icon>
              </a>
            </span>
            <span class="spical-icon2">
              <a href="#">
                <b-icon icon="reply-fill"></b-icon>
              </a>
            </span>
            <a
              href="https://eandt.theiet.org/content/articles/2020/07/us-army-lab-finds-safeguards-for-quantum-communications/"
              class="btn btn-read"
            >View Details</a>
          </b-col>
        </b-row>
      </div>
    </div>
    <section class="table">
      <h1>Latest Placement Updates</h1>
      <div class="table-upadat">
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </div>
      <footers />
    </section>
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
      // Note `isActive` is left out and will not appear in the rendered table
      fields: ["Name", "Designation", "Company_Name"],
      items: [
        {
          isActive: true,
          Name: "Dickerson",
          Designation: "VLSI Developer",
          Company_Name: "Intel Corporation"
        },
        {
          isActive: false,
          Name: "Larsen",
          Designation: "VLSI Developer",
          Company_Name: "Intel Corporation"
        },
        {
          isActive: false,
          Name: "Geneva",
          Designation: "VLSI Developer",
          Company_Name: "Intel Corporation"
        },
        {
          isActive: true,
          Name: "Jami",
          Designation: "VLSI Developer",
          Company_Name: "Intel Corporation"
        },
        {
          isActive: true,
          Name: "Jami",
          Designation: "VLSI Developer",
          Company_Name: "Intel Corporation"
        },
        {
          isActive: false,
          Name: "Larsen",
          Designation: "VLSI Developer",
          Company_Name: "Intel Corporation"
        },
        {
          isActive: false,
          Name: "Geneva",
          Designation: "VLSI Developer",
          Company_Name: "Intel Corporation"
        },
        {
          isActive: true,
          Name: "Jami",
          Designation: "VLSI Developer",
          Company_Name: "Intel Corporation"
        }
      ]
    };
  }
};
</script>
<style scoped>
.img-fluid {
  width: 40rem;
  height: 26rem;
  background: #017efc;
}
.courses-news {
  background: #017efc 0% 0% no-repeat padding-box;
  display: flex;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  opacity: 1;
}

.news-heading h2 {
  text-align: center;
  color: white;
  padding-top: 3rem;
  padding-bottom: 2rem;
  font-size: 2rem;
}
.slider {
  height: 24rem;
  width: 55rem;
  margin: 1rem 0 4rem 0;
}
.technology-heading {
  position: relative;
}
.technology-heading h3 {
  font-size: 1.3rem;
  color: #fff;
  text-align: left;
  padding: 1rem 0 0 0;
}
.technology-heading p {
  font-size: 0.9rem;
  color: #fff;
  text-align: left;
  padding: 0 0 14rem 0;
}
.btn-explore {
  font-size: 1rem;
  color: #0052b8;
  margin: 0 0 1rem 33rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 6px;
}
.courses-news1 {
  background: #f8f8f8 0% 0% no-repeat padding-box;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  opacity: 1;
}
.heading-second h1 {
  text-align: center;
  font-size: 2rem;
  padding-bottom: 3rem;
  padding-top: 5rem;
}
.box-1 {
  height: 15rem;
  width: 20rem;
  margin: 2rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 9px #00000029;
  border-radius: 6px;
}
.box-1 h1 {
  text-align: center;
  font-size: 1.5rem;
}
.news-img {
  height: 13rem;
  width: 20rem;
  float: left;
}
.latest-news {
  margin-top: 9rem;
}
.courses-news2 {
  margin-top: 9rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.news-box {
  position: relative;
  width: 75rem;
  height: 20rem;
  margin: 2rem;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 6px 9px #00000026;
  opacity: 1;
}
.news-box img {
  float: left;
}
.news-img1 {
  width: 17rem;
  height: 20rem;
  float: left;
}
.news-box h3 {
  text-align: left;
  font-size: 1.5rem;
  padding-top: 1.5rem;

  letter-spacing: 0px;
}
.spical-news {
  font-size: 1rem;
  text-align: left;
  padding-top: 0.1rem;
}
.news-box p {
  text-align: left;
  font-size: 1.2rem;
  padding-top: 1.5rem;

  letter-spacing: 0px;
}
.btn {
  height: 2.5rem;
  width: 9rem;
}
.btn-read {
  background: #ff9e48 0% 0% no-repeat padding-box;
  border-radius: 5px;
  color: white;
  margin-left: 2.5rem;
  margin-top: 16rem;
}
.news-box .spical-icon1 {
  position: absolute;
  padding-top: 1rem;
  padding-left: 9rem;
  font-size: 2rem;
  color: black;
}
.news-box .spical-icon2 {
  position: absolute;
  padding-top: 8rem;
  padding-left: 9rem;
  font-size: 2rem;
  color: black;
}
.table {
  margin-top: 5rem;
}
.table h1 {
  text-align: center;
  font-size: 2.5rem;
  letter-spacing: 0px;
  color: #7a7a7a;
}
.table-upadat {
  width: 80vw;
  margin-left: 10rem;
}

@media screen and (max-width: 800px) {
  .img-fluid {
    width: 90%;
    height: 16rem;
    background: #017efc;
  }
  .courses-news {
    width: auto;
  }

  .news-heading h2 {
    font-size: 1.5rem;
  }
  .slider {
    height: 16rem;
    width: 90%;
    margin: 1rem 0 2rem 0;
  }
  .technology-heading {
    position: relative;
  }
  .technology-heading h3 {
    font-size: 0.8rem;
    padding: 1rem 0 0 0;
  }
  .technology-heading p {
    font-size: 0.7rem;

    padding: 0 0 4rem 0;
  }
  .btn-explore {
    font-size: 0.8rem;

    margin: 0 0 1rem 1rem;
    background: #ffffff 0% 0% no-repeat padding-box;
  }
  .heading-second h1 {
    font-size: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .courses-news1 {
    margin-top: 1rem;
  }
  .box-1 {
    height: 15rem;
    width: 20rem;
    margin: 2rem;
  }
  .courses-news2 {
    position: relative;
    margin-top: 2rem;
    flex-direction: row;
  }
  .news-box {
    position: relative;
    width: 75rem;
    height: 30rem;
    margin: 2rem 1rem 1rem 1rem;
  }
  .news-img1 {
    width: 20.5rem;
    height: 10rem;
  }
  .news-box h3 {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0 0 1rem;
  }
  .spical-news {
    font-size: 0.8rem;
    text-align: left;
  }
  .news-box p {
    text-align: left;
    font-size: 1rem;
    padding: 1rem 0 0 1rem;
  }
  .btn-read {
    width: 20rem;
    margin: 0 0.1rem 0.5rem 0.1rem;
  }
  .spical-icon1 {
    display: none;
  }
  .spical-icon2 {
    display: none;
  }
  .table {
    margin-top: 2rem;
  }
  .table h1 {
    font-size: 1.5rem;
  }
  .table-upadat {
    width: auto;
    margin: 1rem 1rem 1rem 1rem;
  }
}
</style>