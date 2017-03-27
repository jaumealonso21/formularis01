$(document).ready(function() {
    var $q1a= $("#q1a");
    var $q2a= $("#q2a");
    var $q3a= $("#q3a");
    var $q4a= $("#q4a");
    $("#mov1").click(function(){
        animar($q1a);
        animar($q2a);
        animar($q3a);
        animar($q4a);
    });
    function aleaTop(q) { //Animar el top
        var maxTop = $(window).height() - q.height();
        return Math.floor(Math.random() * (maxTop + 2));//l'enter es el speed
    }
    function aleaLeft(q) { //Animar el left
        var maxLeft = $(window).width() - q.width();
        return Math.floor(Math.random() * (maxLeft + 2));//l'enter es el speed
    }
    function animar(q) {//Animo
        $(q).animate({
            top: aleaTop(q),
            left: aleaLeft(q)
        });
    }
});

