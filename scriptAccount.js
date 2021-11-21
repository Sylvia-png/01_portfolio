function validateForm( ) {
   
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
     if ( name == "sylvia" && password == "123" ) {
       //alert("usuario y contrasena validos")
       window.open('./account.html');
     }   else {
       
       
       alert("intenta de nuevo");
     }
 
 };