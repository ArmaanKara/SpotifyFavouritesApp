const express = require('express')
const app = express();
const port = 8888


app.get('/', (req, res) => {
    const data = {
        name: "Armaan",
        isAwesome: true
    }
    res.json(data)
});

app.get('/awesome-generator', (req, res) => {
    const {name, isAwesome} = req.query;
    res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`)
});
///awesome-generator?name=Armaan&isAwesome=true   --> can change the name value and isAwesome value to anything you want and it will display it. if you change isAwesome to false it will display not.

app.listen(port, () =>{
    console.log(`Express app listening at http://localhost:${port}`)
});