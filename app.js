const btnEl = document.querySelector('.btn');

const clickHandler = async () => {
    try {
        const res = await fetch('https://www.freetogame.com/api/games');
        const data = await res.json();

        if(!res.ok) {
            console.log(data.description);
            return;
        }
        console.log(data.data[3].first_name);
    } catch (error) {
        console.log(error);
    }
};

btnEl.addEventListener('click', clickHandler);