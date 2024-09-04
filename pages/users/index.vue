<script setup lang="ts">
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
import type { GetUsersResponse } from "~/server/api/users";

useHead({
  title: "Users",
});

const page = ref(1);

const { data } = await useFetch<GetUsersResponse>(
  () => `/api/users?page=${page.value}`,
  {
    key: `users-${page.value}`,
  },
);

const paginate = (pageNumber: number) => {
  page.value = pageNumber;
};
</script>

<template>
  <div>
    <div class="flex justify-between">
      <h1 class="mb-8 text-3xl font-bold">Users</h1>

      <Button variant="success">Create User</Button>
    </div>

    <UserList
      v-if="data?.users"
      :users="data.users"
    />

    <div v-else>
      <p class="text-center text-red-500">Something went wrong..</p>
    </div>

    <div class="mt-8 flex justify-between">
      <div>
        <small
          >Showing {{ data?.from }} to {{ data?.to }} of
          {{ data?.total }} results</small
        >
      </div>

      <Pagination
        v-slot="{ page }"
        :total="data?.total"
        :items-per-page="data?.perPage"
        :sibling-count="1"
        show-edges
        :default-page="page"
      >
        <PaginationList
          v-slot="{ items }"
          class="flex items-center gap-1"
        >
          <PaginationFirst @click="paginate(1)" />
          <PaginationPrev @click="paginate(page - 1)" />

          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <Button
                class="h-10 w-10 p-0"
                :variant="item.value === page ? 'default' : 'outline'"
                @click="paginate(item.value)"
              >
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis
              v-else
              :key="item.type"
              :index="index"
            />
          </template>

          <PaginationNext @click="paginate(page + 1)" />
          <PaginationLast @click="paginate(data?.totalPages as number)" />
        </PaginationList>
      </Pagination>
    </div>
  </div>
</template>
