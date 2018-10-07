//link do strony z żartem
var url = 'http://api.icndb.com/jokes/random';

//do zmiennej button podpiety jest przycisk z funkcją nasłuchiwania na kliknięcie tak, aby każdorazowo pobierany był losowy żart. 

var button = document.getElementById('get-joke');

button.addEventListener('click', function(){
  getJoke();
});

//Do zmiennej paragraph przypisany jest element DOM paragrafu, który odpowiada za wyświetlanie dowcipu.
var paragraph = document.getElementById('joke');

//Implementacja funkcji getJoke
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response);
    paragraph.innerHTML = response.value.joke;
  });
  xhr.send();
}
getJoke();

