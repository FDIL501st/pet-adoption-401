This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The vercel deployment doesn't work as the database it was connected to no longer exists (ran out of credits for the google cloud MySQL server).


## Getting Started (Option 1 - Docker compose)

First make a `.env` file. You can copy `example.env` as a starting point.
It will work fine unmodified.

Now all you have to do is run the docker compose file.

`docker compose up -d`

Once that is done,
open [http://localhost:3000](http://localhost:3000) with your browser.


## Getting Started (Option 2 - run client and db seperately)

### 1. MySQL server
You will need a running MySQL server. This can simply be on the same computer, like using docker.
Inside `src/db/sql`, there is a compose.yaml that you can use to get a server started with docker compose.

First make a `.env` file. You can copy `example.env` as a starting point.
It will work fine unmodified if you used the compse.yaml file to run the MySQL server.

Only thing that really needs to done is make sure DB_USER and DB_PASSWORD matches the user and password for the MySQL server with access to the PetPursuit database. 

If you did not use the compose file (`src/db/sql/compose.yaml`) to run the MySQL server, you will need to 
run `src/db/sql/create.sql` to have the database initialized with our sample data.

### 2. Launch the app

For first time, run 
`npm install`
This is to get the project libraries installed.

Now, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


