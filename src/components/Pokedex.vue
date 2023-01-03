<template>
<div class="background_campo" style="height:100vh">
    <div class="d-flex justify-content-center">

      <div class="position_layout_grid">
        <div class="nav_layout_grid"></div>
        <div class="left_nav_layout_grid"></div>
        <div class="screen_poke"></div>
        <div class="middle_layout_grid"></div>
      </div>
    </div>
</div> 
</template>
<script>

//import { AxiosAPI } from "@/axios";

export default {
  name: "App",
  components: {
  },  
  data() {
    return {

    };
  },

  mounted() {
  },
  methods: {
 
  },
};

</script>
<style>
.background_campo {
  background-image: url("../assets/img/campo_poke.jpg");
  background-repeat:no-repeat;
  background-size:contain;
  background-position:center;
  background-size: cover;
}

.position_layout_grid{
  position: absolute;
  top: 0%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 5%);
  box-shadow: rgb(0 0 0 / 75%) 0px 20px 45px, rgb(0 0 0 / 28%) 0px 16px 15px;
  width: clamp(min(2vw, 3rem), 490px, max(80vw, 17rem)); 
  height: clamp(min(1vw, 3rem), 720px, max(49vw, 42rem)); 
  background-color: #DC0A2D; border-radius: 2%;
}

.nav_layout_grid{
  position: absolute;
  top: 0%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0%);
  width: 100%; 
  height: clamp(min(1vw, 3rem), 80px, max(49vw, 34rem)); 
  border-bottom: 6px double;
}
.left_nav_layout_grid{
  position: absolute;
  top: 11%;
  left: 95%;
  margin-right: 0%;
  transform: translate(-50%, 0%);
  width: 10%;
  border-left: 6px double;
  height: clamp(min(1vw, 3rem), 639px, max(49vw, 37.4rem));
}

.middle_layout_grid{
  position: absolute;
  top: 52%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, 0%);
  width: 100%;
  height: clamp(min(1vw, 3rem), 80px, max(49vw, 34rem));
  border-bottom: 6px double;
}

.screen_poke{
  position: absolute;
  top: 12.5%;
  left: 45%;
  margin-right: 0%;
  transform: translate(-50%, 0%);
  width: 90%;
  height: clamp(min(1vw, 3rem), 350px, max(49vw, 20.5rem));
}

</style>