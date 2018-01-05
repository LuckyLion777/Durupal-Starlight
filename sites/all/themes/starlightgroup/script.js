jQuery(document).ready(function(){
    if (jQuery(window).width() > 767){
        jQuery('#bg-video').vide('sites/all/themes/starlightgroup/starlightgroup.mp4');
    }
    setTimeout(function(){jQuery('.wrapper').fadeOut();new WOW().init(); }, 1500);

});