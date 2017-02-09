var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
var result = {};
var sales = 0;
var telusSales = 0;
var telusTax = 0;
var bombSales = 0;
var bombTax = 0;
  for (i = 0; i < salesData.length; i++){
    var str = salesData[i]["name"];
    result[str] = {
        totalSales:0,
        totalTaxes:0,
    }
  }
  for ( j = 0; j < salesData.length ; j++){
    var sales = salesData[j]["sales"];
    var province = salesData[j]["province"];
    var taxRate = taxRates[province];
    var name = salesData["name"];
    for ( var n = 0; n < sales.length; n++ ){
      if (salesData[j]["name"]== "Telus"){
        telusSales += sales[n];
        telusTax += (sales[n] * taxRate);
      }
      else {
        bombSales += sales[n];
        bombTax += sales[n]*taxRate;
      }
    }
  }
  result.Telus.totalSales = telusSales;
  result.Telus.totalTaxes = telusTax;
  result.Bombardier.totalSales = bombSales;
  result.Bombardier.totalTaxes = bombTax;

  return result;
}
//result[str] = result['TELUS']
//Telus :




var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
