<template>
  <div class="header flexCenter">
    <span
      class="material-symbols-outlined cursorPointer"
      style="font-size: 3rem"
      @click="navbarState"
    >
      menu </span
    ><span>CINELEPHANT</span><span></span>
  </div>
</template>
<script>
export default {
  data() {},
  methods: {
    navbarState() {
      this.$emit('navbarStateClicked');
    },
  },
};
</script>
<style scoped>
.header {
  height: 9%;
  width: 100%;
  background: #e3b23c;
  color: rgb(64, 67, 71);
  font-size: 35px;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 10px;
}
</style>
