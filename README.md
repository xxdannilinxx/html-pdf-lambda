# Follow these steps to convert HTML to PDF

- Step 1 - install the pdf creator package using the following command

  `$ npm i html-pdf-lambda --save`

  > --save flag adds package name to package.json file.

- Step 2 - Add required packages and read HTML template

  ```javascript
    //Required package
    const pdf = require("html-pdf-lambda");
    const fs = require("fs");

    // Read HTML Template
    const html = fs.readFileSync("template.html", "utf8");

  ```

- Step 3 - Create your HTML Template

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8" />
      <title>{{ title }}</title>
    </head>
    <body>
      <h1>User List</h1>
      <ul>
        {{#each users}}
        <li>Name: {{this.name}}</li>
        <li>Age: {{this.age}}</li>
        <br />
        {{/each}}
      </ul>
    </body>
  </html>
  ```
    
- Step 4 - Provide HTML and user data

  ```javascript
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
  // The file buffer will be developed;
  ```

- Step 5 - After setting all parameters, just pass document and options to `pdf.create` method.

  ```javascript
  pdf
    .create(html, data)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
  ```

## Reference

Please refer to the following if you want to use conditions in your HTML template:

- https://handlebarsjs.com/guide/builtin-helpers.html

### End

### Thanks
[brunnojcb](https://github.com/brunnojcb)
### License

html-pdf-lambda is [MIT licensed](./LICENSE).
