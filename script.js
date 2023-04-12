
// const p = document.createElement("p");
// //p.innerText="DOM load success";
// const node = document.createTextNode("DOM load success");
// p.appendChild(node);
// document.body.appendChild(p);

const log = document.querySelector("body");
document.addEventListener("DOMContentLoaded", (event) => {
log.innerText = "DOM load success";
});