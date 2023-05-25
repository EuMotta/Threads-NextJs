'use client';

import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '../../../utils/motion';
import feedbackImage from '../../../images/About/Feedback.svg';

const Fdbs = (props) => {
  const { rating } = props;
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;
  return (
    <div className="flex">
      {Array.from({ length: filledStars }).map((_, index) => (
        <AiFillStar key={`filled-${index}`} />
      ))}
      {rating % 1 !== 0 && <AiOutlineStar key="half" />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <AiOutlineStar key={`empty-${index}`} />
      ))}
    </div>
  );
};
function ImpedirArrastar(event) {
  event.preventDefault();
}
const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState('1');

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch('/api/feedback');
      const data = await result.json();
      setFeedbacks(data);
    };
    fetchData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/feedback/${e}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, rating, comment }),
    });
    const result = await response.json();
    console.log(result);
    window.location.reload();
  };
  return (
    <section id="feedback" className="paddings relative z-10 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="container mx-auto"
      >
        <ul className=" overflow-scroll card_1 shadow-md shadow-slate-600 p-5 h-[50rem] rounded-xl">
          {feedbacks.map((feedback) => (
            <ul
              key={feedback._id}
              className="rounded-xl shadow-lg my-4"
            >
              <li>
                <div className="border rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 border-gray-300 p-4 my-4">
                  <div className="text-center text-sm p-2 rounded-md">
                    <p className="!text-xl text-white font-semibold">
                      {feedback.comment}
                    </p>
                  </div>
                  <div className="flex justify-between items-center text-end">
                    <span className="text-sm  text-red-400">{feedback.test}</span>
                    <div className="flex items-center pt-2 justify-center space-x-2">
                      <p className="text-white">
                        <Fdbs rating={feedback.rating} />{' '}
                      </p>
                      <p className="font-mono text-white">{feedback.rating}</p>
                    </div>
                    <div>
                      <h2 className="!text-2xl font-semibold text-white ">
                        {feedback.name}
                      </h2>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </ul>
        <div className="grid mt-5 gap-5 grid-cols-2">
          <form className="card_1 p-5 rounded-lg" onSubmit={handleSubmit}>
            <div className="mb-5 grid grid-cols-2 gap-x-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  <p>Nome:</p>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="rating"
                  className="block text-gray-400 text-sm font-bold mb-2"
                >
                  <p>Classificação:</p>
                </label>
                <select
                  className="shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="rating"
                  name="rating"
                  required
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="comment"
                className="block text-gray-400 text-sm font-bold mb-2"
              >
                <p>Comentário:</p>
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="comment"
                name="comment"
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                maxLength="100"
              />
              <div className="text-gray-400 text-xs">
                <p>{100 - comment.length} caracteres restantes</p>
              </div>
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </form>
          <div className="text-center">
            <h2>Faça seu comentário</h2>
            <h3 className="text-3xl">
              <Typewriter
                options={{
                  strings: [
                    'Deixe seu comentário sobre o projeto',
                    'Agradeço desde já!!',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <motion.div
              variants={fadeIn('up', 'tween', 0, 1)}
              drag
              dragConstraints={{
                top: -0.2,
                left: -0.2,
                right: 0.2,
                bottom: 0.2,
              }}
              className="flex justify-center items-center"
            >
              <Image
                src={feedbackImage}
                width={300}
                height={300}
                onDragStart={ImpedirArrastar}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Feedback;
