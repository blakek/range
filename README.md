# range

> 🔢 Generate a range of numbers

Utilities for creating and sizing a range of numbers.

## Install

Using [Yarn]:

```bash
$ yarn add @blakek/range
```

…or using [npm]:

```bash
$ npm i --save @blakek/range
```

## Usage

```js
import { range, rangeG, rangeSize } from '@blakek/range';

// Create a list of numbers
range(1, 3); //» [ 1, 2, 3 ]
range(10, 20, 5); //» [ 10, 15, 20 ]

// Iterate over a range
for (const i of rangeG(1, 10, 4)) {
  console.log(i);
}
//» 1
//» 5
//» 9

// Get how many steps a range would contain
rangeSize(1, 20); //» 20
rangeSize(1, 20, 5); //» 4
```

## API

### `range`

```ts
function range(from: number, to: number, step?: number = 1): number[];
```

Creates an array of numbers from a number to another, stepping in increments of
`step`.

```js
range(1, 5); //» [ 1, 2, 3, 4, 5 ]

range(0, 20, 5); //» [ 0, 5, 10, 15, 20 ]

range(10, 0, -2); //» [ 10, 8, 6, 4, 2, 0 ]

range(5, 0, 1);
//» RangeError: would create infinte range due to stepping in the wrong direction
```

### `rangeG`

```ts
function rangeG(
  from: number,
  to: number,
  step?: number = 1
): Generator<number, void, number>;
```

Generates numbers from a number to another, stepping in increments of `step`.

```js
[...rangeG(1, 3)]; //» [ 1, 2, 3 ]

[...rangeG(5, 1, -1)]; //» [ 5, 4, 3, 2, 1 ]

[...rangeG(5, 1, 1)]; //» RangeError: would create infinte range due to stepping in the wrong direction

for (const i of rangeG(0, -Infinity, -2)) {
  if (i < -20) break;
  console.log(i);
}
//» 0, -2, -4, -6, -8, -10, -12, -14, -16, -18, -20
```

### `rangeSize`

```ts
function rangeSize(from: number, to: number, step?: number = 1): number;
```

Returns the number of steps necessary to go from one number to another, stepping
in increments of `step`.

```js
rangeSize(1, 100); //» 100

rangeSize(2, 1024, 2); //» 512

rangeSize(100, 1, -5); //» 20

rangeSize(1, 10, -1); //» Infinity
```

## Contributing

[Node.js] and [Yarn] are required to work with this project.

To install all dependencies, run:

```bash
yarn
```

### Useful Commands

|                     |                                                 |
| ------------------- | ----------------------------------------------- |
| `yarn build`        | Builds the project to `./dist`                  |
| `yarn format`       | Format the source following the Prettier styles |
| `yarn test`         | Run project tests                               |
| `yarn test --watch` | Run project tests, watching for file changes    |

## License

MIT

[blakek/deep]: https://github.com/blakek/deep
[node.js]: https://nodejs.org/
[npm]: https://npmjs.com/
[yarn]: https://yarnpkg.com/en/docs/
