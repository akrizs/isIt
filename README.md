# is It?

Basicly just another sugary syntax wrap around typechecking!

## Getting Started

At the moment you can just download it! Still learning here!

## Examples

**isIt(input).what(opts = {})**

Get a string containing what the input is:
```javascript
isIt(input).what() // Returns Function || Array || String || Event || Boolean || Integer || tells you that he couldn't figure it out.
```

**isIt(obj).object(opts = {})**

Returns `true` if the input is a object or `false` if its not:
```javascript
isIt(obj).object() // true
isIt(function).object() // false
isIt(array).object() // false
```

**isIt(array).array(opts = {})**

Returns `true` if the input is an array or `false` if its not:
```javascript
isIt(array).array() // true
isIt(string).array() // false
```

**isIt(function).func(opts = {})**

Returns `true` if the input is a function or `false` if its not:
```javascript
isIt(() => {}).func() // true
isIt(object).func() // false
```

**isIt(string).string(opts = {})**

Returns `true` if the input is a string or `false` if its not:
```javascript
isIt(string).string() // true
isIt(array).string() // false
```

**isIt(event).event(opts = {})**

Returns `true` if the input is an event or `false` if its not:
```javascript
isIt(event).event() // true
isIt(object).event() // false
```

**isIt(boolean).boolean(opts = {})**

Returns `true` if the input is an boolean or `false` if its not:
```javascript
isIt(true).boolean() // true
isIt(false).boolean() // true
isIt(string).boolean() // false
```

**isIt(int).int(opts = {})**

Returns `true` if the input is an integer or `false` if its not:
```javascript
isIt(42).integer() // true
isIt('50').integer() // false
```

**isIt(null).nothing(opts = {})**

Returns `true` if the input is `undefined || null` or `false` if its not:
```javascript
isIt(null).nothing() // true
isIt(undefined).nothing() // true
isIt(false).nothing() // false
```

**isIt(url).link(opts = {})**

Returns `true` if the input is a link/url or `false` if its not:
```javascript
isIt('http://github.com').link() // true
isIt('a plain string').link() // false
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

```
isIt([1,2,3,4,5]).what() // Array
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
