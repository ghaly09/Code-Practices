function rekapSalesByName(data, name) {
  let result = {};
  let monthlySales = 0;
  let totalSalesByName = { Adi: 0, Budi: 0, Poltak: 0, Sri: 0, Udin: 0 };

  data.filter((dataSales, index) => {
    const { salesName, totalSales, salesDate } = dataSales;
    monthlySales += dataSales.totalSales;

    if (salesName == dataSales.salesName) {
      totalSalesByName[salesName] += dataSales.totalSales;
    }
  });

  const sumSales = Object.values(totalSalesByName);
  let biggestSales = Math.max(...sumSales);
  let mostSalesName = name.filter((value) => {
    return totalSalesByName[value] == biggestSales;
  });

  result.monthlySales = monthlySales;
  result.totalSalesByName = totalSalesByName;
  result.bestSalesman = `Penjualan terbanyak dilakukan oleh ${String(
    mostSalesName
  )} dengan total penjualan dalam 1 bulan sebesar ${biggestSales}`;

  return result;
}

function salesReport(data, correction) {
  correction.filter((dataCorrection) => {
    if (dataCorrection.type == "tambah") {
      data.push(dataCorrection);
    } else {
      data.filter((dataSales, index) => {
        if (dataCorrection.type == "koreksi") {
          if (
            data[index].salesName == dataCorrection.salesName &&
            data[index].salesDate == dataCorrection.salesDate
          ) {
            data[index].totalSales = dataCorrection.totalSales;
          }
        }
      });
    }
  });
  let report = rekapSalesByName(data, name);

  return report;
}

const name = ["Adi", "Budi", "Poltak", "Sri", "Udin"];

let data = [
  {
    salesName: "Udin",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 100,
    salesDate: 1,
  },
  {
    salesName: "Poltak",
    totalSales: 50,
    salesDate: 2,
  },
];

let correction = [
  {
    type: "tambah",
    salesName: "Udin",
    totalSales: 100,
    salesDate: 2,
  },
  {
    type: "koreksi",
    salesName: "Udin",
    totalSales: 20,
    salesDate: 1,
  },
];

console.log(salesReport(data, correction));
// console.log(rekapSalesByName(data, name));

module.exports = {
  salesReport,
};
