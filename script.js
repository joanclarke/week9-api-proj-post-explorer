// Week 9 Part A - Complete API Project

const loadPosts = document.querySelector('#load-post');
const userInput = document.querySelector('user-input');
const result = document.querySelector('result');

// const loadButton = document.querySelector('#load-button');
// const result = document.querySelector('#result');
async function showPosts() {
  userInput.ariaPlaceholder = 'Enter a USER ID';
  result.textContent = 'Loading posts...';
}

// async function showUser() {
//   result.textContent = 'Loading...';

//   try {
//     const response = await fetch(
//       'https://jsonplaceholder.typicode.com/users/1',
//     );

//     if (!response.ok) {
//       throw new Error(`Request failed: ${response.status}`);
//     }

//     const user = await response.json();
//     result.textContent = user.name;
//   } catch (error) {
//     result.textContent = `Unable to load user: ${error.message}`;
//   }
// }

// loadButton.addEventListener('click', showUser);
