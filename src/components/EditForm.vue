<script setup lang="ts">
import {computed} from "vue";
import {useServerStore} from "@/stores/store";

const servers = useServerStore()
const selectedServer = computed(() => servers.selectedServer);

</script>

<template>
  <div class="w-3/3 md:w-2/3 bg-gray-50 p-4">
    <div v-if="selectedServer" class="space-y-4">
      <div>
        <label for="serverName" class="block mb-2">Server Name</label>
        <input id="serverName" type="text" v-model="selectedServer.server_name" class="border-2 p-2 w-full"/>
      </div>
      <div>
        <label for="serverType" class="block mb-2">Server Type</label>
        <select id="serverType" v-model="selectedServer.server_type" class="border-2 p-2 w-full">
          <option value="vds">VDS</option>
          <option value="dedicated">Dedicated</option>
          <option value="hosting">Hosting</option>
        </select>
      </div>
    </div>
    <div v-else class="text-center text-gray-500">
      Select a server to edit
    </div>
  </div>
</template>

<style scoped>

</style>
