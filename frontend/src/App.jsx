import { useState } from "react";
import { isMobile } from "react-device-detect";
import Earn from "./earn.jsx";
import Tasks from "./tasks.jsx";
import Boosts from "./boosts.jsx";
import Profile from "./profile.jsx";
import Donate from "./donate.jsx";
import PC from "./pc.jsx";

const App = () => {

    if(!isMobile){

        const [amount, setAmount] = useState(0);
        const [showTasks, setShowTasks] = useState(false);
        const [buyBoosts, setBuyBoosts] = useState(false);
        const [earnCoins, setEarnCoins] = useState(false);
        const [showProfile, setShowProfile] = useState(false);
        const [showDonate, setShowDonate] = useState(false);
        const [coinsPerClick, setCoinsPerClick] = useState(1);
        
        const resetStates = () => {
            setShowTasks(false);
            setBuyBoosts(false);
            setEarnCoins(false);
            setShowProfile(false);
            setShowDonate(false);
        };

        const handleCoinClick = () => {
            setAmount(a => a + coinsPerClick);
        };
    
        const handleTasksUI = () => {
            resetStates();
            setShowTasks(!false);
        };
    
        const handleBoostsUI = () => {
            resetStates();
            setBuyBoosts(!false);
        };

        const handleEarnUI = () => {
            resetStates();
            setEarnCoins(!false);
        };

        const handleProfileUI = () => {
            resetStates();
            setShowProfile(!false);
        };

        const handleDonateUI = () => {
            resetStates();
            setShowDonate(!false);
        }

        const formatAmount = (amount) => {
            if (amount >= 1000000) {
                return (amount / 1000000).toFixed(3) + " M";
            }

            return amount.toString();
        };

        if(showTasks){
            return(
                <Tasks 
                amount={formatAmount(amount)} 
                setAmount={setAmount} 
                handleBoostsUI={handleBoostsUI} 
                handleEarnUI={handleEarnUI} 
                handleProfileUI={handleProfileUI} 
                handleDonateUI={handleDonateUI}/>
            );
        } else if(buyBoosts){
            return(
                <Boosts 
                amount={formatAmount(amount)} 
                handleTasksUI={handleTasksUI} 
                handleEarnUI={handleEarnUI} 
                handleProfileUI={handleProfileUI} 
                handleDonateUI={handleDonateUI}/>
            );
        } else if(showProfile){
            return(
                <Profile 
                amount={formatAmount(amount)} 
                handleBoostsUI={handleBoostsUI} 
                handleTasksUI={handleTasksUI} 
                handleEarnUI={handleEarnUI} 
                handleDonateUI={handleDonateUI}/>
            );
        } else if(showDonate){
            return(
                <Donate 
                amount={formatAmount(amount)} 
                handleBoostsUI={handleBoostsUI} 
                handleTasksUI={handleTasksUI} 
                handleEarnUI={handleEarnUI} 
                handleProfileUI={handleProfileUI}/>
            );
        } else {
            return(
                <Earn 
                amount={formatAmount(amount)} 
                handleCoinClick={handleCoinClick} 
                handleTasksUI={handleTasksUI} 
                handleBoostsUI={handleBoostsUI} 
                handleProfileUI={handleProfileUI} 
                handleDonateUI={handleDonateUI}/>
            );
        };
    };

    return(
        <PC />
    );
};

export default App