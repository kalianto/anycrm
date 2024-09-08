<h1 align="center">AnyCRM - Anything Goes</h1>


<p align="center">
 A simple CRM. <br/>C stands for Customer, Client, Congregation, Church, Charity, Corporate, Company
</p>

<p align="center">
  <a href="#features"><strong>Feature</strong></a> ·
  <a href="#demo"><strong>Demo</strong></a> ·
  <a href="#clone-and-run-locally"><strong>Clone and run locally</strong></a> ·
  <a href="#feedback-and-issues"><strong>Feedback and issues</strong></a>
  <a href="#more-supabase-examples"><strong>More Examples</strong></a>
</p>
<br/>

## Features

- Dashboard
- Users
- Clients
- Advanced Role Base Access
- etc

## Demo

No demo yet, but will be available in the future.

## Clone and run locally

1. Clone the repository

2. Rename `.env.local.example` to `.env.local` and update the following:
1. Clone the repository

2. Rename `.env.local.example` to `.env.local` and update the following:

   ```
   DATABASE_URL=
   ```
   For Google Authentication
   ```
   AUTH_GOOGLE_ID=
   AUTH_GOOGLE_SECRET=
   GOOGLE_REDIRECT_URL=
   ```
   For Facebook Authentication
   ```
   AUTH_FACEBOOK_ID=
   AUTH_FACEBOOK_SECRET=
   FACEBOOK_REDIRECT_URL=
   ```
   
   For NextAuth 
   ```
   AUTH_SECRET
   ```

3. Database migration and seeds
   
   Of course the migration file and schema can be found in the file `schema.prisma`, which is usually stored in the prisma  folder `prisma/schema.prisma`

   Create a new database and update the `DATABASE_URL` to use your new database

   There is no need to baseline your database or create initial migration file as recommended by Prisma on this page [Baseline your database](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/baseline-your-database-typescript-mysql), well, because it's a new database.
   
   ```
   npx prisma migrate dev
   ```

4. You can now run the Next.js local development server:

   ```bash
   npm run dev
   ```

   The starter kit should now be running on [localhost:4000](https://localhost:4000/).
   
   Check the package.json, it uses SSL `--experimental-https` and `-p 4000` for port 4000

