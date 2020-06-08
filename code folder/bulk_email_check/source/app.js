const express = require('express')

var fs = require('fs');

path = require('path')

const app = express()

const emailCheck = require('email-check')

var verifier = require('email-verify');


////////api for bulk email////////////////////////////

///////text.txt file contain all email ////////////////

app.get('/', async (request, response) => {

    /////// is used to open file ///////////////////////

    const filename = path.join(__dirname,'/text.txt')
    var value_of_txt=undefined
    try {
        var data = fs.readFileSync(filename, 'utf8');
        value_of_txt=data    
    } catch(e) {
        return console.log('Error:', e.stack);
    }
    ////////// creating array of email /////////////////

    const l = value_of_txt.split('\n')
    
    var l1 = []
    for (var i = 0; i < l.length; i++) {
        var obj =new Object()
        var val = l[i]
        obj.email = val
        console.log(val)
        try {
            let ans = await emailCheck(val)
            if (!ans) {
                console.log('error')
                obj.answer ='error'
                l1.push(obj)
                
            } else {
                console.log(ans)
                obj.answer = ans
                l1.push(obj)
            }
        } catch (error) {
            if (error.message === 'refuse') {
                console.log('MX server is refusing requests')
                obj.answer = 'MX server is refusing requests'
                l1.push(obj)
            } else {
                console.log(error)
                obj.answer = error
                l1.push(obj)
            }
        }

    }
    response.send(l1)

})

app.get('/user_2',async(request,response)=>{

    // console.log(request.query)
    // if (!request.query.Emailaddress)
    // {
    //     response.send({error:'Error : provide Emailaddress'})
    // }
    
    // const user_email_1 = request.query.Emailaddress

    /////// is used to open file ///////////////////////

    const filename = path.join(__dirname,'/text.txt')
    var value_of_txt=undefined
    try {
        var data =fs.readFileSync(filename, 'utf8');
        value_of_txt=data    
    } catch(e) {
        return console.log('Error:', e.stack);
    }
    ////////// creating array of email /////////////////

    const l = value_of_txt.split('\n')
    var l1 = []
    for (var i = 0; i < l.length; i++) {
        var obj =new Object()
        var val = l[i]
        obj.email = val
        console.log(val)
        
        let ans = new Promise((resolve,reject)=>{
            verifier.verify(val,( err, info )=>{
                if( err ){
                    // console.log('error')
                    reject(err)
                }
        
                else{
                  
               
                    // console.log(info.success)
                    resolve(info)
                }
            });
        })
        try{
            let ans_1 = await ans
            if (!ans_1)
            {
                console.log('error')
                obj.answer = 'error'
                l1.push(obj)
            }
            else
            {
                console.log(ans_1)
                obj.answer = ans_1
                l1.push(obj)
            }
        }
        catch(error){
            console.log(error)
            obj.answer = error
            l1.push(obj)

        }
    }
    response.send(l1)
    

})

app.listen(3000, () => {
    console.log('server is up running on port 3000')
})
