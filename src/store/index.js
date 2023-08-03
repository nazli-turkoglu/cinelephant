import { createStore } from "vuex";
export default createStore({
    state: {
        movieList: []
    },

    getters: {

    },

    mutations: {
        SET_MOVIE_LIST(state, data) {
            state.movieList = data
        }
    },

    actions: {
        async getMovies({ commit }) {
            const options = {
                method: 'GET',
                url: 'https://imdb-top-100-movies.p.rapidapi.com/',
                headers: {
                    'X-RapidAPI-Key':
                        'd2aee607b2msh871896857c7efd9p1acc60jsn166bd399ff16',
                    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
                },
            };

            try {
                const response = await axios.request(options);
                commit('SET_MOVIE_LIST', response.data)
            } catch (error) {
                console.log(error);
            }
        },
    },

    modules: {

    }
})