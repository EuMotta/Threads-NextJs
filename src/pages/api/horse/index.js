import Horse from '../../../models/Horse';
import db from '../../../utils/db';

// Criando um novo cavalo
const postHandler = async (req, res) => {
  await db.connect();
  const newHorse = new Horse({
    name: 'Mario',
    number: 1,
    delay: 1,
    mediaDelay: 2,
    efficiency: 3,
    mediaEfficiency: 4,
  });
  const horses = await newHorse.save();
  await db.disconnect();
  res.send({ message: 'Cavalo adicionado com sucesso!', horses });
};

const getHandler = async (req, res) => {
  await db.connect();
  const horses = await Horse.find({});
  await db.disconnect();
  res.send(horses);
};

const handler = async (req, res) => {
  if (req.method === 'GET') {
    return getHandler(req, res);
  } if (req.method === 'POST') {
    return postHandler(req, res);
  }
  return res.status(400).send({ message: 'Deu merda!' });
};

export default handler;
