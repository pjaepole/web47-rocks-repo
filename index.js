const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000 

app.get('/', (req, res)=>{
    res.send(`
    <h1>Web 47 rocks! following guided project vid</h1>
    `)
})

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})








function cohortRocks(){
    console.log('arguments:', process.argv.slice(2))
    console.log(`web ${process.argv[2]} rocks`)
    // console.log(process.argv)
}
function cohortRocksEnv(){
    console.log(`home folder is ${process.env.HOME}`)
    console.log(`my shell is "${process.env.SHELL}`)
    console.log(`In my environment FOO is "${process.env.FOO}"`)
    console.log(`My super secret comes from "${process.env.SUPER_SECRET}"`)
}
cohortRocksEnv()