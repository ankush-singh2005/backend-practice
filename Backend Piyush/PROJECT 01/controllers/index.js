const User = require("../models/user.js")

const handleGetUserList =  async (req,res) => {
    const allDbUsers= await User.find({});
    const html = `
        <ul> ${allDbUsers.map(user => `<li>${user.firstName} - ${user.email}</li>`).join('')} </ul>
    `
    res.send(html);
};

async function handleGetAllUsers(req,res) {
    const allDbUsers= await User.find({})
    //always add X to custom headers
    // res.setHeader("X-myName","Ankush Singh");
    // console.log(req.headers);
    return res.json(allDbUsers);
}


const  handleGetUserById = async (req,res) => {
    //here we are getting the data of a specific user with a specific id

    //doing it by mongodb
    const user = await User.findById(req.params.id);

    // const id=Number(req.params.id);
    // const user = users.find((user) => user.id === id);


    return res.json(user);
}

const handleUpdateUserById = async (req,res) => {
    await User.findByIdAndUpdate(req.params.id, {lastName: "Changed"}); 
    return res.json({message:"success"})
}

const handleDeleteUserById = async (req,res) => {
    await User.findByIdAndDelete(req.params.id);


    // const item=Number(req.params.id);
    // const userIndex = users.findIndex((user) => user.id===item);
    // users.splice(userIndex,1);
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
    //     if(err) return res.json({status:"error"});
    //     return res.json({status:"success"});   
    // })
}

const handleCreateNewUser =  async (req,res) => {
    //TODO: create a new user
    const body = req.body;
    //Inserting data in the mongodb server
    if(
        !body || !body.firstName || !body.email || !body.lastName || !body.jobTitle || !body.gender
    ){
        return res.status(400).json({msg:"All fields are required"});
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        jobTitle: body.jobTitle,
        gender: body.gender
    })

    return res.status(201).json({status:"success"});


    //this is for normal json file manipulation
    // users.push({...body, id: users.length + 1});
    // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data  ) => {

    //     return res.status(201).json({status:"success", id: users.length});
    // })
}

module.exports = {
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
    handleGetUserList
}