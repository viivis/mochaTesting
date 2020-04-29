const mongoose = require("mongoose");
//ES6 promises
mongoose.Promise = global.Promise;

//connect to the database before tests run
before(function(done){
    //connect to mongodb
    mongoose.connect('mongodb://localhost/testaroo', { useNewUrlParser: true, useUnifiedTopology: true });

    mongoose.connection.once('open',function(){
        console.log("Connection made");
        done();

    }).on('error',function(error){
        console.log("Connection error", error);
    
    });

});
//drop the characters collection before each test
beforeEach(function(done){
    //drop the collection 
    mongoose.connection.collections.mariochars.drop(function(){
        done();
    });
})
