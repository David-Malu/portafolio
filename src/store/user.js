import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
    state: () => ({
        userData: "David",
    }),
    getters:{
        userMayuscula(state){
            return state.userData.toUpperCase()
        }
    }
});
