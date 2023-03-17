$('.recomends').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

const salesButton = document.getElementById('pills-profile-tab')
console.log(salesButton);
if(salesButton) {
  salesButton.addEventListener('click', function () {
    console.log('work');
    setTimeout(function (params) {
      $('.sales').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 560,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    }, 200)
  })
}




$('.news').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


let buttonMenu = document.getElementById("menu-button")
let menu = document.getElementById("collapseExample")

buttonMenu.addEventListener("click", function () {

  let hasClassShow = menu.classList.contains("show");

  if (hasClassShow) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }

  
})


let menuitem = document.getElementById("menuitemid")
let submenu = document.getElementById("submenuid")

menuitem.addEventListener("click", function () {

  let hasClassShowSubmenu = submenu.classList.contains("show");

  if (hasClassShowSubmenu) {
    submenu.classList.remove("show");
  } else {
    submenu.classList.add("show");
  }

  
})

let menuItemAbout = document.getElementById("menuitemid-about")
let submenumAbout = document.getElementById("submenuid-about")

menuItemAbout.addEventListener("click", function () {

  let hasClassShowSubmenu = submenumAbout.classList.contains("show");

  if (hasClassShowSubmenu) {
    submenumAbout.classList.remove("show");
  } else {
    submenumAbout.classList.add("show");
  }

  
})


let openTriangle = document.getElementById("arrow")

menuitem.addEventListener("click", function () {

  let hasClassOpen = openTriangle.classList.contains("open-triangle");


  if (hasClassOpen) {
    openTriangle.classList.remove("open-triangle");
  } else {
    openTriangle.classList.add("open-triangle");
  }

  
})


