//Getting Post content
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const posts = data;
    console.log(posts);
    // Getting User names
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = data;
        console.log(users);
        // Changing ID
        const mappedPosts = posts.map((p) => {
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
      });
  });
//creating HTML elements

function createPost(post) {
  return `
    <h1>${post.title}</h1>
    <p>${post.body}<span>${post.userId}</span></p>
  `;
}
