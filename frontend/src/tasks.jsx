import { useEffect, useRef, useState } from "react";

const Tasks = ({ amount, setAmount, tap, collect, handleBoostsUI, handleEarnUI, handleProfileUI, handleDonateUI }) => {

    

    return (
        <div className="mobile">
            <div className="amount-display">
                <img src="/assets/images/Token-Small.png" alt="Token" className="small-token" />
                <div className="amount-text">{amount}</div>
            </div>
            <div className="tasks-div">
                <p className="tasks-headline">Tasks</p>
                <hr />
                <div className="task-container">
                    <div className="task">
                        <img src="/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Join telegram</p>
                        <img src="/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">50000</p>
                        <div className="task-button">
                            <div className="task-one" onClick={(e) => handleTaskOne(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Follow X</p>
                        <img src="/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">40000</p>
                        <div className="task-button">
                            <div className="task-two" onClick={(e) => handleTaskTwo(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Connect Wallet</p>
                        <img src="/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">125000</p>
                        <div className="task-button">
                            <div className="task-three" onClick={(e) => handleTaskThree(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Play for 24 hours</p>
                        <img src="/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">800000</p>
                        <div className="task-button">
                            <div className="task-four" onClick={(e) => handleTaskFour(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Collect 500000 Coins</p>
                        <img src="/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">300000</p>
                        <div className="task-button">
                            <div className="task-five" onClick={(e) => handleTaskFive(e)}>Go</div>
                        </div>
                    </div>
                    <div className="task">
                        <img src="/assets/images/Task.svg" alt="Task" className="task-image" />
                        <p className="task-p">Tap 1000 times</p>
                        <img src="/assets/images/Token-Small.png" alt="Token" className="task-token"/>
                        <p className="task-reward">750000</p>
                        <div className="task-button">
                            <div className="task-six" onClick={(e) => handleTaskSix(e)}>Go</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="buttons-grid">
                <div className="button inactive">
                    <img src="/assets/images/Boost.svg" alt="Boost" onClick={handleBoostsUI} />
                    <p>Boosts</p>
                </div>
                <div className="button active">
                    <img src="/assets/images/Tasks.svg" alt="Tasks" />
                    <p>Tasks</p>
                </div>
                <div className="button inactive">
                    <img src="/assets/images/Token-Small.png" alt="Tap" onClick={handleEarnUI} />
                    <p>Earn</p>
                </div>
                <div className="button inactive">
                    <img src="/assets/images/Profile.svg" alt="Profile" onClick={handleProfileUI} />
                    <p>Profile</p>
                </div>
                <div className="button inactive">
                    <img src="/assets/images/Donate.svg" alt="Donate" onClick={handleDonateUI} />
                    <p>Donate</p>
                </div>
            </div>
            <p className="version">Currently in Alpha</p>
        </div>
    );
};

export default Tasks;
