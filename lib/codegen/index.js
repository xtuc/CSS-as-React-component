import _ from "lodash"

/**
 * Get component name from a rule
 *
 * @param {String} c CSS selector
 * @returns {String}
 */
export const classNameToComponentName = c => {

  if (c.indexOf(">") !== -1) {
    c = c.split(">").pop()
  }

  if (c.indexOf("+") !== -1) {
    c = c.split("+").pop()
  }

  if (c.indexOf(".") !== -1) {
    c = c.split(".").pop()
  }

  return _.upperFirst(_.camelCase(c))
}

export { default as genComponent } from "./templates/component"
export { default as addIncludeReact } from "./templates/baseClass"
