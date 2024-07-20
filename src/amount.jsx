const Amount = ({ amount }) => {
    return(
        <div className="amount-display">
            <img src="/assets/images/Token-Small.png" alt="Token" className="small-token" />
            <div className="amount-text">{amount}</div>
        </div>
    );
};

export default Amount