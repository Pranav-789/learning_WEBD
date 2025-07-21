function capFirstLetter(str){
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str
}

console.log(capFirstLetter('dog'));

setTimeout(()=>{
    console.log("please login");
}, 5000);

const discountedPrice = (price, discount)=>{
    return (price-discount);
}

console.log(discountedPrice(1000, 200))

function trafficTeller(lightColor){
    switch(lightColor){
        case "green":
            console.log("Go");
            break;       
        case "yellow":
            console.log("drive slow");
            break;
        case "red":
            console.log("stop");
            break;
        default:
            console.log("Signal not catched");
    }
}

trafficTeller('green')
trafficTeller('red')
trafficTeller('yellow')