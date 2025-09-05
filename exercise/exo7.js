const calculateArea = (radius) => {
    if (radius === undefined) {
    throw new Error("Radis is missing !");
    }
    return Math.PI * radius * radius;
};