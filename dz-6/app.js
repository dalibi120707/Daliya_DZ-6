const block = document.querySelector('.block')
const btnPrev = document.querySelector('.btn-prev')
const btnNext = document.querySelector('.btn-next')
let count = 0
let result = []

const dataChabge = (el) => {
    const card = document.querySelector('.card')
  card.querySelector('h2').innerText = result[el].title
  card.querySelector('span').innerText = result[el].id
  card.querySelector('h3').innerText = result[el].completed
}

const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(data => {
          result = data
            const div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.innerHTML = `
        <h2>${data[0].title}</h2>
        <span>${data[0].id}</span>
        <h3>${data[0].completed}</h3>
      `
            block.append(div)
    console.log('\t\tTodos:\n', result)

        })
}
fetchData()
btnNext.onclick = () => {
  if (count < 199) {
   count++
  dataChabge(count)
  }
}
btnPrev.onclick = () => {
  if (count > 0){
    count--
    dataChabge(count)
  }
}

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET',
    headers: {'Content-type' : 'application/json'}
}).then((response) => response.json()
).then((data) => {
    console.log('\t\tPosts:\n', data)
})

