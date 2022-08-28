// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', '', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

const mongodbConnect=(callback)=>{
  const mongodb=require('mongodb');
  const MongoDbClient=mongodb.MongoClient;
  MongoDbClient.connect('mongodb://127.0.0.1:27017').then(result=>{console.log('connected')
callback(result);
}).catch(err=>{console.log(err)});
  
}
module.exports=mongodbConnect;


