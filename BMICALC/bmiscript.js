

    'use strict';

    


    function calculateBMI(height,weight){
        let result = weight / (height * height);
        if (result < 18.5){
            alert ("Underweight");
        }
        else if (result >= 18.5 && result < 24.9){
            alert ("Normal weight");
        }
        else if (result >= 25  && result < 29.9){
            alert ("Overweight");
        }
        else if (result >= 30  && result < 34.9){
            alert ("Obesity Class 1 (Moderate)");
        }
        else if (result >= 35  && result < 39.9){
            alert ("Obesity Class 2 (Severe)");
        }
        else {
            alert ("Obesity Class 3 (Very Severe)");
        } 
        
    }
    document.querySelector('button').addEventListener('click', function() {
    let height = parseFloat(document.getElementById('txtfldHeight').value / 100); 
    let weight = parseFloat(document.getElementById('txtfldWeight').value);

    calculateBMI(height, weight);
});



    
    

    










