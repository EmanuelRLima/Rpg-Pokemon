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

          <div class="infos_grid">
            <div class="info_pokemon">
              <span class="number_pokemon mr-3"> Number: {{ pokemon_id }} </span><br/>
              <span class="type_main_poke mr-3"> Type: {{ type_main_poke }} </span><br/>
              <span class="hp_pokemon mr-3">Hp start: {{ hp_pokemon }} </span><br/>
              <span class="atack_pokemon mr-3">Atack start: {{ atack_pokemon }} </span><br/>
              <span class="defese_pokemon">Defense start: {{ defese_pokemon }} </span>
            </div>
          </div>

          <div class="buttons_info_poke">
            <button class="d-flex details_one mt-3 mb-3"><span style="width: 85px;" class="d-flex justify-content-center"> More </span></button>
            <button class="d-flex details_two"><span style="width: 85px;" class="d-flex justify-content-center"> Stats </span></button>
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
      type_main_poke: "Aguarde...",
      hp_pokemon: "Aguarde...",
      atack_pokemon: "Aguarde...",
      defese_pokemon: "Aguarde..."
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
        this.type_main_poke = resp.data.types[0].type.name
        this.hp_pokemon = resp.data.stats[0].base_stat
        this.atack_pokemon = resp.data.stats[1].base_stat
        this.defese_pokemon = resp.data.stats[2].base_stat
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
        this.type_main_poke = resp.data.types[0].type.name
        this.hp_pokemon = resp.data.stats[0].base_stat
        this.atack_pokemon = resp.data.stats[1].base_stat
        this.defese_pokemon = resp.data.stats[2].base_stat
      })
    },
  },
};

</script>