import React from 'react';
import ResponsivePlayer from "../video/ResponsivePlayer";

const Information = () => {
    return (
        <div className="information">
            <div className="information__use">
                <div className="information-content">
                    <h3 className="information-title">Как его использовать ?</h3>
                    <p className="information-text">Выбрать раздел: "Протокол".
                        Выполнять действия по порядку 1-10. На экране приложения будет сокращенная версия заявлений и
                        ходатайств, для удобства написания от руки. В разделе: "Бланки " можно скачать их и распечатать,
                        если не уверены, что в машине будет ручка и несколько тетрадных листов. Рекомендуем, печатать их по
                        два бланка на А4 листе (каждый в А5).</p>
                </div>
                <ResponsivePlayer className={"player-info"} url="https://www.youtube.com/embed/D4MdHQOILdw"/>
            </div>
            <div className="information__cancel">
                <div className="information-content">
                    <h3 className="information-title">Как это поможет отменить штраф ?</h3>
                    <p className="information-text">Каждое ходатайство и заявление от АНТИПРОТОКОЛ - процессуальный
                        документ. Несоблюдение процедуры - это нарушение Ваших прав и неустранимые недостатки в оформлении
                        протокола. Жалоба в суд в комплекте!</p>
                </div>
                <ResponsivePlayer className={"player-info"} url="https://www.youtube.com/embed/D4MdHQOILdw"/>
            </div>
        </div>
    );
};

export default Information;