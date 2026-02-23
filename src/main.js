import template from "./templates/template.hbs";
import { products } from "./data/data.js";

document.querySelector(".container").innerHTML = template({ products });
