class Test
{
   

    constructor()
    {
        this.mainElement = document.querySelector('#main');
        this.data = Object.entries(data);
        
        document.querySelector('.start').addEventListener('click', this.start.bind(this));
    }

    start()
    {
        this.data.forEach(q => {
            window['q'+q[0]] = e => {
                this.mainElement.innerHTML = '';

                let layoyt = `<h1> Это вопрос №${q[0]}</h1>`;
                layoyt += `<h2>${q[1].text}</h2>`;
                
                if (+q[0] == this.data.length)
                {
                    let endButton = document.createElement('button');
                    endButton.textContent = 'Конецц';
                    endButton.addEventListener('click', this.end.bind(this));
                    
                    this.mainElement.innerHTML = layoyt;
                    
                    this.mainElement.appendChild(endButton);
                }
                else
                {
                    layoyt += `<button onclick="window['q${+q[0] + 1}']()"> Следующий вопрос </button>`;
                    
                    this.mainElement.innerHTML = layoyt;
                }
            };
        })

        window[`q${Object.entries(data)[0][0]}`]();
    }


    end()
    {
        this.mainElement.innerHTML = '';
        let layoyt = `<h1> Ваш результат: </h1>`;
        this.mainElement.innerHTML = layoyt;
    }
}

let psychoTest = new Test();