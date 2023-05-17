import mongoose from 'mongoose';

const horseShema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    horseNumber: { type: Number, required: true },
    delay: { type: Number, required: true },
    mediaDelay: { type: Number, required: true },
    efficiency: { type: Number, required: true },
    mediaEfficiency: { type: Number, required: false },
  },
  {
    timestamps: true,
  },
);

const Horse = mongoose.models.Horse || mongoose.model('Horse', horseShema);

export default Horse;
