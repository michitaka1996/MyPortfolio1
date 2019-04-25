$(function () {
    // var targetHeight = $('.js-hero-target').height();
    $('.js-toggle-icon-menu').on('click', function () {
        $(this).toggleClass('active'); 
        $('.js-toggle-menu').toggleClass('active');
    });

    //イメージスライダー
    //クロージャで
    var slider = (function () {
        //起点
        var currentItemNum = 1;
        var $slideContainer = $('.js-slider');// スライダのDOM
        var slideImgContent = $('.js-img').length;
        console.log(slideImgContent);
        
        var slideImgWidth = $('.js-img').innerWidth(); //1つのwidth
        console.log(slideImgWidth);
        

        var slideContainerWidth = slideImgWidth * slideImgContent;
        var DURATION = 500;

        return {
            //進む
            slideNext: function () {
                if (currentItemNum < slideImgContent) {
                    $slideContainer.animate({ left: '+=' + slideImgWidth + 'px' }, DURATION);
                    currentItemNum++;
                }
            },
            slidePrev: function () {
                if (currentItemNum > 1) {
                    $slideContainer.animate({ left: '-=' + slideImgWidth + 'px' }, DURATION);
                    currentItemNum--;
                }
            },
            init: function () { //実実際の準備
                $slideContainer.attr('style', 'width:' + slideContainerWidth + 'px');
                var that = this; //thisを止める returnオブジェクト
                
                //呼び出す
                $('.js-sldie-next').on('click', function () {
                    that.slideNext();
                });
                $('.js-slide-prev').on('click', function () {
                    that.slidePrev(); 
                });
                
            }
        }

    })();
    slider.init();






});