import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  if (!id) {
    throw new Error("Invalid ID");
  }

  await prisma.user.delete({
    where: {
      id: parseInt(id),
    },
  });
});
