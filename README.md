npm i prisma --save-dev 
    This is cli prisma

npx prisma init --datasource-provider postgresql

ext steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Run prisma db pull to turn your database schema into a Prisma schema.
3. Run prisma generate to generate the Prisma Client. You can then start querying your database.
4. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/beyond-the-orm

More information in our documentation:
https://pris.ly/d/getting-started


- npx primsa migrate <option> --name <name> // Database 
- npx primsa generate // node_modules tumhare shchema ek library generate