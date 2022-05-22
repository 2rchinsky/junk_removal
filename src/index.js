import "./scss/main.scss";
new Glider(document.querySelector('.glider'), {
    slidesToShow: 5,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});
