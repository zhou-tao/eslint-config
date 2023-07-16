const toString = Object.prototype.toString

export function is(val, type) {
  return toString.call(val) === `[object ${type}]`
}

export function isDef(val) {
  return typeof val !== 'undefined'
}

export function isUnDef(val) {
  return !isDef(val)
}

export function isObject(val) {
  return val !== null && is(val, 'Object')
}

export function isEmpty(val) {
  if (isArray(val) || isString(val)) {
    return val.length === 0
  }

  if (val instanceof Map || val instanceof Set) {
    return val.size === 0
  }

  if (isObject(val)) {
    return Object.keys(val).length === 0
  }

  return false
}

export function isDate(val) {
  return is(val, 'Date')
}

export function isNull(val) {
  return val === null
}

export function isNullAndUnDef(val) {
  return isUnDef(val) && isNull(val)
}

export function isNullOrUnDef(val) {
  return isUnDef(val) || isNull(val)
}

export function isNumber(val) {
  return is(val, 'Number')
}

export function isPromise(val) {
  return (
    is(val, 'Promise')
    && isObject(val)
    && isFunction(val.then)
    && isFunction(val.catch)
  )
}

export function isString(val) {
  return is(val, 'String')
}

export function isJsonString(val) {
  if (!isString(val)) return false
  try {
    return !!isObject(JSON.parse(val))
  } catch (err) {
    return false
  }
}

export function isFunction(val) {
  return typeof val === 'function'
}

export function isBoolean(val) {
  return is(val, 'Boolean')
}

export function isRegExp(val) {
  return is(val, 'RegExp')
}

export function isArray(val) {
  return val && Array.isArray(val)
}

export function isWindow(val) {
  return typeof window !== 'undefined' && is(val, 'Window')
}

export function isElement(val) {
  return isObject(val) && !!val.tagName
}

export function isMap(val) {
  return is(val, 'Map')
}
