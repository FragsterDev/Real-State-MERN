import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

const signup = async (req,res) => {

    const { username, email, password} = req.body;

    const salt = 10;

    const hashedPassword = bcryptjs.hashSync(password, salt);

    const user = new User({username, email, password: hashedPassword});

    try {

        await user.save();
        res.status(200).send('Successfully Created new user !');

    } catch(error) {

        res.status(500).send(`Error occurred : ${error}`);
    }

}

export default signup;