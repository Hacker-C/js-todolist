let a = [{ b: 1 }, { b: 2 }]

a.forEach((obj) => {
  if (obj.b === 1) obj.b = 100
})

console.log(a)
