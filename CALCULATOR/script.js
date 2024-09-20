    'use strict';
    
    function showonScreen(value) {
            const screen = document.getElementById('ScreenTxtfld');
             
            if (screen.value === '0') {
                screen.value = value;
            } else {
                screen.value += value;
            }
        }

        function clearScreen() {
            document.getElementById('ScreenTxtfld').value = '0';
        }
        
    
    function Calculator() {
        const screen = document.getElementById('ScreenTxtfld');
      try {
          screen.value = eval(screen.value) || '0';
          //screen.value = parseFloat(screen.value).toFixed(3);
      }  catch (e) {
          screen.value = 'Error';
      }
}