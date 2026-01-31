let search = document.querySelector(".inp_search_name");

// search.addEventListener("keyup", fun1);
// function fun1(element) {
//   console.log(element);
//   console.log(element.target.value);
//   console.log(search.value);
// }

// const fun3 = (element) => {
// console.log(element);
// console.log(element.target.value);
// console.log(search.value);
// };
// search.addEventListener("keyup", fun3);

// const fun2 = (e) => {
//   let searchName = e.target.value.toLowerCase().trim();
//   console.log(searchName);
// };
// search.addEventListener("keyup", fun2);

let courses = document.querySelectorAll(".main_course_item");
search.addEventListener("keyup", fun4);
function fun4(el) {
  let searchName = el.target.value.toLowerCase().trim();
  courses.forEach((pro) => {
    let courseName = pro.children[1].innerText;
    let courseName2 = pro.children[2].innerText;

    if (
      courseName.includes(searchName) ||
      courseName2.toLowerCase().includes(searchName)
    ) {
      pro.style.display = "block";
      let courses_area = document.querySelector(
        ".part_main_C_main_course_item"
      );
      courses_area.style.justifyContent = "flex-start";
      courses_area.style.gap = "10px";
    } else {
      pro.style.display = "none";
    }
  });
}
// ------------------------------------------------------------------------------
let btns = document.querySelectorAll(".filter_btn");
btns.forEach((btn) => {
  btn.addEventListener("click", fun5);
});

function fun5(el) {
  let btnFilter = el.target.dataset.filter;

  courses.forEach((pro) => {
    // let programmingCategory = (pro.dataset.category = "programming");
    // let hackingCategory = (pro.dataset.category = "hacking");
    let Category = pro.dataset.category;

    if (btnFilter === "everything") {
      search.value = "";
      pro.style.display = "block";
    } else {
      if (btnFilter === Category) {
        pro.style.display = "block";
        search.value = "";
      } else {
        pro.style.display = "none";
        search.value = "";
      }
    }
  });
}
// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-

const searchPrice = document.querySelector(".inp_search_price");
searchPrice.addEventListener("keyup", fun6);
function fun6(el) {
  let searchPriceValue = el.target.value.trim();
  courses.forEach((pro) => {
    let price = pro.children[3].children[1].innerText;
    if (!searchPriceValue) {
      pro.style.display = "block";
    } else {
      if (price.includes(searchPriceValue)) {
        pro.style.display = "block";
      } else {
        pro.style.display = "none";
      }
    }
  });
}
