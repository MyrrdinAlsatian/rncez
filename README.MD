# Right Now Component Easy

Based on :
[![dependencies](https://david-dm.org/arminbro/generate-react-cli.svg)](https://david-dm.org/arminbro/generate-react-cli)
[![License](https://img.shields.io/npm/l/express.svg)](https://github.com/arminbro/generate-react-cli/blob/master/LICENSE)

## Why 

Because I didn't found a tool who really fits completely my need, because it's just a waste of time to copy/paste the component and make the change in the component every time.


## How to use it

```bash
    npx rncz create Myrrdin
```

_([npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+)_

## How is it configure

When you run the command for the first time in your  project, it will ask you a couple of question in order to customize RNCEZ to fit your project and to create "rncez-config-cli.json"config file if you whant to make some change.

### Exemple of config file you gonna create:

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