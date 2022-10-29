import React from 'react';
import {Link} from "react-router-dom";

const Forms = () => {
    return (
        <div>
            <div className="forms">
                <div className="forms__context">
                    <h1 className="forms__context__title">Бланки</h1>
                    <ul className="forms__context__list">
                        <li className="forms__context__item"><Link className="forms__context__link" to={"#"}>Все</Link></li>
                        <li className="forms__context__item"><Link className="forms__context__link" to={"#"}>Категория 1</Link></li>
                        <li className="forms__context__item"><Link className="forms__context__link" to={"#"}>Категория 2</Link></li>
                        <li className="forms__context__item"><Link className="forms__context__link" to={"#"}>Категория 3</Link></li>
                    </ul>
                </div>

                <ul className="forms__docs">
                    <li className="forms__docs__item">
                        <a href="https://imgholder.ru/600x300/f2f3f4/adb9ca&text=Big+doc&font=kelson">
                            <img src="https://imgholder.ru/220x180/f2f3f4/adb9ca&text=Document&font=kelson" alt="doc1"/>
                        </a>
                    </li>
                    <li className="forms__docs__item">
                        <a href="https://imgholder.ru/600x300/f2f3f4/adb9ca&text=Big+doc&font=kelson">
                            <img src="https://imgholder.ru/220x180/f2f3f4/adb9ca&text=Document&font=kelson" alt="doc2"/>
                        </a>
                    </li>
                    <li className="forms__docs__item">
                        <a href="https://imgholder.ru/600x300/f2f3f4/adb9ca&text=Big+doc&font=kelson">
                            <img src="https://imgholder.ru/220x180/f2f3f4/adb9ca&text=Document&font=kelson" alt="doc3"/>
                        </a>
                    </li>
                    <li className="forms__docs__item">
                        <a href="https://imgholder.ru/600x300/f2f3f4/adb9ca&text=Big+doc&font=kelson">
                            <img src="https://imgholder.ru/220x180/f2f3f4/adb9ca&text=Document&font=kelson" alt="doc4"/>
                        </a>
                    </li>
                    <li className="forms__docs__item">
                        <a href="https://imgholder.ru/600x300/f2f3f4/adb9ca&text=Big+doc&font=kelson">
                            <img src="https://imgholder.ru/220x180/f2f3f4/adb9ca&text=Document&font=kelson" alt="doc5"/>
                        </a>
                    </li>
                    <li className="forms__docs__item">
                        <a href="https://imgholder.ru/600x300/f2f3f4/adb9ca&text=Big+doc&font=kelson">
                            <img src="https://imgholder.ru/220x180/f2f3f4/adb9ca&text=Document&font=kelson" alt="doc6"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Forms;