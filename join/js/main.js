$('.toggle').click(function(){
    $('.formulario').animate({
        height: "toggle",
        'padding-top': 'toggle',
        'padding-bottom': 'toggle',
        opacity: 'toggle'
    }, "slow");
});

function validateForm( ) {
   
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
     if ( name == "sylvia" && password == "123" ) {
       //alert("usuario y contrasena validos")
       window.open('../about/staff.html');
     }   else {
       
       
       alert("intenta de nuevo");
     }
 
 };