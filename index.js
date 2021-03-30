$(document).ready(function(){
    $("#hidden").hover(function(){
        $(this).css("color","red");
        
    })
    $("#calculate3").click(()=>{
        // $("#submit1").click();
        // $("#submit1").click();
        // $("#submit2").click();
        $("#submit1").click();
        // $("#submit2").trigger('click');
        // document.forms[0].submit();
        // document.forms[1].submit();
    })
        // $("#submit2").trigger('click');
        // document.forms[0].submit();
        // document.forms[1].submit();
    // function calculate(){

    // }
    // function submitForms(){
    //     $("#calculate3").click(function(){
    //         $("form1").submit();
    //         $("form2").submit();
    //     })
    // }
   var array= $("#form1").serializeArray();
   $.each(array,function(key,value){
       console.log(value);
   })
})
// $ = require('jquery')
// (new jsdom.JSDOM().window);
// var bodyParser=require('body-parser');
// $(function(){
//     $("#calculate").click(()=>{
//         console.log("hi");
//     })
// });
// document.body.innerHTML="hi"
// var jsdom = require('jsdom');