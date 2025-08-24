import comparePassword from '../../lib/comparePassword.js';
import generateToken from '../../lib/generateToken.js';
import prisma from '../../lib/prisma.js';

const SigninController = async (request, response, next) => {
  try {
    const {email, password} = request.body;

    const user = await prisma.user.findUnique({where: {email}});
    if (!user) {
      return response.status(401).json({message: 'Invalid email or password'});
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return response.status(401).json({message: 'Invalid email or password'});
    }

    const token = generateToken(user.id);
    response.status(200).json({
      code: 200,
      success: true,
      message: 'User signed in successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        token: token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default SigninController;
