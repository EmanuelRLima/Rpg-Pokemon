<template>
<div class="background_campo" style="height:100vh">
    <div class="pokedex_smart d-flex justify-content-center">
      
        <div class="position_poke">
          <img :src="pokemon_image" style="width: 240px;height: 240px;">  
        </div>
        

        <div class="position_button_search">
            <button type="button" class="btn rounded btn-success widht_button" @click="Get_poke();">Pesquisar</button>
        </div>

        <div class="position_search">

            <span>
                <InputText v-model="pokemon" type="text" class="widht_search"  placeholder="Pokémon" />
            </span>

        </div>
    </div> 
</div> 
</template>
<script>

import { AxiosAPI } from "@/axios";

export default {
  name: "App",
  components: {
  },  
  data() {
    return {
        pokemon: "pikachu",
        pokemon_image: "",
    };
  },

  mounted() {
  },
  methods: {
  Get_poke(){

    AxiosAPI
        .get("/pokemon/" + this.pokemon)
            .then((resp) => {
             console.log(resp.data.sprites.other.home.front_default)
             this.pokemon_image = resp.data.sprites.other.home.front_default
            })
  },
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

.pokedex_smart {
background-image: url("../assets/img/pokedex_smart.png");
background-repeat:no-repeat;
background-size:contain;
background-position:center;
height:80vh
}
.position_poke{
    position: absolute;
    top: 22%;
    left: 31%;
    margin-right: -50%;
    transform: translate(0%, 0%);
}
.position_button_search{
    position: absolute;
    top: 56%;
    left: 30%;
    margin-right: -50%;
    transform: translate(0%, 50%);
}

.position_search{
    position: absolute;
    top: 59%;
    left: 27%;
    margin-right: -50%;
    transform: translate(0%, 50%);
}
.widht_search{
    width: 230px;
    height: 100px;
}

@media only screen and (max-width: 1650px) {
    .position_search{
    left: 23%;
}
.position_button_search{
    top: 56%;
    left: 27%;
    transform: translate(-6%, 50%);
}
}

@media only screen and (max-width: 1370px) {
    .position_search{
    left: 21%;
    transform: translate(5%, 50%);
}
.position_button_search{
    top: 55%;
    left: 27%;
    transform: translate(-6%, 55%);
}
.widht_button{
    width: 80px;
    padding-left:0.5rem!important
}
.widht_search{
    height: 80px;
    width: 220px;
}
}

@media only screen and (max-width: 1290px) {
    .position_search{
    left: 22%;
    top: 60%;
    transform: translate(5%, 50%);
}
    .widht_search{
    height: 70px;
    width: 190px;
}
.position_button_search{
    transform: translate(-10%, 55%);
}

}

@media only screen and (max-width: 480px) {
    .position_search{
    left: 5%;
    top: 52%;
}
    .widht_search{
    height: 40px;
    width: 105px;
}
.position_button_search{
    top: 48%;
    left: 13%;
    transform: translate(-10%, 85%);
}

.widht_button{
    padding-left:0.4rem!important;
    font-size: 7px;
    width: 45px;
    height: 25px;
}

}
</style>