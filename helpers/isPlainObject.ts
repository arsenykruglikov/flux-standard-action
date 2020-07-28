function isObject(o: unknown): o is Record<string, unknown> {
  return o != null && typeof o === "object" && Array.isArray(o) === false;
}

function isObjectObject(o: unknown): o is Object & Record<string, unknown> {
  var type = Object.prototype.toString.call(o);
  return isObject(o) === true &&
    (type === "[object Object]" || type === "[object Null]");
}

export default function isPlainObject(o: unknown): o is Object {
  let constructor, prototype;

  if (!isObjectObject(o)) {
    return false;
  }

  // If has modified constructor
  constructor = o.constructor;
  if (constructor === undefined) return true;

  // If has modified prototype
  prototype = constructor.prototype;
  if (isObjectObject(prototype) === false) return false;

  // If constructor does not have an Object-specific method
  if (
    Object.prototype.hasOwnProperty.call(prototype, "isPrototypeOf") === false
  ) {
    return false;
  }

  // Most likely a plain Object
  return true;
}
