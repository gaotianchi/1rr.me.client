import type {ShortLinkResponse} from "@/response/LinkResponse.ts";
import type {PostShortLinkRequest} from "@/request/LinkRequest.ts";
import {useUserStore} from "@/store/useUserStore.ts";

const baseUrl = import.meta.env.VITE_APP_RESOURCE_BASE_URL;

export const getShortLink = async (postShortLinkRequest: PostShortLinkRequest): Promise<ShortLinkResponse> => {
    const createShortLinkResponse = await fetch(
        baseUrl + "/api/links",
        {
            method: "POST",
            body: JSON.stringify(postShortLinkRequest),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + useUserStore().user?.id_token,
            }
        }
    )
    if (createShortLinkResponse.status !== 201) {
        throw new Error("创建短链接失败！");
    }
    const shortLinkLocation = createShortLinkResponse.headers.get("Location");
    const shortLinkResponse = await fetch(
        baseUrl + shortLinkLocation,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + useUserStore().user?.id_token,
            }
        }
    )
    if (shortLinkResponse.status !== 200) {
        throw new Error("获取短链接失败！");
    }
    return shortLinkResponse.json();
}