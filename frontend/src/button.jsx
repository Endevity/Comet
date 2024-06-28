const Button = ({handleChange, name, altName, imgSrc, buttonClass}) => {
    return(
        <div className={buttonClass}>
            <img src={imgSrc} alt={altName} onClick={handleChange} />
            <p>{name}</p>
        </div>
    );
};

export default Button