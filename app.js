const express       = require('express');
const app           = express();
const {randomUUID}  = require('crypto'); //GERAR ID 

app.use(express.json());


/**
 * ARRAY USUARIOS MOCKUP BANCO
 */
const users = [];

/**
 * @POST ADD
 */
app.post('/users', (request, response) => {
    
    const {nome,email} = request.body;

    const user ={
        nome,
        email,
        id: randomUUID()    
    }

    users.push(user);

    return response.json(user);
})

/**
 * @GET ALL USERS
 */

app.get('/users', (request, response) => {

    return response.json(users);
})

/**
 * @GET SEARCH
 */

app.get('/users/:id', (request, response) => {

    const {id} = request.params;
    const user = users.find(user => user.id === id);
    return response.json(user);

})

/**
 * @PUT UPDATE
 */

app.put('/users/:id', (request, response) => {
    const {id} = request.params;
    const {nome,email} = request.body;

    const userIndex = users.findIndex(user => user.id === id);

    users[userIndex] = {
        ...users[userIndex],
        nome,
        email
    }

    return response.json(users[userIndex]);

})

app.get('/',  (request,response)=>{
    return response.json({message: 'API Express Teste'});
})



app.listen(4002, () => { 
    console.log("Servidor Online ,Porta 4002");
  });