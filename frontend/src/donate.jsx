import Amount from "./amount";
import Button from "./button";

const Donate = ({ amount, handleBoostsUI, handleTasksUI, handleEarnUI, handleProfileUI}) => {
    return(
            <div className="mobile">
                <Amount 
                    amount={amount}
                />
                <div className="donate-div">
                    <p className="donate-headline">Donate</p>
                    <hr />
                    <div className="donate-container">
                        <p>Coming in Beta</p>
                        <p>Donating will give 3X boost to tap</p>
                        <p>90% of all donations will go directly to liquidity and 10% will go to development team</p>
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
                    buttonClass="button inactive"
                    imgSrc="/assets/images/Tasks.svg"
                    alt="Tasks"
                    handleChange={handleTasksUI}
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
                    buttonClass="button active"
                    imgSrc="/assets/images/Donate.svg"
                    alt="Donate"
                    name="Donate"
                />
                </div>
            </div>
        );
    };
        
export default Donate
