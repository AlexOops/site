import React, {useRef, useState} from 'react';
import {useSelector} from "react-redux";
import {formsSelector} from "../../redux/reducers/formsReducer/formsSelector";
import Modal from "../modal/Modal";
import FormsPdf from "./FormsPdf";

const Forms = () => {
    const formList = useSelector(formsSelector);
    const [modalActive, setModalActive] = useState();
    const id = useRef();

    let currentPdf = formList.filter((item) => {
        return item.id === Number(id.current)
    })

    return (
        <div className="forms-wrp">
            {
                formList.map((data) => {
                        return (
                            <div className="form" key={data.id}>
                                <div className="form__item" onClick={() => {
                                    setModalActive(true);
                                    id.current = data.id
                                }}>
                                    <img className="form__item__img"
                                         src="https://imgholder.ru/150x150/8493a8/adb9ca&text=PDF+MINI&font=kelson" alt=""/>
                                    <p className="form__item__name">{data.name}</p>
                                </div>
                                <Modal active={modalActive} setActive={setModalActive}>
                                    {
                                        currentPdf.map((item) => {
                                            return (
                                                <FormsPdf key={item.id} text={item.text}/>
                                            )
                                        })
                                    }
                                </Modal>
                            </div>
                        )
                    }
                )
            }
        </div>
    );
};

export default Forms;