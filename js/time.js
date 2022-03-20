export default {
  getNowTime: function () {
    let nowTime = document.querySelector('.time').children[0]
    let leftTime = document.querySelector('.time').children[1]

    // 计算当天时间和剩余时间
    let t1 = setInterval(() => {
      let now = new Date().toLocaleTimeString()
      let nowTimeArr = now.split(':')
      let s = 60 - +nowTimeArr[2]
      let m = 60 - +nowTimeArr[1] - (s ? 1 : 0)
      let h = 24 - +nowTimeArr[0] - (m ? 1 : 0)
      // 剩余时间
      leftTime.innerHTML = `${h}h ${m < 10 ? '0' + m : m}m ${
        s < 10 ? '0' + s : s
      }s`
      // 当前时间
      nowTime.innerHTML = now
    }, 1000)
  }
}
