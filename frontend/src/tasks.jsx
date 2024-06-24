import { useState } from "react";

const Tasks = ({ amount, setAmount, handleBoostsUI, handleEarnUI, handleProfileUI, handleDonateUI }) => {

    const [doneTaskOne, setDoneTaskOne] = useState(false);
    const [claimedTaskOne, setClaimedTaskOne] = useState(false);
    const [doneTaskTwo, setDoneTaskTwo] = useState(false);
    const [claimedTaskTwo, setClaimedTaskTwo] = useState(false);
    const [doneTaskThree, setDoneTaskThree] = useState(false);
    const [claimedTaskThree, setClaimedTaskThree] = useState(false);
    const [doneTaskFour, setDoneTaskFour] = useState(false);
    const [claimedTaskFour, setClaimedTaskFour] = useState(false);
    const [doneTaskFive, setDoneTaskFive] = useState(false);
    const [claimedTaskFive, setClaimedTaskFive] = useState(false);
    const [doneTaskSix, setDoneTaskSix] = useState(false);
    const [claimedTaskSix, setClaimedTaskSix] = useState(false);

    const handleClaimTask = (e) => {
        e.target.style.backgroundImage = `linear-gradient(var(--color3), var(--color4))`;
        e.target.style.color = "var(--color1)";
        e.target.style.borderRadius = "50px";
        e.target.textContent = "Claim";
    };

    const handleDoneTask = (e) => {
        e.target.style.backgroundImage = `linear-gradient(var(--gradientcolor6), var(--gradientcolor7), var(--gradientcolor8), var(--gradientcolor9))`;
        e.target.style.color = "var(--color1)";
        e.target.style.borderRadius = "50px";
        e.target.textContent = "Done";
    };

    const handleTaskOne = (e) => {
        if (!doneTaskOne) {
            window.open("https://www.google.com", "_blank");
            handleClaimTask(e);
            setDoneTaskOne(true);
        } else if (!claimedTaskOne) {
            setAmount(a => a + 50000);
            setClaimedTaskOne(true);
            handleDoneTask(e);
        }
    };

    const handleTaskTwo = (e) => {
        if (!doneTaskTwo) {
            window.open("https://www.google.com", "_blank");
            handleClaimTask(e);
            setDoneTaskTwo(true);
        } else if (!claimedTaskTwo) {
            setAmount(a => a + 40000);
            setClaimedTaskTwo(true);
            handleDoneTask(e);
        }
    };

    const handleTaskThree = (e) => {
        if (!doneTaskThree) {
            window.open("https://www.google.com", "_blank");
            handleClaimTask(e);
            setDoneTaskThree(true);
        } else if (!claimedTaskThree) {
            setAmount(a => a + 125000);
            setClaimedTaskThree(true);
            handleDoneTask(e);
        }
    };

    const handleTaskFour = (e) => {
        if (!doneTaskFour) {
            window.open("https://www.google.com", "_blank");
            handleClaimTask(e);
            setDoneTaskFour(true);
        } else if (!claimedTaskFour) {
            setAmount(a => a + 800000);
            setClaimedTaskFour(true);
            handleDoneTask(e);
        }
    };

    const handleTaskFive = (e) => {
        if (!doneTaskFive) {
            window.open("https://www.google.com", "_blank");
            handleClaimTask(e);
            setDoneTaskFive(true);
        } else if (!claimedTaskFive) {
            setAmount(a => a + 300000);
            setClaimedTaskFive(true);
            handleDoneTask(e);
        }
    };

    const handleTaskSix = (e) => {
        if (!doneTaskSix) {
            window.open("https://www.google.com", "_blank");
            handleClaimTask(e);
            setDoneTaskSix(true);
        } else if (!claimedTaskSix) {
            setAmount(a => a + 55000);
            setClaimedTaskSix(true);
            handleDoneTask(e);
        }
    };

    return (
        <div className="mobile">
            <div className="amount-display">
                <img src="Token-Small.png" alt="Token" className="small-token" />
                <div className="amount-text">{amount}</div>
            </div>
            <div className="tasks-div">
                <p className="tasks-headline">Tasks</p>
                <hr />
                <div className="task-container">
                    <div className="task">
                        <img src="/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Join telegram</p>
                        <img src="/Token-Small.png" alt="Token" className="task-token" />
                        <p className="task-reward">50000</p>
                        <div className="task-button">
                            <div onClick={handleTaskOne}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Follow X</p>
                        <img src="/Token-Small.png" alt="Token" className="task-token" />
                        <p className="task-reward">40000</p>
                        <div className="task-button">
                            <div onClick={handleTaskTwo}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Connect Wallet</p>
                        <img src="/Token-Small.png" alt="Token" className="task-token" />
                        <p className="task-reward">125000</p>
                        <div className="task-button">
                            <div onClick={handleTaskThree}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Play for 24 hours</p>
                        <img src="/Token-Small.png" alt="Token" className="task-token" />
                        <p className="task-reward">800000</p>
                        <div className="task-button">
                            <div onClick={handleTaskFour}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Collect 500000 Coins</p>
                        <img src="/Token-Small.png" alt="Token" className="task-token" />
                        <p className="task-reward">300000</p>
                        <div className="task-button">
                            <div onClick={handleTaskFive}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Tap 1000 times</p>
                        <img src="/Token-Small.png" alt="Token" className="task-token" />
                        <p className="task-reward">55000</p>
                        <div className="task-button">
                            <div onClick={handleTaskSix}>Go</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons-grid">
                <div className="button inactive">
                    <img src="/Boost.svg" alt="Boost" onClick={handleBoostsUI} />
                    <p>Boosts</p>
                </div>
                <div className="button active">
                    <img src="/Tasks.svg" alt="Tasks" />
                    <p>Tasks</p>
                </div>
                <div className="button inactive">
                    <img src="/Token-Small.png" alt="Tap" onClick={handleEarnUI} />
                    <p>Earn</p>
                </div>
                <div className="button inactive">
                    <img src="/Profile.svg" alt="Profile" onClick={handleProfileUI} />
                    <p>Profile</p>
                </div>
                <div className="button inactive">
                    <img src="/Donate.svg" alt="Donate" onClick={handleDonateUI} />
                    <p>Donate</p>
                </div>
            </div>
            <p className="version">Currently in Alpha</p>
        </div>
    );
};

export default Tasks;
