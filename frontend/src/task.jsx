const Task = ({ description, reward, buttonClass, onButtonClick }) => {
    return (
        <div className="task">
            <img src="/assets/images/Task.svg" alt="Task" className="task-image" />
            <div className="task-text">
                <p className="task-p">{description}</p>
                <p className="task-reward">{reward}</p>
            </div>
            <div className="task-button">
                <div className={buttonClass} onClick={onButtonClick}>Go</div>
            </div>
        </div>
    );
};

export default Task