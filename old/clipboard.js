  // HTML



  /*
    <p><button id="btnCopy">seamus</button></p>
    <pre>
        THIS CAN BE ANYTHING
    </pre>
  */
  
  
  
  
  document.addEventListener('DOMContentLoaded', () => {
        ['cut', 'copy', 'paste'].forEach(function(event) {
            document.addEventListener(event, function(ev) {
                console.log(event);
                if(ev.type == 'paste') {
                    console.log(ev.clipboardData.getData('text'));
                }
            });
        });
        let pre = document.querySelector('pre');
        pre.addEventListener('copy', (ev) => {
            ev.preventDefualt();
            ev.stopPropagation();
            console.log(ev.target);
            console.log('COPIED\n', pre.textContent);
        });
    });

    document.getElementById('btnCopy').addEventListener('click', (ev) => {
        let pre = document.querySelector('pre');
        let text = pre.textContent;
        const input = document.createElement('input');
        document.body.appendChild(input);
        input.value = text;
        input.focus = focus();
        input.select = select();
        const result = document.execCommand('copy');
        if (result === 'unsuccessful') {
            console.error('Failed to copy text.');
        }
    });