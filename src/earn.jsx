import Amount from "./amount"
import Button from "./button"

const Earn = ({ amount, handleTapEvent, handleTasksUI, handleBoostsUI, handleProfileUI, handleShopUI }) => {  
    return (
        <div className="mobile">
            <Amount 
                amount={amount}
            />
            <img src="/assets/images/Star.png" alt="Coin" className="earn" onClick={handleTapEvent}/>
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
                    imgSrc="/assets/images/Star.png"
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
                    imgSrc="/assets/images/Shop.svg"
                    alt="Shop"
                    handleChange={handleShopUI}
                    name="Shop"
                />
            </div>
        </div>
    );
};

export default Earn
