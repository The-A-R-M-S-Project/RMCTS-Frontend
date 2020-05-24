/* eslint-disable */
import axios from 'axios'

const api = "http://localhost:5000/detect"

const state = {
    detectionComplete: false,
    user: '...'
};
const getters = {
    detectionComplete: state => state.detectionComplete,
    getUser: state => state.user
};
const mutations = {
    updateUser: (state, data) =>{
        state.user = data
        state.detectionComplete = true
    } 
};
const actions = {
    detectFace: async function ({ commit }, data) {
        try {
            const res = await axios.post(api, data)

            commit("updateUser", res.data.user)
        } catch (err) { console.log(err) };
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};
