import type { User } from "@prisma/client";
import prisma from "~/lib/prisma";

export interface GetUsersResponse {
  users: User[];
  total: number;
  perPage: number;
  from: number;
  to: number;
  totalPages: number;
}

export default defineEventHandler(async (event): Promise<GetUsersResponse> => {
  const { page } = getQuery(event);

  const perPage = 12;

  const users = await prisma.user.findMany({
    take: perPage,
    skip: (page ? parseInt(page as string) - 1 : 0) * perPage,
    orderBy: {
      id: "desc",
    },
  });

  return {
    users,
    total: await prisma.user.count(),
    perPage,
    from: (page ? parseInt(page as string) - 1 : 0) * perPage + 1,
    to: (page ? parseInt(page as string) - 1 : 0) * perPage + users.length,
    totalPages: Math.ceil((await prisma.user.count()) / perPage),
  };
});
