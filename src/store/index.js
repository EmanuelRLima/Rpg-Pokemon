import Vuex from "vuex";
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";
import {AxiosAPI} from "@/axios"
import Cookie from "js-cookie"



export default new Vuex.Store({
  state: {
    user: {},
    userAll:{},
    userAllE: {},
    session: {},
    sessionstory: {},
    quorum_state: null,
    notific: false,
    discut: false,
    Discut_User: null,
    votedlegenda: false,
    tribuna: false,
    status_tribune: 0,
    tribuna_id: 0,
    doctrue: null,
    accessToken: null,
    expiresIn: null,
    tokenType: null,
    secretaria: false,
    vereador: false,
    presidente: false,
    document: null,
    docat: '',
    voted: false,
    in_tribuna: false,
    votachion: [],
    favorable: 0,
    against: 0,
    vista: 0,
    in_quorum: false,
    quorum_size: 0,
    hideConfigButton: false,
    isPinned: true,
    showConfig: false,
    isRTL: false,
    color: "",
    sidebarType: "bg-white",
    darkMode: false,
    isNavFixed: false,
    isAbsolute: false,
    showNavs: true,
    showSidenav: true,
    showNavbar: true,
    showFooter: true,
    showMain: true,
    layout: "default",
    bootstrap,
  },

  mutations: {

    UpdateToken(state, object ) {
      state.accessToken = object.token;
    },
    Logado(state){
      console.log(state)
    },
    UpdateUser(state, object){
      state.user = object.data
    },
    DocEnvio(state, object){
      state.doctrue = object
    },
    UpdateUserAll(state, object){
      state.userAll = object
    },
    UpdateUserAllE(state, object){
      state.userAllE = object
    },
    GetDocument(state, object){
      state.document = object
    },
    GetSession(state, object){
      state.session = object.session
    },
    Quorum_state(state, object){
      state.quorum_state = object
    },
    GetSessionStory(state, object){
      state.sessionstory = object.session
    },
    updateState(state, object) {
      state.Token = object.access_token;
      state.expiresIn = object.expires_in;
      state.tokenType = object.token_type;
      state.user = object.name;
      state.category = object.category;

    },

    toggleConfigurator(state) {
      state.showConfig = !state.showConfig;
    },
    navbarMinimize(state) {
      const sidenav_show = document.querySelector("#app");

      if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.add("g-sidenav-pinned");
        sidenav_show.classList.remove("g-sidenav-hidden");
        state.isPinned = true;
      } else if (sidenav_show.classList.contains("g-sidenav-show") && sidenav_show.classList.contains("g-sidenav-pinned")) {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      } else if (sidenav_show.classList.contains("g-sidenav-show")) {
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      }
    },
    setSidebarType(state, payload) {
      state.sidebarType = payload;
    },
    navbarFixed(state) {
      if (state.isNavFixed === false) {
        state.isNavFixed = true;
      } else {
        state.isNavFixed = false;
      }
    },
    toggleDefaultLayout(state) {
      state.showNavbar = !state.showNavbar;
      state.showSidenav = !state.showSidenav;
      state.showFooter = !state.showFooter;
    },
  },  
  getters: {
    voted(state) {
      return state.voted
    },
  },
  
  actions: {
    Login(context, payload) {
      return new Promise((resolve, reject) => {
        AxiosAPI
          .post("/auth/login", {
            email: payload.email,
            password: payload.password
          })
          .then(resp => {
            Cookie.set('User', resp.data.data.token,{ expires : 1 })
            context.commit("UpdateToken", resp.data.data);
            resolve(resp);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      });
    },
    RefreshToken(context){
      return new Promise((resolve) => {
        if(Cookie.get('User') == ''){
          this.$router.push({
            name: 'Login'        
           })
        }else {
          let token = Cookie.get('User')
          let object = {
            token
          }
          context.commit("UpdateToken", object );
          resolve(context);
        }
      }
)},
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
      DadosUserAllEnvio(context){
        return new Promise((resolve, reject) => {
        let UserALLE = []
          AxiosAPI.get("/users", {
            headers: {
              Authorization: `Bearer `+ this.state.accessToken
            },
          })
          .then((response) => {
            for (let i = 0; i< response.data.length; i++) {
            if (response.data[i].name == "Secretário" || response.data[i].name == "Justiça" || response.data[i].name == "TV" || response.data[i].name == "Mário Sergio" || response.data[i].name == "Francisco Ivo") {
              continue;
            } else {
              UserALLE.push(response.data[i])
              this.users = UserALLE
            }
            }
            context.commit("UpdateUserAllE", UserALLE);
            resolve(response);
          }).catch(err => {
          console.log(err);
          reject(err);    
        })       
        });      
        },
      DadosUserAll(context){
        return new Promise((resolve, reject) => {
        let UserALL = []
          AxiosAPI.get("/users", {
            headers: {
              Authorization: `Bearer `+ this.state.accessToken
            },
          })
          .then((response) => {
            for (let i = 0; i< response.data.length; i++) {
            if (response.data[i].name == "Secretário" || response.data[i].name == "Justiça" || response.data[i].name == "Comissões" || response.data[i].name == "Prefeitura Municipal" || response.data[i].name == "Mesa diretora" || response.data[i].name == "TV" || response.data[i].name == "Mário Sergio" || response.data[i].name == "Francisco Ivo") {
              continue;
            } else {
              UserALL.push(response.data[i])
              this.users = UserALL
            }
            }
            context.commit("UpdateUserAll", UserALL);
            resolve(response);
          }).catch(err => {
          console.log(err);
          reject(err);    
        })       
        });      
        },
      GetSession(context) {  
        if(this.state.accessToken == null){return}else{
          setTimeout(()=>{
        return new Promise((resolve, reject) => {
        AxiosAPI.get("/sessions", {
            headers: {
                Authorization: `Bearer `+ this.state.accessToken
            }
        }).then(( resp ) => {
            let size = resp.data.data.length
            let session = resp.data.data[size-1]

            let object = {
              session
            }
              context.commit("GetSession", object);
              resolve(resp);
            })
            .catch(err => {
              reject(err);
            });
            // localStorage.setItem('Session_status', resp.data.data[size-1].session_status_id)
           // Cookie.set('Session_ID',this.session_id )
          })
        }, 300)   
        }   
      },
      Quorum_data(context) {
        AxiosAPI
          .get("/quorum?session_id=" + this.state.session.id, {
            headers: {
              Authorization: `Bearer `+ this.state.accessToken,
            },
          })
          .then((response) => {
            let quorum = response.data.data;
            console.log(quorum)
            let object = {
              quorum
            }
            context.commit("Quorum_state", object);
          });
      },
        GetSessionStory(context) {
          setTimeout(()=>{
        return new Promise((resolve, reject) => {
        AxiosAPI.get("/sessions?id=" + localStorage.getItem("Session_id"), {
            headers: {
                Authorization: `Bearer `+ this.state.accessToken
            }
        }).then(( resp ) => {
            let session = resp.data.data[0]

            let object = {
              session
            }
              context.commit("GetSessionStory", object);
              resolve(resp);
            })
            .catch(err => {
              console.log(err);
              reject(err);
            });
            // localStorage.setItem('Session_status', resp.data.data[size-1].session_status_id)
           // Cookie.set('Session_ID',this.session_id )
          })
        }, 300)},
    GetDocument(context) {
      return new Promise((resolve, reject) => {
      AxiosAPI
        .get(
          "/documents?session_id=" +
          this.state.session.id  +
            "&document_status_id=3",
          {
            headers: {
              Authorization: `Bearer `+ this.state.accessToken,
            },
          }
        )
        .then((response) => {
          context.commit("GetDocument", response.data.data[0]);
          resolve(response);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
      })
    },
    SubmitDoc(context, payload){
      return new Promise((resolve, reject) => {
        const formData = new FormData();

        formData.append("name", payload.name);
        formData.append("attachment", payload.attachment);
        formData.append("document_category_id", payload.document_category_id);
        formData.append("document_status_id", payload.document_status_id);
        formData.append("user_id", payload.user_id);
        formData.append("status_sign", payload.status_sign);
        formData.append("comission_id", payload.comission_id);

        AxiosAPI
          .post("/documents", formData,{
            headers: {
              Authorization: `Bearer `+ this.state.accessToken,
          }     
        }).then((response) => {
          context.commit("DocEnvio", response);
          resolve(response);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        }); 
      });
    },
    Notification() { 
      AxiosAPI
        .get("http://testeaws.smartlegis.net.br/api/documents-notification", {
          headers: {
            Authorization: `Bearer `+ this.state.accessToken,
          },
        })
         .then((response) => {

            if(response.data.data.length <= 0){
              this.state.notific = false
            }else {
              this.state.notific = true
            }
                                           
        });
},
    

    toggleSidebarColor({ commit }, payload) {
      commit("setSidebarType", payload);
    },

  },

});