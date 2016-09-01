'use strict';
(function () {
    var myApp = angular.module("dragNdrop", [])
        .controller("repoController", function ($scope) {
            $scope.title = "ITC Bootcamp, summer 2016";
            $scope.titleDate = "1/5-21/9/2016"
        });
    
        myApp.controller("blockController", function ($scope) {
            var blocks = [
                {type: "HTML", miniTitle: "Basic HTML", length: "30 Min"},
                {type: "Java", miniTitle: "Intro to Java", length: "30 Min"},
                {type: "SQL", miniTitle: "Intro to SQLight", length: "30 Min"},
                {type: "CSS", miniTitle: "Responsive design", length: "30 Min"},
                {type: "Java", miniTitle: "Jave advanced", length: "30 Min"},
                {type: "SQL", miniTitle: "Databases", length: "30 Min"},
                {type: "Java", miniTitle: "Advanced Java", length: "30 Min"},
            ];
            $scope.blocks = blocks;
        })
})
();