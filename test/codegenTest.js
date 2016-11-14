import { assert } from "chai"
import { classNameToComponentName } from '../lib/codegen'
import genComponent from '../lib/codegen/templates/component'
import genBaseClass from '../lib/codegen/templates/baseClass'

describe("code generation", () => {

  describe("component naming", () => {

    it("simple class", () => {
      assert.equal(
        "Ab",
        classNameToComponentName(".ab")
      )
    })

    it("multiple class", () => {
      assert.equal(
        "B",
        classNameToComponentName(".a .b")
      )
    })

    it("simple class with tag", () => {
      assert.equal(
        "Ab",
        classNameToComponentName("a.ab")
      )
    })

    it("simple class with child", () => {
      assert.equal(
        "B",
        classNameToComponentName(".a > .b")
      )
    })

    it("simple class with sibling", () => {
      assert.equal(
        "B",
        classNameToComponentName(".a + .b")
      )
    })
  })

  describe("templates", () => {

    it("base class", () => {
      assert.isString(genBaseClass())
    })

    it("component", () => {
      assert.isString(genComponent({}))

      assert.include(genComponent({ name: "foo" }), "class foo")
      assert.include(genComponent({ style: "foo" }), 'style = "foo"')
    })

  })
})
