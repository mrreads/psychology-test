class Test
{
   

    constructor()
    {
        this.value = 0;

        this.mainElement = document.querySelector('#main');
        this.data = Object.entries(data);
        
        document.querySelector('.start').addEventListener('click', this.start.bind(this));
    }

    start()
    {
        this.data.forEach(q => {
            window['q'+q[0]] = e => {
                this.mainElement.innerHTML = '';

                let temp;

                temp = document.createElement('h1');
                temp.textContent = 'Вопрос номер ' + q[0];
                this.mainElement.append(temp);
                
                q[1].forEach(b => {
                    
                    temp = document.createElement('button');
                    temp.textContent = b.name;
                    temp.addEventListener('click', e => {
                        this.value = Number.parseInt(b.value) + this.value;

                        if (+q[0] == this.data.length)
                            this.end();
                        else
                            window[`q${+q[0] + 1}`]();
                    });
                    this.mainElement.append(temp);

                });
                
                temp = document.createElement('p');
                temp.textContent = `Это ${q[0]} вопрос из ${this.data.length}`;
                this.mainElement.append(temp);
            };
        })

        window[`q${Object.entries(data)[0][0]}`]();
    }


    end()
    {
        this.mainElement.innerHTML = '';
        let layoyt = `<h1> Ваш результат: ${this.value}</h1>`;
        this.mainElement.innerHTML = layoyt;
    }
}

let psychoTest = new Test();