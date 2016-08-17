var cars = [];
function addCar(codigo, fabricante, modelo) {}
  var carro = {};
  carro.codigo = document.getElementById("codigo").value;
  carro.fabricante = document.getElementById("fabricante").value;
  carro.modelo = document.getElementById("modelo").value;
  cars.push(carro);
}
function showCars() {
  var retorno = '';

  for (var i = 0; i < cars.length; i++) {
    retorno = cars[i].codigo.value;
  }

  alert(cars.length);

}
