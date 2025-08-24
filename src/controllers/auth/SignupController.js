import hashPassword from '../../lib/hashPassword.js';
import prisma from '../../lib/prisma.js';

const SignupController = async (request, response, next) => {
  try {
    const {name, email, password} = request.body;

    const isEmailExists = await prisma.user.findUnique({where: {email}});
    if (isEmailExists) {
      return response.status(400).json({message: 'Email already exists'});
    }

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    response.status(201).json({
      code: 201,
      success: true,
      message: 'User created successfully',
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default SignupController;
