<template>
  <div class="main-header">
    <div id="app">
      <nav-bar msg="String"></nav-bar>
    </div>

    <template id="navBar">
      <b-navbar class="navbar navbar-light bg-dark" toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand class="navbar-brand" @click="goTo('')">
          <img class="main-logo" src="@/assets/p1.png" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="navbarSupportedContent" class="nav-item ml-auto">
            <b-nav-item @click="goTo('')"><span :class="active('/')">HOME</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('about')"><span :class="active('/about')">ABOUT</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('courses')"><span :class="active('/courses')">COURSES</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('news')"><span :class="active('/news')">NEWS EVENTS</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('placement')"><span :class="active('/placement')">PLACEMENTS</span></b-nav-item>
            <hr class="line1" />
            <b-nav-item @click="goTo('contact')"><span :class="active('/contact')">CONTACT</span></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </template>
  </div>
</template>
 
<script>
export default {
  data() {
    return {};
  },
  mounted(){
    console.log(this.$route.path);
  },
  methods: {
    goTo(page) {
      let path = "/" + page;
      this.$router.push({
        path: path
      });
    },
    active(page){
      if(this.$route.path === page)
      return 'active'
    }
  }
};
</script>
<style scoped>
.active{
   width: 80%;
  padding:.8rem 1rem .8rem 1rem;
  color: #FFFFFF;
  background: transparent linear-gradient(107deg, #B8B8B8 0%, #7A7A7A 100%) 0% 0% no-repeat padding-box;
border-radius: 7px;
opacity: 1;
 
}
.navbar-dark .navbar-nav .nav-link {
  color: #364E61;
  margin: 0 2rem 0rem 1rem;
font-size: .9rem;
  
}
.navbar-dark .navbar-nav .nav-link:hover {
  color: #364E61;
  background: transparent linear-gradient(107deg, #B8B8B8 0%, #7A7A7A 100%) 0% 0% no-repeat padding-box;
border-radius: 7px;
opacity: 1;
 
}
.main-logo {
  width: 10rem;
  margin: 0 0 0 3rem;
}

.bg-dark {
  background-color: #fff !important;
}  

@media (min-width: 992px){
.navbar-expand-lg .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
    margin-right:3rem;
}
}
@media screen and (max-width: 800px) {
  .line1 {
    width: 100%;
     color: #264556;
    background: #264556;
  }
  .navbar-dark .navbar-nav .nav-link {
    color: white !important;
    text-align: center;
  }
  .navbar-dark .navbar-nav .nav-link:hover {
    color: white;
    background: none;
    padding: 0;
    width: none;
    border-radius: none;
  }
  .navbar-dark .navbar-nav .nav-link:active {
    color: white;
    background: none;
    border: none;
    border-radius: none;
  }
  .bg-dark {
    background-color: #000726 !important;
  }

  .navbar-light .navbar-toggler {
    color: white;
    width: 3.4rem;
    height: 2.4rem;
    border: 1.5px solid white;
  }
  .main-logo {
    width: 7rem;
    margin: 0 0 0 1rem;
  }
  ::v-deep .nav-link {
   color: #fff!important;
   font-family: "Open Sans", sans-serif;
font-size: 1.2rem;
margin: 0 3rem 0 3rem;
}
}
</style>
 
 
 
 
 
 
 
