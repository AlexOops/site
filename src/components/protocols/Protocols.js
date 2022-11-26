import React from 'react';
import {useParams} from "react-router-dom";
import ResponsivePlayer from "../video/ResponsivePlayer";
import {useSelector} from "react-redux";
import {protocolsSelector} from "../../redux/reducers/protocolsReducer/protocolsSelector";
import ProtocolsNavigate from "./ProtocolsNavigate";

const Protocols = () => {
    const protocolList = useSelector(protocolsSelector);

    const {id} = useParams();

    let protocol = protocolList.filter((item) => {
        if (!id) return true
        return item.id === Number(id)
    })

    return (
        <div className="protocols">
            <div className="protocols__content">
                <h1 className="protocols__title">Протоколы</h1>
                <ProtocolsNavigate protocol={protocolList}/>
            </div>

            {
                protocol.map((item) => {
                        return (
                            <div className="protocols__video" key={item.id}>
                                <ResponsivePlayer className={"player-protocol"} url={`${item.video}`}/>
                                <div className="description">
                                    <h1 className="description__title">{item.title}</h1>
                                    <p className="description__subtitle">{item.subtitle}</p>
                                    <div className="description__text">
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                )}
        </div>
    );
};

export default Protocols;