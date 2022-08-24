async function loadPage() {
//Getting Post content
  let responsePosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  let posts = await responsePosts.json();
//Getting User names
  let responseUsers = await fetch("https://jsonplaceholder.typicode.com/users");
  let users = await responseUsers.json();
//Gettinf Photos
 let responsePhotos = await fetch ("https://jsonplaceholder.typicode.com/photos");
 let photos = await responsePhotos.json();
//Add Avatar
const postsWithAvatars = posts.map((p) => {
  const createdBy = photos.find((u) => u.id === p.userId);
  return {
    ...p, 
    createdBy
  }
});
console.log(postsWithAvatars)

  
// Changing ID
  const mappedPosts = postsWithAvatars.map((p) => {
    const createdBy = users.find((u) => u.id === p.userId);

    return {
      ...p,
      userId: createdBy ? createdBy.username : "Unknown user",
    };
  });

  console.log(mappedPosts);
  //Creating Post
  for (let post of mappedPosts) {
    const container = document.getElementsByClassName("outer")[0];
    const resultedPost = createPost(post);
    const postWrapper = document.createElement("div");
    postWrapper.classList.add("inner");
    postWrapper.innerHTML = resultedPost;
    container.appendChild(postWrapper);
  }
}
loadPage();

//creating HTML elements

function createPost(post) {
  return `
    <h1>${post.title}</h1>
    <p>${post.body}<span>${post.userId}<img class="Avatar" src=${post.createdBy.thumbnailUrl}></span></p>
  `;
}
