import { technologies } from "./technologies.js";

const $ = (id) => document.getElementById(id);
const $technologies = $("technologies");

const technologiesList = technologies;

let html = "";
technologiesList.map((item) => {
  html += ` <li class="technologies-item">
      <i class="fa-solid fa-code technologies-item__icon"></i>
      ${item}
    </li>`;
});

$technologies.innerHTML = html;
