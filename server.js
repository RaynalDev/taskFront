let express = require('express');
let app = express();
const PORT = process.env.PORT || 4200;
const URL = process.env.URL;
app.use(express.static(__dirname + '/dist/task-front/browser'));
app.get('/*', (req, res)=>{
    res.sendFile(__dirname + '/dist/task-front/browser/index.html');
})

app.listen(PORT, ()=>{
    console.log('Server is running on port ' + PORT);
    console.log('Server is running on URL ' + URL);
});