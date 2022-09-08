var datosUsuarios ={
    usuario : '',
    password: '',
    nombre: '',
    apellido: '',
    edad: '',
    profesion: ''

}
function abrirRegistro(){
    let div = document.getElementById('formRegistro');
    div.style.visibility = 'visible';

    let logIn = document.getElementById('logIn');
    logIn.style.visibility = 'hidden';

}

function abrirLogin(){
    let div = document.getElementById('formRegistro');
    div.style.visibility = 'hidden';

    let logIn = document.getElementById('logIn');
    logIn.style.visibility = 'visible';

}

function validarUsuario(){
    let usuario = document.getElementById('txtUsuario').value;
    let password = document.getElementById('txtPassword').value;

    if(usuario == ""){
        document.getElementById('lblError').innerText = "No escribiste un usuario";
    }

    if(password == ""){
        document.getElementById('lblError').innerText = "No escribiste la contrasena";
    }
    if(datosUsuarios.usuario != usuario){
        document.getElementById('lblError').innerText = "El usuario no es correcto";
    }

    if(datosUsuarios.password != password){
        document.getElementById('lblError').innerText = "La contraseña no es correcta";
    }

    if(datosUsuarios.usuario == usuario && datosUsuarios.password == password){
        //document.getElementById('txtUsuario').value = document.getElementById('txtPassword').value = document.getElementById('lblError') = '';
        
        alert('Bienvenido!! - ' + datosUsuarios.apellido + ', ' + datosUsuarios.nombre + ' (' + datosUsuarios.edad + ')'); 
        document.getElementById('txtUsuario').value = '';
        document.getElementById('txtPassword').value = '';
        document.getElementById('lblError') = '';
    }
}

function validarRegistro(){
    console.log(datosUsuarios);
    const signIn = document.ventana;
    let usuario = signIn.usuario.value;
    let password = signIn.contra.value;
    let passwordRepeat = signIn.contraRepeat.value;
    let nombre = signIn.nombre.value;
    let apellido = signIn.apellido.value
    let edad = signIn.edad.value;
    let profesion = signIn.select.value;

    if(password != passwordRepeat){
        document.getElementById('lblErrorRegistro').innerText = "Las contrasenas no coinciden";
        return false;
    }

    datosUsuarios.usuario = usuario;
    datosUsuarios.nombre = nombre;
    datosUsuarios.password = password;
    datosUsuarios.edad = edad;
    datosUsuarios.apellido = apellido;
    datosUsuarios.profesion = profesion;

    abrirLogin();
}