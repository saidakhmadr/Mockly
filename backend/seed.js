console.log('Hello from seed.js');

let PrismaClient;
try {
  PrismaClient = require('@prisma/client').PrismaClient;
  console.log('PrismaClient loaded');
} catch (e) {
  console.error('Error loading PrismaClient:', e);
  process.exit(1);
}

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding started...');
  // Create a user
  const user = await prisma.user.create({
    data: {
      email: 'jane.doe@example.com',
      name: 'Jane Doe',
      password: 'password456',
    },
  });
  console.log('User created:', user);

  // Create a vacancy
  const vacancy = await prisma.vacancy.create({
    data: {
      title: 'Software Engineer',
      description: 'Develop and maintain software.',
    },
  });
  console.log('Vacancy created:', vacancy);
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 