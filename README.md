CKEditor 5 custom "super" build
========================================

Forked from [ckeditor5-build-classic](https://github.com/ckeditor/ckeditor5-build-classic)

## How to use

Install the build from npm

```
# optional: make sure to use the latest version by uninstalling first
# yarn remove ckeditor5-creadits-build
yarn add ckeditor5-creadits-build
```

And use it as an usual ckeditor5 build

```
import { InlineEditor } from 'ckeditor5-creadits-build';

...

InlineEditor
	.create(htmlElement, config)
	.then(editor => {
  ...

```

## How to modify

Clone this repository
```
git clone git@github.com:refuel4/ckeditor5-custom-build.git
```

Add or remove plugins, modify the config in `src/ckeditor.js`

Create the build
```
yarn run build
```

Optional: build and check the bundle size
```
yarn run build:analyzer
```

Build and check the sample usage of the build
```
yarn start
# then open http://localhost:8080/sample/
```

Publish to npm (might require team member permission)
```
yarn publish
```

Find it in npm registry: https://www.npmjs.com/package/ckeditor5-creadits-build
