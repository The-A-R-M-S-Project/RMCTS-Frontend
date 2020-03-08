/* eslint-disable */

import axios from "axios";

const state = {
    myEquipment: [
        {
          _id: 1,
          title: "Electronics work bench",
          location: "Makerere, CEDAT, Old building",
          description:
            "equipment description Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime consectetur iure cumque debitis quaerat ratione exercitationem magnam, quod, at in! Beatae ut perspiciatis ipsam distinctio voluptatibus ullam molestiae ipsa.",
          imageURL:
            "https://sc02.alicdn.com/kf/HTB1JnwmayzxK1Rjy1zkq6yHrVXaN/Detall-CE-certification-Technician-electronics-workbench-for.jpg_350x350.jpg"
        },
        {
          _id: 2,
          title: "Graphics processing unit",
          location: "Makerere, NetLabs!UG, CEDAT, New building",
          description:
            "equipment description Lorem ipsum dolor sit ametequipment description Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime consectetur iure cumque debitis quaerat ratione exercitationem magnam, quod, at in! Beatae ut perspiciatis ipsam distinctio voluptatibus ullam molestiae ipsa. consectetur adipisicing elit. Veritatis maxime consectetur iure cumque debitis quaerat ratione exercitationem magnam, quod, at in! Beatae ut perspiciatis ipsam distinctio voluptatibus ullam molestiae ipsa.",
          imageURL:
            "http://www.astro.wisc.edu/assets/featured_slides/feature_gpu_computing_1.png"
        },
        {
          _id: 3,
          title: "Computer labaratory",
          location: "Makerere, CEDAT, New building",
          description:
            "equipment description Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis maxime consectetur iure cumque debitis quaerat ratione exercitationem magnam, quod, at in! Beatae ut perspiciatis ipsam distinctio voluptatibus ullam molestiae ipsa.",
          imageURL:
            "https://yalatechhub.com/wp-content/uploads/2018/12/IT-colleges-in-nepal.jpg"
        }
      ],
}
const getters = {
    myEquipment: state => state.myEquipment
}
const mutations = {
    myEquipment: (state, equipment) => state.myEquipment = equipment
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
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}