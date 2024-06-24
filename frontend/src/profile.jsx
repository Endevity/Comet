import { TonConnectButton } from "@tonconnect/ui-react";

const Profile = ({ amount, handleBoostsUI, handleTasksUI, handleEarnUI, handleDonateUI }) => {
    return(
        <div className="mobile">
            <div className="amount-display">
                <img src="Token-Small.png" alt="Token" className="small-token" />
                <div className="amount-text">{amount}</div>
            </div>
            <div className="profile-div">
                <p className="profile-headline">Profile</p>
                <hr />
                <div className="profile-container">
                    <div className="profile-info">
                        <img src="/Avatar.jpg" alt="Avatar" />
                        <div className="profile-info-grid">
                            <p>Username:<span> @RaiRaijin</span></p>
                            <p>Playtime: 00D 00H 00M</p>
                            <p>Alpha Tester: No / Yes</p>
                            <p>Donator: No / Yes</p>
                        </div>
                    </div>
                    <hr />
                    <div className="achievement-grid">
                        <div className="achievement-item">
                            <p>Tap 1000 times</p>
                            <img src="/Avatar.jpg" alt="achievement" />
                        </div>
                        <div className="achievement-item">
                            <p>Collect 500000 coins</p>
                            <img src="/Avatar.jpg" alt="achievement" />
                        </div>
                        <div className="achievement-item">
                            <p>Play for 24 hours</p>
                            <img src="/Avatar.jpg" alt="achievement" />
                        </div>
                    </div>
                    <img src="/more.png" alt="page" className="dots"/>
                    <TonConnectButton className="connect" style={{ margin: "0 auto" }}/>
                </div>   
            </div>
            <div className="buttons-grid">
                <div className="button inactive">
                    <img src="/Boost.svg" alt="Boost" onClick={handleBoostsUI}/>
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
                <div className="button active">
                    <img src="/Profile.svg" alt="Profile"/>
                    <p>Profile</p>
                </div>
                <div className="button inactive">
                    <img src="/Donate.svg" alt="Donate" onClick={handleDonateUI}/>
                    <p>Donate</p>
                </div>
            </div>
            <p className="version">Currently in Alpha</p>
        </div>
    );
};

export default Profile