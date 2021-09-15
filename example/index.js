//Required package
const pdf = require("../index");
const fs = require("fs");

// Read HTML Template
const html = fs.readFileSync("template.html", "utf8");

// User data
const data = {
    title: "Hello World!",
    users: [
        {
            name: "Shyam",
            age: "26",
        },
        {
            name: "Navjot",
            age: "26",
        },
        {
            name: "Vitthal",
            age: "26",
        },
    ]
};

const result = pdf
    .create(html, data)
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });

// Here it will return the buffer, you can use it or create a file with it.
console.log(result);