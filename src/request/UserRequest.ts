export interface UserRequest {
    username?: string;
    password?: string;
    email?: string;
    useThirdPartyLogin?: number;
    emailIsVerified?: number;
}