const express = require('express');
var hbs = require('hbs');
const path = require('path')

const publicDirPath = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, "/templates/views");
// const partialPath = path.join(__dirname, "/templates/partials");

const app = express()
app.use(express.urlencoded());
app.use(express.json());


app.set('view engine', 'hbs');
app.set('views', viewsPath);


app.use(express.static(publicDirPath));


let greetingMessages = ['hi', 'hello', 'hey'];

app.post('/reply', function (req, res) {
    var fullUrl = req.protocol + '://' + req.get('host');
    console.log(req.body);

    if (greetingMessages.includes(req.body.message)) {
        res.json({
            reply: 'Hello! Welcome to Formeasy 👋 \n How can we help you today? \n Simply type the no. associated to the service you would like to access today 👇 \n *Type 1*: Aadhar Card \n *Type 2*: PAN Card \n *Type 3*: VoterId card\n'
        });
    } else if ((req.body.message) == '1') {
        res.json({
            reply: 'Choice 1 \n You have selected *Aadhar Card*. \nFor more details Click on the link given below: 👇\n'+fullUrl+'/aadharCard'
            
        });
    } else if ((req.body.message) == '2') {
        res.json({
            reply: 'Choice 2 \n You have selected *PAN Card*. \nFor more details Click on the link given below: 👇\n'+fullUrl+'/panCard'
        });
    } else if ((req.body.message) == '3') {
        res.json({
            reply: 'Choice 3 \n You have selected *Voter Card*. \nFor more details Click on the link given below: 👇\n'+fullUrl+'/voterIdCard'
        });
    } 
    // else{
    //     res.json({
    //         reply: 'please select a correct option\n *Type 1*: Aadhar Card \n *Type 2*: PAN Card \n *Type 3*: VoterId card\n'
    //     });
    // }
    
    // console.log(fullUrl);
})

app.get('/aadharCard', function (req, res) {
    res.render('aadharCard');
});

app.get('/panCard', function (req, res) {
    res.render('panCard');
});

app.get('/voterIdCard', function (req, res) {
    res.render('voterId');
});

app.listen(3000)