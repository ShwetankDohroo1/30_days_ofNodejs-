const figlet = require('figlet')

figlet('Hello World!',function(err,data){
    if(err){
        console.error('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});