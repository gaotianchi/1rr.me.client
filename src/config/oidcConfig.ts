import {type UserManagerSettings} from 'oidc-client-ts';


export const providersConfig: Record<string, UserManagerSettings> = {
    google: {
        authority: 'https://accounts.google.com',
        client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
        client_secret: import.meta.env.VITE_APP_GOOGLE_CLIENT_SECRET,
        redirect_uri: 'http://localhost:5173/callback/google',
        post_logout_redirect_uri: 'http://localhost:5173',
        scope: 'openid profile email',
        loadUserInfo: true,
    }
};
