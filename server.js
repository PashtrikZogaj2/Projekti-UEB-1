const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyParser.json({limit: '10mb' }));
app.use(cors({
    origin: 'http://127.0.0.1:5500', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
})); 
app.options('/', cors());
app.post('/', (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    const formData = req.body;
    var file ='';
    if (formData.sale_or_rent === 'sale'){
        file = 'buy.json';
    }else{
        file = 'rent.json';

    }
   
    const existingData = JSON.parse(fs.readFileSync(file));

  
    formData.id = existingData.length + 1;
    existingData.push(formData);

   
    fs.writeFileSync(file, JSON.stringify(existingData, null, 2));

    res.json({ message: 'Form data appended successfully' });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});