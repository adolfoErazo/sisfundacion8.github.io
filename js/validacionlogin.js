function olvido(){
   var olvido = document.usuariologin.email.value;
   if (olvido == "") {
       alert("Digite su correo electrónico por favor");       
   }
   else{
        alert("La contraseña ha sido enviada a su correo electrónico");       
        window.location="index.html"     
   }
}

function confirmacionPass(){
    var pass = document.getElementById('#password1').value;
    var conf = document.confirmacionPassword.confirmacion1.value;

    if (pass.length<8 || conf.length<8) {
        alert("La contraseña debe tener más de 8 caracteres");
    }
    else if(pass=="" && conf =="") {
        alert("Digite una contraseña por favor");
    }
    else if (pass!=conf) {
        alert("La contraseña y la confirmación no coinciden");
    }
    else if(pass==conf){
        alert("Usuario registrado");
        window.location="index.html"
    }
}
 function EnviarUsuario(){ 
    var usuario=document.usuariologin.email.value; 
    var password=document.usuariologin.password.value; 

    if (usuario=="admin1@gmail.com") { 
        if (password=="123") {
 window.location="file:///C:/Users/Personal/Documents/FASE%20III/Sisfundacion%20v8/modulo%20administracion/index administracion.html";
        }
        if (password!="123") {
            alert('Error: verifique que su correo y contraseña sea correcta')
        }             
    }       

    if (usuario=="donante2@gmail.com") { 
        if (password=="4321") {
            window.location="file:///C:/Users/Personal/Documents/FASE%20III/Sisfundacion%20v8/mod_Donantes/index_Donantes.html";
        }
        if (password!="4321") {
            alert('Error: verifique que su correo y contraseña sea correcta')
        }
    } 

    if (usuario=="directivo3@gmail.com") { 
        if (password=="7890") {
            window.location="file:///C:/Users/Personal/Documents/FASE%20III/Sisfundacion%20v8/MODULO%20ASIGNACION/index.html";
        }
    if (password!="7890") {
            alert('Error: verifique que su correo y contraseña sea correcta')
        }
    } 

// validacion si no es ningun de los userrs
    if (usuario!="admin1@gmail.com" && usuario!="donante2@gmail.com"&& usuario!="directivo3@gmail.com")  
    {
        if(password!=""){
            alert('ERROR: Usuario incorrecto')
        }
        if (usuario!="" && password=="") { 
            alert('ERROR: Datos incompletos')
        } 
        if (usuario=="" && password=="") { 
            alert('ERROR: Ingrese los Datos')

        } 
    }
}

