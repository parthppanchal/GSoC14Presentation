$( document ).ready(function() {
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
animation('intro', 'h1', 'bounceInDown');
animation('intro', 'p', 'bounceInUp');
animation('report', '#scaling', 'swing');


$('#myCanvas').tagcanvas({
    depth : 0.75,
    lock: "x",
    radiusX: 1.5,
    radiusY: 0.9,
    radiusZ: 0.5,
},'techs');
});

