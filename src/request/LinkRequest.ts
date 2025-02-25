export interface PostShortLinkRequest {
    originalUrl: string,
    expireAt?: Date | null,
    password?: string,
}