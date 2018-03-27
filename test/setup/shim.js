/**
 * Skips the rAF polyfill warning.
 * @see https://reactjs.org/docs/javascript-environment-requirements.html
 */
global.requestAnimationFrame = callback => setTimeout(callback, 0)
