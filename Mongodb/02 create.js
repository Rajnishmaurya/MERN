db.inventory.insertOne({item:"canvas",qty:100,tags:["cotton"],size:{h:28,w:35.5,uom:"cm"}})

db.inventory.insertMany(
[{item:"canvas1",qty:100,tags:["cotton"],size:{h:28,w:35.5,uom:"cm"}},
{item:"canvas2",qty:200,tags:["cotton"],size:{h:28,w:35.5,uom:"cm"}},
{item:"canvas3",qty:300,tags:["cotton"],size:{h:28,w:35.5,uom:"cm"}},
{item:"canvas4",qty:400,tags:["cotton"],size:{h:28,w:35.5,uom:"cm"}}])