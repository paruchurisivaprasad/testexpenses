const User =  require('./util/path');
const addExpense = async (req,res,next) => {
    try {
  
      const expense = req.body.expense;
    const description = req.body.description;
    const category = req.body.category;
  
    const data =  await User.create({ expense:expense , description:description,  category:category});
    
  res.json({result:data});
  }
  catch(err){
    console.log(err);
    res.json({err:err})
  }
}

 const getExpense = async (req,res,next) => {
  
    try {
      const expense = await User.findAll();
    res.status(200).json({allUsers: expense});
    } catch(error) {
      console.log('Get user is failing',JSON.stringify(err));
      res.status(500).json({error: error})
    }
  } 

const deleteExpense =  async (req,res,next) => {
  console.log(req.params.id);
    try {
      if(!req.params.id){
        console.log('ID is missing');
        res.status(400).json({err:'ID is missing'})
      }
      const uId = req.params.id;
    await User.destroy({where: {id:uId}});
    res.json({result:"deleted"})
    } catch(err) {
      res.status(500).json(err)
    }
  }  

module.exports = {
    addExpense,
    getExpense,
    deleteExpense
}