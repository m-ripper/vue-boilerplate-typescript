import {Action, Module, Mutation, VuexModule} from 'vuex-module-decorators';
import {User} from '@/models/User';
import {AuthService, LoginResponse} from '@/services/AuthService';
import {LoginRequest} from '@/requests/LoginRequest';

export enum AuthAction {
    AttemptLogin = 'attemptLogin',
    Logout = 'logout',
}

export interface AuthState {
    token: string;
    currentUser: User | null;
}

@Module
export default class AuthModule extends VuexModule<AuthState> {
    public token: string = '';
    public currentUser: User | null = null;

    get isAuthenticated(): boolean {
        return this.user !== null && !!this.token;
    }

    get user(): User | null {
        return this.currentUser;
    }

    @Mutation
    private handleLogin(data: LoginResponse) {
        this.token = data.token;
        this.currentUser = data.user;
    }

    @Mutation
    private handleLogout() {
        this.token = '';
        this.currentUser = null;
    }


    @Action({rawError: true})
    private async [AuthAction.AttemptLogin](data: LoginRequest) {
        const response = await AuthService.login(data);
        if (response.status === 200) {
            this.context.commit('handleLogin', response.data);
        }
    }

    @Action({rawError: true})
    private [AuthAction.Logout]() {
        this.context.commit('handleLogout');
    }
}
