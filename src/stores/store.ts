import {defineStore} from "pinia";
import server from '../data/data.json'
import type {Server} from "@/interface/server";
export const useServerStore = defineStore(  {
    id: 'serverStore',
    state: () => ({
        data: server as Server[],
        selectedServer: null as Server | null
    }),
    getters: {
        watchSelectServer() {
        }
    },
    actions: {
        selectServerFun(server: Server) {
            this.selectedServer = server;
        }
    }
})
