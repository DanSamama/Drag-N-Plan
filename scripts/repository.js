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
            {type: "Java", miniTitle: "Advanced Java", length: "30 Min"}
        ];
        $scope.blocks = blocks;

        //search filter by block type name:
        $scope.searchBlock = function(item) {
            if ($scope.searchBlock.type == undefined){              //if we havent printed anything in the search box yet.
                return true;                                        //if the func return true the element will be display every item (row) on the page
            }
            else {
                if ((item.type.toLowerCase().indexOf($scope.searchBlock.type.toLowerCase())) != -1)
                {
                    return true;
                }
            }
            return false;                                   //if the item is not what the user looked for then don't return these rows.
        };


        //search filter by any content existing in the block
        $scope.search = function(item) {
            if ($scope.searchText == undefined){
                return true;
            }
            else {
                if ((item.miniTitle.toLowerCase().indexOf($scope.searchText.toLowerCase())) != -1 ||
                    (item.length.toLowerCase().indexOf($scope.searchText.toLowerCase()) != -1 ))
                {
                    return true;
                }
            }
            return false;
        };

        //this function makes the blocks draggable
        $(function () {
            $(".block").draggable()
        })


    });

   // //this function makes the list box droppable
   //  myApp.controller("dropController", function ($scope) {
   //
   //  })
   //
    
})
();