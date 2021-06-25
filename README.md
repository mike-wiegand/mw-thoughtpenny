# ThoughtPenny

_The workspace for your thoughts!_

NOTE follow the steps below to install and start the react dependencies, start the express server, and connect to and seed the MySQL database

## Install and Start React Dependencies

1. Clone or download this [repo](https://github.com/mike-wiegand/mw-thoughtpenny).
2. Open the _client_ folder
3. Install the dependencies (axios, react-dom, react-router-dom, sass)

```bash
  $ npm install
```

```bash
  $ npm start
```

## Start the Express Server

1. Open the _server_ folder.
2. Install express

```bash
  $ npm install express
```

3. Install nodemon and start the server.

```bash
  $ npm install nodemon -g
```

```bash
  $ nodemon server.js
```

## Connect to the Database and Seed Data

1. Remain in the _server_ folder.
2. Install MySQL Workbench on your computer.
3. Create a new Database or Schema in Workbench named _thoughtpenny_
4. Install knex and bookshelf from your command line.

```bash
  $ npm install knex
```

```bash
  $ npm install bookshelf
```

5. In the _knexfile.js_ file ensure your module export matches this structure. Also ensure your user and password in this structure match the parameters of your MySQL Workbench.

```bash
  module.exports = {
    development: {
        client: 'mysql',
        connection: {
        host: '127.0.0.1',
        user: 'yourUserName',
        password: 'yourPwd',
        database: 'thoughtpenny',
        charset: 'utf8',
        },
    }
};
```

6. Ensure that the migrations, models, seeds folders are present in your local folder as they would have been saved in github.
7. Run the following three commands to seed the data to your MySQL database.

```bash
  $ knex migrate:rollback
```

```bash
  $ knex migrate:latest
```

```bash
  $ knex seed:run
```

8. Start collecting your thoughts!
