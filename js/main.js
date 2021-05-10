class Test
{
   

    constructor()
    {
        this.nick;
        this.value = 0;

        this.mainElement = document.querySelector('#main');
        this.data = Object.entries(data);
        
        document.querySelector('.start').addEventListener('click', this.prestart.bind(this));
    }

    prestart()
    {

        let temp = '';

        this.mainElement.innerHTML = '';

        temp = document.createElement('h1');
        temp.textContent = 'Представьтесь!';
        this.mainElement.append(temp);

        temp = document.createElement('h1');
        temp.textContent = 'Можно использовать псевдоним, для анонимности.';
        this.mainElement.append(temp);

        temp = document.createElement('input');
        temp.type = 'text';
        temp.classList.add('nick');
        temp.placeholder = 'Можно использовать псевдоним, для анонимности.';
        this.mainElement.append(temp);

        temp = document.createElement('button');
        temp.textContent = 'Продолжить';
        temp.addEventListener('click', () => {
            if (document.querySelector('.nick').value != '')
            {
                this.nick = document.querySelector('.nick').value;
                this.start();
            }
            else
            {
                document.querySelector('.nick').placeholder = 'Введите хоть что нибудь.'
            }
        });
        this.mainElement.append(temp);
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
                temp.style.marginTop = '40px';
                temp.textContent = `Это ${q[0]} вопрос из ${this.data.length}`;
                this.mainElement.append(temp);
            };
        })

        window[`q${Object.entries(data)[0][0]}`]();
    }


    end()
    {
        this.mainElement.innerHTML = '';
        
        let layoyt = `<p> Пссс, вы ${this.nick}? </p>`;
        
        layoyt += `<h1> Вы набрали ${this.value} балла </h1>`;

        if (this.value >= 0 && this.value <= 9)
            layoyt += `<p> у вас от 0 до 9 баллов </p> <h2> у Вас отсутствуют депрессивные симптомы </h2>
                            <p class='addictional' style='margin-top: 35px'> если бы у вас было от 10 до 15 баллов - легкая депрессия (субдепрессия) </p>
                            <p class='addictional'> если бы у вас было от 16 до 19 баллов - умеренная депрессия </p>
                            <p class='addictional'> если бы у вас было от 20 до 29 баллов  - выраженная депрессия (средней тяжести) </p>
                            <p class='addictional'> если бы у вас было от 30 до 63 баллов  - тяжелая депрессия </p>`;
            
        
        if (this.value >= 10 && this.value <= 15)
            layoyt += `<p> у вас от от 10 до 15 баллов </p> <h2> у Вас легкая депрессия (субдепрессия) </h2>
                            <p class='addictional' style='margin-top: 35px'> если бы у вас было от  0 до 9 баллов - отсутствуют депрессивные симптомы </p>
                            <p class='addictional'> если бы у вас было от 16 до 19 баллов - умеренная депрессия </p>
                            <p class='addictional'> если бы у вас было от 20 до 29 баллов  - выраженная депрессия (средней тяжести) </p>
                            <p class='addictional'> если бы у вас было от 30 до 63 баллов  - тяжелая депрессия </p>`;

        if (this.value >= 16 && this.value <= 19)
            layoyt += `<p> у вас от 16 до 19 баллов </p> <h2> у Вас умеренная депрессия </h2>
                            < class='addictional' style='margin-top: 35px'> если бы у вас было от 0 до 9 баллов - отсутствуют депрессивные симптомы </p>
                            <p class='addictional'> если бы у вас было от 10 до 15 баллов - легкая депрессия (субдепрессия) </p>
                            <p class='addictional'> если бы у вас было от 20 до 29 баллов  - выраженная депрессия (средней тяжести) </p>
                            <p class='addictional'> если бы у вас было от 30 до 63 баллов  - тяжелая депрессия </p>`;

        if (this.value >= 20 && this.value <= 29)
        layoyt += `<p> у вас от 20 до 29 баллов </p> <h2> у Вас выраженная депрессия (средней тяжести) </h2>
                            <p class='addictional' style='margin-top: 35px'> если бы у вас было от  0 до 9 баллов  - отсутствуют депрессивные симптомы </p>
                            <p class='addictional'> если бы у вас было от 10 до 15 баллов - легкая депрессия (субдепрессия) </p>
                            <p class='addictional'> если бы у вас было от 16 до 19 баллов - умеренная депрессия </p>
                            <p class='addictional'> если бы у вас было от 30 до 63 баллов  - тяжелая депрессия </p>`;

        if (this.value >= 30 && this.value <= 63)
        layoyt += `<p> у вас от 30 до 63 баллов </p> <h2> у Вас тяжелая депрессия </h2>
                            <p class='addictional' style='margin-top: 35px'> если бы у вас было от  0 до 9 баллов  - отсутствуют депрессивные симптомы </p>
                            <p class='addictional'> если бы у вас было от 10 до 15 баллов - легкая депрессия (субдепрессия) </p>
                            <p class='addictional'> если бы у вас было от 16 до 19 баллов - умеренная депрессия </p>
                            <p class='addictional'> если бы у вас было от 20 до 29 баллов  - выраженная депрессия (средней тяжести) </p>`;
                            
        this.mainElement.innerHTML = layoyt;

        let date = new Date();

        let data = new FormData();
        data.append('name', this.nick)
        data.append('value', this.value);
        data.append('date', `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`);

        fetch(`./../php/updateResults.php`, {
            method: 'POST',
            body: data
        })
        .then(response => response.text())
        .then(result => {  });

    }
}

let psychoTest = new Test();