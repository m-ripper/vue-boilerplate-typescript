import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import LocalizationModule, {LocalizationState} from '@/store/modules/LocalizationModule';
import AuthModule, {AuthState} from '@/store/modules/AuthModule';

export interface RootState {
    auth: AuthState;
    localization: LocalizationState;
}

const vuexLocal = new VuexPersistence<RootState>({
    storage: window.localStorage,
    modules: ['auth', 'localization'],
});

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
    modules: {
        auth: AuthModule,
        localization: LocalizationModule,
    },
    plugins: [vuexLocal.plugin],
});
