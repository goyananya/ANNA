var app = angular.module("workApp", [])
    .controller("workCtrl", function($scope){
        //Pol
        $scope.Pol = [{
            idName: "male", name: "Мужчина", checked: false
        },{
            idName: "female", name: "Женщина", checked: false
        }]

        $scope.updSelection = function(position, ent) {
            angular.forEach(ent, function(x, index) {
                if (position != index){
                    x.checked = false;
                }
            });
        }

        //Obrazovanie
        $scope.educations = [
            {
                idName: "e1", name: "Cреднее", checked: false
            },
            {
                idName: "e2", name: "Cпециальное(колледж)", checked: false
            },
            {
                idName: "e3", name: "Высшее", checked: false
            },
            {
                idName: "e4", name: "Мастерат", checked: false
            },
            {
                idName: "e5", name: "Доктор", checked: false
            }
        ]

        //Vacansia
        $scope.vacancies = [
            "Бухгалтерия",
            "Веб-программирование",
            "Графический дизайнер",
            "Мененжер",
            "Инвестор",
            "Продажа товаров",
            "Фотограф",
            "Предподователь по английскому языку",
            "Предподователь по математике",
            "Директор отеля Mom" 
        ];

        //Sbros
        $scope.reset = function(){
            $scope.f = {};
            angular.forEach($scope.Pol, function (Pol) {
                Pol.checked = false;
            });
            angular.forEach($scope.educations, function (educations) {
                educations.checked = false;
            });
        }
        //Vivod
        $scope.ShowOutput = function(){
            $scope.output = true;
        }
    })