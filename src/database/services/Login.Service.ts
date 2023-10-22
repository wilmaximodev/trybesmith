import bcrypt from 'bcryptjs';
import UserModel from '../models/user.model';
import jwt from '../auth/jwt';

const login = async (username: string, password: string): Promise<string | undefined> => {
  const user = await UserModel.findOne({ where: { username } });
  
  if (!user || !bcrypt.compareSync(password, user.dataValues.password)) {
    return;
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