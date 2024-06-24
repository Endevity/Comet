const Donate = ({amount, handleBoostsUI, handleTasksUI, handleEarnUI, handleProfileUI }) => {
    return(
            <div className="mobile">
                <div className="amount-display">
                    <img src="Token-Small.png" alt="Token" className="small-token" />
                    <div className="amount-text">{amount}</div>
                </div>
                <div className="donate-div">
                    <p className="donate-headline">Donate</p>
                    <hr />
                    <div className="donate-container">
                        <div className="donate">
                            
                        </div>
                        <div className="donate">
    
                        </div>
                        <div className="donate">
    
                        </div>
                        <div className="donate">
    
                        </div>
                        <div className="donate">
    
                        </div>
                        <div className="donate">
    
                        </div>
                    </div>   
                </div>
                <div className="buttons-grid">
                    <div className="button inactive" onClick={handleBoostsUI}>
                        <img src="/Boost.svg" alt="Boost"/>
                        <p>Boosts</p>
                    </div>
                    <div className="button inactive" onClick={handleTasksUI}>
                        <img src="/Tasks.svg" alt="Tasks" />
                        <p>Tasks</p>
                    </div>
                    <div className="button inactive">
                        <img src="/Token-Small.png" alt="Tap" onClick={handleEarnUI}/>
                        <p>Earn</p>
                    </div>
                    <div className="button inactive">
                        <img src="/Profile.svg" alt="Profile" onClick={handleProfileUI}/>
                        <p>Profile</p>
                    </div>
                    <div className="button active">
                        <img src="/Donate.svg" alt="Donate"/>
                        <p>Donate</p>
                    </div>
                </div>
                <p className="version">Currently in Alpha</p>
            </div>
        );
    };
        
export default Donate
