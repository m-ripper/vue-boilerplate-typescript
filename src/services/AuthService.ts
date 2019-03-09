import {User} from '@/models/User';
import axios, {AxiosPromise} from 'axios';
import {LoginRequest} from '@/requests/LoginRequest';
import {PATH_LOGIN} from '@/paths';

export interface LoginResponse {
    token: string;
    user: User;
}

export class AuthService {

    public static login(data: LoginRequest): AxiosPromise<LoginResponse> {
        return axios.post(PATH_LOGIN, data);
    }

}
