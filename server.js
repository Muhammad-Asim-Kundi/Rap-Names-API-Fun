const express = require('express')
const app = express()

const rappers = {
    '21 savage': {
        'age': 29,
        'birthName':'Sheyaa Bin Abraham Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName':'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName':'unknown',
        'birthLocation': 'unknown'
    }
}

const PORT = 8000
//instead of click it is network request that fires the attached callback
app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

//:name is query parameter
app.get('/api/:name', (request, response)=>{
    const rapperName = request.params.name.toLowerCase()
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now runnig on ${PORT}! Betta Go catch it!`)
})