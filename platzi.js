var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
    url: "tile.png",
    cargaOK: false
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false
};

/*En programación es una buena practica que si tienes una definición de un objeto
  a la primera letra del nombre ponerle mayúscula. Dado que es la definición completa
  de un objeto, mejor llamada como clase*/
fondo.imagen = new Image();   //Creación de un objeto.
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);
//El primer parámetro es el nombre del evento y el segundo es la función

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function cargarPollos()
{
    pollo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        var cantidad = aleatorio(0, 3);

        for(var v=0; v<cantidad; v++)
        {
            /*var x = aleatorio(0,5);
            var y = aleatorio(0,5);
            var x = x * 80;
            var y = y * 80;*/ //Así los dejo en cuadriculas variables
            
            var x = aleatorio(0,420);
            var y = aleatorio(0,420);
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK)
    {
        var cantidad = aleatorio(0, 5);

        for(var c=0; c<cantidad; c++)
        {
            /*var x = aleatorio(0,5);
            var y = aleatorio(0,5);
            var x = x * 80;
            var y = y * 80;*/
            var x = aleatorio(0,420);
            var y = aleatorio(0,420);
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOK)
    {
        var cantidad = aleatorio(0, 7);

        for(var p=0; p<cantidad; p++)
        {
            /*var x = aleatorio(0,5);
            var y = aleatorio(0,5);
            var x = x * 80;
            var y = y * 80;*/
            var x = aleatorio(0,420);
            var y = aleatorio(0,420);
            papel.drawImage(pollo.imagen, x, y);
        }
    }
}

/* Prueba de número aleatorio
for(i=0; i<10; i++)
{
    var z = aleatorio(10, 20);
    document.write(z + ", ");
}
*/

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor(Math.random() * (max - min + 1)) + min;
    return resultado;
}