//check if theres local color option
let mainColors = localStorage.getItem("color-option");

if (mainColors !== null) {

    document.documentElement.style.setProperty('--main-color', mainColors);

   //remove active class from all colors list items
 document.querySelectorAll(".colors-list li").forEach(element => {
    element.classList.remove("active");
    // add active class on element with data-color === local storage items

    if ( element.dataset.color === mainColors){
      
        // add active class
        element.classList.add("active");
    }
});

    }
  // random background option
let backgroundOption = true;

// varible to random the interval
let  backgroundInterval;

// check if theres local storage random background item
let backgroundLocalItem = localStorage.getItem("background-option");

// click if  random background local storage random is not empty
if (backgroundLocalItem !== null) {
  
   if(backgroundLocalItem === 'true') {
    backgroundOption = true;

   }else{
    backgroundOption = false;
   }
   
   // remove active class from all span
   document.querySelectorAll (".random-background span").forEach(element =>{
    element.classList.remove("active");
   });

  if (backgroundLocalItem === 'true') {
    backgroundOption = true;
  
  
  } else {
   
    backgroundOption = false; 
  }

}

// toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function() {

    // toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");
    //toggle class open on main settings box
    document.querySelector(".settings-box").classList.toggle("open");
}
//..switch  colors
const colorsli = document.querySelectorAll(".colors-list li");
// loop on all list items
 colorsli.forEach(li => {
  // click on every list items  
//li.addEventlistener("click", (e) => {
    li.addEventListener("click", (e) => {
  
   
    // set colors on root
   
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    //set color on local storage
    localStorage.setItem("color-option", e.target.dataset.color );
   
    
    handleActive(e);
  });
  
   }) ;  
 

// document.addEventListener('DOMContentLoaded', function() {
   let bulletsSpan = document.querySelectorAll('.bullets-option span');
  let bulletsContainer = document.querySelector('.nav-bollets');
 
  let bulletLocalItem = localStorage.getItem("bullets-option");
  if(bulletLocalItem !== null){
    bulletsSpan.forEach(span => {

      span.classList.remove("active");
    });
    if(bulletLocalItem === 'block'){

      bulletsContainer.style.display = 'block';
      document.querySelector(".bullets-option .yes").classList.add("active");
    }else{
   
      bulletsContainer.style.display = 'none';

      document.querySelector(".bullets-option .no").classList.add("active");
    
    }

  }
   bulletsSpan.forEach(span => {
     span.addEventListener('click', (e) => {
       if (span.dataset.display === 'show') {
        bulletsContainer.style.display = 'block';

        localStorage.setItem("bullets-option", 'block')
      } else {
        bulletsContainer.style.display = 'none';
        localStorage.setItem("bullets-option", 'none')
      }
      handleActive(e);
   });
   });
// });
 
//..switch  random backgrounds option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");
// loop on all list spans
 randomBackEl.forEach(span => {
  // click on every list spans 

    span.addEventListener("click", (e) => {
  
      handleActive(e);

    if (e.target.dataset.background === 'yes') {
        backgroundOption = true;
        randomizeImgs();
        localStorage.setItem("background-option", true);
       
    } else{
      backgroundOption = false;
      clearInterval(backgroundInterval);
      localStorage.setItem("background-option",false);
    }
  }) ;  
});

// select landing page elememt
let landingPage = document.querySelector(".landing-page");

//get arrey of imgs
let imgsArray = [ "img1.jpg","img2.jpg", "img3.jpg", "img4.jpg", "img6.jpg"];

// function to randomize imgs
function randomizeImgs(){ 
    if(backgroundOption === true) {
       backgroundInterval= setInterval(() => {
            //get random number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        
        //change background image url
        landingPage.style.backgroundImage ='url(" imgs/' + imgsArray[randomNumber] + '")';
          
        },7000);
        }
        }
        randomizeImgs();

  // select skills selector 
    let ourSkills = document.querySelector(".skills") ;

    window.onscroll = function () {
      // skills offset top 
      let skillsOffsetTop = ourSkills.offsetTop;

      //skills outer height 
      let skillsOuterHeight = ourSkills.offsetHeight;
      // window height 
      let windowHeight = this.innerHeight;

    // window scrolltop
    let windowScrollTop = this.pageYOffset;

     if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
      let allskills = document.querySelectorAll(".skill-box .skill-progress span");
     allskills.forEach(skill => {
      
    skill.style.width = skill.dataset.progress;
     });
     }
     };

     // create popup width the image
     let ourGallery = document.querySelectorAll(".gallery img");

     ourGallery.forEach(img => {
      img.addEventListener('click',(e) => {

        // create overlay elemet 
        let overlay = document.createElement("div");

        // add class to overlay
        overlay.className = 'popup-overlay';

        // append overlay to the body
        document.body.appendChild(overlay);

        //create the  popup box
        let popupBox = document.createElement("div");
        // add class to the popup box
        popupBox.className = 'popup-box';

        if(img.alt !== null) {
          // create heading
          let imgHeading = document.createElement("h3");

          // create text for heaging
          let imgText = document.createTextNode(img.alt);

          // apend the text to the heading
          imgHeading.appendChild(imgText);

          // append the heading to the popup box
          popupBox.appendChild(imgHeading);
        }

        // create the image
        let popupImage = document.createElement("img");
       
        // set img source
        popupImage.src = img.src;

        // add  image to popup box
        popupBox.appendChild(popupImage);

        // append the popup box to body
        document.body.appendChild(popupBox);
      
        //create the close span
        let closeButton = document.createElement("span");

        // create the close button text
        let closeButtonText = document.createTextNode("x");
        // apend text to close button 
        closeButton.appendChild(closeButtonText);

        // add class to close button
        closeButton.className = 'close-button';

        // add close button to the popup box
        popupBox.appendChild(closeButton);

        // close popup
        document.addEventListener("click", function (e) {
          if(e.target.className == 'close-button') {

            // remove the current popup
            e.target.parentNode.remove();

            //remove overlay
            document.querySelector(".popup-overlay").remove();
          }
        });
        
      });
     });


   // select all bullets 
   const allBullests = document.querySelectorAll(".nav-bollets .bollet");
     // sellect all links
     const alllinks = document.querySelectorAll(".links a");

    

 function scrolltosome(elememts) {
 elememts.forEach(ele => {
    ele.addEventListener("click", (e)  =>{

      e.preventDefault();

      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior:'smooth'

      });  
    });
   });  
  
 }
 scrolltosome(allBullests);
 scrolltosome(alllinks);
 
 // handle active state
 function handleActive(ev) {
    //remove active class from all childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");
  });
  // add active class on self 
  ev.target.classList.add("active");

 }

 // toggle menu
 let toggleBtn = document.querySelector(".toggle-menu");
 let tlinks = document.querySelector(".links");

 toggleBtn.onclick = function (e) {

  // stop propagation
  e.stopPropagation();

  // toggle class "menu-active" on button
  this.classList.toggle("menu-active")
  // toggle class "open" on links
  tlinks.classList.toggle("open")
 };

 // click anywhere outside menu and toggle button
 document.addEventListener("click", (e) =>{

  if(e.target !== toggleBtn && e.target !== tlinks) {
   
   // check if menu is open
   if (tlinks.classList.contains("open")) {
   }
  }
 });

 // stop propagation on menu 
 tlinks.onclick = function (e) {
  e.stopPropagation();
 }







