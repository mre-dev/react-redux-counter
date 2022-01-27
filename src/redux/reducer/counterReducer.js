const counterReducer = (counter = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return counter + 1;
        case 'DECREMENT':
            return counter - 1;
        case "RESET":
            return (counter = 0);
        default:
            return counter;
    }
};

export default counterReducer;