//JSON Data
const watchSlides = [
    {
        image: "./images/Watch1.png",
        title : "Exquisite Watches",
        subTitle: "Gold Luxury, Choose Us",
        description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        price: "$499.00",
        bgColor:  "#F4A764",
    },
    {
        image: "./images/Watch2.png",
        title:"Dainty Timepieces",
        subTitle: "Silver Luxury, Choose Us",
        description:"Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        price: "$469.00",
        bgColor: "#f5e4ce"
    },
    {
        image: "./images/Watch3.png",
        title:"Elegant Timepieces",
        subTitle: "Choose Luxury, Choose Us",
        description:"Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        price: "$529.00",
        bgColor: "#f5e4ce"

    },
    {
        image: "./images/Watch4.png",
        title:"Refined Timepieces",
        subTitle: "Choose Luxury, Choose Us",
        description:"Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        price: "$599.00",
        bgColor: " #F24F4F "


    }
];

// Populate Carousel
const carouselList = document.querySelector('.splide__list');
watchSlides.forEach((slide, index) => {
    const li = document.createElement('li');
    li.classList.add('splide__slide');
    li.innerHTML = `
        <div class="slide" style="background-color: ${slide.bgColor}">
            <div class="text-content">
                <h1>${slide.title}</h1>
                <h2>${slide.subTitle}</h2>
                <h3>${slide.description}</h3>
                <p class="price">${slide.price}</p>
                <button class="explore-btn">Explore More</button>
            </div>
            <img src="${slide.image}" alt="Watch ${index + 1}">
        </div>
    `;
    carouselList.appendChild(li);
});

// Initialize Splide
const splide = new Splide('#watch-carousel', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    pagination: false,
    arrows: true,
}).mount();
