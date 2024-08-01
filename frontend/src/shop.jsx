import Amount from "./amount";
import Button from "./button";

const Shop = ({ amount, handleBoostsUI, handleTasksUI, handleEarnUI, handleProfileUI}) => {
    return(
            <div className="mobile">
                <Amount 
                    amount={amount}
                />
                <div className="shop-div">
                    <p className="shop-headline">Shop</p>
                    <hr />
                    <div className="shop-container">
                        <p>Coming in Beta</p>
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
                    imgSrc="/assets/images/Comet.svg"
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
                    imgSrc="/assets/images/Shop.svg"
                    alt="Shop"
                    name="Shop"
                />
                </div>
            </div>
        );
    };
        
export default Shop
