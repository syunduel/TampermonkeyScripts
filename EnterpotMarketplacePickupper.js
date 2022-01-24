// ==UserScript==
// @name         Enterpot marketplace pickupper
// @namespace    https://entrepot.app/marketplace/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://entrepot.app/marketplace/*
// @icon         https://www.google.com/s2/favicons?domain=qiita.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
//    $(".jss26").append('<input id="pickuptarget" type="text" value="80" /><div id="pickup" style="margin: 20px; padding: 20px; background-color: aquamarine;"></div>');
    $(".jss26").append('NRI upper <input id="pickuptarget" type="text" value="80" size="5" /><div id="pickup" class="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 MuiGrid-align-items-xs-flex-start"></div>');


    setInterval(function(){

//        console.log("start");

        $("#pickup").empty();

        $(".MuiCardContent-root").each(function(i, o){
            var nri = $(o).find('.MuiGrid-container').children('.MuiGrid-item').eq(1).text().slice(5);
            nri = Number(nri.slice(0, nri.indexOf('%')));

            var pickuptarget = Number($('#pickuptarget').val());
            if(nri > pickuptarget) {
//                console.log(nri);
                $(o).css('background-color', 'aquamarine');

                var price = $(o).find('.MuiGrid-container').children('.MuiTypography-body1').text();

                var nowItem = $('<div class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-6 MuiGrid-grid-md-4 MuiGrid-grid-lg-2 MuiGrid-grid-xl-2" />').append($(o).clone());
                nowItem.find('.MuiTypography-root').eq(3).hide();
                $('#pickup').append(nowItem);

            }
        });
//        console.log("end");

    },500);
})();