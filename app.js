const express = require ("express");
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://clingonboy:clingon08@ds251902.mlab.com:51902/foracciodb')

mongoose.connection.once('open', () =>{
    console.log('connesso al database remoto');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("In ascolto per richieste alla porta 4000");
});

// video 19

// echo "# provagrapql-server" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git remote add origin https://github.com/Clingonboy/provagrapql-server.git
// git push -u origin master
