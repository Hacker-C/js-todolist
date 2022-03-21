export default {
  getNowTime: function () {
    let nowTime = document.querySelector('.time').children[0]
    let leftTime = document.querySelector('.time').children[1]

    // 计算当天时间和剩余时间
    setInterval(() => {
      let date = new Date()

      // 当前时间
      let nowS = date.getSeconds()
      let nowM = date.getMinutes()
      let nowH = date.getHours()
      // 剩余时间
      let leftH = 23 - +nowH
      let leftM = 59 - +nowM
      let leftS = 59 - +nowS
      leftTime.innerHTML = leftH + 'h ' + leftM + 'm ' + leftS + 's '
      nowTime.innerHTML = `
        ${nowH < 10 ? '0' + nowH : nowH}:${nowM < 10 ? '0' + nowM : nowM}:${
        nowS < 10 ? '0' + nowS : nowS
      }`
    }, 1000)
  }
}
