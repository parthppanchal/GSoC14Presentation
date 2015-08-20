$( document ).ready(function() {
    if (screen.width < 500) {

      // :hover will trigger also once the cells are focusable
      // you can use this class to separate things
      $("body").addClass("nohover");

      // Make all the cells focusable
      $("td, th")
        .attr("tabindex", "1")
        // When they are tapped, focus them
        .on("touchstart", function() {
          $(this).focus();
        });

    }

    function animation(stepId, toFind, animateClass){
        $('#'+stepId).on('impress:stepenter', function(){
            var step = $(this);
            step.find(toFind).addClass('animated '+animateClass);
        });
        $('#'+stepId).on('impress:stepleave', function(){
            var step = $(this);
            step.find(toFind).removeClass('animated '+animateClass);
        });
    };

    $('#members .member').each(function(i){
        $(this).css({
            '-moz--animation-delay' : i + 's',
            '-webkit--animation-delay' : i + 's',
            'animation-delay' : i + 's'
        });
    });

    if( ! $('#myCanvas').tagcanvas({
        textColour : '#ffffff',
        outlineThickness : 1,
        maxSpeed : 0.03,
        depth : 0.75,
        imageMode: "image"
    })) {
        $('#myCanvasContainer').hide();
    }

animation('members', '.member', 'zoomInUp');
animation('title', '.author', 'bounceInUp');
animation('report', '#scaling', 'swing');


$('#myCanvas').tagcanvas({
    depth : 0.75,
    lock: "x",
    radiusX: 1.5,
    radiusY: 0.9,
    radiusZ: 0.5,
},'techs');
});

