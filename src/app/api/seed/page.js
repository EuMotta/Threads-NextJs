import Feedback from '../../../models/Feedback';
import data from '../../../utils/data';
import db from '../../../utils/db';

const handleClick = async () => {
  await db.connect();
  await Feedback.deleteMany();
  await Feedback.insertMany(data.feedbacks);
  await db.disconnect();
};

export default handleClick;
