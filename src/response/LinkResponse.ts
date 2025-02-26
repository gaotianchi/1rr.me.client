export interface ShortLinkResponse {
    code?: string | null;
    originalUrl?: string | null;
    expiredAt?: Date | null;
    password?: string | null;
    username?: string | null;
    id?: number | null;
    createdAt?: Date | null;
    updatedAt?: Date | null;
    deletedAt?: Date | null;
    createdBy?: string | null;
    updatedBy?: string | null;
    deletedBy?: string | null;
    isDeleted?: number | null;
}