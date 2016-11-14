/**
 * Generate component
 *
 * @param {Object} component
 * @returns {String}
 */
export default component => {
  let out = ""

  out += `export class ${ component.name } extends Base {
  style = ${ JSON.stringify(component.style) }
}

`

  return out
}

