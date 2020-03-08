/* eslint-disable */

import axios from "axios";

const state = {
    myEquipment: [],
}
const getters = {
    myEquipment: state => state.myEquipment
}
const mutations = {
    myEquipment: (state, equipment) => state.myEquipment = equipment,
    newItem: (state, item) => state.myEquipment.unshift(item)
}
const actions = {
    getEquipment: async ({commit}) => {
        try{
            let equipment = await axios.get("http://localhost:3000/equipment")
            console.log(equipment.data)
            commit('myEquipment', equipment.data)
        }
        catch(error){
            console.log(error)
        }
    },
    addEquipment: async ({ commit }, data) => {
        try{
            let res = await axios.post("http://localhost:3000/add-item", data)
            console.log(res.data)
            commit("newItem", res.data)
        }
        catch(error){
            console.log(error)
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}