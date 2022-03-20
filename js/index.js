// import request from '../utils/request.js'
import getNowTime from './time.js'
getNowTime.getNowTime()

let data = JSON.parse(localStorage?.getItem('data') ?? '[]')
console.log(data)

// # 未完成节点
let input = document.querySelector('#input')
let add = document.querySelector('#add')
let ul1 = document.querySelector('.todo-container ul')

// # 添加数据
add.addEventListener('click', function () {
  if (input.value.trim() === '') {
    dialog.classList.remove('active')
    return
  }
  data.push({
    id: data.length,
    content: input.value,
    status: 0
  })
  input.value = ''
  // *本地存储
  localStorage.setItem('data', JSON.stringify(data))
  load(data)

  // let addNode = lis[0].cloneNode(true)
  // addNode.children[0].children[1].innerText = input.value
  // ul.appendChild(addNode)
})

// # 已完成节点
let ul2 = document.querySelector('.done ul')

// # 设置为已完成
function setFinish() {
  setTimeout(() => {
    let notfinish = ul1.children
    for (let item of notfinish) {
      let btn = item.firstElementChild.children[1]
      btn.onclick = function () {
        let id = this.dataset['id']
        for (let i = 0; i < data.length; i++) {
          if (data[i]?.id == id) {
            data[i].status = 1
          }
        }
        localStorage.setItem('data', JSON.stringify(data))
        load(data)
      }
    }
  })
}

// # 设置撤销事件
function setReset() {
  setTimeout(() => {
    let done = ul2.children
    for (let item of done) {
      let btn = item.firstElementChild.children[1]
      btn.onclick = function () {
        let id = this.dataset['id']
        console.log(id)
        for (let i = 0; i < data.length; i++) {
          if (data[i].id == id) {
            data[i].status = 0
            // item.classList.add('active')
          }
        }
        localStorage.setItem('data', JSON.stringify(data))
        load(data)
      }
    }
  })
}

// # 设置删除事件
function setDelete() {
  setTimeout(() => {
    let all = [...ul2.children, ...ul1.children]
    for (let item of all) {
      let btn = item.firstElementChild.lastElementChild
      btn.onclick = function () {
        let id = this.dataset['id']
        for (let i = 0; i < data.length; i++) {
          if (data[i]?.id == id) {
            delete data[i]
          }
        }
        localStorage.setItem('data', JSON.stringify(data))
        load(data)
      }
    }
  })
}

setFinish()
setReset()
setDelete()

// 遮罩层
let dialog = document.querySelector('#dialog')
let close = dialog.firstElementChild.firstElementChild
close.addEventListener('click', function () {
  dialog.classList.add('active')
})

// # 数据渲染
// # 添加数据模板
let liItemModel = function (item) {
  return `
    <div>
      <div id="content">${item.content}</div>
      <button id="finish" data-id="${item.id}"></button>
      <button id="del-btn" data-id="${item.id}" ></button>
    </div>
`
}
// # 已完成模板
let liFinshModel = function (item) {
  return `
    <div class="finished">
      <div class="content">${item.content}</div>
      <div class="reset" data-id="${item.id}"></div>
      <div class="delete" data-id="${item.id}"></div>
    </div>
  `
}
function load(data = []) {
  ul1.innerHTML = ''
  ul2.innerHTML = ''
  data.forEach((item, index) => {
    let li = document.createElement('li')
    if (item?.status == 0) {
      li.innerHTML = liItemModel(item)
      ul1.appendChild(li)
    }
    if (item?.status == 1) {
      li.innerHTML = liFinshModel(item)
      ul2.appendChild(li)
    }
  })
  // # 绑定添加事件
  setFinish()
  setReset()
  setDelete()
}

load(data)
