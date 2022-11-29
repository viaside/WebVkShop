import fetch from 'node-fetch';
import express, { json, response } from 'express';
import cors from 'cors';

const app = express();

let code;
let userdata;
let loginCheck = false; 

// vk api fetchm and get user info 
async function GetUserId(){
    const resp = await fetch("https://oauth.vk.com/access_token?client_id=51483485&client_secret=zjSJd9ppqeeAs1XjbKyQ&redirect_uri=http://localhost:3000&code=" + code);
    const data = await resp.json();
    if ((data["user_id"]) == undefined) {
        loginCheck = false;
    } else {
        loginCheck = true;
        const resplast = await fetch("https://api.vk.com/method/users.get?user_ids="+data["user_id"]+"&fields=crop_photo&access_token=" + data["access_token"] +"&v=5.131");
        const datalast = await resplast.json();
        userdata = JSON.parse(JSON.stringify(datalast));
    }
}

// use cors policy
app.use(cors());


// return user info ["id"]["first_name"]["last_name"]["crop_image"]
app.get('/login', async function (req, res) {
    code = (req.url).substring(12);
    if(code.length == 18){
        await GetUserId();
        if(loginCheck == true){
            res.send(userdata["response"][0]);
        } else{
            res.send({
                message: 'error'
             });
        }
    } else{
        res.send({
            message: 'error'
         });
    };
});

app.listen(3001, ()=> {
    console.log("server run");
});