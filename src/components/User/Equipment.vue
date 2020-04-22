<template>
  <div class="containr mt-5">
    <div class="bg-light this-card" style="max-width: 95%; height: 100%;">
      <div class="row">
        <div class="col-5 this-image">
          <img
            :src="url"
            class="image-fluid"
            style="width: 100%; height: 40vh; border-top-left-radius: 20px;  object-fit: cover;"
          />
        </div>
        <div class="col-7 desc">
          <div class>
            <h5 class="card-title">{{ title }}</h5>
            <p class="text-justify pr-3 mytext">{{ description }}</p>
            <p class>
              <small class="text-muted">{{ location }}</small>
            </p>
          </div>
        </div>
      </div>
      <div class="buttons-area">
        <button
          type="button"
          class="btn btn-danger m-3"
          style="width: 100px"
          @click="deleteEquipment(_id)"
        >
          Delete
        </button>
        <button
          type="button"
          class="btn btn-primary m-3"
          style="width: 100px"
          @click="editEquipment({ title, description, location, url, _id })"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.containr {
  display: flex;
  justify-content: center;
}
.this-card {
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.this-image {
  display: flex;
  align-content: center;
}
.buttons-area {
  display: flex;
  justify-content: center;
  background-color: rgb(205, 216, 226);
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.mytext {
  overflow-wrap: break-word;
  word-wrap: break-word;
}
.desc {
  overflow-y: scroll;
  height: 40vh;
}
/* .edit-equipment {
  background: rgba(0, 0, 0, 0.404);
  color: #666666;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5000;
  top: 0;
  left: 0;
  float: left;
  text-align: center;
} */
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(0, 123, 255, 0.363);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(2, 74, 150);
}
</style>

<script>
// import EditEquipment from "@/components/User/EditEquipment";
import { mapActions } from "vuex";

export default {
  name: "all-equipment",
  components: {
    // EditEquipment
  },
  data() {
    return {
      edit_item: false
    };
  },
  props: {
    title: String,
    description: String,
    location: String,
    url: String,
    _id: String
  },
  methods: {
    ...mapActions(["deleteEquipment", "editEquipment"])
    // editEquipment(){
    //   this.edit_item = true
    // }
  }
  // computed: {
  //   ...mapGetters(["editing"])
  // }
};
</script>
