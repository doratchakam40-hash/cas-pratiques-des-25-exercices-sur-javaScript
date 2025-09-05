const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfuly !");
        }, 2000);
    });
}