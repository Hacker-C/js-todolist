import request from './utils/request.js'

let data = JSON.parse(localStorage.getItem('data'))

let ajax = request.request
let input = document.querySelector('#input')
let add = document.querySelector('#add')
let ul = document.querySelector('.todo-container ul')

add.addEventListener('click', function () {
  if (input.value.trim() === '') {
    dialog.classList.remove('active')
    return
  }

  data.push({
    id: 3,
    content: input.value,
    done: false
  })
  // *本地存储
  let id = data.length
  localStorage.setItem('data', JSON.stringify(data))
  load(data)

  // let addNode = lis[0].cloneNode(true)
  // addNode.children[0].children[1].innerText = input.value
  // ul.appendChild(addNode)
})

// 遮罩层
let dialog = document.querySelector('#dialog')
let close = dialog.firstElementChild.firstElementChild
close.addEventListener('click', function () {
  dialog.classList.add('active')
})

// async function getData() {
//   let res = await new Promise((resolve, reject) => {
//     ajax({
//       url: './db.json',
//       method: 'get',
//       data: {
//         content: 1
//       },
//       success: function (resp) {
//         resolve(resp)
//       }
//     })
//   })
//   return res
// }

// # 数据渲染

let liItemModel = function (value) {
  return `
    <div>
      <div id="content">${value}</div>
      <button id="finish"></button>
      <button id="del-btn"></button>
    </div>
`
}
function load(data = []) {
  ul.innerHTML = ''
  data.forEach((item, index) => {
    let li = document.createElement('li')
    li.innerHTML = liItemModel(item.content)
    ul.appendChild(li)
  })
}

load(data)
