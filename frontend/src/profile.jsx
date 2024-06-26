import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { BsThreeDots } from "react-icons/bs";
import { TonConnectButton } from "@tonconnect/ui-react";
        
const achievementSets = [
    [
      { text: 'Log in 7 days in a row', imgSrc: '../src/assets/images/Avatar.jpg' },
      { text: 'Tap 1000 times', imgSrc: '../src/assets/images/Avatar.jpg' },
      { text: 'Collect 500000 coins', imgSrc: '../src/assets/images/Avatar.jpg' },
    ],
    [
      { text: 'Be an Alpha Tester', imgSrc: '../src/assets/images/Avatar.jpg' },
      { text: 'Collect 10 Million Coins', imgSrc: '../src/assets/images/Avatar.jpg' },
      { text: 'Play for 24 hours', imgSrc: '../src/assets/images/Avatar.jpg' },
    ],
  ];

const Profile = ({ amount, handleBoostsUI, handleTasksUI, handleEarnUI, handleDonateUI }) => {
    const [currentSet, setCurrentSet] = useState(0);

    const handleSwipeLeft = () => {
        setCurrentSet((prevSet) => (prevSet + 1) % achievementSets.length);
    };

    const handleSwipeRight = () => {
        setCurrentSet((prevSet) => (prevSet - 1 + achievementSets.length) % achievementSets.length);
    };

    const handlers = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    const earnAchievement = () => {

    };

    return(
        <div className="mobile">
            <div className="amount-display">
                <img src="../src/assets/images/Token-Small.png" alt="Token" className="small-token" />
                <div className="amount-text">{amount}</div>
            </div>
            <div className="profile-div">
                <p className="profile-headline">Profile</p>
                <hr />
                <div className="profile-container">
                    <div className="profile-info">
                        <img src="../src/assets/images/Avatar.jpg" alt="Avatar" />
                        <div className="profile-info-grid">
                            <p>Username:<span> @RaiRaijin</span></p>
                            <p>Playtime: 00D 00H 00M</p>
                            <p>Alpha Tester: No / Yes</p>
                            <p>Donator:<span className="beta"> Coming in Beta</span></p>
                        </div>
                    </div>
                    <hr />
                    <div className="achievement-container" {...handlers}>
                        <div className="achievement-grid">
                        {achievementSets[currentSet].map((item, index) => (
                            <div key={index} className="achievement-item">
                                <p>{item.text}</p>
                                <img src={item.imgSrc} alt="achievement" />
                            </div>
                            ))}
                        </div>
                    </div>
                    <BsThreeDots className="dots"/>
                    <TonConnectButton className="connect" style={{ margin: "0 auto" }}/>
                </div>   
            </div>
            <div className="buttons-grid">
                <div className="button inactive">
                    <img src="../src/assets/images/Boost.svg" alt="Boost" onClick={handleBoostsUI}/>
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
                <div className="button active">
                    <img src="../src/assets/images/Profile.svg" alt="Profile"/>
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

export default Profile