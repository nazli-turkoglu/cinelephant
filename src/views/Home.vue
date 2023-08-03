<template>
  <div id="home">
    <Header @navbarStateClicked="navbarStateClicked" />
    <div class="container">
      <Transition name="slide-fade">
        <Navbar v-if="navbarState" />
      </Transition>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Navbar from '../components/Navbar.vue';
export default {
  components: { Header, Navbar },
  data() {
    return {
      navbarState: true,
    };
  },
  methods: {
    navbarStateClicked() {
      this.navbarState = !this.navbarState;
    },
  },
};
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;
}
.container {
  display: flex;
  height: 91%;
  width: 100%;
  position: relative;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.8s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-200px);
}
</style>
