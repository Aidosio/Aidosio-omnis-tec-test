<script setup lang="ts">
import ListComponent from "@/components/ListComponent.vue";
import EditForm from "@/components/EditForm.vue";
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-col md:flex-row h-screen">
      <ListComponent/>
      <EditForm/>
    </div>
  </div>
</template>

<style scoped>
</style>
