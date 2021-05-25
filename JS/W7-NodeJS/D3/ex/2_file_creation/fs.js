const fs = require ('fs');

const content = "Lorem ipsum dolor sit amet..."

fs.appendFile('data.txt', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //done!
})