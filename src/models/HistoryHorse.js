import mongoose from 'mongoose';

const horseHistoryShema = new mongoose.Schema(
  {
    horse1: {
      name: { type: String, required: true },
      delay: { type: Number, required: true },
      mediaDelay: { type: Number, required: true },
      efficiency: { type: Number, required: true },
      mediaEfficiency: { type: Number, required: true },
    },
    horse2: {
      name: { type: String, required: true },
      delay: { type: Number, required: true },
      mediaDelay: { type: Number, required: true },
      efficiency: { type: Number, required: true },
      mediaEfficiency: { type: Number, required: true },
    },
    race: {
      raceNumber: { type: String, required: true },
      raceResult: { type: String, required: true },
    },
  },
  {
    timestamps: true,
  },
);

const HistoryHorse = mongoose.models.HistoryHorse || mongoose.model('HistoryHorse', horseHistoryShema);

export default HistoryHorse;
