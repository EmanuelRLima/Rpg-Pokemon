<template>
  <div>
    <div class="form">
      <label>Nome do pokemon:</label>
      <input
        style="
          text-align: center;
          border-bottom: 4px solid black;
          background-color: #f1f3f5;
          padding: 8% 0 0 0;
        "
        type="text"
        required
        v-model="form.name"
      />
    </div>
    <div
      class="button Search"
      @click="
        GetPokemon();
        ModalPoke();
      "
    >
      <span class="text-black regular-font">Procurar</span>
    </div>

    <ModalBig ref="PokePreview">
      <template v-slot:header>
        <div>
          <span class="size"
            >Pokemon selecionado: <b>{{ form.name }}</b></span
          >
        </div>
        <button
          @click="$refs.PokePreview.closeModal()"
          style="
            margin-right: 35px;
            float: right;
            font-size: 30px;
            width: 63px;
            height: 56px;
            color: rgb(134, 142, 150);
            background-color: #d9d9d9;
          "
        >
          X
        </button>
      </template>

      <template v-slot:body>
        <div>
          <div>
            <img :src="poke.ImagePoke" class="pokebox" />
          </div>
        </div>
      </template>
    <template v-slot:footer>
        <div>
            <vue-table-dynamic :params="table" ref="table">
              <template>
                <div class="myrow"></div>
              </template>
            </vue-table-dynamic>
          </div>
    </template>
    </ModalBig>
  </div>
</template>

<script>
import { getAPI } from "@/axios-api";
import ModalBig from "../ModalBig.vue";
import VueTableDynamic from "vue-table-dynamic";

export default {
  data: () => {
    return {
      form: {
        name: null,
      },
      poke: {
        ImagePoke: "",
      },
      table: {
        data: "",
        header: "row",
        border: false,
        stripe: true,
        enableSearch: false,
        pagination: false,
        pageSize: 30,
        textOverflow: "ellipsis",
        pageSizes: [10, 20, 50],
      },
    };
  },
  components: {
    ModalBig,
    VueTableDynamic,
  },
  methods: {
    GetPokemon() {
      let pokemon = this.form.name.toLowerCase();

      getAPI
        .get("/pokemon/" + pokemon)
        .then((response) => {
          let data_array = [];
          data_array.push(["Habilidade", "Quantidade"]);
          let skills = response.data.abilities;
          for (var i = 0; i < skills.length; i++) {
            let skill = skills[i];

            let array_skills = [skill.ability.name, skill.slot];
            data_array.push(array_skills);
          }
          this.table.data = data_array;
        })
        .catch((err) => {
          console.log(err);
        });

      getAPI.get("/pokemon/" + pokemon).then((response) => {
        let ImagePoke = response.data.sprites.other.home.front_default;
        this.poke.ImagePoke = ImagePoke;
      });
    },

    ModalPoke() {
      this.$refs.PokePreview.openModal();
    },
  },
};
</script>

<style>
.pokebox {
  width: 25rem;
  padding: 1.5rem 0rem 0.5rem 3rem;
  left: 30%;
  position: relative;
}
@media screen and (max-width: 992px) {
  .pokebox {
    width: 50rem;
    left: 0%;
  }
  .is-header,
  .v-table-row {
    font-size: 65px;
    height: 110px !important;
  }
  .size {
    font-size: 50px;
  }
  .form {
    width: 100%;
    height: 500px;
    padding: 50% 0 0 0;
    font-size: 80px;
    text-align: center;
  }
  .button {
    width: 60rem !important;
    font-size: 100px;
    transform: translate(-50%, 400%) !important;
  }
}

.button {
  text-align: center;
  width: 30rem;
  padding: 1.5rem 0rem 1.5rem 0rem;
  border-radius: 10px;
  color: #fff;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 100%);
}
.button:hover {
  cursor: pointer;
}
.button-icon {
  padding: 0.5rem;
  border-radius: 5px;
  border: solid 1px rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 3px #888888;
  background-color: #c6cbce;
}
.button-icon:hover {
  transform: scale(1.05);
  cursor: pointer;
}
.Search {
  background: rgba(255, 123, 0, 0.8);
}
</style>
