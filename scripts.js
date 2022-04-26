// Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.

const gifs = ["./assets/magic-1.gif", "./assets/magic-2.gif", "./assets/magic-3.gif", "./assets/magic-4.gif", "./assets/magic-5.gif", "./assets/magic-6.gif"]

const paleta = ["#444", "#000", "#fff", "#6780cd"]


const links = document.links;

for (const link of links) {
  link.addEventListener("click" || "auxclick" || "dblclick" || "mouseup" || "mousedown", function(e) {
    e.preventDefault();
  })
}

// Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:

// 2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.

// 2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const image = document.getElementsByTagName("IMG");
for (let i = 0; i < image.length; i++) {
  image[i].addEventListener("click" || "auxclick" || "dblclick" || "mouseup" || "mousedown", function(e) {
    image[i].src=getRandom(gifs);
  })
}


// 2.3 Bloques de article o section: Cambia el color de fondo.

const back = document.getElementsByTagName("ARTICLE" && "SECTION");
for (let i = 0; i < back.length; i++) {
  back[i].addEventListener("click" || "auxclick" || "mouseup" || "mousedown", function(e) {
    back[i].style.backgroundColor= randomColor();
  })
}
for (let i = 0; i < back.length; i++) {
  back[i].addEventListener("dblclick", function(e) {
    back[i].style.backgroundColor= "white";
  })
}

// Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

var css = 'table td:hover{ background-color: #00ff00 }';
var style = document.createElement('style');

// 3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
const image1 = document.getElementsByTagName("IMG");
for (let i = 0; i < image1.length; i++) {
   let imgSrc = image1[1].getAttribute('src');
  image1[i].addEventListener("mouseover", function(e) {
    image1[i].src=getRandom(gifs);
  })
  image1[i].addEventListener("mouseout", function(e) {
    image1[i].src=imgSrc;
  })

}

// 3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
const pele = document.getElementsByTagName("P");
for (let i = 0; i < pele.length; i++) {
  pele[i].addEventListener("mouseover", function(e) {
    pele[i].style.backgroundColor = randomColor();
  })
  pele[i].addEventListener("mouseout", function(e) {
    pele[i].style.backgroundColor = "white";
  })

}
// 3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
const artsec = document.getElementsByTagName("ARTICLE" && "SECTION");
for (let i = 0; i < artsec.length; i++) {
  artsec[i].addEventListener("mouseover", function(e) {
    artsec[i].style.backgroundColor = randomColor();
  })
  artsec[i].addEventListener("mouseout", function(e) {
    artsec[i].style.backgroundColor = "white";
  })

}
// Premium



// Crea una función de nombre getRandom que acepte un array con valores y devuelva uno de ellos de manera aleatoria.

const colors = ['red', 'blue', 'green'];

const getRandom = (array) => {
  return array[parseInt(Math.random() * array.length)];
}

console.log(getRandom(colors));
// imprime 'red', 'blue' o 'green'

const randomColor = () => {
   let color = '#';
   for (let i = 0; i < 6; i++){
      const random = Math.random();
      const bit = (random * 16) | 0;
      color += (bit).toString(16);
   };
   return color;
};
console.log(randomColor());
// Utiliza la función creada getRandom para utilizar colores aleatorios de una paleta que hayas escogido de coolors.co en los apartados anteriores.

// Utiliza la función creada getRandom para utilizar gifs aleatorios en los apartados anteriores.