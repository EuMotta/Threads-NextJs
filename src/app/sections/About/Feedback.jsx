'use client';

import React, { useEffect, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { staggerContainer } from '../../../utils/motion';

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
  };
  return (
    <section id="feedback" className="paddings relative z-10 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-screen-xl mx-auto"
      >
        <ul className="grid overflow-scroll card_1 shadow-md shadow-slate-600 p-5 h-96 rounded-xl lg:grid-cols-3 w-full md:grid-cols-2 sm:grid-cols-1 sm:gap-y-5 md:gap-y-5 gap-x-5 ">
          {feedbacks.map((feedback) => (
            <ul
              key={feedback._id}
              className=" p-5 card_2 rounded-xl shadow-lg "
            >
              <li>
                <div className="flex justify-center">
                  <div className="grid gap-y-3">
                    <div className="flex justify-center text-4xl">
                      <FaUserCircle />
                    </div>
                    <div className="text-md text-center">
                      <span className="text-[8px] text-red-400">
                        {feedback.test}
                      </span>
                      <h2>{feedback.name}</h2>
                    </div>
                  </div>
                </div>
                <div className="text-center border px-1 pt-1 text-sm border-slate-700 rounded-md overflow-scroll h-24">
                  <p className="font-mono">{feedback.comment}</p>
                </div>
                <div className="flex items-center pt-2">
                  <p><Fdbs rating={feedback.rating} />{' '}</p>
                  <p className="  font-mono">
                    {feedback.rating}
                  </p>
                </div>
              </li>
            </ul>
          ))}
        </ul>
        <div className="grid mt-5 grid-cols-2">
          <form
            className="card_1 p-5 rounded-lg"
            onSubmit={handleSubmit}
          >
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
                maxLength="500"
              />
              <div className="text-gray-400 text-xs">
                <p>{500 - comment.length} caracteres restantes</p>
              </div>
            </div>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Feedback;
