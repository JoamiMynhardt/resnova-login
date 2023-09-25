import { createStore } from 'vuex'
import axios from "axios";

const BaseUrl :string = process.env.VUE_APP_API;
export interface StateI {
    user: {
        token: string | null,
        data: {
            username: string | null,
            user_id: string | null
        }
    }
}

export interface CreatedAtI {
    created_at: string | number | Date;
}

export interface ResultI {
    token: string | null,
    data: {
        username: string ,
        user_id: string ,
        access_token: string ,
    }
}

export default createStore({
  state: {
      user:{
          data:{
              username: sessionStorage.getItem('username'),
              user_id: null
          },
          token: sessionStorage.getItem("TOKEN")
      },

      widgets: {},
  },
  getters: {
  },
  mutations: {
      logout: (state:StateI) => {
          state.user.token = null;
          sessionStorage.removeItem("TOKEN")
          sessionStorage.removeItem("username")
          sessionStorage.removeItem("user_id")
          location.reload();
      },
      setUser: (state:StateI, res:ResultI) => {
          state.user.data.username = res.data.username;
          state.user.data.user_id = res.data.user_id;
          state.user.token = res.data.access_token;
          sessionStorage.setItem('TOKEN' , res.data.access_token)
          sessionStorage.setItem('username' , res.data.username)
          sessionStorage.setItem('user_id' , res.data.user_id)
      },
      setWidgets:(state, res) => {
          state.widgets = res.data.sort((a: CreatedAtI, b: CreatedAtI) => (
              +new Date(b.created_at) - +new Date(a.created_at)
          ));
      }
  },
  actions: {
      logout({commit}){
          commit("logout")
      },
      login({ commit }, user){
          return new Promise((resolve, reject) => {
              axios.post(BaseUrl + 'v3/oauth/login', user)
                  .then(res => {
                      commit("setUser", res)
                      window.document.location = process.env.VUE_APP_HOME;
                  }).catch((error) => {
                  reject(error);
              })
          })
      },
      widgets({commit}){
          const token = this.state.user.token
          const config = {
              headers: { Authorization: `Bearer ${token}` }
          };
          return new Promise((resolve, reject) => {
              axios.get(BaseUrl + 'v3/get-widgets', config)
                  .then(res => {
                      commit("setWidgets", res)
                  }).catch((error) => {
                      reject(error);
                  })
          })
      }
  },
  modules: {
  }
})
