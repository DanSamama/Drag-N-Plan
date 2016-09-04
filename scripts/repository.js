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
            $(".block").draggable({
                revert:true,
                cursor: 'move',
                helper: 'original'
            });


            $('#trash').droppable( {

            } );

          


            // $("#trash").droppable({
            //     accept: ".block > div",
            //     classes: {
            //         "ui-droppable-active": "ui-state-highlight"
            //     },
            //     drop: function( event, ui ) {
            //         deleteImage( ui.draggable );
            //     }
            // });
            //
            // // Let the gallery be droppable as well, accepting items from the trash
            // $(".repositoryBox").droppable({
            //     accept: "#trash div",
            //     classes: {
            //         "ui-droppable-active": "custom-state-active"
            //     },
            //     drop: function( event, ui ) {
            //         recycleImage( ui.draggable );
            //     }
            // });
            //
            // // Image deletion function
            // var recycle_icon = "<a href='link/to/recycle/script/when/we/have/js/off' title='Recycle this image' class='ui-icon ui-icon-refresh'>Recycle image</a>";
            // function deleteImage( $item ) {
            //     $item.fadeOut(function() {
            //         var $list = $( "ul", $trash ).length ?
            //             $( "ul", $trash ) :
            //             $( "<ul class='gallery ui-helper-reset'/>" ).appendTo( $trash );
            //
            //         $item.find( "a.ui-icon-trash" ).remove();
            //         $item.append( recycle_icon ).appendTo( $list ).fadeIn(function() {
            //             $item
            //                 .animate({ width: "48px" })
            //                 .find( "img" )
            //                 .animate({ height: "36px" });
            //         });
            //     });
            // }
            //
            // // Image recycle function
            // var trash_icon = "<a href='link/to/trash/script/when/we/have/js/off' title='Delete this image' class='ui-icon ui-icon-trash'>Delete image</a>";
            // function recycleImage( $item ) {
            //     $item.fadeOut(function() {
            //         $item
            //             .find( "a.ui-icon-refresh" )
            //             .remove()
            //             .end()
            //             .css( "width", "96px")
            //             .append( trash_icon )
            //             .find( "img" )
            //             .css( "height", "72px" )
            //             .end()
            //             .appendTo( $gallery )
            //             .fadeIn();
            //     });
            // }










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
