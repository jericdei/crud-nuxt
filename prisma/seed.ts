import prisma from "~/lib/prisma";
import { faker } from "@faker-js/faker";
import type { User } from "@prisma/client";

async function main() {
  const count = 25;
  const data: Omit<User, "id">[] = [];

  for (let i = 0; i < count; i++) {
    data.push({
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      birthday: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
    });
  }

  await prisma.user.createMany({
    data,
  });
}

main();
