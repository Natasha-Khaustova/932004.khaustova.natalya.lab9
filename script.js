const output = document.querySelector('#OutputLine');
           const calc = document.querySelector('.calc');

           calc.addEventListener('click', function(event){
            const value = event.target.innerText;
            content=document.getElementById("OutputLine").innerHTML

            if(!event.target.classList.contains('calc_btn')) return;
            
            switch(value){
                case 'C':
                    output.innerText = '0';
                    break;
                case '=':
                    output.innerText = eval(output.innerText);
                    break;
                case '<-':
                    output.innerText=content.substring(0, content.length - 1);
                    if(output.innerText === '') output.innerText = '0';
                    break;
                default:
                    output.innerText+=value;

            }

           });
