// import { PrismaClient } from "@prisma/client";
import user from "./user.json";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const database = {
    // user,
    user: [
      {
        id: "2e3b0b9e-5b7e-4b0a-9e5a-9c1f5b9b7b1a",
        password: Buffer.from(
          "$2a$10$uR5S.P86tXoBfCHl0a03bePKyN/1yE/1oCW5oRNs/IYfbDeL.WY9O",
        ),
        email: "test@gmail.com",
        name: "test",
        bod: "2021-01-01T00:00:00.000Z",
        create_time: "2021-01-01T00:00:00.000Z",
        update_time: "2021-01-01T00:00:00.000Z",
      },
    ],
  };

  for (const [key, value] of Object.entries(database)) {
    await (prisma as any)[key].createMany({
      data: value,
      skipDuplicates: true,
    });
    console.log(`Seeded ${key}!`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
