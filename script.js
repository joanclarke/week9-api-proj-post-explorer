// Week 9 Part A - Complete API Project

const loadPosts = document.querySelector('#load-posts');
const userInput = document.querySelector('#user-input');
const result = document.querySelector('#result');
const loadButton = document.querySelector('#load-button');

const userId = Number(userInput.value);
console.log(userId);
async function getPosts(userId) {
  // result.textContent = 'Loading posts...';
  console.log(userId);
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error(`Response failed: ${response.status}`);
  }

  const posts = await response.json();
  const postCollection = posts.filter((post) => {
    return post.userId === userId;
  });

  const matchingPosts = postCollection.map((item) => {
    return {
      id: item.id,
      userId: item.userId,
      title: item.title,
      body: item.body,
    };
  });
  console.log(userId);
  console.log(matchingPosts);
  // return matchingPosts;
}

// Caller function :

async function showPosts() {
  // console.log(typeof Number(userValue));
  // console.log(typeof getPosts(userValue));

  try {
    const userSelection = await getPosts(userId);
    // console.log(getPosts(userValue));
    // console.log(userSelection);
  } catch (error) {
    console.log(error.message);
  }
}

loadPosts.addEventListener('click', getPosts);

// getPosts(3);
// showPosts(5);
