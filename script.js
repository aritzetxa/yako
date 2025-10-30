document.addEventListener('DOMContentLoaded', function(){
    
    document.addEventListener('submit', function(event){
        const formulario = document.getElementById('miFormulario');
        event.preventDefault();
        const formData = new FormData(formulario)
        alert(formData.get('correo'))
    });
});
