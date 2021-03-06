import Vue from 'vue'
import Vuex from 'vuex'

const SAVE_TOKEN = "scrumboard_save_4355662690";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        scrumboard: localStorage.getItem(SAVE_TOKEN) !== null ? JSON.parse(localStorage.getItem(SAVE_TOKEN)) : [
            {
                title: 'Todo',
                stories: []
            }, {
                title: 'Doing',
                stories: []
            }, {
                title: 'Testing',
                stories: []
            }, {
                title: 'Done',
                stories: []
            }
        ]
    },
    getters: {
        getBoardColumnStories: (state) => (id) => {
            return state.scrumboard[id].stories
        },
        getBoard: (state) => {
            return state.scrumboard
        }
    },
    mutations: {
        addUserStory(state, data) {
            if (typeof state.scrumboard[data.column].stories === 'undefined'
                || state.scrumboard[data.column].stories === null
                || state.scrumboard[data.column].stories.length < 1) {
                state.scrumboard[data.column].stories = [];
            }
            state.scrumboard[data.column].stories.push(data.data);

            localStorage.setItem(SAVE_TOKEN, JSON.stringify(state.scrumboard))
        },
        updateList(state, data) {
            state.scrumboard[data.column].stories = data.stories;
            localStorage.setItem(SAVE_TOKEN, JSON.stringify(state.scrumboard))
        }
    }
})
