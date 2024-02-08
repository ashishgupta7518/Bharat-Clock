let CurrentTime = () => {
    let time = new Date();

    return (
        <p className="lead para-bold">
            This is the current time: {time.toLocaleDateString()} -{" "}
            {time.toLocaleTimeString()}
        </p>
    );
};

export default CurrentTime;
