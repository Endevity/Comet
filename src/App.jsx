import WebApp from "@twa-dev/sdk";
import PropTypes from "prop-types"; 
import { useEffect, useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import Earn from "./earn.jsx";
import Tasks from "./tasks.jsx";
import Boosts, { coinsPerClick } from "./boosts.jsx";
import Profile from "./profile.jsx";
import Shop from "./shop.jsx";
import PC from "./pc.jsx";

const userDataPropTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
});

const App = () => {
    const [userData, setUserData] = useState(null);
    const [amount, setAmount] = useState(0);
    const [showTasks, setShowTasks] = useState(false);
    const [buyBoosts, setBuyBoosts] = useState(false);
    const [earnCoins, setEarnCoins] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [showShop, setShowShop] = useState(false);
    
    const tap = useRef(0);
    const collect = useRef(0);

    useEffect(() => {
        if (WebApp.initDataUnsafe.user) {
            setUserData(WebApp.initDataUnsafe.user);
        }
    }, []);

    if (isMobile) {
        useEffect(() => {
            document.title = "Comet | Mobile";
        }, []);

        const resetStates = () => {
            setShowTasks(false);
            setBuyBoosts(false);
            setEarnCoins(false);
            setShowProfile(false);
            setShowShop(false);
        };

        const handleCoin = () => {
            setAmount(a => a + coinsPerClick);
        };

        const handleTap = () => {
            tap.current += 1;
        };

        const handleCollect = () => {
            collect.current += coinsPerClick;
        };

        const handleTapEvent = () => {
            handleTap();
            handleCollect();
            handleCoin();
        };

        const handleTasksUI = () => {
            resetStates();
            setShowTasks(true);
        };

        const handleBoostsUI = () => {
            resetStates();
            setBuyBoosts(true);
        };

        const handleEarnUI = () => {
            resetStates();
            setEarnCoins(true);
        };

        const handleProfileUI = () => {
            resetStates();
            setShowProfile(true);
        };

        const handleShopUI = () => {
            resetStates();
            setShowShop(true);
        };

        if (showTasks) {
            return (
                <Tasks 
                    amount={amount} 
                    setAmount={setAmount}
                    tap={tap}
                    collect={collect} 
                    handleBoostsUI={handleBoostsUI}
                    handleTasksUI={handleTasksUI} 
                    handleEarnUI={handleEarnUI} 
                    handleProfileUI={handleProfileUI} 
                    handleShopUI={handleShopUI}
                />
            );
        } else if (buyBoosts) {
            return (
                <Boosts 
                    amount={amount}
                    handleBoostsUI={handleBoostsUI} 
                    handleTasksUI={handleTasksUI} 
                    handleEarnUI={handleEarnUI} 
                    handleProfileUI={handleProfileUI} 
                    handleShopUI={handleShopUI}
                />
            );
        } else if (showProfile) {
            return (
                <Profile
                    amount={amount} 
                    tap={tap}
                    collect={collect}
                    username={userDataPropTypes.username}
                    handleBoostsUI={handleBoostsUI} 
                    handleTasksUI={handleTasksUI} 
                    handleEarnUI={handleEarnUI}
                    handleProfileUI={handleProfileUI} 
                    handleShopUI={handleShopUI}
                />
            );
        } else if (showShop) {
            return (
                <Shop 
                    amount={amount} 
                    handleBoostsUI={handleBoostsUI} 
                    handleTasksUI={handleTasksUI} 
                    handleEarnUI={handleEarnUI}
                    handleProfileUI={handleProfileUI}
                    handleShopUI={handleShopUI}
                />
            );
        } else {
            return (
                <Earn 
                    amount={amount} 
                    handleTapEvent={handleTapEvent}
                    handleTasksUI={handleTasksUI} 
                    handleBoostsUI={handleBoostsUI} 
                    handleProfileUI={handleProfileUI} 
                    handleShopUI={handleShopUI}
                />
            );
        }
    }

    return <PC />;
};

App.propTypes = {
    userData: userDataPropTypes,
};

export default App;