import Feedback from '../../models/Feedback';
import data from '../../utils/data';
import db from '../../utils/db';

const handleClick = async (req, res) => {
  await db.connect();
  await Feedback.deleteMany();
  await Feedback.insertMany(data.feedbacks);
  await db.disconnect();
  res.send({ message: 'Maníaco da Seed!' });
};

export default handleClick;
