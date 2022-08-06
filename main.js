//Json

 fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const JData = data;
    console.log(JData);

  
    for (let post of JData) {
      const container = document.getElementsByClassName("inner")[0];
      const resultedPost = createPost(post);
      const postWrapper = document.createElement("div");
      postWrapper.innerHTML = resultedPost;
      container.appendChild(postWrapper);
  } 
 } 
);

  
//creating HTML elements

  function createPost (post) {
    return  `
    <h1>${post.title}</h1>
    <p>${post.body}<span>${post.userId}</span></p>
    
  `
}


