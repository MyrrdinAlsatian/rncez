# Right Now Component Easy

Based on :
[![dependencies](https://david-dm.org/MyrrdinAlsatian/rncez.svg)](https://david-dm.org/MyrrdinAlsatian/rncez)

<br>

## Why

Because I haven't found a tool who really fits completely my need, because it's just a waste of time to copy/paste the component and change the name in the component every time.

<br>

## How to use it

```bash
    npx rncez create Myrrdin
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+)_

<br>

## How is it configure

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
  "component": {
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

****You can also create multiple component in a single commands:****

```
  npx rncez create Myrrdin Artorius Provencal Gaulois
```

This command will create a folder with your component name within your default (e.g. **src/components**) directory, and its corresponding files.

<br>

## The file structure

The File structure is based on the Grouping by features or routes rules.

So we decided to locate CSS, JS, and tests in the component. You have two possibilities for the tests at the same level or in a folder.

### Example of the default component files struture:

```
|-- /src
    |-- /components
        |-- /Box
            |-- Box.js
            |-- Box.css
            |-- Box.test.js
            |-- package.json
```

### Example of the default component files struture with a test folder:

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

****Why use a package.json****

```json
{ "main": "Box.js" }
```

With the use of package.json, you can import easily and in a more readable way without redundancy!

**_no more :_**

```js
import Box from "./components/Box/box.js";
```

**_just :_**

```js
import Box from "./components/Box";
```

<br>

## Options

<table>
  <tr align="left">
    <th>Options</th>
    <th>Description</th>
    <th>Value Type</th>
    <th>Default Value</th>
  </tr>
  <tr>
    <td width="20%"><b>--path</b></td>
    <td width="60%">
      Value of the path where you want the component to be generated in (e.g. <b>src/components</b>).  
    </td>
    <td width="20%">String</td>
    <td width="20%"><code>component.default.path<code></td>
  </tr>

  <tr>
    <td width="20%"><b>--type</b></td>
    <td width="60%">
      You can pass a custom component type that you have configured in the RNCEZ config file that has its own set of component config rules. Read more about <a href="#custom-component-types">custom component types</a>.
    </td>
    <td width="20%">String</td>
    <td width="20%"><code>component.default<code></td>
  </tr>

  <tr>
    <td width="20%"><b>--withLazy</b></td>
    <td width="60%">
      Creates a corresponding lazy file (a file that lazy-loads your component out of the box and enables <a href="https://reactjs.org/docs/code-splitting.html#code-splitting">code splitting</a>) with this component.      
    </td>
    <td width="20%">Boolean</td>
    <td width="20%"><code>component.default.withLazy<code></td>
  </tr>

  <tr>
    <td width="20%"><b>--withStory</b></td>
    <td width="60%">
      Creates a corresponding (<a href="https://storybook.js.org">storybook</a>) story file with this component.      
    </td>
    <td width="20%">Boolean</td>
    <td width="20%"><code>component.default.withStory<code></td>
  </tr>

  <tr>
    <td width="20%"><b>--withStyle</b></td>
    <td width="60%">
      Creates a corresponding stylesheet file with this component.    
    </td>
    <td width="20%">Boolean</td>
    <td width="20%"><code>component.default.withStyle<code></td>
  </tr>
  <tr>
    <td width="20%"><b>--withTest</b></td>
    <td width="60%">
      Creates a corresponding test file with this component.      
    </td>
    <td width="20%">Boolean</td>
    <td width="20%"><code>component.default.withTest<code></td>
  </tr>
</table>

<br>

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

But what if you want to generate another type of components that have their own set of configuration rules (e.g., **layout** or **page** )?

you can do it by extending the `rncez-config-cli.json` config file like this :

```json
{
  "usesTypeScript": false,
  "usesCssModule": true,
  "cssPreprocessor": "scss",
  "testFolder": "__test__",
  "testLibrary": "Enzyme",
  "component": {
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
      "withJSON": true
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

****And of course you can use the same [options](#options) to your custom component types as you would use for the default component type.****

## Custom component templates

In order to provide more flexibility, You can also create your own custom templates that RNCEZ can use instead of the build-in templates that come with it.

There is an optional `customTemplates` object that you can pass to the `component.default` or any of your custom component types within your **rncez-config-cli.json** config file.

### Example of the `customTempalte ̀ object :

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

### Example of a custom component template file :

```jsx
// templatesReact/componentClass/TemplateName.js

import React, { Component } from "react";
import styles from "./TemplateName.module.scss";

export class TemplateName extends Component {
  constructor(props) {
    super(props);
    this.state = { state: 0 };
    this.someFunction = this.someFunction.bind(this);
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps() {}
  ShouldComponentUpdate() {}
  componentWillUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  /**
   * Here event function with handle or on prefix
   * then getter for render
   */

  render() {
    return <div></div>;
  }
}

export default TemplateName;
```

## Custom component files

RNCEZ comes with corresponding built-in files for a given component if you need them (i.e., `withStyle`, `withTest`, `withStory`, `withLazy`, `withJSON`).

What if you wanted to add custom files of your own?

For example, let's say you wanted to add an `README.md` file for each component, so you document your component.

Or maybe you need an additional style file for your component stories.

You can do so by editing your **rncez-config-cli.json** config file like so.

```json
{
  "usesTypeScript": false,
  "usesCssModule": true,
  "cssPreprocessor": "scss",
  "testFolder": "__test__",
  "testLibrary": "Enzyme",
  "component": {
    "default": {
      "path": "src/components",
      "withStyle": true,
      "withTest": true,
      "withStory": true,
      "withLazy": false,
      "withMd": true,
      "withStoryStyle": true,
      "customTemplates": {
        "md": "templates/default/README.md",
        "storyStyle": "templates/default/TemplateName.stories.css"
      }
    }
  }
}
```

````md
[comment]: <> (templatesReact/componentClass/TemplateName.md)

# TemplateName:

## Description :

---

Knacksum

## How to use it

---

````jsx static

import TemplateName from './components/TemplateName.js'
            ...

<TemplateName> </TemplateName>

``

### Variant and Props :

```jsx static
        ...
    <TemplateName variant="loading" > </TemplateName>
``
## Tests
- - -
What is tested :
>'' Knacksum"
> 1664. What a great knack.

- - - - -
Credit to [@]:
````
````

```css
/* templates/default/TemplateName.stories.css */

.TemplateName {
}
```

In this case, we added a `withmd` & `withStoryStyle` to the `component.default`. Note: You can add custom files to any of your custom component types.

You should also see that we added `md` and `storyStyle` to our `customTemplates` object. That's because custom files require custom templates. Otherwise, you will get an error when you generate a component.

Also, we used the `TemplateName` keyword for the `storyStyle` custom file. RNCEZ will generate this corresponding file and replace `TemplateName` with the component name.
