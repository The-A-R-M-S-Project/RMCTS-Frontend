/* eslint-disable */
import axios from 'axios'

const api = "https://facerecon-api.herokuapp.com/detect"

const state = {
    detectionComplete: false,
    user: '...',
    detecting: false,
    action: 'detect'
};
const getters = {
    detectionComplete: state => state.detectionComplete,
    getUser: state => state.user,
    detection: state => state.detecting,
    getaction: state => state.action
};
const mutations = {
    updateUser: (state, data) =>{
        state.user = data
        state.detectionComplete = true
        state.detecting = false
        state.action = "try again"
    },
    detect: (state) => {
        state.detecting = true
        state.detectionComplete = false
    },
    resetState: (state) => {
        state.detecting = false
        state.detectionComplete = false
        state.action = "detect"
        state.user = "..."
    }
};
const actions = {
    detectFace: async function ({ commit }, data) {
        try {
            commit("detect")

            const res = await axios.post(api, data)

            commit("updateUser", res.data.user)
        } catch (err) { console.log(err) };
    },
    reset: function({commit}){
        commit("resetState")
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
