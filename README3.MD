# DAY 6 let's get Hooked

## what is named export and default export?

if we have a component in seprate file and we want to export it , there are two ways to it-

```
export function MyComponent() {}
vs
export default MyComponent
```

Exports without a default tag are Named exports.

Exports with the default tag are Default exports.

## Named expoet

Named and Default exports are not React-centric ideas. They are es6 features.

When you want to import a named component, you use the same name it was exported with. Names must be imported inside curly brackets.

Named exports allow multiple exports in a single file.

## Default Exports

Default exports are created by including a default tag in the export. Usually, you see default exports happen at the bottom of a file, but it’s possible to define them when your component is declared.

When importing a default export, you don’t use curly brackets.
you can use any name for import

modules can only have one default export.

if we want to import everythng from a file .
we can do like this

```
import * as obj "path";

```
