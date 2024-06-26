const Donate = ({ amount, handleBoostsUI, handleTasksUI, handleEarnUI, handleProfileUI }) => {
    return(
            <div className="mobile">
                <div className="amount-display">
                    <img src="../src/assets/images/Token-Small.png" alt="Token" className="small-token" />
                    <div className="amount-text">{amount}</div>
                </div>
                <div className="donate-div">
                    <p className="donate-headline">Donate</p>
                    <hr />
                    <div className="donate-container">
                        <p>Coming in Beta</p>
                        <p>Donating will give 3X boost to tap</p>
                        <p>90% of all donations will go directly to liquidity and 10% will go to development team</p>
                    </div>   
                </div>
                <div className="buttons-grid">
                    <div className="button inactive" onClick={handleBoostsUI}>
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
                    <div className="button active">
                        <img src="../src/assets/images/Donate.svg" alt="Donate"/>
                        <p>Donate</p>
                    </div>
                </div>
                <p className="version">Currently in Alpha</p>
            </div>
        );
    };
        
export default Donate
