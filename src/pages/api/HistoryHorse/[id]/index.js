import HistoryHorse from '../../../../models/HistoryHorse';
import db from '../../../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  const historyHorses = new HistoryHorse({
    horse1: {
      name: req.body.horse1.name,
      delay: req.body.horse1.delay,
      mediaDelay: req.body.horse1.mediaDelay,
      efficiency: req.body.horse1.efficiency,
      mediaEfficiency: req.body.horse1.mediaEfficiency,
    },
    horse2: {
      name: req.body.horse2.name,
      delay: req.body.horse2.delay,
      mediaDelay: req.body.horse2.mediaDelay,
      efficiency: req.body.horse2.efficiency,
      mediaEfficiency: req.body.horse2.mediaEfficiency,
    },
    race: {
      raceNumber: req.body.race.raceNumber,
      raceResult: req.body.race.raceResult,
    },
  });
  const savedHistoryHorse = await historyHorses.save();
  await db.disconnect();

  res.send(savedHistoryHorse);
};

export default handler;
