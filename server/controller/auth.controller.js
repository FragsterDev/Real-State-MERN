import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

const userSignup = async (req,res) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const user = new User({username, email, password: hashedPassword});

    try {

        await user.save();
        res.status(201).json("Successfully registered !");

    } catch(error) {

        res.status(501).json(error.message);
        
    }
}

export default userSignup;