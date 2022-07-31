import { data } from "./data.js";

//turn the nodelist into an array
const dropdownFeatures = [...document.querySelectorAll("#dropdown-features")];
const dropdownCompany = [...document.querySelectorAll("#dropdown-company")];

const openBtn = document.querySelector(".btn-open");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const closeBtn = document.querySelector(".btn-close");
const sidebar = document.querySelector(".sidebar");
const sidebarLinks = document.querySelector(".sidebar-links");
const submenu = document.querySelector(".submenu");
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");

// show/hide mobile nav sidebar

openBtn.addEventListener("click", function () {
   sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", function () {
   sidebar.classList.remove("show-sidebar");
});

/*******************populate the dropdown menus ******************/

const [features, company] = [data[0], data[1]];

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

      //create src
      imgEl.setAttribute("src", `${icon}`);
      //put img,span inside the a element
      aEl.append(imgEl, spanEl);
   });
});

company.links.forEach(({text}) => {

   dropdownCompany.forEach((element) => {
      const aEl = document.createElement("a");
      aEl.setAttribute("href", "#");

      aEl.textContent = text;
      element.append(aEl);
   });
});

/****************mouse over event for dropdown buttons**************/
linkBtns.forEach(btn =>{
 
   btn.addEventListener('mouseover',function (e) {
     
      if (btn.textContent == 'features') {
        
         //loop over dropdownfeatures and add the class to each instance
         for (const item of dropdownFeatures) {
            item.classList.add('show');
         }
      } else {
         
         //loop over dropdownCompany and add the class to each instance
         for (const item of dropdownCompany) {
            item.classList.add('show');
         }
      }
   })
})