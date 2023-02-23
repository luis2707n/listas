var nombres=[];
 function guardar(){
     var arreglo_alumnos=[]; 
     for(var j=1; j<=4;j++){
         var nombre_alumno=document.getElementById("nombre"+j).value;
          console.log(nombre_alumno);
           nombres.push(nombre_alumno); 
        } 
        console.log(nombres);
        var longitud_nombres=nombres.length;
        console.log(longitud_nombres);
        
        for(var k=0; k<longitud_nombres; k++){
            arreglo_alumnos.push("<h4>NOMBRE: "+nombres[k]+"</h4>");
            console.log(arreglo_alumnos);
        }
        document.getElementById("nombre_con_comas").innerHTML=arreglo_alumnos;

        var remover_comas=arreglo_alumnos.join(" ");

        document.getElementById("nombre_sin_comas").innerHTML=remover_comas;

           document.getElementById("ver").innerHTML=nombres; 
           document.getElementById("guardar").style.display="none";
        }
        function actualizar(){
            document.getElementById("guardar").style.display="inline-block";
        }