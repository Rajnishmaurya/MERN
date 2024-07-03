db.inventory.find()   // fetch all documents
db.inventory.find({qty:90})


db.inventory.find({tags:{$in:["red","D"]}})


// AND operator

db.inventory.find({status:"A",qty:{&lt:100}})    //&lt : specifies less than 100


// OR operator

db.inventory.find({$or:[{status:"A"},{qty:{$lt:30}}]})


db.inventory.findOne({status:{$in:["A","D"]}})

