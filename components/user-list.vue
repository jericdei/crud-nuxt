<script setup lang="ts">
import type { User } from "@prisma/client";

defineProps<{
  users: User[];
}>();
</script>

<template>
  <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
    <div
      v-for="user in users"
      :key="user.id"
    >
      <UserCard :user="user" />
    </div>
  </div>
</template>
