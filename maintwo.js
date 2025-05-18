let message = "hi this is my homework"
let cost = 1
let tax =0.1
let x =( (message.length -(message.length % 100)+100)/100)
console.log(" this text costs " + cost * x + " cents befoure tax and " + cost * x * (1 + tax) + " cents after tax " )