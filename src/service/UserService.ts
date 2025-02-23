import type {UserDto} from "@/interface/UserDto.ts";

const baseUrl = "http://localhost:8080";

// const baseUrl = import.meta.env.VUE_APP_RESOURCE_BASE_URL;
// TODO: 无法获取环境变量值

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
