(function() {
    var app = angular.module('store', ['ngResource']);
    app.controller('StoreController', function() {
        this.products = carros;
        this.datas = {};
        this.getDate = function($scope) {
            $http.get('http://127.0.0.1:1337/user').
            success(function(data) {
                this.datas = data;
            });
        };
    });

    app.controller('PanelController', function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };


    });

    var carros = [{
        nombre: 'Carro Mazda 2013',
        marca: 'Mazda',
        color: 'Azul',
        price: 6000,
        imagePath: 'images/do.png',
        comment: [{
            author: 'oscarg798@gmail.com',
            score: 5,
            descripcion: 'Muy buen carro'
        }]
    }, {
        nombre: 'Carro Audi 2012',
        marca: 'Audi',
        color: 'Negro',
        modelo: 'A4',
        price: 14000,
        imagePath: 'images/do2.png'
    }];
})();