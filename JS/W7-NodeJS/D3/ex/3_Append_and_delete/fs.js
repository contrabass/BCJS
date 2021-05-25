const fs = require ('fs');

const content = "Lorem ipsum dolor sit amet..."

fs.appendFile('data.txt', '\n'+content, err => {
  if (err) {
    console.error(err)
    return
  }  
})

fs.appendFile('data.txt', '\nsome more text.', err => {
  if (err) {
    console.error(err)
    return
  }  
})

fs.unlink('data.txt', err => {
  console.log(err);
});