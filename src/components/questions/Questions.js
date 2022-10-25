import React from 'react';
import Question from "./Question";

const Questions = () => {
    return (
        <div className="questions">
            <h1 className="questions__title">Часто задаваемы вопросы</h1>

            <Question question={"Do you help with relocation?"}
                      answer={"Do you sometimes have the feeling that you’re running into the same obstacles over and over again? Many of my conflicts have the same feel to them, like Hey, I think Ive been here before, but I can t figure out how I wound up in the same place."}
            />
            <Question question={"Do you have an internship program?"}
                      answer={"Do you sometimes have the feeling that you’re running into the same obstacles over and over again?"}
            />
            <Question question={"What are your working hours?"}
                      answer={"Do you sometimes have the feeling that you’re running into the same obstacles over and over again?"}
            />
        </div>
    );
};

export default Questions;