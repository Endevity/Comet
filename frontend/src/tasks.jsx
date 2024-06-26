import { useEffect, useState } from "react";

const Tasks = ({ amount, setAmount, tap, collect, handleBoostsUI, handleEarnUI, handleProfileUI, handleDonateUI }) => {
    const [claimOne, setClaimOne] = useState(false);
    const [claimTwo, setClaimTwo] = useState(false);
    const [claimThree, setClaimThree] = useState(false);
    const [claimFour, setClaimFour] = useState(false);
    const [claimFive, setClaimFive] = useState(false);
    const [claimSix, setClaimSix] = useState(false);

    const handleClaimTask = (e) => {
        e.target.style.backgroundImage = `linear-gradient(var(--gradientcolor6), var(--gradientcolor7), var(--gradientcolor8), var(--gradientcolor9))`;
        e.target.style.color = "var(--color1)";
        e.target.borderRadius = "50px";
        e.target.textContent = "Done";
    };
    
    useEffect(() => {
        if (collect.current >= 5 && !claimOne) {
            const taskOneElement = document.querySelector(".task-one");

            taskOneElement.style.backgroundImage = "linear-gradient(var(--color3), var(--color4))";
            taskOneElement.style.color = "var(--color1)";
            taskOneElement.style.borderRadius = "50px";
            taskOneElement.textContent = "Claim";

            setClaimOne(true);
        };
    }, []);

    const handleTaskOne = (e) => {
        if(claimOne){
            handleClaimTask(e);
            setAmount(a => a + 50000);
            collect.current += 50000;
            setClaimOne(false);
        };
    };

    useEffect(() => {
        if (collect.current >= 5 && !claimTwo) {
            const taskTwoElement = document.querySelector(".task-two");

            taskTwoElement.style.backgroundImage = "linear-gradient(var(--color3), var(--color4))";
            taskTwoElement.style.color = "var(--color1)";
            taskTwoElement.style.borderRadius = "50px";
            taskTwoElement.textContent = "Claim";

            setClaimTwo(true);
        };
    }, []);

    const handleTaskTwo = (e) => {
        if(claimTwo){
            handleClaimTask(e);
            setAmount(a => a + 40000);
            collect.current += 40000;
            setClaimTwo(false);
        };
    };

    useEffect(() => {
        if (collect.current >= 5 && !claimThree) {
            const taskThreeElement = document.querySelector(".task-three");

            taskThreeElement.style.backgroundImage = "linear-gradient(var(--color3), var(--color4))";
            taskThreeElement.style.color = "var(--color1)";
            taskThreeElement.style.borderRadius = "50px";
            taskThreeElement.textContent = "Claim";

            setClaimThree(true);
        };
    }, []);

    const handleTaskThree = (e) => {
        if(claimThree){
            handleClaimTask(e);
            setAmount(a => a + 125000);
            collect.current += 125000;
            setClaimThree(false);
        };
    };

    useEffect(() => {
        if (collect.current >= 5 && !claimFour) {
            const taskFourElement = document.querySelector(".task-four");

            taskFourElement.style.backgroundImage = "linear-gradient(var(--color3), var(--color4))";
            taskFourElement.style.color = "var(--color1)";
            taskFourElement.style.borderRadius = "50px";
            taskFourElement.textContent = "Claim";

            setClaimFour(true);
        };
    }, []);

    const handleTaskFour = (e) => {
        if(claimFour){
            handleClaimTask(e);
            setAmount(a => a + 800000);
            collect.current += 800000;
            setClaimFour(false);
        };
    };

    useEffect(() => {
        if (collect.current >= 500000 && !claimFive) {
            const taskFiveElement = document.querySelector(".task-five");

            taskFiveElement.style.backgroundImage = "linear-gradient(var(--color3), var(--color4))";
            taskFiveElement.style.color = "var(--color1)";
            taskFiveElement.style.borderRadius = "50px";
            taskFiveElement.textContent = "Claim";

            setClaimFive(true);
        };
    }, []);

    const handleTaskFive = (e) => {
        if(claimFive){
            handleClaimTask(e);
            setAmount(a => a + 300000);
            collect.current += 300000;
            setClaimFive(false);
        };
    };

    useEffect(() => {
        if (tap.current >= 1000 && !claimSix) {
            const taskSixElement = document.querySelector(".task-six");

            taskSixElement.style.backgroundImage = "linear-gradient(var(--color3), var(--color4))";
            taskSixElement.style.color = "var(--color1)";
            taskSixElement.style.borderRadius = "50px";
            taskSixElement.textContent = "Claim";

            setClaimSix(true);
        };
    }, []);

    const handleTaskSix = (e) => {
        if(claimSix){
            handleClaimTask(e);
            setAmount(a => a + 750000);
            collect.current += 750000;
            setClaimSix(false);
        };
    };

    return (
        <div className="mobile">
            <div className="amount-display">
                <img src="../src/assets/images/Token-Small.png" alt="Token" className="small-token" />
                <div className="amount-text">{amount}</div>
            </div>
            <div className="tasks-div">
                <p className="tasks-headline">Tasks</p>
                <hr />
                <div className="task-container">
                    <div className="task">
                        <img src="../src/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Join telegram</p>
                        <img src="../src/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">50000</p>
                        <div className="task-button">
                            <div className="task-one" onClick={(e) => handleTaskOne(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="../src/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Follow X</p>
                        <img src="../src/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">40000</p>
                        <div className="task-button">
                            <div className="task-two" onClick={(e) => handleTaskTwo(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="../src/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Connect Wallet</p>
                        <img src="../src/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">125000</p>
                        <div className="task-button">
                            <div className="task-three" onClick={(e) => handleTaskThree(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="../src/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Play for 24 hours</p>
                        <img src="../src/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">800000</p>
                        <div className="task-button">
                            <div className="task-four" onClick={(e) => handleTaskFour(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="../src/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Collect 500000 Coins</p>
                        <img src="../src/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">300000</p>
                        <div className="task-button">
                            <div className="task-five" onClick={(e) => handleTaskFive(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="../src/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Tap 1000 times</p>
                        <img src="../src/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">750000</p>
                        <div className="task-button">
                            <div className="task-six" onClick={(e) => handleTaskSix(e)}>Go</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons-grid">
                <div className="button inactive">
                    <img src="../src/assets/images/Boost.svg" alt="Boost" onClick={handleBoostsUI} />
                    <p>Boosts</p>
                </div>
                <div className="button active">
                    <img src="../src/assets/images/Tasks.svg" alt="Tasks" />
                    <p>Tasks</p>
                </div>
                <div className="button inactive">
                    <img src="../src/assets/images/Token-Small.png" alt="Tap" onClick={handleEarnUI} />
                    <p>Earn</p>
                </div>
                <div className="button inactive">
                    <img src="../src/assets/images/Profile.svg" alt="Profile" onClick={handleProfileUI} />
                    <p>Profile</p>
                </div>
                <div className="button inactive">
                    <img src="../src/assets/images/Donate.svg" alt="Donate" onClick={handleDonateUI} />
                    <p>Donate</p>
                </div>
            </div>
            <p className="version">Currently in Alpha</p>
        </div>
    );
};

export default Tasks;
