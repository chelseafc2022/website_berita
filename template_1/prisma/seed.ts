import { PrismaClient, Role } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("password123", 12);
  await prisma.user.upsert({
    where: { email: "redaksi@nusakabar.id" },
    update: { passwordHash },
    create: { name: "Admin NusaKabar", email: "redaksi@nusakabar.id", passwordHash, role: Role.ADMIN },
  });
  const names = ["Politik", "Ekonomi", "Teknologi", "Daerah", "Pendidikan", "Olahraga"];
  await Promise.all(names.map((name) => prisma.category.upsert({ where: { slug: name.toLowerCase() }, update: {}, create: { name, slug: name.toLowerCase() } })));
}

main().then(() => prisma.$disconnect()).catch(async (error) => { console.error(error); await prisma.$disconnect(); process.exit(1); });
