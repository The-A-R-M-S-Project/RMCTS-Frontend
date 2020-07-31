<template>
  <div class="">
    <div>
      <h1 class="text-white fixed-top">Edit Item</h1>
    </div>
    <div class="bg-light">
      <div
        class="row"
        style="background-color:  rgb(205, 216, 226); border-radius: 10px"
      >
        <div class="col text-center">
          <form action style>
            <input
              type="text"
              class="form-control mt-3"
              placeholder="title"
              v-model="item.title"
            />
            <input
              type="text"
              class="form-control mt-3"
              placeholder="location, e.g (kampala, Makerere University, CEDAT, old builiding, room 143)"
              v-model="item.location"
            />
            <!-- <input
              type="text"
              class="form-control mt-3"
              placeholder="Image URL"
              v-model="item.imageURL"
            /> -->
            <textarea
              class="form-control mt-4"
              id="exampleFormControlTextarea1"
              rows="6"
              placeholder="Description"
              v-model="item.description"
            ></textarea>
            <button
              type="submit"
              class="btn btn-primary mb-2 mt-3"
              style="width: 100px;"
              data-dismiss="modal"
              @click="handleSubmit"
            >
              update
            </button>
            <button
              type="submit"
              class="btn btn-success mb-2 mt-3 ml-5"
              style="width: 100px;"
              data-dismiss="modal"
              @click="handleCancel"
            >
              cancel
            </button>
            <div class="loading"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
form {
  min-width: 650px;
  background-color: rgb(205, 216, 226);
  margin: auto;
}
</style>

<script>
import { mapActions } from "vuex";

export default {
  name: "add-equipment",
  data() {
    return {
      item: {
        title: this.title,
        location: this.location,
        description: this.description,
        _id: this._id
      }
    };
  },
  props: {
    title: String,
    description: String,
    location: String,
    _id: String
  },
  methods: {
    ...mapActions(["updateEquipment", "handleCancel"]),
    handleSubmit(e) {
      this.$emit("end-editing");
      e.preventDefault();
      this.$store.commit("info_submission");
      this.updateEquipment(this.item).then(() => {
        this.$store.commit("submission_complete");
      });
    }
  }
};
</script>
