
// replace elements

const headerTop = document.querySelector(".header-top");
const headerMenu = document.querySelector(".header-menu");
const headerLangs = document.querySelector(".header-top-lang");

function replaceElements(originBlock, block, item, width, place) {
  if (window.matchMedia(`(max-width: ${width}px)`).matches) {
    if (!item.classList.contains("done")) {
      block.insertBefore(item, block.children[place]);
      item.classList.add("done");
    }
  } else {
    if (item.classList.contains("done")) {
      originBlock.insertBefore(item, originBlock.children[place]);
      item.classList.remove("done");
    }
  }
}

replaceElements(headerTop, headerMenu, headerLangs, 768, 0);

const headerColumns = document.querySelectorAll(".header-bottom__column");
const headerBottomMenus = document.querySelectorAll(".header-bottom-menu");

replaceElements(headerColumns[0], headerMenu, headerBottomMenus[0], 768, 1);
replaceElements(headerColumns[0], headerMenu, headerBottomMenus[1], 768, 2);

// burger menu

const buttonMenu = document.querySelector(".header-menu__icon");

buttonMenu.addEventListener("click", function () {
  buttonMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
});

document.body.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    if (buttonMenu.classList.contains("active")) {
      buttonMenu.classList.remove("active");
      headerMenu.classList.remove("active");
    }
  }
});

// add map

// Initialize and add the map
function initMap() {
  // The location of Uluru
  //   const uluru = { lat: -25.344, lng: 131.031 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    // center: uluru,
  });
  // The marker, positioned at Uluru
  //   const marker = new google.maps.Marker({
  //     position: uluru,
  //     map: map,
  //   });
}

window.initMap = initMap;

//# sourceMappingURL=main.js.map