const Task = ({ description, reward, buttonClass, onButtonClick }) => {
    return (
        <div className="task">
            <img src="/assets/images/Task.svg" alt="Task" className="task-image" />
            <p className="task-p">{description}</p>
            <p className="task-reward">{reward}</p>
            <div className="task-button">
                <div className={buttonClass} onClick={onButtonClick}>Go</div>
            </div>
        </div>
    );
};

export default Task