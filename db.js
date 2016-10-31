/**
 * Created by alex on 31/10/2016.
 */
var Sequelize = require('sequelize');
var env =process.env.NODE_ENV || 'developement';
/*var sequelize= new Sequelize(undefined,undefined,undefined,{
    'dialect':'sqlite',
    'storage':__dirname+'/data/dev-tddo-api.sqlite'
}); */
var sequelize;
if (env==='production'){
    sequelize=new Sequelize(process.env.DATABASE_URL,{
        'dialect':'postgres',
    });
}else {
    new Sequelize(undefined,undefined,undefined,{
        'dialect':'sqlite',
        'storage':__dirname+'/data/dev-tddo-api.sqlite'
    });
}
var db={};

db.todo= sequelize.import(__dirname+'/models/todo.js');
db.sequelize=sequelize;
db.Sequelize=Sequelize;

module.exports= db;