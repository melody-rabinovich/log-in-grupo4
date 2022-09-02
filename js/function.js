function abrirRegistro(){
    let div = document.getElementById('formRegistro');
    div.style.visibility = 'visible';

    let logIn = document.getElementById('logIn');
    logIn.style.visibility = 'hidden';

}

function validarRegistro(){
    let contraseña1 = document.getElementById('contraseñaRegistro').value;
    let contraseña2 = document.getElementById('contraseña2Registro').value;

    if (contraseña1 != contraseña2){
        // edad.style.color = 'red';
        alert('Las contraseñas no coinciden');
    }
}