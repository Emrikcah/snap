import { data } from "./data.js";

//turn the nodelist into an array
const dropdownFeatures = [...document.querySelectorAll("#dropdown-features")];
const dropdownCompany = [...document.querySelectorAll("#dropdown-company")];

const openBtn = document.querySelector(".btn-open");
const linkGrab = [...document.querySelectorAll(".link-grab")];
const closeBtn = document.querySelector(".btn-close");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// show/hide mobile nav sidebar

openBtn.addEventListener("click", function () {
   sidebar.classList.add("show-sidebar");
   overlay.classList.add("show-overlay");
});

closeBtn.addEventListener("click", function () {
   sidebar.classList.remove("show-sidebar");
   overlay.classList.remove("show-overlay");
});

/*******************populate the dropdown menus ******************/

const [features, company] = [data[0], data[1]];

//loop through and expose the data within features/company
features.links.forEach(({ text, icon }) => {
   //loop through and create/append elements
   dropdownFeatures.forEach((element) => {
      //create an 'a','span','img' element
      const aEl = document.createElement("a");
      const spanEl = document.createElement("span");
      const imgEl = document.createElement("img");

      //add a class for styling
      aEl.classList.add("hello");
      //create href
      aEl.setAttribute("href", "#");

      //put the a element inside the div
      element.append(aEl);

      //add text to span element
      spanEl.textContent = text;

      //create src attribute
      imgEl.setAttribute("src", `${icon}`);
      //create alt attribute
      imgEl.setAttribute('alt', `${text}`)
      //put img,span inside the a element
      aEl.append(imgEl, spanEl);
   });
});

company.links.forEach(({ text }) => {
   dropdownCompany.forEach((element) => {
      const aEl = document.createElement("a");
      aEl.setAttribute("href", "#");

      aEl.textContent = text;
      element.append(aEl);
   });
});

//this function will be called onclick and it will swap out the images
function imgSwap(downArrow) {
   if (downArrow.src.match("icon-arrow-down.svg")) {
      downArrow.src = "./images/icon-arrow-up.svg";
   } else {
      downArrow.src = './images/icon-arrow-down.svg';
   }
}

//grab the li loop through and add an eventlistener to each button
linkGrab.forEach((link) => {
   link.addEventListener("click", function (e) {
      //select the forth child of the li
      // toggle the dropdown menu(s)
      const linkGradChild = link.children[2];
      const downArrow = link.children[1];
      linkGradChild.classList.toggle("show");

      imgSwap(downArrow);
   });
});



