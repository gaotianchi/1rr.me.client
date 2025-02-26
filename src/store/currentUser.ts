import { ref } from 'vue'
import { defineStore } from 'pinia'

import { User } from 'oidc-client-ts'

export const useCurrentUserStore = defineStore(
    'currentUser',
    () => {
    const user = ref<User | null>(null)

    function setUser(newUser: User | null) {
        user.value = newUser
    }
    return { user, setUser }
}, {
    persist: true
})
