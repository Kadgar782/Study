const createdElements = [["h1"], ["p"], ["span"]];

function createHTML (typeOfCreatedElement, locationForCreatedElement) {

const createdElement = document.createElement(typeOfCreatedElement);

locationForCreatedElement.appendChild( createdElement );
createdElement.innerHTML =  typeOfCreatedElement;

return createdElement;
}
const divInner = document.getElementsByClassName("inner")[0];
const createdH1 = createHTML( createdElements[0], divInner);
const createdParagraph = createHTML( createdElements[1],createdH1 );
const createdSpan = createHTML( createdElements[2], createdParagraph  );

//Json

const requestURL  = "https://jsonplaceholder.typicode.com/posts";
const request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function() {
   const usersInfo = request.response;
   console.log(usersInfo);
  
 }


// function elementFromHTML(html) {
//    const template = document.createElement("template");

//    template.innerHTML = html.trim();

//    return template.content.firstElementChild;

// }

//   const thread = elementFromHTML (`
//   <div class="container">
//   <h1>Заголовок</h1>
 
//   <p>а</p>
//   <p class="userID">4564</p>
//   </div>
//   `)

