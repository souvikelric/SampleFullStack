import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";

const app = express();
configDotenv();

const port = process.env.PORT;
app.use(cors());

const githubInfo = {
  login: "souvikelric",
  id: 57339549,
  node_id: "MDQ6VXNlcjU3MzM5NTQ5",
  avatar_url: "https://avatars.githubusercontent.com/u/57339549?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/souvikelric",
  html_url: "https://github.com/souvikelric",
  followers_url: "https://api.github.com/users/souvikelric/followers",
  following_url:
    "https://api.github.com/users/souvikelric/following{/other_user}",
  gists_url: "https://api.github.com/users/souvikelric/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/souvikelric/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/souvikelric/subscriptions",
  organizations_url: "https://api.github.com/users/souvikelric/orgs",
  repos_url: "https://api.github.com/users/souvikelric/repos",
  events_url: "https://api.github.com/users/souvikelric/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/souvikelric/received_events",
  type: "User",
  site_admin: false,
  name: "Souvik Roy Chowdhury",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 22,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2019-11-04T04:37:08Z",
  updated_at: "2024-06-18T06:15:07Z",
};

app.get("/", (req, res) => {
  res.json(githubInfo);
});

app.get("/users", (req, res) => {
  const users = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
        street: "Victor Plains",
        suite: "Suite 879",
        city: "Wisokyburgh",
        zipcode: "90566-7771",
        geo: {
          lat: "-43.9509",
          lng: "-34.4618",
        },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
        name: "Deckow-Crist",
        catchPhrase: "Proactive didactic contingency",
        bs: "synergize scalable supply-chains",
      },
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
        street: "Douglas Extension",
        suite: "Suite 847",
        city: "McKenziehaven",
        zipcode: "59590-4157",
        geo: {
          lat: "-68.6102",
          lng: "-47.0653",
        },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
        name: "Romaguera-Jacobson",
        catchPhrase: "Face to face bifurcated interface",
        bs: "e-enable strategic applications",
      },
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
        street: "Hoeger Mall",
        suite: "Apt. 692",
        city: "South Elvis",
        zipcode: "53919-4257",
        geo: {
          lat: "29.4572",
          lng: "-164.2990",
        },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
        name: "Robel-Corkery",
        catchPhrase: "Multi-tiered zero tolerance productivity",
        bs: "transition cutting-edge web services",
      },
    },
  ];

  res.json(users);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
