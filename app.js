const posts = [  {    title: "Hello World",    content: "This is my first post!",  },  {    title: "How to make a cup of tea",    content: "Step 1: Boil water. Step 2: Add tea leaves. Step 3: Enjoy!",  },];

const postContainer = document.querySelector("#posts");

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  postContainer.innerHTML += `
    <div class="post">
      <h3>${post.title}</h3>
      <p>${post.content}</p>
    </div>
  `;
}
