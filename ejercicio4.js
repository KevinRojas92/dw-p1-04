'use strict';

let ciudad, genero, edad, edadGeneral = 0, totalEncuestados = 0, edadMujeres = 0, edadHombres = 0, contHombres = 0, contMujeres = 0, mujeresMenosres = 0, mujerMayor = Number.NEGATIVE_INFINITY,
hombresMayores = 0, hombreMenor = Number.POSITIVE_INFINITY, promEdad, promEdadM, promEdadH, porcentajeM, porcentajeH;

do {
    do {
        ciudad = prompt('Ingrese su ciudad').toLowerCase();
    } while (ciudad == '' || ciudad == ' ' || !isNaN(ciudad));
    
    do {
        genero = prompt('Ingrese su género - Ej. H (Hombre) ó M (Mujer)').toLowerCase();
    } while (!(genero === 'm'|| genero === 'h'));
    
    do {
        edad = parseInt(+prompt('Ingrese su edad'));
    } while (edad == '' || edad == ' ' || isNaN(edad) || !(edad > 0 && edad < 111));

    totalEncuestados ++;

    edadGeneral += edad;

    if (genero === 'm'){
        contMujeres ++;
        edadMujeres += edad;
        if (edad < 21){
            mujeresMenosres ++;
        }
        if (edad > mujerMayor){
            mujerMayor = edad;
        }
    } else {
        contHombres ++;
        edadHombres += edad;
        if (edad > 21){
            hombresMayores ++;
        }
        if (edad < hombreMenor){
            hombreMenor = edad;
        }
    }
} while (confirm('¿Quieres encuestar otra persona?'));

alert(`El promedio de la edad general es ${promEdad = edadGeneral / totalEncuestados}`);
alert(`El promedio de la edad de las mujeres es ${promEdadM = edadMujeres / contMujeres}`);
alert(`El promedio de la edad de los hombres es ${promEdadH = edadHombres / contHombres}`);
alert(`El porcentaje de mujeres menores a 21 años es de ${porcentajeM = (mujeresMenosres * 100) / contMujeres}%`);
alert(`El porcentaje de hombres mayores a 21 años es de ${porcentajeH = (hombresMayores * 100) / contHombres}%`);
alert(`La mayor edad ingresada de las mujeres es ${mujerMayor}`);
alert(`La menor edad ingresada de los hombres es ${hombreMenor}`);