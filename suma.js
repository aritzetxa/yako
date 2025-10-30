

document.addEventListener('DOMContentLoaded', function(){

    document.addEventListener('submit', function(event){
        const formulario = document.getElementById('formProducto');
        event.preventDefault();
        const formData = new FormData(formulario);
        const a =  +formData.get('a');
        const b =  Number(formData.get('b'));
        if (isNaN(a) || isNaN(b)){
            alert("Introduce numero valido.")
            return;
        };
        //alert(`La suma es: ${a+b}`);
        document.getElementById('resultado').textContent = `La suma es: ${a+b}`;
    });
});