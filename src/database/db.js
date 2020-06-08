const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./src/database/database.db');
/*

db.serialize(() => {

    db.run(`
       CREATE TABLE IF NOT EXISTS places (
           id INTEGER PRIMARY KEY AUTOINCREMENT,
           name TEXT,
           image TEXT,
           address TEXT,
           address2 TEXT,
           state TEXT,
           city TEXT,
           items TEXT



       );
    `)/*
    const query = `
    INSERT INTO places (
      name,  
      image,
      address,
      address2,
      state,
      city,
      items
      
    ) VALUES (?,?,?,?,?,?,?);
  `

   const values=[
       "Recicla",
       "https://uploads.metropoles.com/wp-content/uploads/2019/06/01211246/1821.jpg",
       "Rua XV de Novembro",
       "255",
       "Santa Catarina",
       "Orleans",
       "Lampadas e Baterias"
   ]
   function afterInsertData(err){
    if(err){
        return console.log(err)
    }
    console.log('cadastrado com sucesso');
    console.log(this)
    

   }
    
   db.run(query, values, afterInsertData);

db.all(`SELECT * FROM places`, function(err,rows){
    if(err){
        return console.log(err)
    }
    console.log("registros: " , rows)
})

db.run(`DELETE FROM places WHERE id= ?`, [4], function(err){
    if(err){
        return console.log(err)
    }
    console.log('registro deletado')
});
   

});*/

module.exports=db