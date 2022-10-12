// Question ---> You have the input money and cost of one bottle of milk... You have to calculate the number of bottles you can buy from that money and the money left


const oneBottleCost = Number("1.5");

function buyBottlesFromMoney(money){
    let moneyLeft = 0;
    moneyLeft = money%oneBottleCost;
    var numberOfBottles = calcBottles(money);
    console.log(numberOfBottles);
    console.log(moneyLeft);
}

function calcBottles(money){
    let bottles = 0;
    while(money >= oneBottleCost){
        money = money-oneBottleCost;
        bottles++;
    }
    return bottles;
}

buyBottlesFromMoney(10);