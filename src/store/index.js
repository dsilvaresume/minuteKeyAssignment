import { createStore } from 'vuex';
import bikesModule from './modules/bikes/index.js'

const store = createStore({
    modules: {
        bikes: bikesModule
    }
});

export default store;