const express = require('express') 

const app = express() 

app.use(express.json()) 

let books =[
    {
        id:1,
        title:'Book 1'
    },
    {
        id:2,
        title:'Book 2'
    },
    {
        id:3,
        title:'Book 3'
    }
]

// intro route  

app.get('/',(req,res)=>{
    res.json({
        message : "Welcome to our Bookstore API",
    })
})

// get all books 

app.get('/get',(req,res)=>{
    res.json(books)
})

// get single book
app.get('/get/:id',(req,res)=>{
    const id = Number(req.params.id)
    const book = books.find(item => item.id === id)
    if(book){
        res.status(200).json(book)
    }else{
        res.status(404).json({
            message : "Book not found! Please try with a different BookID"
        })
    }
})

// add a new book 

app.post('/add',(req,res)=>{
    const newBook = {
        id : Math.floor(Math.random()*1000),
        title : `Book ${Math.floor(Math.random()*1000)}`
    }
    books.push(newBook)
    res.status(200).json({
        data : newBook ,
        message: 'New Book is added successfully'
    })
})


//update  a book 

app.put('/update/:id',(req,res)=>{
    const findCurrBook = books.find(item=>item.id === Number(req.params.id)) 
    if(findCurrBook){
        findCurrBook.title = req.body.title || findCurrBook.title

        res.status(200).json({
        message : `Book with ID ${req.params.id} updated successfully`,
        data : findCurrBook
    }) 
    }else{
        res.status(404).json({
            message : 'Book not Found'
        })
    }
    
})


// delete a Book 
app.delete('/delete/:id',(req,res)=>{
    const findIndexoFCUrrBook = books.findIndex(item => item.id === Number(req.params.id))

    if(findIndexoFCUrrBook !== -1){
        const deletedBook = books.splice(findIndexoFCUrrBook,1)
        res.status(200).json({
            message : 'Book deleted Successfuly',
            data : deletedBook[0]
        })
    }else{
        res.status(404).json({
            message :'Book Not Found'
        })
    }
})

const port = 3000 
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    
})