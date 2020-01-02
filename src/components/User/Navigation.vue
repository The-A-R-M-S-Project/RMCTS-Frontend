<template>
  <!-- eslint-disable -->
    <nav class="navbar navbar-expand-lg nav nav-pills fixed-top">
        <!-- <a class="navbar-brand" href="#">RMCTS</a> -->
        <button class="navbar-toggler fa fa-chevron-circle-down" style="font-size:50px; color: rgb(0, 119, 255);" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li :class="['nav-item']">
                    <router-link to="/" class="nav-link" href="#">Home</router-link>
                </li>
                <li  :class="[currentRoute.includes('catalog') ? 'active': '', 'nav-item']">
                    <router-link to="/catalog" class="nav-link" href="#">Catalog</router-link>
                </li>
                <li  :class="[ 'nav-item', currentRoute.includes('user') ? 'active': '']">
                    <router-link to="/user/profile" class="nav-link" href="#">profile</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<style>
.navbar {
  background-color: rgba(199, 255, 255);
}
.active {
  background-color: rgb(255, 255, 255);
  border-bottom: solid rgb(0, 119, 255) 5px;
  border-radius: 5px;
}
</style>

<script>
/*eslint-disable*/
export default {
    name: "navigation",
    computed: {
        currentRoute(){
            return this.$route.path
        }
    }
}
</script>