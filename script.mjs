function commission_calc(units, price) {
    let commission = 0
    let total_sales = unit_sale * unit_price


    if (total_sales >= 100000) {
        commission = total_sales * .10

    }
    else if (total_sales >= 50000) {
        commission = total_sales * .5

    }
    else if (total_sales >= 30000) {
        commission = total_sales * .3

    }
    else {
        commission = total_sales * .1

    }
    console.log("Your commission is", commission)
}
let unit_sale = Number(prompt("Enter units of sold items"))
let unit_price = Number(prompt("Enter price of sold items"))
commission_calc(unit_sale, unit_price)

