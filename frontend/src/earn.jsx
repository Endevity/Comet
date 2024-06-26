const Earn = ({ amount, handleTapEvent, handleTasksUI, handleBoostsUI, handleProfileUI, handleDonateUI }) => {  
    return (
        <div className="mobile">
            <div className="amount-display">
                <img src="../src/assets/images/Token-Small.png" alt="Token" className="small-token" />
                <div className="amount-text">{amount}</div>
            </div>
            <img src="../src/assets/images/Token-Big.png" alt="Coin" className="earn" onClick={handleTapEvent} />
            <div className="buttons-grid">
                <div className="button inactive">
                    <img src="../src/assets/images/Boost.svg" alt="Boost" onClick={handleBoostsUI}/>
                    <p>Boosts</p>
                </div>
                <div className="button inactive" onClick={handleTasksUI}>
                    <img src="../src/assets/images/Tasks.svg" alt="Tasks" />
                    <p>Tasks</p>
                </div>
                <div className="button active">
                    <img src="../src/assets/images/Token-Small.png" alt="Tap" />
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

export default Earn
