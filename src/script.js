localStorage.setItem('name', 'Bob');
localStorage.removeItem('name');

sessionStorage.setItem('name', 'John');
sessionStorage.removeItem('name');

document.cookie = 'name=Kyle; expires=' + new Date(2020, 7, 4).toUTCString();

document.cookie = 'lastName=Smith; expires=' + new Date(2020, 7, 4).toUTCString();

console.log(document.cookie);
