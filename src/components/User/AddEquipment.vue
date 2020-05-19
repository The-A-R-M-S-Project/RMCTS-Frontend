<template>
  <div class="containr">
    <div v-if="addingItem">
      <Loader />
    </div>
    <div class="bg-light" style="width: 100%; height: 100%;">
      <div class="row" style="background-color:  rgb(205, 216, 226)">
        <div class="col text-center">
          <form action="" method="POST" encType="multipart/form-data">
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
            <input
              type="file"
              class="form-control-file mt-3"
              name="image"
              accept="image/*"
              @change="handleImage"
            />
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
              @click="handleSubmit"
            >
              add
            </button>
            <div class="loading"></div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.containr {
  display: flex;
  justify-content: center;
  background-color: rgb(205, 216, 226);
}
form {
  max-width: 800px;
  background-color: rgb(205, 216, 226);
  margin: auto;
}
.loading {
  display: flex;
  justify-content: center;

  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background: white;
    border-radius: 50%;
    animation: 0.9s bounce infinite alternate;

    &:nth-child(2) {
      animation-delay: 0.3s;
    }

    &:nth-child(3) {
      animation-delay: 0.6s;
    }
  }
}
@keyframes bounce {
  to {
    opacity: 0.3;
    transform: translate3d(0, -1rem, 0);
  }
}
</style>

<script>
/* eslint-disable */
import { mapActions, mapGetters } from "vuex";
import Loader from "@/components/loader"

export default {
  name: "add-equipment",
  components: {
    Loader
  },
  data() {
    return {
      item: {
        title: "",
        location: "",
        description: ""
      },
      imageFile: null
    };
  },
  computed: {
    ...mapGetters({store_adding_item:"addingItem"}),
    addingItem: {
      get() {
        return this.store_adding_item;
      },
      set(adding_item) {
        return adding_item;
      }
    }
  },
  methods: {
    ...mapActions(["addEquipment"]),
    handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData()
      formData.append('image', this.imageFile, this.imageFile.name)
      formData.append('title', this.item.title)
      formData.append('location', this.item.location)
      formData.append('description', this.item.description)
      this.addEquipment(formData).then(
        (this.item = {
          title: "",
          location: "",
          description: ""
        }))
    },
    handleImage(e) {
      this.imageFile = e.target.files[0]
      console.log(e)
    }
  }
};
</script>
