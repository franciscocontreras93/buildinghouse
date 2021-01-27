$(function(){
    $(document).scroll(function(){
        if($(this).scrollTop() > 1) {
            $('#logo').attr('src','img/1x/logov1.png')
        }
        if($(this).scrollTop() < 1) {        
         $('#logo').attr('src','img/1x/logov2.png');   
        }
    });
});