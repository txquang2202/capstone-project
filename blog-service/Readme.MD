# REST API with Node using Typescript

- Link postman : https://documenter.getpostman.com/view/28346732/2sA35G42mo#672e6856-6747-4f8e-96a3-2557e18aa640
  This is a simple REST API developed using node and express with typescript

![alt text](https://image.ibb.co/nAd9OF/logos.png "Node Typescript")

## ❤️ Found this project useful?

If you found this project useful, then please consider giving it a ⭐️ on Github and sharing it with your friends via social media.

## Requirements

[Node.js](https://nodejs.org/en/), [postgresql](https://www.postgresql.org/download/)

### Getting Started

### Setup DB

1. You need to install PostgreSQL

   - For Windows
     - Install PostgreSQL and set following environment variable
       `C:\Program Files\PostgreSQL\10\bin`,
       `C:\Program Files\PostgreSQL\10\lib`
   - For Ubuntu

     - Installation
       `sudo apt update`
       `sudo apt-get install postgresql postgresql-contrib`

     - Manage `PostgreSQL` service
       `sudo systemctl {status | start | restart | stop} postgresql`

2. rename `.env.example` to `.env` in the file the DB connection string need to be updated according to your `credentials`.
   ex : `postgres://<YourUserName>:<YourPassword>@localhost:5432/<YourDatabase>`

3. you can find the DB and other details under `src/db`
   create a database with the name `node-typescript-rest-api` and then run/ import the `.sql` files (extract the sql files from sql.zip).
   Or you can run `npm run seed`.

4. install `pm2` globally with `npm install -g pm2`

### Run the app locally

- git clone https://github.com/nmanikiran/rest-api-node-typescript.git

- `npm install`
- `npm start` - This will start the application and run on port 3000
- `npm run dev` - This will start the application in development mode
- `npm run watch & pm2 start ecosystem.config.js` to start the application with cluster for scalability

you can change port in `.env` file check `.env-sample`

## Folder Structure

```
src
└───index.ts          # Application entry point
└───routes            # Application routes / endpoints
└───controllers       # Express route controllers for all the endpoints of the app
└───repositories      # All the database interaction logic is here
└───db                # DB related files like connection / seed data
└───handlers          # Common logic
└───logs              # application logs
└───middlewares       # express middlewares
└───models            # DB Models (Postgress)
└───validators        # API Request object validations

```

## Features

- CRUD operations for Courses
- CRUD operations for Lessons
- REST API Request object validations - Basic
- Error Logs
- Setup docs
- Seeder for DB

## Planned

- \[ ] JWT login
- \[ ] Unit Testing
- \[x] Postman collections
- \[ ] Improve request Object Validations
- \[ ] Improve Error Messages for request failures
- \[x] Project / DB Setup in Ubuntu - Docs
- \[ ] Security
- \[ ] Hosting

## REST Services

The application exposes a few REST endpoints

`HTTP` `GET` /api/lessons

`HTTP` `GET` /api/lessons/:id

`HTTP` `GET` /api/courses

You can use the following code snippet to call the secured endpoint:

```js
fetch("http://localhost:3000/api/courses", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (response.status === 200) {
      response.json().then((j) => console.log(j));
    } else {
      console.log("ERROR", response.status);
    }
  })
  .catch((error) => console.log(error));
```

## Created & Maintained By

<table>
  <tr>
    <td align="center"><a href="http://nmanikiran.com"><img src="https://avatars2.githubusercontent.com/u/3726349?s=460&v=4" width="100px;" alt="Mani Kiran"/><br /><sub><b>Mani Kiran N</b></sub></a><br />
    <a href="#" title="Code">💻 </a>
    <a href="#" title="Documentation">📖</a>
    <a href="#" title="Ideas">🤔</a>
    <a href="#" title="Reviewed Pull Requests">👀</a>
    <a href="#" title="Maintenance">🚧 </a>
    </td>
    <td align="center"><a href="https://curioustushar.github.io/"><img src="https://avatars3.githubusercontent.com/u/12570521?v=4" width="100px;" alt="Tushar Gupta"/><br /><sub><b>Tushar Gupta</b></sub></a><br />
    <a href="#" title="Code">💻 </a>
    <a href="#" title="Documentation">📖</a>
    <a href="#" title="Answering Questions">💬 </a>
    <a href="#" title="Maintenance">🚧 </a>
    </td>
  </tr>
</table>

Feel free to reach out to me through @nmanikiran if you have any questions or feedback!

## Recommended / Preferred

[VSCode](https://code.visualstudio.com/download)

## Thanks & Credits to

- Envato Tuts+ [30 Days to Learn HTML & CSS (Full Course)](https://www.youtube.com/playlist?list=PLgGbWId6zgaWZkPFI4Sc9QXDmmOWa1v5F)
- Wes Bos [JavaScript30](https://www.youtube.com/playlist?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH)
- CodeWorkr [REST API with Node (Express & MongoDB)](https://www.youtube.com/playlist?list=PLSpJkDDmpFZ5rZ5-Aur9WRNsBDSUS-0B9)
- Tyler McGinnis [Advanced JavaScript](https://www.youtube.com/playlist?list=PLqrUy7kON1meuCvGp2D6yTglZhPTT_s_f)
