import Vue from "vue";

/**
 * Animate html elements with the help of the library Animate.css
 * https://animate.style/
 *
 * @param {*} node
 * @param {String} animationName
 */
Vue.prototype.$animate = function(node, animationName) {
  node.classList.add("animate__animated", `animate__${animationName}`);

  function handleAnimationEnd() {
    node.classList.remove("animate__animated", `animate__${animationName}`);
    node.removeEventListener("animationend", handleAnimationEnd);
  }

  node.addEventListener("animationend", handleAnimationEnd);
};
