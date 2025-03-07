const watchData = {
    watches: [
      {
        id: 1,
        title: "Exquisite Watches",
        subTitle: "Gold Luxury, Choose Us",
        description:
          "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        price: "$499.00",
        image: "./images/Watch1.png",
        bgGradient: "linear-gradient(to right, #F4A764, #FFDEC2)",
      },
      {
        id: 2,
        title: "Dainty Timepieces",
        subTitle: "Silver Luxury, Choose Us",
        description:
          "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        price: "$469.00",
        image: "./images/Watch2.png",
        bgGradient: "linear-gradient(to right, rgb(179, 24, 24), #FFA895)",
      },
      {
        id: 3,
        title: "Elegant Timepieces",
        subTitle: "Choose Luxury, Choose Us",
        description:
          "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        price: "$529.00",
        image: "./images/Watch3.png",
        bgGradient: "linear-gradient(to right, #30A357, #75E39A)",
      },
      {
        id: 4,
        title: "Refined Timepieces",
        subTitle: "Choose Luxury, Choose Us",
        description:
          "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        price: "$599.00",
        image: "./images/Watch4.png",
        bgGradient: "linear-gradient(to right, #ADB0B0, #E1E1E1)",
      },
    ],
    socialIcons: [
      { name: "facebook", image: "facebook.png", link: "#facebook" },
      { name: "twitter", image: "twitter.png", link: "#twitter" },
      { name: "youtube", image: "youtube.png", link: "#youtube" },
    ],
  };
  
  document.addEventListener("DOMContentLoaded", function () {
    const textContent = document.querySelector(".text-content");
    const socialIcons = document.querySelector(".social-icons");
    const splideList = document.querySelector(".splide__list");
  
    if (!textContent || !socialIcons || !splideList) {
      console.error("Required elements are missing in the DOM.");
      return;
    }
  
    // Generate watch slides
    watchData.watches.forEach((watch) => {
      const slide = document.createElement("li");
      slide.className = "splide__slide";
      slide.innerHTML = `<img src="${watch.image}" alt="${watch.title}">`;
      splideList.appendChild(slide);
    });
  
    // Generate social icons
    watchData.socialIcons.forEach((icon) => {
      const link = document.createElement("a");
      link.href = icon.link;
      link.innerHTML = `<img src="${icon.image}" alt="${icon.name}">`;
      socialIcons.appendChild(link);
    });
  
    // Update content function
    function updateContent(index) {
      const watch = watchData.watches[index];
  
      // Apply background gradient
      document.body.style.background = watch.bgGradient;
  
      textContent.innerHTML = `
        <h1>${watch.title}</h1>
        <h2>${watch.subTitle}</h2>
        <p>${watch.description}</p>
        <div class="price">${watch.price}</div>
      `;
    }
  
    // Initialize with first slide
    updateContent(0);
  
    // Initialize Splide if available
    if (typeof Splide !== "undefined") {
      const splide = new Splide(".splide", {
        type: "fade",
        rewind: true,
        pagination: false,
      });
  
      splide.mount();
  
      // Update content on slide change
      splide.on("moved", function (newIndex) {
        updateContent(newIndex);
      });
    } else {
      console.error("Splide is not loaded.");
    }
  });
  



// //JSON Data

// // Populate Carousel
// const carouselList = document.querySelector('.splide__list');
// watchSlides.forEach((slide, index) => {
//     const li = document.createElement('li');
//     li.classList.add('splide__slide');
//     li.innerHTML = `
//         <div class="slide" style="background-color: ${slide.bgColor}">
//             <div class="text-content">
//                 <h1>${slide.title}</h1>
//                 <h2>${slide.subTitle}</h2>
//                 <h3>${slide.description}</h3>
//                 <p class="price">${slide.price}</p>
//                 <button class="explore-btn">Explore More</button>
//             </div>
//             <img src="${slide.image}" alt="Watch ${index + 1}">
//         </div>
//     `;
//     carouselList.appendChild(li);
// });

// // Initialize Splide
// const splide = new Splide('#watch-carousel', {
//     type: 'loop',
//     perPage: 1,
//     autoplay: true,
//     pagination: false,
//     arrows: true,
// }).mount();
