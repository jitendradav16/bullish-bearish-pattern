export const validateRequest = (list: Array<number>, totalDays = 1) => {
    if (list.length >= totalDays && list.every(num => typeof num == 'number')) {
        return true;
    }

    return false;
}