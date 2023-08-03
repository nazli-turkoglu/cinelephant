<template>
  <div id="products">
    <div class="buttonContainer">
      <button id="getMoviesButton" @click="getMovies">Get Movies</button>
    </div>
    <div class="listContainer">
      <!-- kart -->
      <div
        v-for="(movie, index) in movieList"
        :key="index"
        class="movieContainer"
      >
        <div class="imgContainer">
          <img :src="movie.image" alt="" />
        </div>
        <span @click="sendToYouTube(movie.trailer)" class="title">{{
          movie.title
        }}</span>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      movieList: [],
    };
  },

  methods: {
    async getMovies() {
      const options = {
        method: 'GET',
        url: 'https://imdb-top-100-movies.p.rapidapi.com/',
        headers: {
          'X-RapidAPI-Key': process.env.VUE_APP_RAPID_KEY,
          'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        this.movieList = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    sendToYouTube(url) {
      window.open(url, '_blank');
    },
  },
};
</script>

<style scoped>
#products {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.buttonContainer {
  width: 100%;
  background-color: #c4cacd;
  height: 5%;
  display: flex;
  justify-content: center;
}
#getMoviesButton {
  width: 50%;
  cursor: pointer;
  height: 100%;
  border: 3px solid rgb(110, 110, 117);
  color: rgb(23, 23, 26);
  font-weight: 700;
  border-radius: 100px;
  background: transparent;
  box-shadow: 0 5px 5px rgb(198, 198, 198);
  background-color: #dceaf1;
}
#getMoviesButton:hover {
  transform: translateY(2px);
  transition: all 0.5s ease;
}

.listContainer {
  width: 100%;
  height: 95%;
  display: flex;
  padding: 10px;
  flex-wrap: wrap;
  background-color: #c4cacd;
}

.movieContainer {
  width: 200px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(183, 183, 183);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 3px;
  margin: 5px;
}

.imgContainer {
  width: 100%;
  height: 80%;
  border-radius: 8px;
  overflow: hidden;
}

.imgContainer > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.title {
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  cursor: pointer;
}
</style>
