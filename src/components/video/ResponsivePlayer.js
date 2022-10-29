import React from "react";
import ReactPlayer from "react-player";

const ResponsivePlayer = ({url, className}) => {
    return (
        <div className={className}>
            <ReactPlayer
                className="react-player"
                url={url}
                width="100%"
                height="100%"
                controls={true}
            />
        </div>
    );
};

export default ResponsivePlayer;