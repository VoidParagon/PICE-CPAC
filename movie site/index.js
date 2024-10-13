const express = require('express');
const cors = require('cors')
const fs = require('fs');

const movies = JSON.parse(fs.readFileSync('./movies.json'));
console.log(movies)



const PORT = 3000;
const app = express();
app.use(cors({
    origin:'http://127.0.0.1:5500',
    origin:'http://localhost:5500'
}));
app.use(express.json());



app.get('/movies', (req,res) => {
    res.status(200).send({
        MyMovies:movies
    })
});


app.post('/movies',(req,res)=>{
    console.log(req.body);
    const newMovie = Object.assign(req.body);
    movies.push(newMovie);

    fs.writeFile('./movies.json', JSON.stringify(movies), (err) => {
        res.status(201).json({
            status: "success",
            data: {
                movie: newMovie
            }
        })

    })

})


app.post('/movies/new',(req,res)=>{
    console.log(req);
    console.log(req.body);
    res.status(200).send("Post Success");
})




app.listen(
    PORT,
    () => console.log(`it's alive on http:localhost:${PORT}`)
)


