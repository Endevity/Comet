import Amount from "./amount"
import Button from "./button"

const Earn = ({ amount, handleTapEvent, handleTasksUI, handleBoostsUI, handleProfileUI, handleDonateUI }) => {  
    return (
        <div className="mobile">
            <Amount 
                amount={amount}
            />
            <img src="/assets/images/Token-Big.png" alt="Coin" className="earn" onClick={handleTapEvent} />
            <div className="buttons-grid">
            <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Boost.svg"
                    alt="Boost"
                    handleChange={handleBoostsUI}
                    name="Boosts"
                />
                <Button 
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Tasks.svg"
                    alt="Tasks"
                    handleChange={handleTasksUI}
                    name="Tasks"
                />
                <Button 
                    buttonClass="button active"
                    imgSrc="/assets/images/Token-Small.png"
                    alt="Tap"
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

export default Earn
