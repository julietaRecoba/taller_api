
const container = document.getElementById("container");
const buscador = document.getElementById("buscador");
let contentToAppend = "";

buscador.addEventListener("click", function () { 
limpiarListado();
    let content = document.getElementById("content").value;
   let apidata =`https://api.dictionaryapi.dev/api/v2/entries/en/${content.toString()}`
    //console.log(apidata);
    //console.log(content);
    getApiData(apidata);

      function getApiData(URL) {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            showData(data);
        });

    }
   
    function showData(array) {
        
        contentToAppend += ` <h2 id="title" class="titleAndPhonetic">${array[0].word}<h2>  <p class="titleAndPhonetic">${array[0].phonetic}</p>
        <p id=definitions>Definitions</p>`

    for (let i = 0; i <array.length; i++) {
        contentToAppend += `<div id="txtcontent"> 
         
            <p class="description">${array[0].meanings[0].definitions[i].definition}</p>            
        
        `;}
        contentToAppend+= ` <p id="source">fonts:${array[0].sourceUrls[0]}</p>
        </div>`
    container.innerHTML = contentToAppend;
    
       };


})

 
function limpiarListado() {
    contentToAppend = "";
    container.innerHTML = contentToAppend
    //cuando este lo de local storage agregar funcion que lo elimine del local storage.
}
