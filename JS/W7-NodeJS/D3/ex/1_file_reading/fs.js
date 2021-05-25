const fs = require ('fs');

fs.readFile(__dirname+'/readMe', 'utf8' , (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})