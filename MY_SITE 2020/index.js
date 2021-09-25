const caminarCaracol = (distanciaSolicitada) => {
    if (Number.isInteger(distanciaSolicitada)) {
      let distanciaRecorrida = 0;
      let recorreDia = 7;
      let pierdeNoche = 2;
      let diaActual = 1;
      while (distanciaRecorrida + recorreDia < distanciaSolicitada) {
        distanciaRecorrida = distanciaRecorrida + recorreDia - pierdeNoche;
        diaActual = diaActual + 1;
      }
      console.log(diaActual);
    } else {
      alert("introduce un numero!");
    }
  };
  
  caminarCaracol(12);
  