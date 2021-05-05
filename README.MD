# Right Now Component Easy

Based on :
[![dependencies](https://david-dm.org/arminbro/generate-react-cli.svg)](https://david-dm.org/arminbro/generate-react-cli)
[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/arminbro/generate-react-cli/blob/master/LICENSE)

<br>

## Why 
---
Because I didn't found a tool who really fits completely my need, because it's just a waste of time to copy/paste the component and change the name in the component every time.

<br>

## How to use it
---
```bash
    npx rncz create Myrrdin
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+)_
<br>

## How is it configure
---
When you run the command for the first time in your project, it will ask you a couple of question in order to customize RNCEZ to fit your project and to create "rncez-config-cli.json" config files if you want to make some change.

<br>

### Example of a configuration file that is created whit the CLI:

```json
{
  "usesTypeScript": false,
  "usesCssModule": true,
  "cssPreprocessor": "scss",
  "testFolder": "__test__",
  "testLibrary": "Enzyme",
  "component":{
        "default": {
            "path": "components",
            "withStyle": true,
            "withTest": true,
            "withStory": false,
            "withLazy": true,
            "withJSON": true
        }
    } 
}

```
## Generated component

```
  npx rncez create Myrrdin
```
**__You can also create multiple component in a single commands:__**

```
  npx rncez create Myrrdin Artorius Provencal Gaulois
```
This command will create a folder with your component name within your default (e.g. **src/components**) directory, and its corresponding files.

<br>

### Example of th defautl component files struture:
```
|-- /src
    |-- /components
        |-- /Box
            |-- Box.js
            |-- Box.css
            |-- /__tests__
                |-- Box.test.js
            |-- package.json
```

**__Why use a package.json__**
```json

    {"main": "Box.js"}
    
```
With the use of package.json, you can import easily and in a more readable way without redundancy!

**_no more :_**

```js

  import Box from './components/Box/box.js';

```
**_just :_**

```js

  import Box from './components/Box';

```
<br>

## Options
You can also override some of RNCEZ component config rules using one-off commands. So for example, if you have set `withStory` to `true` in your **default component** setup, but now you want to create a component whitout **Story**, You can override it : 

```
  npx rncez create Myrrdin --withStory=false
```

Or vice versa, if you have set `withStory` to be `false` you can do this:

```
  npx rncez create Myrrdin --withStory=true
```

And of course if you don't pass any options, it will run the default config values, which are in the config file under `component.default` 

<br>

## Custom component types:

By default, the RNCEZ will use the default configuration when you run the command. 

but waht if you want to generate another types of components that have their own set of configuration rules (e.g., **layout** or **page** )?

you can do it by extending the ``rncez-config-cli.json`` config file like this :

```json
{
  "usesTypeScript": false,
  "usesCssModule": true,
  "cssPreprocessor": "scss",
  "testFolder": "__test__",
  "testLibrary": "Enzyme",
  "component":{
        "default": {
            "path": "components",
            "withStyle": true,
            "withTest": true,
            "withStory": false,
            "withLazy": true,
            "withJSON": true
        },
    "page": {
      "path": "src/pages",
      "withLazy": true,
      "withStory": false,
      "withStyle": false,
      "withTest": true,
      "withJSON": true,
      
    },
    "layout": {
      "path": "src/layout",
      "withLazy": false,
      "withStory": false,
      "withStyle": false,
      "withTest": true,
      "withJSON": true
    }
  }     
}
```

Now you can generate your custom type component like this :

```bash
    npx rncez create Myrrdin --type=layout
```
```bash
    npx rncez create ProvencalLeGallois --type=page
```
**__And of course you can use the same [options](#options) to your custom component types as you would use for the default component type.__**


## Custom component templates
In order to provide more flexibility, You can also create your own custom templates that RNCEZ can use instead of the build-in templates that come with it.

There is an optional `customTemplates` object that you can pass to the `component.default` or any of your custom component types within your **rncez-config-cli.json** config file.

### Example of the `customTempalte ̀  object :

```json
"customTemplates": {
  "component": "templates/TemplateName.js",
  "lazy":  "templates/TemplateName.lazy.js",
  "story":  "templates/TemplateName.story.js",
  "style": "templates/TemplateName.style.scss",
  "test":  "templates/TemplateName.test.js"
},
```
The keys represent the type of file, and the values are the paths that point to where your custom template lives in your project/system. Please note the `TemplateName` keyword in the template filename. RNCEZ will use this keyword and replace it with your component name as the filename.

#### Example of using the `customTemplates` object within your rncez-config-cli.json config file:

```json
{
  "usesTypeScript": false,
  "usesCssModule": true,
  "cssPreprocessor": "scss",
  "testFolder": "__test__",
  "testLibrary": "Enzyme",
  "component": {
    "default": {
      "customTemplates": {
        "component": "templates/component/TemplateName.js",
        "style": "templates/component/TemplateName.style.scss",
        "test": "templates/component/TemplateName.test.js"
      },
      "path": "src/components",
      "withStyle": true,
      "withTest": true,
      "withStory": true,
      "withLazy": false
    },
    "page": {
      "customTemplates": {
        "test": "templates/page/TemplateName.test.js"
      },
      "path": "src/pages",
      "withLazy": true,
      "withStory": false,
      "withStyle": true,
      "withTest": true
    }
  }
}
```

Notice in the `page.customTemplates` that we only specified the `test` custom template type. That's because all the custom template types are optional. If you don't set the other types, RNCEZ will by default use the built-in templates it comes with.

**_You can create a bunch of templates that you host on Gitlab or Github and clone the repository to the root of your project as a submodule of the project so you can update the template easily. ;-)_**

