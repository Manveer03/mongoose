const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp')

.then(()=>{
    console.log("CONNECTION OPEN!!!")
})
.catch(err =>{
    console.log("HO NO ERROR!!!!")
    console.log(err)
})

const movieSchema = new mongoose.Schema({
    title: String,
    year:Number,
    score:Number,
    rating:String
})

const Movie = mongoose.model('Movie',movieSchema);
const amadeus = new Movie({title:'Amadeus',year:1969,score:9.3,rating:'R' });