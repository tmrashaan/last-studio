/*jshint esversion: 6 */

// we need to listen for scroll events on the page
// When the scrollbar reaches a certain distance
// We want to change the background color of the body

// step 1:  Decide which tags in html we want to use and save them as constants at the top of the page
const bodyTag = document.querySelector("body");

// step 2: decide which user events ie, cllic, scroll, etc, we want to trigger our code on. Here we want to listen out for any scroll events on our page
document.addEventListener("scroll", function() {

  // do something when the page is scrolled
  // console.log("Page is being scrolled homeboy");
  //  Step 3 find out and store how far from the top of the page scrollbar inspect
  // Use window when reffering to scrollbar is it is on the browser frame

  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop)

  //If the distanceFromTop is greater than 100pixels, do  something

  if (distanceFromTop > 1147) {
    // do this
    // bodyTag.style.backgroundColor = "rgb(8, 241, 227)";
    bodyTag.classList.add("brogue-active");
  } else {
    // do something else
    // console.log("Less than 1000pixels");
    //bodyTag.style.backgroundColor = "#f5f5f5";
    bodyTag.classList.remove("brogue-active");
  }

  if (distanceFromTop > 3800) {
    // do this
    // bodyTag.style.backgroundColor = "rgb(8, 241, 227)";
    bodyTag.classList.add("stationary-active");
  } else {
    // do something else
    // console.log("Less than 1000pixels");
    //bodyTag.style.backgroundColor = "#f5f5f5";
    bodyTag.classList.remove("stationary-active");
  }

});

// Lightbox
// When we click on an imahe
// We want to show the Lightbox
// inside the lightbox we want to show the image that we clicked on
// when we click on the lightbox we want it to disappear

// step 1 decide which tags in HTML we want constant- this will be a list of images
const images = document.querySelectorAll("section img");
// Save the lightbox from our html inside a constant
const lightbox = document.querySelector(".lightbox");
// save the lightbox image from our html inside a constant
const lightboxImage = document.querySelector(".lightbox img");
// Lets look at whats saved in images

images.forEach(image => {

  // step 2: Add a click event listener to all of our images
  image.addEventListener("click", function() {
    console.log("times your pictures have been clicked");
    //  Step 3: Show the lightboxImage
    lightbox.classList.add("fadeIn");
    //  Step 4: Show the right image
    // Save the image src attribute from the image we click on
    // The keyword "this" references the image we have clicked on -THIS image. .getAttribute. we want the src attribute because it contains the image
    let imageSrc = this.getAttribute("src");
    console.log(imageSrc);
    // Set the lightbox image src attribute to the one we save
    lightboxImage.setAttribute("Src", imageSrc);
  });
});

//  step 4 when we click on the lightbox, remove the fadeiN class

lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn")
});