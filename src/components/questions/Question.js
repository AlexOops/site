import React, {useState} from 'react';

const Question = ({question, answer}) => {
    const [state, setState] = useState(false);

    return (
        <div className="questions__wrp">
            <div className="question" onClick={() => setState(!state)}>
                <p className="question__text">{question}</p> {!state ?
                <span className="question__switcher">+</span> :
                <span className="question__switcher">-</span>}
            </div>
            {
                state ?
                    <div className="answer">
                        <p className="answer__text">{answer}</p>
                    </div>
                    :
                    null
            }
        </div>
    );
};

export default Question;