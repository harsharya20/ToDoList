var things_to_do = [
    {
        description : "annual report submission deadline",
        category : "Work",
        date : "May 17, 2021"

    },
    {
        description : "Should pay the milkman",
        category : "Personal",
        date : "May 30, 2021"
    }
]

const Thing = require('../models/things');




//Home

module.exports.home = function(req,res){

    Thing.find({}, function(err, tasks){
        if(err){
            console.log('error in fetching tasks from db');
            return;
        }
        return res.render('home',{
            title : "Home",
            things: tasks
        });
    });
     
      
}

//Add-task

module.exports.add = function(req,res){
    //things_to_do.push(req.body);

    Thing.create({

        description: req.body.description,
        category: req.body.category,
        date:req.body.date
    },function(err,newTask){

        if(err){
            console.log('error in creating a contact');
            return;
        }
         console.log('********',newTask);

         return res.redirect('back');
    });

    
}

//Delete-Task
module.exports.delete= function(req,res){

    //get id from query in the url
   
    let id =  req.query.id;

    //find the task in the db using id and delete it

    Thing.findByIdAndDelete(id,function(err){
         if(err){
             console.log('error in deleting a task from db');
             return;
         }


         return res.redirect('back');


    });


}