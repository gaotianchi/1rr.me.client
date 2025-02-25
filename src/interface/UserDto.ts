export interface UserDto {
    username?: string;
    password?: string;
    email?: string;
    useThirdPartyLogin?: number;
    emailIsVerified?: number;
}