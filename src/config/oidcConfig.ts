import { type UserManagerSettings } from 'oidc-client-ts';


export const providersConfig: Record<string, UserManagerSettings> = {
    google: {
        authority: 'https://accounts.google.com',
        client_id: '740215658195-pe06a3so364eturh150q9hk1gdkucp60.apps.googleusercontent.com',
        client_secret: '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',
        redirect_uri: 'http://localhost:5173/callback',
        post_logout_redirect_uri: 'http://localhost:5173',
        scope: 'openid profile email',
        loadUserInfo: true,
    }
    // 更多提供者
};
