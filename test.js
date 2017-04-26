const assert = require('assert');
const patchUrl = require('./patcher.js');

describe("#patchUrl", () => {
  const tests = [
    {
      message: "prepends http when protocol is missing",
      expected: "http://foo",
      input: "foo"
    }, {
      message: "handles empty input",
      expected: "",
      input: ""
    }, {
      message: "handles undefined input",
      expected: undefined,
      input: undefined
    }, {
      message: "handles number input",
      expected: 3,
      input: 3
    }, {
      message: "handles numbers in strings",
      expected: "http://3",
      input: "3"
    }, {
      message: "removes trailing slash",
      expected: "http://foo",
      input: "foo/"
    }, {
      message: "doesn't respect other protocols",
      expected: "http://tcp://foo",
      input: "tcp://foo"
    }, {
      message: "incomplete protocols are not respected",
      expected: "http://httpfoo",
      input: "httpfoo"
    }, {
      message: "all trailing slashes are removed",
      expected: "http://foo/bar",
      input: "http://foo/bar////////"
    }, {
      message: "works with http",
      expected: "http://foo",
      input: "http://foo"
    }, {
      message: "works with https",
      expected: "https://foo",
      input: "https://foo"
    }
  ];

  for (const test of tests) {
    if(test.message) {
      it(test.message, () => {
        assert.strictEqual(patchUrl(test.input), test.expected);
      });
    }
  };
});
