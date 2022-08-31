const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const books =[
    {
        bookName:'Ashtang Yoga',
        author:'Dr. Sonu Phogat',
        year: 2022
    },
    {
        bookName:'At Home In The Universe',
        author:'Bala Krishna Madhur',
        year: 2021
    },
]

app.get('/',(req,res)=>{
    res.send(`
    <h1>Welcome to my library</h1>
    <p>API contains endpoints
     <ul>
       <li>api/books</li>
     </ul>
    </p>
    `)
})
app.get('/api/book',(req,res)=>{
    res.json(books)
})
app.listen(port, ()=> console.log('server Listening at ' +port))