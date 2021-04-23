const { fstat } = require("node:fs")


module.exports = function () {
    fstat.readFile('./', 'utf8', (err, file) => {
        if (err) {
            throw err
          } else {
              process.stdout.write(.toString())
              process.stdout.write("prompt > ");
          }
    })
}