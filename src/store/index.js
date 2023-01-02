import Vuex from "vuex";
import {AxiosAPI} from "@/axios"



export default new Vuex.Store({
  state: {
    user: {},
  },

  mutations: {

    UpdateUser(state, object){
      state.user = object.data
    },
   
  },
  
  actions: {  
      DadosUser(context){
        return new Promise((resolve, reject) => {
          AxiosAPI.get("/user", {
            headers: {
                Authorization: `Bearer `+ this.state.accessToken
            }
          })
            .then(resp => {
              context.commit("UpdateUser", resp);
              resolve(resp);
            })
            .catch(err => {
              console.log(err);
              reject(err);
            });
        });
      },      
  },

});