var app = angular.module('hospital', []);
    app.controller('hosCtrl', function($scope) {
        //accounts
        $scope.accounts = [{
            login: "admin",
            password: "admin",
            isSignIn: false,
            edit: false
        },{
            login :"user",
            password: "user",
            isSignIn: false,
            edit: false
        }];
        $scope.login = "admin",
        $scope.password = "admin",
        $scope.isSignIn = false,
        $scope.edit = false

        $scope.inputLogin = "";
        $scope.inputPass = "";

        //signUp
        $scope.signUp = function() {
            $scope.accounts.push({
                login: $scope.su_inputLogin,
                password: $scope.su_inputPass,
                isSignIn: false,
                edit: false
            });
            document.getElementById('signUpForm').style.display = "none";
            document.getElementById('overflow').style.display = "none";
            $scope.su_inputLogin = $scope.su_inputPass = "";
        };

        //signIn
        $scope.signIn = function() {
            if ($scope.si_inputLogin == $scope.login && $scope.si_inputPass == $scope.password) {
                $scope.isSignIn = true;
                document.getElementById('signInForm').style.display = "none";
                document.getElementById('overflow').style.display = "none";
                $scope.si_inputLogin = $scope.si_inputPass = "";
            }
        };
        //Patients

        //patients list
        $scope.patientsList = [{
            sName: 'Борщ',
            fName: 'Карл',
            patr: 'Енакентиевич',
            cab: 206, 
            del: false
        },{
            sName: 'Стеценко',
            fName: 'Виктор',
            patr: 'Георгиевич',
            cab: 204, 
            del: false
        }];

        //add new patient
        $scope.patientAdd = function() {
            $scope.patientsList.push({
                sName: $scope.sName, 
                fName: $scope.fName, 
                patr: $scope.patr, 
                cab: $scope.cab,
                del: false
            });

            $scope.sName = ""; 
            $scope.fName = ""; 
            $scope.patr = ""; 
            $scope.cab = ""; 
        };
        
        //remove patient from table
        $scope.patientRemove = function(patCab) {
            const index = $scope.patientsList.findIndex(x => x.cab == patCab);
            $scope.patientsList.splice(index, 1);
        }

        //exchange rates

        $scope.exch = [{
            name : "mdl",
            value : 1
        },
        {
            name : "rub",
            value : 0.24
        },
        {
            name : "dol",
            value : 17.40
        },
        {
            name : "euro",
            value : 20.13
        },
        {
            name : "grivna",
            value : 0.66
        },]

    });


$(document).ready(function(){
    $('.signUpButt').click(function(){
        $('.signUpForm').css('display', 'flex');
        $('.overflow').show();
    })
    $('.signInButt').click(function(){
        $('.signInForm').css('display', 'flex');
        $('.overflow').show();
    })

    $('.close').click(function(){
        $('.signUpForm').hide();
        $('.signInForm').hide();
        $('.accounts').hide();
        $('.overflow').hide();
    })
    $('.helloAdm').click(function(){
        alert("Hello, Admin");
    })
    $('.viewAccounts').click(function(){
        $('.accounts').show();
        $('.overflow').show();
    })
});