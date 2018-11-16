function isIt(opts = {}) {


  const urlRegex = '^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$'
  const url = new RegExp(urlRegex, 'i');

  return {
    arg: undefined,
    what: function () {
      const check = (obj) => {
        if (this.func(obj)) {
          return 'Function'
        }
        if (this.array(obj)) {
          return 'Array'
        }
        if (this.string(obj)) {
          return 'String'
        }
        if (this.event(obj)) {
          return 'Event'
        }
        if (this.boolean(obj)) {
          return 'Boolean'
        }
        if (this.int(obj)) {
          return 'Integer'
        }
        if (this.nothing(obj)) {
          return 'Nothing'
        }
        if (this.object(obj)) {
          return 'Object'
        } else {
          return "I couldn't figure out what this is...";
        }
      }

      if (arguments.length > 1) {
        let returns = [];
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg));
        });
        return returns;
      } else {
        return check(arguments[0]);
      }


    },

    object: function () {
      const check = (obj) => {
        if (this.func(obj)) {
          return false;
        }
        if (this.array(obj)) {
          return false;
        }
        if (this.string(obj)) {
          return false;
        }
        if (this.event(obj)) {
          return false;
        }

        return true;
      }

      if (arguments.length > 1) {
        let returns = [];
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg));
        });
        return returns;
      } else {
        return check(arguments[0]);
      }


    },

    array: function () {
      const check = (arr) => {
        return Array.isArray(arr);
      }

      if (arguments.length > 1) {
        let returns = [];
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg))
        });
        return returns;
      } else {
        return check(arguments[0])
      }
    },

    func: function () {
      const check = (fn) => {
        if (fn === undefined || fn === null) {
          return false
        } else
        if (typeof fn === 'function') {
          return Object.getPrototypeOf(fn) === Object.getPrototypeOf(function () {});
        } else {
          return false
        }
      }

      if (arguments.length > 1) {
        let returns = [];
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg))
        })
        return returns;
      } else {
        return check(arguments[0])
      }
    },

    string: function (opts) {
      const check = (str) => {
        return typeof str === 'string';
      }
      if (arguments.length > 1) {
        let returns = [];
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(arguments[0]);
      }
    },

    event: function () {
      const check = (e) => {
        return e instanceof Event;
      }
      if (arguments.length > 1) {
        let returns = [];
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(arguments[0]);
      }
    },

    boolean: function () {
      const check = (bool) => {
        return typeof bool === 'boolean';
      }
      if (arguments.length > 1) {
        let returns = []
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(arguments[0]);
      }
    },

    int: function () {
      const check = (int) => {
        return typeof int === 'number';
      }

      if (arguments.length > 1) {
        let returns = [];
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(arguments[0]);
      }

    },
    nothing: function () {
      const check = (el) => {
        if (el === undefined || el === null) {
          return true
        } else {
          return false
        }
      }
      if (arguments.length > 1) {
        let returns = [];
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(arguments[0]);
      }
    },
    link: function () {
      const check = (link) => {
        if (typeof link !== 'string') {
          return false
        }
        link = link.toLowerCase();

        return link.length < 2083 && url.test(link);
      }

      if (arguments.length > 1) {
        let returns = [];
        Array.from(arguments).forEach(arg => {
          returns.push(check(arg));
        })
        return returns;
      } else {
        return check(arguments[0]);
      }
    }
  }
}




module.exports = (() => {
  return isIt
})();
