var express = require('express')
var hard = express()
var data = require('./public/package.json')
hard.get('/employees', (reg, res) => {
    if(!data) {
        res.status(404).send("Could not find information")
    }
    res.send(data)
})

hard.get('/employees/:id', (reg, res) => {
    const findT = data.employees.find(function(employees){
        return parseInt(reg.params.id) === employees.id
    })

    if(!findT) {
        res.status(404).send("Could not find information")
    }
    res.send(findT)
})

hard.listen(4000)
