(function() {

    const getInfo = document.querySelector('.get--info');
    const imageArea = document.querySelector('.image--area');
    const titleArea = document.querySelector('.title--area');
    const dateArea = document.querySelector('.date--area');
    const descriptionArea = document.querySelector('.description--area');
    const displayArea = document.querySelector('.display');

    async function getNASA() {
        const api_key = '1X3xD2PcOOjV1yYuY83pN03eigcvmOFWJSKYxidM';
        let url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);

        const image = document.createElement('img');
        image.src = data.url

        imageArea.appendChild(image);
        titleArea.innerHTML = data.title;
        dateArea.innerHTML = data.date;
        descriptionArea.innerHTML = data.explanation;
    }

    getInfo.addEventListener('click', function() {
        getNASA();
    })

}());