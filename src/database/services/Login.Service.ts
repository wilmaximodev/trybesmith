import UserModel from '../models/user.model';
import jwt from '../auth/jwt';

const login = async (username: string, _password: string): Promise<string> => {
  const user = await UserModel.findOne({ where: { username } });
  if (!user) {
    throw new Error('User not found');
  }
  const token = jwt.generateJwtToken({
    id: user.dataValues.id,
    username: user.dataValues.username,
  });
  
  return token;
};

export default {
  login,
};