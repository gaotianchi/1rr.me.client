import {defineStore} from "pinia";
import {ref} from "vue";
import {User} from "oidc-client-ts";

export const useUserStore = defineStore(
    'user',
    () => {
        const user = ref<User | null>(null)
        function setUser(newUser: User | null) {
            user.value = newUser
        }
        return { user, setUser }
    },
    {
        persist: true
    })