'use client';

import { useEffect, useState } from 'react';

const ShowData = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [horse, setHorse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resultFeedback = await fetch('/api/feedback');
      const resultHorse = await fetch('/api/horse');
      const dataFeedback = await resultFeedback.json();
      const dataHorse = await resultHorse.json();
      setFeedbacks(dataFeedback);
      setHorse(dataHorse);
    };
    fetchData();
  }, []);
  console.log('=======  CAVALOS =======');
  const commentsJson = JSON.stringify(
    horse.map((horses) => ({
      _id: horses._id,
      test: horses.test,
      name: horses.name,
      comment: horses.comment,
      rating: horses.rating,
    })),
    null,
    2,
  );
  console.log(commentsJson);
  console.log('\n\n=======  FEEDBACKS =======');
  const commentsJson2 = JSON.stringify(
    feedbacks.map((feedback) => ({
      _id: feedback._id,
      test: feedback.test,
      name: feedback.name,
      comment: feedback.comment,
      rating: feedback.rating,
    })),
    null,
    2,
  );
  console.log(commentsJson2);
};
export default ShowData;
