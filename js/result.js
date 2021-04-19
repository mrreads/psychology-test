fetch(`./../result.json`)
.then(response => response.text())
.then(result => { 
    
    let temp = '';
    let data = JSON.parse(result);
    data.forEach(res => {
        
        temp += `
        <div class="result">
            <p class="result__name"> ${ res.name } </p>
            <p class="result__value"> ${ res.value } </p>
            <p class="result__date"> ${ res.date } </p>
        </div>`
    });

    document.querySelector('.results').innerHTML = temp;

});
