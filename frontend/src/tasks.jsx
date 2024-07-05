import { useEffect, useRef, useState } from "react";
import Amount from "./amount";
import Button from "./button";
import Task from "./task";

const Tasks = ({ amount, setAmount, tap, collect, handleBoostsUI, handleEarnUI, handleProfileUI, handleDonateUI }) => {

    

    return (
        <div className="mobile">
            <Amount 
                amount={amount}
            />
            <div className="tasks-div">
                <p className="tasks-headline">Tasks</p>
                <hr />
                <div className="task-container">
                    <Task 
                        description="Join Telegram"
                        reward="50 000"
                        buttonClass="task-one"
                        onButtonClick={(e) => handleTaskOne(e)}
                    />
                    <Task 
                        description="Follow X"
                        reward="40 000"
                        buttonClass="task-two"
                        onButtonClick={(e) => handleTaskTwo(e)}
                    />
                    <Task 
                        description="Connect Wallet"
                        reward="125 000"
                        buttonClass="task-three"
                        onButtonClick={(e) => handleTaskThree(e)}
                    />
                    <Task 
                        description="Play for 24 hours"
                        reward="800 000"
                        buttonClass="task-four"
                        onButtonClick={(e) => handleTaskFour(e)}
                    />
                    <Task 
                        description="Collect 500 000 Coins"
                        reward="300 000"
                        buttonClass="task-five"
                        onButtonClick={(e) => handleTaskFive(e)}
                    />
                    <Task 
                        description="Tap 1 000 times"
                        reward="750 000"
                        buttonClass="task-six"
                        onButtonClick={(e) => handleTaskSix(e)}
                    />
                </div>
            </div>
            <div className="buttons-grid">
                <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Boost.svg"
                    alt="Boost"
                    handleChange={handleBoostsUI}
                    name="Boosts"
                />
                <Button 
                    buttonClass="button active"
                    imgSrc="/assets/images/Tasks.svg"
                    alt="Tasks"
                    name="Tasks"
                />
                <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Token-Small.png"
                    alt="Tap"
                    handleChange={handleEarnUI}
                    name="Earn"
                />
                <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Profile.svg"
                    alt="Profile"
                    handleChange={handleProfileUI}
                    name="Profile"
                />
                <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Donate.svg"
                    alt="Donate"
                    handleChange={handleDonateUI}
                    name="Donate"
                />
            </div>
        </div>
    );
};

export default Tasks;
