# Frontend kickstarter

> kickstart your frontend by using gulp, sass/scss and webpack

## Usage

First, clone this repository

```shell
git clone https://github.com/beardcoder/frontend-kickstart.git
```

Then, adjust the config for your projekt in the **package.json**:

```json
  {
    "config": {
      "asset-dir": "./assets/",
      "web-dir": "./web/"
    }
  }
```

### Additional settings

If you have a special project structure like TYPO3 adjust the path's in the **gulpfile.js**

```javascript
var path = {
  css_source: fs.resolve(__dirname, config["asset-dir"] + '/scss/**/*.scss'),
  css_dest: fs.resolve(__dirname, config["web-dir"] + '/Resources/Public/Css/'),
  js_source: fs.resolve(__dirname, config["asset-dir"] + '/javascript/basic.js'),
  js_dest: fs.resolve(__dirname, config["web-dir"] + '/Resources/Public/JavaScript/')
};
```

## Start

At first install all dependencies

```bash
npm i
```

Then you can build sources with

```bash
gulp build
```


You can run the watch task after build with

```bash
gulp build && gulp watch
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
