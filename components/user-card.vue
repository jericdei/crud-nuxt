<script setup lang="ts">
import type { User } from "@prisma/client";

defineProps<{
  user: User;
}>();
</script>

<template>
  <div
    class="group flex items-start justify-between rounded-xl bg-zinc-300 p-4 text-zinc-700"
  >
    <div class="flex-1">
      <p class="font-bold">{{ user.firstName }} {{ user.lastName }}</p>
      <small>{{ user.email }}</small>
    </div>

    <div class="invisible flex items-center group-hover:visible">
      <Button
        variant="text"
        size="xs"
        ><i class="ri-edit-2-fill ri-lg text-cyan-700"></i
      ></Button>

      <Button
        variant="text"
        size="xs"
        ><i class="ri-delete-bin-2-fill ri-lg text-red-700"></i
      ></Button>
    </div>
  </div>
</template>
