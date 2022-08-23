import React, { useState } from "react";
import "./Reviewe.css";
import { FaAngleRight, FaAngleLeft, FaQuoteRight } from "react-icons/fa";
import persons from "../data";
const Reviwe = () => {
  const [index, setIndex] = useState(0);
  const person = persons[index];
  const checkNumber = (number) => {
    if (number > persons.length - 1) {
      return 0;
    }
    if (number < 0) {
      return persons.length - 1;
    }
    return number;
  };
  const prevIndexHandler = () => {
    setIndex((prevState) => {
      let number = prevState - 1;
      return checkNumber(number);
    });
  };
  const nextIndexHandler = () => {
    setIndex((prevState) => {
      let number = prevState + 1;

      return checkNumber(number);
    });
  };
  const randomIndexHandler = () => {
    let randomIndex = Math.trunc(Math.random() * 4);
    setIndex((prevIndex) => {
      if (prevIndex === randomIndex) {
        return checkNumber(randomIndex + 1);
      }
      return randomIndex;
    });
  };
  return (
    <section className="container">
      <article className="review">
        <div className="img-container">
          <img src={person.image} className="person-img" alt={person.name} />
          <FaQuoteRight className="quote-icon" />
        </div>
        <h3 className="author">{person.name}</h3>
        <h4 className="job">{person.job}</h4>
        <p className="info">{person.text}</p>
        <div className="btns">
          <button onClick={prevIndexHandler} className="prev-btn">
            <FaAngleLeft />
          </button>
          <button onClick={nextIndexHandler} className="next-btn">
            <FaAngleRight />
          </button>
        </div>
        <button onClick={randomIndexHandler} className="random-btn">
          surprise me
        </button>
      </article>
    </section>
  );
};

export default Reviwe;
