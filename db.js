const {Sequelize}=require('sequelize');

const sequelize=new Sequelize('orm_demo','root','ishraque123@',{
    host:'localhost',
    dialect:'mysql'
});

const connectDB=async()=>{
    try{
await sequelize.authenticate();
console.log('Connection has been established successfully');
    }
    catch(error){
        console.error('Unable to connect to the databse:',error);
    }
}
module.exports={connectDB,sequelize};