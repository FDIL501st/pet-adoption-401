This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The vercel deployment doesn't work as the database it was connected to no longer exists (ran out of credits for the google cloud MySQL server).

## Getting Started

### MySQL server
You will need a running MySQL server. This can simply be on the same computer, like using docker.
Inside `src/db/sql`, there is a compose.yaml that you can use to get a server started with docker compose.

Then you will need to initialize the MySQL server. 

First make a `.env` file. You can copy `example.env` as a starting point.
It will work fine unmodified if you used the compse.yaml file to run the MySQL server.

Only thing that really needs to done is make sure DB_USER and DB_PASSWORD matches the user and password for the MySQL server with access to the PetPursuit database. 


Next you will need to run the create.sql script to initialize the database with data.
If you used compose file to run the MySQL server, do the following commands in your terminal.

`docker exec -it mysql sh`                      This gets you into a shell inside the docker container.

`mysql -u petpursuit -ppetpursuit_password`       This gets you inside the mysql shell.

`source /home/create.sql`                       This runs the script. After this you are done and can close the terminal.


### Launch the app

For first time, run 
`npm install`
This is to get the project libraries installed.

Now, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


