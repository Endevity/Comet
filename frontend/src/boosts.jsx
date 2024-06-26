import { useEffect } from "react";

export let coinsPerClick = 1;

const Boosts = ({ amount, handleTasksUI, handleEarnUI, handleProfileUI, handleDonateUI }) => {
    return(
        <div className="mobile">
            <div className="amount-display">
                <img src="../src/assets/images/Token-Small.png" alt="Token" className="small-token" />
                <div className="amount-text">{amount}</div>
            </div>
            <div className="boosts-div">
                <p className="boosts-headline">Boosts</p>
                <hr />
                <div className="boost-container">
                    <div className="boost">
                        
                    </div>
                    <div className="boost">

                    </div>
                    <div className="boost">

                    </div>
                    <div className="boost">

                    </div>
                    <div className="boost">

                    </div>
                    <div className="boost">

                    </div>
                </div>   
            </div>
            <div className="buttons-grid">
                <div className="button active">
                    <img src="../src/assets/images/Boost.svg" alt="Boost"/>
                    <p>Boosts</p>
                </div>
                <div className="button inactive" onClick={handleTasksUI}>
                    <img src="../src/assets/images/Tasks.svg" alt="Tasks" />
                    <p>Tasks</p>
                </div>
                <div className="button inactive">
                    <img src="../src/assets/images/Token-Small.png" alt="Tap" onClick={handleEarnUI}/>
                    <p>Earn</p>
                </div>
                <div className="button inactive">
                    <img src="../src/assets/images/Profile.svg" alt="Profile" onClick={handleProfileUI}/>
                    <p>Profile</p>
                </div>
                <div className="button inactive">
                    <img src="../src/assets/images/Donate.svg" alt="Donate" onClick={handleDonateUI}/>
                    <p>Donate</p>
                </div>
            </div>
            <p className="version">Currently in Alpha</p>
        </div>
    );
};

export default Boosts