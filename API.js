const aplicacion = document.querySelector('.container')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)

/*         
.then(response => console.log(response))
*/

.then(response => response.json())
.then(data => console.log(data))