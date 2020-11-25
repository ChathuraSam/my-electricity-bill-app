function calculateMyBill() {
    let noOfUnits = document.getElementById("noOfUnits").value;
    let rate = 0;
    let fixed = 30;
    let totalBill = 0;
    
    //do the calculation - Math

    //<60 - 6.50 rs per unit
    //<80 - 10.50 rs per unit
    //<120 - 14.50 rs per unit
    // these numbers are not accurate. Chek it in the internet

    if (noOfUnits <= 60) { //70
        rate = 6.50;
        totalBill+= noOfUnits*6.50;
        
    }else if (noOfUnits <= 80) { // remainng 10 will be calculate using this block
        rate = 10.50;
        totalBill += 60*6.50 + (noOfUnits-60)*10.50;
    }else if(noOfUnits<=120){
        rate = 14.50;
    }

    totalBill+=fixed;

    alert("Total Ammpount is : "+totalBill);





}