const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
/* 
  IMPORTANT:
    ***NEVER*** store credentials unencrypted like this.
    This is for demo purposes only in order to simulate a functioning API server.
*/
const users = {
  "user1@joesrobotshopenit.com": {
    firstName: "User1",
    lastName: "User1",
    email: "user1@joesrobotshopenit.com",
    password: "very-secret",
  },
  "user2@joesrobotshop.com": {
    firstName: "User2",
    lastName: "User2",
    email: "user2@joesrobotshopenit.com",
    password: "super-secret",
  },
};
let cart = [];

// use this to add a 1 second delay to all requests
// app.use(function (req, res, next) {
//   setTimeout(next, 1000);
// });

app.get("/api/products", (req, res) => {
  let products = [
    {
        id: 1,
        description: "Un pur plaisir.",
        name: "Cheese Cake",
        imageName: "cheesecakesmall.jpg",
        category: "Cheesecakes",
        price: 12,
        discount: 0,
    },
    {
        id: 2,
        description: "Notre tarte de pommes vedette",
        name: "Apple Pie",
        imageName: "applepiesmall.jpg",
        category: "Pies",
        price: 14,
        discount: 0,
    },
    {
        id: 3,
        description: "La classique!",
        name: "Cherry Pie",
        imageName: "cherrypiesmall.jpg",
        category: "Pies",
        price: 18,
        discount: 0,
    },
    {
        id: 4,
        description: "En un mot ... Onctueuse !",
        name: "Cranberry Pie",
        imageName: "cranberrypiessmall.jpg",
        category: "Pies",
        price: 16,
        discount: 0,
    },
    {
        id: 5,
        description: "Un délice!",
        name: "Peach Pie",
        imageName: "peachpiesmall.jpg",
        category: "Pies",
        price: 18,
        discount: 0,
    },
    {
        id: 6,
        description: "Le sommet du goût !",
        name: "Pumpkin Pie",
        imageName: "pumpkinpiesmall.jpg",
        category: "Pies",
        price: 17,
        discount: 5,
    },
    {
        id: 7,
        description: "L'authentique",
        name: "Strawberry Cheese Cake",
        imageName: "strawberrycheesecakesmall.jpg",
        category: "Cheesecakes",
        price: 13,
        discount: 3,
    },
];
res.send(products);
});

app.post("/api/cart", (req, res) => {
  cart = req.body;
  setTimeout(() => res.status(201).send(), 20);
});

app.get("/api/cart", (req, res) => res.send(cart));

app.post("/api/register", (req, res) =>
  setTimeout(() => {
    const user = req.body;
    if (user.firstName && user.lastName && user.email && user.password) {
      users[user.email] = user;
      res.status(201).send({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      });
    } else {
      res.status(500).send("Invalid user info");
    }
  }, 800)
);

/* IMPORTANT:
    The code below is for demo purposes only and does not represent good security
    practices. In a production application user credentials would be cryptographically 
    stored in a database server and the password should NEVER be stored as plain text. 
*/
app.post("/api/sign-in", (req, res) => {
  const user = users[req.body.email];
  if (user && user.password === req.body.password) {
    res.status(200).send({
      userId: user.userId,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } else {
    res.status(401).send("Invalid user credentials.");
  }
});

app.listen(8081, () => console.log("API Server listening on port 8081!"));