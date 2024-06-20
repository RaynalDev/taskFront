let express = require('express');
let app = express();
app.use(express.static(__dirname + '/dist/task-front/browser'));
app.get('/*', (req, res)=>{
    res.sendFile(__dirname + '/dist/task-front/browser/index.html');
})

app.listen(process.env.PORT || 8080);