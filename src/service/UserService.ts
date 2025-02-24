import type {UserDto} from "@/interface/UserDto.ts";

const baseUrl = import.meta.env.VITE_APP_RESOURCE_BASE_URL;

export async function registerUserInfo(registerUserDto: UserDto) {
    const response = await fetch(
        baseUrl + '/api/users',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerUserDto)
        })
    if (response.status !== 201) {
        throw new Error('登记用户是发生异常！')
    }
    return;
}
