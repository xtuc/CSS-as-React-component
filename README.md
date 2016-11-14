# CSS as React component

## Goal

Transform CSS code into React components or at least an attempt to it.
I'm trying to find a handy way to use CSS in components (particuliary intended to server-side rendering).

## Usage

```shell
npm install
```

```shell
./bin/index [filename.css] > components.js
```

`components.js` will contain the generated React components.

## Example

```css
.link {
  color: blue;
}
```

```js
class Base extends React.Component { … }

export class Link extends Base {
  style = {"color":"blue"}
}
```

```jsx
import { Link } from '…';

<Link>Test link</Link>
```

## Roadmap

### Version 1

* [ ] Support CSS child selectors
* [ ] Support CSS pseudo-classes
