<script setup lang="ts">
import prisma from "~/lib/prisma";

useHead({
  title: "Users",
});

const { query } = useRoute();

const perPage = 12;

const users = await prisma.user.findMany({
  take: perPage,
  skip:
    query.page && Number(query.page) > 0
      ? (Number(query.page) - 1) * perPage
      : 0,
});
</script>

<template>
  <div class="flex justify-between">
    <h1 class="mb-8 text-3xl font-bold">Users</h1>

    <Button variant="success">Create User</Button>
  </div>

  <UserList :users />
</template>
