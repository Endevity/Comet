import { useEffect, useRef, useState } from "react";
import Amount from "./amount";
import Button from "./button";
import Task from "./task";
import Version from "./version";

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
                        reward="50000"
                        buttonClass="task-one"
                        onButtonClick={(e) => handleTaskOne(e)}
                    />
                    <Task 
                        description="Follow X"
                        reward="40000"
                        buttonClass="task-two"
                        onButtonClick={(e) => handleTaskTwo(e)}
                    />
                    <Task 
                        description="Connect Wallet"
                        reward="125000"
                        buttonClass="task-three"
                        onButtonClick={(e) => handleTaskThree(e)}
                    />
                    <Task 
                        description="Play for 24 hours"
                        reward="800000"
                        buttonClass="task-four"
                        onButtonClick={(e) => handleTaskFour(e)}
                    />
                    <Task 
                        description="Collect 500000 Coins"
                        reward="300000"
                        buttonClass="task-five"
                        onButtonClick={(e) => handleTaskFive(e)}
                    />
                    <Task 
                        description="Tap 1000 times"
                        reward="750000"
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
            <Version />
        </div>
    );
};

export default Tasks;
