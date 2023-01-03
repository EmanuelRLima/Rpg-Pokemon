<template>
<div class="background_campo" style="height:100vh">
    <div class="d-flex justify-content-center">

      <div class="position_layout_grid">
        <div class="nav_layout">
          <button class="Button_pokedex"></button> 
          <button class="Button_pokedex_mini first"></button> 
          <button class="Button_pokedex_mini second"></button> 
          <button class="Button_pokedex_mini third"></button>  
        </div>
        <div class="screen_layout_grid">
          <div class="screen_poke background_scren">
            <img style="width: 100%; height: 100%; object-fit: contain;" :src="pokemon_img">
          </div>
        </div>
        <div class="left_nav_layout_grid"></div>
        <div class="footer_layout_grid">

          <div class="search_poke_grid">
              <button style="width: 35px;height: 50px;border-radius: 4px;border: 1px solid rgba(0, 0, 0, 0.38);" @click="Get_Pokemon();"><i class="fa fa-search"></i></button>
              <InputText v-model="pokemon" class="search_poke" placeholder="pokemon"/>
          </div>

          <div class="joystic">
            <button class="joystic_up"><i class="fa fa-arrow-up"></i></button>
            <button class="joystic_left"><i class="fa fa-arrow-up" @click="Get_Pokemon_id(2)"></i></button>
            <button class="joystic_down"><i class="fa fa-arrow-up"></i></button>
            <button class="joystic_right" @click="Get_Pokemon_id(1)"><i class="fa fa-arrow-up"></i></button>
          </div>
        </div>
      </div>
    </div>
</div> 
</template>
<script>

import { AxiosAPI } from "@/axios";
import "../assets/css/pokedex.css"
import img_wait from "../assets/img/Aguardando.png"
export default {
  name: "App",
  components: {
  },  
  data() {
    return {
      pokemon_id: 0,
      pokemon: "",
      pokemon_img: img_wait,
    };
  },

  mounted() {
  },

  methods: {
    Get_Pokemon(){
      AxiosAPI.get("pokemon/" + this.pokemon.toLowerCase())
      .then((resp) =>{
        console.log(resp)
        this.pokemon_img = resp.data.sprites.other.home.front_default
        this.pokemon_id = resp.data.id
      })
    },

    Get_Pokemon_id(id){
      if(id == 1){
        this.pokemon_id = this.pokemon_id + 1
      }
      else if(id == 2){
        this.pokemon_id = this.pokemon_id - 1
      }else if(id == 3){
        return
      }
      AxiosAPI.get("pokemon/" + this.pokemon_id)
      .then((resp) =>{
        console.log(resp)
        this.pokemon_img = resp.data.sprites.other.home.front_default
        this.pokemon_id = resp.data.id
      })
    },
  },
};

</script>