CKEditor 5 custom "super" build
========================================

Forked from [ckeditor5-build-classic](https://github.com/ckeditor/ckeditor5-build-classic)

## How to use

Install the build from npm

```
yarn add ckeditor5-creadits-build
```

And use it as an usual ckeditor5 build

```
import Editor from 'ckeditor5-creadits-build';

...
// Notice that this is a super build, thus it exposes multiple Editor creators. Choose the one you need.
CKEDITOR.InlineEditor
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
npm run build
```

Optional: build and check the bundle size
```
npm run build:analyzer
```

Build and check the sample usage of the build
```
npm start
# then open http://localhost:8080/sample/
```

Publish to npm (might require team member permission)
```
npm publish
```

Find it in npm registry: https://www.npmjs.com/package/ckeditor5-creadits-build
