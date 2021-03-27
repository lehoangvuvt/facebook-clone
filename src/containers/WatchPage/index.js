import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Home from './Home/index';
import LeftPanel from './LeftPanel';
import Shows from './Shows/index';
import Modal from './Shows/Modal';


import './style.scss';

const WatchPage = () => {
    const [currentSection, setCurrentSection] = useState("home");
    const history = useHistory();

    useEffect(() => {
        const path = history.location.pathname;
        if (path.split("/").length > 2) {
            switch (path.split("/")[2]) {
                case "shows":
                    setCurrentSection("shows");
                    break;
                case "music":
                    setCurrentSection("music");
                    break;
                case "saved":
                    setCurrentSection("saved");
                    break;
            }
        } else {
            setCurrentSection("home");
        }
    }, [history.location.pathname])

    return (
        <div className="watch-page">
            <LeftPanel />
            {currentSection === "home" ?
                <Home />
                :
                currentSection === "shows" ?
                    <Shows />
                    :
                    currentSection === "music" ?
                        null
                        :
                        currentSection === "saved" ?
                            null
                            :
                            null
            }
        </div>
    )
}

export default WatchPage;
