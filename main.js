
//Json


 fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const usersInfo = data;
    console.log(usersInfo)
  });

//creating HTML elements

function createPost (post) {
   let post = [usersInfo];

   `
<div class="inner">
  <h1>${usersInfo.title}</h1>
   <p>${usersInfo.body}</p>
   <span>${usersInfo.userId}</span>
`
}

//alternative Json

 // const requestURL  = "https://jsonplaceholder.typicode.com/posts";
 // const request = new XMLHttpRequest();
 // request.open("GET", requestURL);
 // request.responseType = "json";
 // request.send();

 // request.onload = function() {
 //    const usersInfo = request.response;
 //    console.log(usersInfo);
 //  }


//Alternative createdElement


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


