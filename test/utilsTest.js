import { assert } from "chai"
import { isClass, isRule } from '../lib/utils';

describe("utils", () => {

  describe("class detector", () => {

    it("should detect a class", () => {
      const rule = { selectors: ".a" }

      assert.isTrue(isClass(rule))
    })

    it("should not detect a class", () => {
      const rule = { selectors: "a" }

      assert.isFalse(isClass(rule))
    })

  })

  describe("rule detector", () => {

    it("should detect a rule", () => {
      const rule = { type: "rule" }

      assert.isTrue(isRule(rule))
    })

    it("should not detect a rule", () => {
      const rule = { type: "foo" }

      assert.isFalse(isRule(rule))
    })

  })

})
