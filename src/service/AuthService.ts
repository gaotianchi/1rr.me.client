import {providersConfig} from "@/config/oidcConfig.ts";
import {type User, UserManager} from "oidc-client-ts";

export default class AuthService {
    private userManager: UserManager;

    constructor(provider: string) {
        const config = providersConfig[provider];
        if (!config) {
            throw new Error(`Provider ${provider} not found`);
        }
        this.userManager = new UserManager(config);
    }

    async login(): Promise<User | null>{
        try {
            await this.userManager.signinRedirect();
            return await this.userManager.getUser();
        } catch (error) {
            console.error(`登录失败: ${error}`);
            throw error;
        }
    }

    async logout() {
        try {
            await this.userManager.signoutRedirect();
        } catch (error) {
            console.error(`登出失败: ${error}`);
            throw error;
        }
    }

    async getUser() {
        try {
            return await this.userManager.getUser();
        } catch (error) {
            console.error(`获取用户失败: ${error}`);
            throw error;
        }
    }

    async handleRedirectCallback() {
        try {
            return await this.userManager.signinRedirectCallback();
        } catch (error) {
            console.error(`重定向失败: ${error}`);
            throw error;
        }
    }
}
