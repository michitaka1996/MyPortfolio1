
//スコープ汚染を防ぐため即時関数
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

        var $slideContainer = $('.js-slider');
        console.log('スライダーのDOM', $slideContainer);
        

        var slideImgContent = $('.js-img').length;
        console.log('画像のトータル個数', slideImgContent);
        
        var slideImgWidth = $('.js-img').innerWidth(); //1つのwidth
        console.log('一つのwidth', slideImgWidth);
        
        var slideContainerWidth = slideImgWidth * slideImgContent;
        console.log('トータルwidth', slideContainerWidth);
        
        var DURATION = 1000;

        return {
            //進む
            slideNext: function () {
                if (currentItemNum < slideImgContent) {
                    $slideContainer.animate({ left: '-=' + slideImgWidth + 'px' }, DURATION);
                    currentItemNum++;
                }
            },
            slidePrev: function () {
                if (currentItemNum > 1) {
                    $slideContainer.animate({ left: '+=' + slideImgWidth + 'px' }, DURATION);
                    currentItemNum--;
                    console.log('今の番号', currentItemNum);
                    
                }else if(currentItemNum == slideImgContent) {
                        console.log('到達しました');
                        currentItemNum = 1;
                        return currentItemNum;
                    }
            },
            init: function () { //実実際の準備
                console.log('init読み込めてます');
                
                //書き換える
                $slideContainer.attr('style', 'width:' + slideContainerWidth + 'px');
                var that = this; //thisを止める returnオブジェクト
                
                //インターバル間でめくる
                $('.js-label').on('click', function () {
                    // var click
                    var slideTime = setInterval(function () {
                        that.slideNext();
                    }, 2000);
                    
                    setTimeout(function () {
                        clearInterval(slideTime);
                    },6000);
                });
                $('.js-slide-next').on('click', function () {
                    clearInterval();
                    that.slideNext();
                    console.log('クリックしてますよ next');
                    
                });
                $('.js-slide-prev').on('click', function () {
                    clearInterval();
                    that.slidePrev();
                    console.log('クリックしてますよ prev');
                });
                
            }
        }

    })();
    slider.init();
});


var swiper = new Swiper('.swiper-container', {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                },
        });