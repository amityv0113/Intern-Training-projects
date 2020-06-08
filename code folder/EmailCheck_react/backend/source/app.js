const express = require('express')

const app = express()

const validator = require('validator')

const emailExistence = require('email-existence')

var verifier = require('email-verify');
var infoCodes = verifier.infoCodes;

app.get('/',(request,response)=>{
    response.send('hello world')
})

app.get('/user_2',(request,response)=>{

    console.log(request.query)
    if (!request.query.Emailaddress)
    {
        response.send({error:'Error : provide Emailaddress'})
    }
    
    const user_email_1 = request.query.Emailaddress
    verifier.verify( user_email_1, function( err, info ){
        if( err ){
            response.send(err)
        }

        else{
          
        //   console.log("Success (T/F): " + info.success );
        //   console.log("Info: " + info.info );
            console.log(info)
            response.send(info)
        }
    });

})


app.get('/index', (request,response)=>{
    if(!request.query.Emailaddress){
        return response.send({
            error : 'You must provide Email-address'
        })
    }
    
    const user_email = request.query.Emailaddress
    // if (!validator.isEmail(user_email)) {
    //     return response.send({error:"Email is invalid" })
    // }
    //console.log(user)
    
    emailExistence.check(user_email,(error, val)=>{
        if (error){
            console.log(error)
            return response.send({
                error
            })
        }
        
        
        response.send(val)

    });

    //response.render('index',{b:a})
})

app.get('*', (request ,response) =>{
    response.send('404 Page')
})


app.listen(3000, ()=>{
    console.log('server is up running on port 3000')
})
