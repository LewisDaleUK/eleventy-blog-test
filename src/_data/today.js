const today = new Date();

module.exports = {
    year: today.getFullYear(),
    month: today.getMonth(),
    day: today.getDate() + 1,
}