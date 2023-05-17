import mongoose from 'mongoose';

const horseHistoryShema = new mongoose.Schema(
  {
    nameHorse1: { type: String, required: true },
    nameHorse2: { type: String, required: true },
    delayHorse1: { type: Number, required: true },
    delayHorse2: { type: Number, required: true },
    mediaDelayHorse1: { type: Number, required: true },
    mediaDelayHorse2: { type: Number, required: true },
    efficiencyHorse1: { type: Number, required: true },
    efficiencyHorse2: { type: Number, required: true },
    mediaEfficiencyHorse1: { type: Number, required: false },
    mediaEfficiencyHorse2: { type: Number, required: false },
  },
  {
    timestamps: true,
  },
);

const HistoryHorse = mongoose.models.HistoryHorse || mongoose.model('Horse', horseHistoryShema);

export default HistoryHorse;
