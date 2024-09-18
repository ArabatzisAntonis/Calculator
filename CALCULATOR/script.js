    'use strict';
    
    function showonScreen(value) {
            let screen = document.getElementById('ScreenTxtfld');
             
            if (screen.value === '0') {
                screen.value = value;
            } else {
                screen.value += value;
            }
        }

        function clearScreen() {
            document.getElementById('ScreenTxtfld').value = '0';
        }
        //exei errors
        function addPercent() {
            let screen = document.getElementById('ScreenTxtfld');
            let value = screen.value;
        
            
            if (/\d$/.test(value)) {
                
                let lastNumberMatch = value.match(/(\d+(\.\d+)?)(?=[^\d]*$)/);
        
                if (lastNumberMatch) {
                    let lastNumber = lastNumberMatch[0];
        
                    
                    let precedingNumberMatch = value.match(/(\d+(\.\d+)?)(?=[^\d]*\d+(\.\d+)?[^\d]*$)/);
        
                    if (precedingNumberMatch) {
                        let precedingNumber = precedingNumberMatch[0];
        
                        
                        let newValue = value.replace(/(\d+(\.\d+)?)(?=[^\d]*$)/, `(${lastNumber} * 0.01 * ${precedingNumber})`);
                        
                        
                        newValue = value.replace(/(\d+(\.\d+)?)(?=[^\d]*$)/, `((${lastNumber} * 0.01 * ${precedingNumber}))`);
        
                        screen.value = newValue;
                    }
                }
            }
        }
    function Calculator() {
    let screen = document.getElementById('ScreenTxtfld');
      try {
          screen.value = eval(screen.value) || '0';
          screen.value = parseFloat(screen.value).toFixed(3);
      }  catch (e) {
          screen.value = 'Error';
      }
}