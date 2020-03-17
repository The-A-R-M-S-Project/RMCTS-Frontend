<template>
  <div class="input-search">
    <i class="fa fa-search"></i>
    <input
      class="input"
      placeholder="type to search"
      type="search"
      v-model="search"
    />
  </div>
</template>

<style lang="scss" scoped>
.input {
  min-width: 30vw;
  height: 30px;
  border: 1px solid gray;
  border-radius: 10px;
}
.input-search {
  //   color: black;
  text-align: center;
  position: relative;
}
.input-search i {
  position: absolute;
  font-size: 18px;
  padding-top: 7px;
  padding-left: 10px;
  color: gray;
}
.input-search [type="search"] {
  padding-left: 40px;
}
.input-search [type="search"]::placeholder {
  text-align: center;
}
.input:focus {
  outline: 0px;
  border: 1px solid rgb(1, 129, 248);
  border-radius: 10px;
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "search",
  data() {
    return {
      search: ""
    };
  },
  computed: {
    ...mapGetters([])
    // searchBy:
  }
};
</script>
