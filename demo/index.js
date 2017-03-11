const express = require('express');
const path    = require('path');

var app = express();

app.use(express.static(path.join(__dirname), { maxAge: 31557600000 }));
app.set('port', process.env.PORT || 3000);
app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname, 'target-input.html'));
})
app.listen(app.get('port'),()=>{
  console.log(`connected on port ${app.get('port')}`);
});
