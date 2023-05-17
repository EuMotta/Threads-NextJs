import Feedback from '../../models/Feedback';
import Horse from '../../models/Horse';
import data from '../../utils/data';
import db from '../../utils/db';

const handleClick = async (req, res) => {
  await db.connect();
  await Feedback.deleteMany();
  await Horse.deleteMany();
  await Feedback.insertMany(data.feedbacks);
  await Horse.insertMany(data.horse);
  await db.disconnect();

  res.send({ message: 'Maníaco da Seed!' });
};

export default handleClick;
