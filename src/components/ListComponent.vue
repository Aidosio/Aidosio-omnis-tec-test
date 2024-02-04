<script setup lang="ts">
  import {useServerStore} from '@/stores/store'

  const servers = useServerStore()
</script>

<template>
  <div class="w-1/3 bg-gray-100 p-4 overflow-auto">
    <ul>
      <li v-for="item in servers.data" :key="item.customer_id" @click="servers.selectServerFun(item)" class="cursor-pointer hover:bg-gray-200 p-2">
        {{ item.server_name }} ({{ item.server_type }})
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
