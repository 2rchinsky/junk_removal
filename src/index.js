import './styles/index.scss'
import $ from "jquery";
// import 'bootstrap';

ymaps.ready(init);
function init() {
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [59.900000, 30.380000],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 11
    }),
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [59.900000, 30.380000]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'работаем по Санкт-Петербургу и Ленинградской области',
                hintContent: 'c 10 до 18'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ], {
            // Данные для построения диаграммы.
            data: [
                { weight: 8, color: '#0E4779' },
                { weight: 6, color: '#1E98FF' },
                { weight: 4, color: '#82CDFF' }
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });

    myMap.geoObjects
        .add(myGeoObject)
        .add(myPieChart)
        .add(new ymaps.Placemark([59.927319, 30.347129], {
            balloonContent: 'цвет <strong>Ул. Московская, д. 1</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));
    myMap.behaviors
        .disable('scrollZoom')
        .disable('drag')

}

const userStack = {
    language: 'JavaScript',
    framework: 'None'
}

const user = {
    name: 'Denis',
    age: '19',
    ...userStack
}

$('.block').html('jQuery is working');

console.log(user)
new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    dots: '.dots',
    arrows: {
        prev: '.glider-prev',
        next: '.glider-next'
    }
});