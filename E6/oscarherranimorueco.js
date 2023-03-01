const express = require('express');
const app = express();
const {getFirestore} = require("firebase-admin/firestore");
app.use(express.json());
const cors = require('cors');
app.use(cors());

port = 3020;
app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});

//Credencials Firebase
var admin = require("firebase-admin");

var serviceAccount = require("../exoscarherran-firebase-adminsdk-jc56a-266cd194e5.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});


const db = getFirestore();
dbConnection();
async function dbConnection(){
    const conn = db.collection("mundial22Herran").doc("final22Herran");
    const doc = await conn.get();
    if (!doc.exists){
        console.log("El document no existeix!")
    }else{
        app.get('/oscarherran/jugadors',async (req, res) => {
            const conn = db.collection("mundial22Herran").doc("final22Herran");
            const doc = await conn.get();
            const document = doc.data();
            res.json(document);
        })

    }
}

app.post('/oscarherran/guanyador/1-3-23',(req, res) => {
    db.collection("mundial22Herran").doc("provafinal").set({
        data: req.body.data})
});

