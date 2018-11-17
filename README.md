# is It?

Basicly just another sugary syntax wrap around typechecking!

## Getting Started

At the moment you can just download it! Still learning here!

## Examples

**isIt(opts = {}).what(input)**

Get a string containing what the input is:
```javascript
isIt().what(input) // Returns Function || Array || String || Event || Boolean || Integer || tells you that he couldn't figure it out.
```

**isIt(opts = {}).object(obj)**

Returns `true` if the input is a object or `false` if its not:
```javascript
isIt().object(Object); // true
isIt().object(Function); // false
isIt().object(Array); // false
```

**isIt(opts = {}).array(array)**

Returns `true` if the input is an array or `false` if its not:
```javascript
isIt().array(Array); // true
isIt().array(String); // false
```

**isIt(opts = {}).func(function)**

Returns `true` if the input is a function or `false` if its not:
```javascript
isIt().func(Function); // true
isIt().func(Object); // false
```

**isIt(opts = {}).string(string)**

Returns `true` if the input is a string or `false` if its not:
```javascript
isIt().string(String); // true
isIt().string(Array); // false
```

**isIt(opts = {}).event(event)**

Returns `true` if the input is an event or `false` if its not:
```javascript
isIt().event(Event); // true
isIt().event(Object); // false
```

**isIt(opts = {}).boolean(boolean)**

Returns `true` if the input is an boolean or `false` if its not:
```javascript
isIt().boolean(true); // true
isIt().boolean(false); // true
isIt().boolean(undefined); // false
```

**isIt(opts = {}).int(int)**

Returns `true` if the input is an integer or `false` if its not:
```javascript
isIt().integer(42); // true
isIt().integer('50'); // false
```

**isIt(opts = {}).nothing(null)**

Returns `true` if the input is `undefined || null` or `false` if its not:
```javascript
isIt().nothing(null); // true
isIt().nothing(undefined); // true
isIt().nothing(false); // false
```

**isIt(opts = {}).link(url)**

Returns `true` if the input is a link/url or `false` if its not:
```javascript
isIt().link('http://github.com'); // true
isIt().link('a plain string'); // false
```

## Multiple

**isIt(opts = {}).what('string', [], {}, function () {}, false, 43, undefined, null)**
```javascript
isIt().what('string', [], {}, function () {}, false, 43, undefined, null)
```
Outputs:
```javascript
["String", "Array", "Object", "Function", "Boolean", "Integer", "Nothing", "Nothing"]
```

***
### Prerequisites

Computer, internet and browser, download it from here, npm hopefully soon.

```
```

### Installing

Download from github.

import it

```javascript
import isIt from '../isIt';
```

And use

```javascript
isIt().what([1,2,3,4,5]) // Array
```

## Deployment

Use your favorite bundler :)
Wrote this with [Parcel](https://parceljs.org/)

## Built With

vscode and my fingers.
[Parcel](https://parceljs.org/)

## Contributing

Please read [CONTRIBUTING.md]() for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

0.0.1 - Thats just that!

## Authors

* **Anton Kristensen** - *Initial work* - [Anton Kristensen](https://github.com/antonedvard)

See also the list of [contributors](https://github.com/antonedvard/isIt/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
