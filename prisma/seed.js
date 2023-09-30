import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



async function seed() {
    try {
        // Delete existing data
        await prisma.rating.deleteMany();
        await prisma.restrunt.deleteMany();
        await prisma.author.deleteMany();
    
          // Reset auto-increment counters
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Rating"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Restrunt"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`;
      
    
        // Seed data for the Owner model
        await prisma.author.create({
          data: {
            name: 'Ahmed Wali',
            email: 'ahmed@gmail.com',
            created: new Date('2022-03-30T00:00:00.000Z'),
            updated: new Date('2022-03-30T00:00:00.000Z'),
          },
        });
    
        await prisma.author.create({
          data: {
            name: 'Abdirahman Yusuf',
            email: 'abdirahman@gmail.com',
            created: new Date('2022-03-30T00:00:00.000Z'),
            updated: new Date('2022-03-30T00:00:00.000Z'),
          },
        });
    
        await prisma.author.create({
          data: {
            name: 'Fartun Jamac',
            email: 'fartun@gmail.com',
            created: new Date('2022-03-30T00:00:00.000Z'),
            updated: new Date('2022-03-30T00:00:00.000Z'),
          },
        });
    
        // Seed data for the Restaurant model
   
        await prisma.restrunt.create({
          data: {
            name: 'Afro Deli',
            location: 'Minnesota',
            author: 2,
            created: new Date('2022-03-30T00:00:00.000Z'),
            updated: new Date('2022-03-30T00:00:00.000Z'),
          },
        });
    
        await prisma.restrunt.create({
          data: {
            name: 'Pizza Hut',
            location: 'Saint Paul, MN',
            author: 1,
            created: new Date('2022-03-30T00:00:00.000Z'),
            updated: new Date('2022-03-30T00:00:00.000Z'),
          },
        });
    
        // Seed data for the Rating model
  
        await prisma.rating.create({
            data: {
                restaurantId : 1,
                rating :2,

            }
        }),
        await prisma.rating.create({
            data: {
                restaurantId : 2,
                rating : 1
                
            }
        })
        await prisma.rating.create({
            data: {
                restaurantId : 3,
                rating : 1,
                
            }
        })
    
        console.log('Seed data created successfully.');
      } catch (error) {
        console.error('Error seeding data:', error);
      } finally {
        await prisma.$disconnect();
      }

}



seed();