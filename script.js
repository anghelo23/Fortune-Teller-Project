
$(".question").click(function(){
    var game = $("game").val(); 
    console.log(game);
    $("game").text(game);
    /*
    we declare a varible in this case my var is game i also 
    */

    var time = $("time").val(); 
    console.log(time);
    $("time").text(time);
/*
we declaring our second varible for the next question in this case my varible is time and then adding up to the console. 
*/
      var hour = $("hour").val(); 
    console.log(hour);
    $("hour").text(hour);
    /*
    we declaring our three varible for the 3 question my varible mane for the three question is hour.
    */
});
