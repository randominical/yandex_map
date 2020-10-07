// инициализация функции
ymaps.ready(init);

// массив для нескольких меток
var placemarks = [
    {
        latitude: 55.75,
        longitude: 37.62,
        hintContent: '<div class="map__hint">Это хинт 1</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__bed-img" src="assets/img/icon.png" alt=""/>',
            'Это балун 1. Лучшие гостиницы в городе!',
            '</div>'
        ]
    },
    {
        latitude: 55.72,
        longitude: 37.63,
        hintContent: '<div class="map__hint">Это хинт 2</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__bed-img" src="assets/img/icon.png" alt=""/>',
            'Это балун 2. Лучшие гостиницы в городе!',
            '</div>'
        ]
    },
    {
        latitude: 55.74,
        longitude: 37.56,
        hintContent: '<div class="map__hint">Это хинт 3</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__bed-img" src="assets/img/icon.png" alt=""/>',
            'Это балун 3. Лучшие гостиницы в городе!',
            '</div>'
        ]
    }
],
geoObjects = [];

function init() {
    //функция создания карты
    var map = new ymaps.Map('map', {
        // центр карты
        center: [55.75, 37.62],
        // коэффициент масштабирования
        zoom: 12,
        // элементы, которые видны на карте
        controls: ['zoomControl'],
        // отключение поведения по умолчанию: нет зума при прокрутке, оставлено перемещение по карте при зажатой кнопке мыши
        behaviors: ['drag']
    });

    // функция для массива
    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                // всплывает при наведении на метку
                hintContent: placemarks[i].hintContent,
                // высплывает при нажатии на метку, вариант с созданием массива
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'assets/img/icon_a.png',
                iconImageSize: [46, 57],
                // смещение своей картинки для того, чтобы ножка метки указывала на точку
                iconImageOffset: [-23, -57],
            });
    };

    // функция кластеризации
    var clusterer = new ymaps.Clusterer({
        // кастомизация иконки кластера
        clusterIcons: [
            {
                href: 'assets/img/house.png',
                size: [40, 40],
                offset: [-20, -20]
            }
        ],
        // удаление цифры кластера
        clusterIconContentLayout: null
    });
    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}
/*
    // создание метки
    var placemark = new ymaps.Placemark([55.73, 37.62], {
        // всплывает при наведении на метку
        hintContent: '<div class="map__hint">Это хинт</div>',
        // высплывает при нажатии на метку, вариант с созданием массива
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__bed-img" src="assets/img/icon.png" alt=""/>',
            'Это балун. Лучшие гостиницы в городе!',
            '</div>'
        ].join('')
    },
    // изменение вида метки
    {
        iconLayout: 'default#image',
        iconImageHref: 'assets/img/icon_a.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57],
    });
}*/