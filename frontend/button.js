// public/button.js
document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button');
    const content = document.querySelector('.account-details');
  
    button.addEventListener('click', () => {
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Hide Account Details';
      } else {
        content.style.display = 'none';
        button.textContent = 'Manage Account';
      }
    });
  
    // Initially hide content
    content.style.display = 'none';
  });
  