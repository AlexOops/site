import React from 'react';
import Protocols from "../components/protocols/Protocols";
import {store} from "../redux/reducers/configureStore";
import {Provider} from "react-redux";

const ProtocolsPage = () => {
    return (
        <Provider store={store}>
            <Protocols/>
        </Provider>
    );
};

export default ProtocolsPage;