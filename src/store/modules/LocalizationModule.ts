import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';

export enum SupportedLocale {
    DE = 'de',
    EN = 'en',
}

export enum LocalizationAction {
    ChangeLocale = 'changeLocale',
}

export interface LocalizationState {
    locale: SupportedLocale;
}

@Module
export default class LocalizationModule extends VuexModule<LocalizationState> {

    public locale: SupportedLocale = SupportedLocale.EN;

    get currentLocale(): SupportedLocale {
        return this.locale;
    }

    @Mutation
    private [LocalizationAction.ChangeLocale + 'Handler'](locale: SupportedLocale) {
        this.locale = locale;
    }

    @Action({commit: LocalizationAction.ChangeLocale + 'Handler', rawError: true})
    private [LocalizationAction.ChangeLocale](locale: SupportedLocale) {
        return locale;
    }

}
