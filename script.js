

function calculate () {
    /*
        // Set variables for each intersection and assign base efficiency score
        var roundAbout = 100;
    ;   var stopSign = 100;
        var trafficLight = 100;
    
        var rbCost = 100000;
        var tlCost = 200000;
        var ssCost = 40000;
    */
        // Parse as Integer
        var cpm1 = parseInt(document.getElementById("road1").value);
        var cpm2 = parseInt(document.getElementById("road2").value);
        var cpm3 = parseInt(document.getElementById("road3").value);
        var cpm4 = parseInt(document.getElementById("road4").value);
      
    
        console.log(typeof cpm1);
        console.log(typeof cpm2); 
        console.log(typeof cpm3); 
        console.log(typeof cpm4); 
        var total_cpm = cpm1 + cpm2 + cpm3 + cpm4;
    
    /*
        // Edits efficiency score based on total CPM
        if(total_cpm >= 20){
            //High cpm
            var roundAbout = 50;
            var stopSign = 80;
            var trafficLight = 10;
            // Intersection has High cpm 
    
        } else if (20 > total_cpm > 10) {
            var roundAbout = 50;
            var stopSign = 80;
            var trafficLight = 10;
            // Intersection has Medium cpm 
    
        } else if (total_cpm < 10){
            var roundAbout = 90;
            var stopSign = 40;
            var trafficLight = 30;
            // Intersection has Low cpm
    
        } else if (total_cpm < 5){
            var roundAbout = 90;
            var stopSign = 40;
            var trafficLight = 30;
            // Intersection has very low cpm, consider using stop sign to reduce cost
        }
    
    
        // If traffic on one road is substantially higher than another: increase efficiency score for roundabouts
        if ((cpm1 + cpm3) > (1.5*(cpm2 + cpm4))){
            var roundAbout =+ 10
        } else if ((cpm2 + cpm4) > (1.5*(cpm1 + cpm3))){
            var roundAbout =+ 10
        }
    
        // Check's which intersection has highest efficiency score then edits result to display this
        if ((trafficLight > stopSign) + (trafficLight > roundAbout)) {
            //Traffic light has higher efc_score than other options
            var varResult = ("TrafficLight is best option" );
            echo (varResult);
    
        } else if ((stopSign > trafficLight) + (stopSign > roundAbout)){
            //Stop Sign has higher efc_score than other options
            var varResult = ("Stop Sign is the best option" );
            echo (varResult);
    
        } else if ((roundAbout > trafficLight) + (roundAbout > stopSign)) {
            //Roundabout has higher efc_score than other options
            var varResult = ("Roundabout is the best option" );
            echo (varResult);
        }
    */
    
    
        // Edits efficiency score based on total CPM
        if(total_cpm >= 20){
            //High cpm
            varResult = "A Traffic Light intersection is your best option"
            // Intersection has High cpm 
    
        } else if (total_cpm >= 10) {
            varResult = "A roundabout intersection is your best option"
            // Intersection has Medium cpm 
    
        } else if (total_cpm >= 5){
            varResult = "A Roundabout intersection is your best option (less cost efficient)"
            // Intersection has Low cpm
    
        } else if (total_cpm < 5){
            varResult = "A stop sign intersection is your best option (very low cpm)"
            // Intersection has very low cpm, consider using stop sign to reduce cost
        }
    
        //OUPUT RESULT
        document.getElementById("result").innerHTML = varResult;
        return false;
      }