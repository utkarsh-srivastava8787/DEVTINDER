const mongoose = require('mongoose');

const dbConnect = async() =>{

   await mongoose.connect(
    'mongodb+srv://utkarshsrivastava8787_db_user:5eD2YcdfWkEV54cK@devtinder.amlgqxk.mongodb.net/'
    
  );

}
module.exports=dbConnect;