# To Run Locally

1. install dependencies by running `npm install`
2. start a mysql server
3. create a new database on the mysql server
4. create a .env file with DATABASE_URL=<<insert your MYSQL DATABASE SERVER URL here>>
5. push this project's schema to the database by running `npx prisma db push`
6. seed te database by running `npx prisma db seed`
7. run `node app.js`
8. open browser to view Express.js app running on [localhost:8080](http://localhost:8080/)