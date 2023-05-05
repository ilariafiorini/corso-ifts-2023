const os = require('os');
console.log('uptime h: '+ (os.uptime()/3600))
console.log('uptime d: '+ (os.uptime()/3600/24))
console.log(os.userInfo())
console.log(os.arch())
console.log(os.platform())
console.log(os.freemem())
console.log('freemem GB:' + (os.freemem()/1024/1024/1024))