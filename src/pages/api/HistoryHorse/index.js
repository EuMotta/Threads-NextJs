import HistoryHorse from '../../../models/HistoryHorse';
import db from '../../../utils/db';

// Criando um novo cavalo
const postHandler = async (req, res) => {
  await db.connect();
  const newHorse = new HistoryHorse({
    horse1: {
      name: 'aaa',
      delay: 1,
      mediaDelay: 2,
      efficiency: 3,
      mediaEfficiency: 4,
    },
    horse2: {
      name: 'aaa2',
      delay: 2,
      mediaDelay: 3,
      efficiency: 4,
      mediaEfficiency: 6,
    },
    race: {
      raceNumber: 1,
      raceResult: 'Mario',
    },
  });
  const historyHorses = await newHorse.save();
  await db.disconnect();
  res.send({ message: 'Corrida adicionada com sucesso!', historyHorses });
};

const getHandler = async (req, res) => {
  await db.connect();
  const historyHorses = await HistoryHorse.find({});
  await db.disconnect();
  res.send(historyHorses);
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
