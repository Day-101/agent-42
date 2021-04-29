import "../sass/style.scss";
import { routes } from "./routes";
import { PageList } from "./PageList";
// import { PageDetail } from "./PageDetail";

var pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};
let searchButton = document.querySelector("a#search");
searchButton.onclick = PageList;

let brand = document.querySelector("a#brand");
console.log(brand);
brand.onclick = PageList;

window.addEventListener("DOMContentLoaded", () => setRoute());
window.addEventListener("hashchange", () => setRoute());