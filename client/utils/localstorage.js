const localStorage = global.window.localStorage

export function get (key) {
  console.log(key)
  return localStorage.getItem(key)
}

export function set (key, value) {
  if (value === null) {
    localStorage.removeItem(key)
  } else {
    localStorage.setItem(key, value)
  }
}
