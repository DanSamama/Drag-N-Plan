// 'use strict';
(function () {
    var myApp = angular.module("dragNdrop", [])
        .controller("repoController", function ($scope) {
            $scope.title = "ITC Bootcamp, summer 2016";
            $scope.titleDate = "1/5-21/9/2016"
        });



    myApp.controller("blockController", function ($scope) {
        var blocks = [
            {type: "HTML", miniTitle: "Basic HTML", length: '50'},
            {type: "Java", miniTitle: "Intro to Java", length: '30'},
            {type: "SQL", miniTitle: "Intro to SQLight", length: '60'},
            {type: "CSS", miniTitle: "Responsive design", length:'120'},
            {type: "Java", miniTitle: "Jave advanced", length: '50'},
            {type: "SQL", miniTitle: "Databases", length: '30'},
            {type: "Java", miniTitle: "Advanced Java", length: '45'}
        ];
        $scope.blocks = blocks;

        //add a new block
        $scope.addChildToBoard = function (block) {
            $scope.blocks.push({
                type: $scope.block.type,
                miniTitle : $scope.block.miniTitle,
                length: $scope.block.length
            });
            $scope.block.type ='';
            $scope.block.miniTitle = '';
            $scope.block.length = '';
        };


        //search filter by block type name:
        $scope.searchBlock = function(item) {
            $(".block").draggable({revert:true});
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

            var dragOption = {
                delay: 10,
                distance: 5,
                revert: 'invalid',
                start: function (event, ui) {
                    $(".item").each(function () {
                        $(this).data("original", $(this).position());
                    });
                },
                drag: function (event, ui) {
                    var offset = ui.position;
                },
                stop: function (event, ui) {
                    validate($(".ui-selected").not(ui.draggable));
                }
            };
            var dropOption = {
                accept: '.block',
                activeClass: 'myclass',
                drop: function (event, ui) {
                    if ($(this).is(".slot") && !$(this).has(".item").length) {
                        $(this).append(ui.draggable.css({
                            top: 0,
                            left: 0
                        }));
                    } else {
                        console.log("reverting");
                        ui.draggable.animate({
                            top: 0,
                            left: 0
                        }, "slow");
                    }
                    validate($(".ui-selected").not(ui.draggable));
                }
            };

            $(".repositoryBox").selectable({
                filter: ".item",
                start: function (event, ui) {
                    $(".ui-selected").draggable("destroy");
                },
                stop: function (event, ui) {
                    $(".ui-selected").draggable(dragOption)
                }
            });
            $(".slot").droppable(dropOption);

            function validate($draggables) {

                $draggables.each(function () {
                    console.log($($(this).data("target")));
                    var $target = $($(this).data("target")).filter(function (i, elm) {
                        console.log($(this).is(".slot") && !$(this).has(".item").length);
                        return $(this).is(".slot") && !$(this).has(".item").length;
                    });

                    if ($target.length) {
                        $target.append($(this).css({
                            top: 0,
                            left: 0
                        }))
                    } else {
                        $(this).animate({
                            top: 0,
                            left: 0
                        }, "slow");
                    }

                });
                $(".ui-selected").data("original", null)
                    .data("target", null)
                    .removeClass("ui-selected");
            }




            if ($scope.searchText == undefined){
                return true;
            }
            else {
                if ((item.miniTitle.toLowerCase().indexOf($scope.searchText.toLowerCase())) != -1){
                    return true;
                }
            }
            return false;
        };

    });

})
();

// $(".block").draggable({
//     revert:true,
//     cursor: 'move',
//     helper: 'original'
//     // containment: '.slot'
// });
//
//
// $('.slot').droppable( {
//     accept: 'div.block',
//     hoverClass: 'hovered',
//     activeClass: 'active',
//     revert: true,
//     tolerance: 'pointer',
//
//     drop: function(event, ui){
//         $(this).append(block);
//         //$("li.to-drag").addClass("placeholder");
//         $(this).droppable('disable', 'false');
//     }
// } );


        //Mother

    myApp.controller("MotherController", function ($scope) {

        var motherBlock = [
            {field: "HTML", color: "Rouge", length: '50'},
            {field: "HTML", color: "Rouge", length: '50'}
        ];
        $scope.motherBlock = motherBlock;


        $scope.addMotherToBoard = function (block) {
            $scope.motherBlock.push({
                field : $scope.block.field,
                color : $scope.block.color,
                length: $scope.block.length
            });
            $scope.block.field ='';
            $scope.block.color = '';
            $scope.block.length = '';

    $scope.showme = false;
        };

    });