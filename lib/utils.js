/**
 * Detect if the rule is a class
 *
 * @param {Object} x
 * @returns {Boolean}
 */
export const isClass = x => x.selectors.startsWith(".")

/**
 * Detect if the rule is a css rule
 *
 * @param {Object} x
 * @returns {Boolean}
 */
export const isRule = x => x.type === "rule"

var cleanPropertyName = function(name) {

    // turn things like 'align-items' into 'alignItems'
    name = name.replace(/(-.)/g, function(v) { return v[1].toUpperCase(); })

    return name;
}

export const transformDeclarations = declarations => {

  var obj = {};
  declarations.forEach(function (declaration) {
    if (declaration.type === 'declaration') {
      var cleanProperty = cleanPropertyName(declaration.property);
      obj[cleanProperty] = declaration.value;
    }
  });
  return obj
}
