{
  "name": "blogs-js-create-np-es6",
  "url": "/blogs/js/create-np-es6",
  "title": "Create a Node Package in es6",
  "component": "blogs-post",
  "tags": [
    "blog",
    "js",
    "es6"
  ],
  "params": {
    "blog": {
      "description": "Go over the entire process of creatingn a node package in es6 from creating to using locally to deploying to npm",
      "hero": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17779/yosemite-3.jpg",
      "body": "<h2>Create basic project</h2>\r\n<code raw>\r\n$ mkdir example\r\n$ cd example\r\n$ npm init\r\n</code>\r\n\r\n<h2>Install and config dependencies</h2>\r\n<code raw>\r\n$  npm install babel-cli babel-preset-es2015 babel-register babel-core babel-polyfill  babel-loader babel-preset-stage-0 --save-dev\r\n$ touch .babelrc\r\n</code>\r\n\r\n<h3>add to .babelrc</h3>\r\n<code raw>\r\n{\r\n  \"presets\": [\"es2015\", \"stage-0\"]\r\n}\r\n</code>\r\n\r\n<h2>Create folder structure</h2>\r\n<code raw>\r\n$ mkdir src\r\n$ mkdir lib\r\n$ touch src/index.js\r\n</code>\r\n\r\n<h2>Add to src/index.js</h2>\r\n<code raw>\r\nrequire('babel-polyfill');\r\nexport default class Example {\r\n  constructor(str) {\r\n    this.str = str\r\n  }\r\n\r\n  excit() {\r\n    return `${this.str}!`\r\n  }\r\n}\r\n</code>\r\n\r\n<h3>add to package.json</h3>\r\n<code raw>\r\n{\r\n  \"scripts\": {\r\n    \"build\": \"babel src --out-dir lib\",\r\n    \"prepublish\": \"npm run build\"\r\n  }\r\n}\r\n</code><br/><code raw>\r\n\r\n$ npm run build\r\n\r\n</code><h2>Test</h2>\r\n<code raw>\r\n## create new project\r\n$ mkdir test_example\r\n$ cd test_example\r\n$ npm init\r\n$ npm install ../example\r\n$ touch index.js\r\n</code>\r\n\r\n<h3>add to index.js</h3>\r\n<code raw>\r\nvar ex = require(‘example’);\r\nconsole.log(new ex(‘hello’).excit())\r\n</code>\r\n\r\n<h2>setup git</h2>\r\n<code raw>\r\n$ git init\r\n$ git add .\r\n$ commit -m \"init example\"\r\n$ touch .gitignore\r\n$ touch .npmignore\r\n</code>\r\n\r\n<h3>add to .gitignore</h3>\r\n<code raw>\r\n.DS_STORE\r\nnode_modules\r\nbuild/\r\n.module-cache\r\n*.log*\r\nlib\r\n</code>\r\n\r\n\r\n<h3>add to .npmignore</h3>\r\n<code raw>\r\nnode_modules\r\nsrc\r\n</code>\r\n\r\n\r\n<h4>Sign up for git up at github.com</h4>\r\n<h4>Create example repo </h4>\r\n\r\n<code raw>\r\n$ git remote add origin git@github.com:kevinponce/example.git\r\n</code>\r\n\r\n<h4>Check if it add remote origin</h4>\r\n<code raw>\r\n$ git remote -v\r\n</code>\r\n\r\n<h2>setup npm for project</h2>\r\n<code raw>\r\n$ npm adduser\r\n$ npm publish\r\n</code>\r\n\r\n<p>If that fails, change project name package.json to be like \"name\": \"@your_username/example\"</p>\r\n\r\n\r\n<p>Voila</p>\r\n",
      "date": "1/20"
    }
  },
  "date": "2019-01-20"
}