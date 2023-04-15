function convertItems(items) {
  if (typeof items[0] != typeof []) {
    return items.map((item) => item.split("|"));
  } else {
    return items;
  }
}

function filterItems(items) {
  let itemsInteger = convertItems(items).filter((item) => {
    if (item.length > 1) {
      item[1] = Number(item[1]);
      return item[1];
    }
  });
  return itemsInteger;
}

function generateSpareParts(items) {
  let sparePartsArray = [];
  filterItems(items).filter((item) => {
    let itemsObj = {};
    itemsObj.name = item[0];
    itemsObj.price = item[1];
    itemsObj.category = item[2];
    sparePartsArray.push(itemsObj);
  });
  return sparePartsArray;
}

function itemsStatistics(items) {
  let sumVariation = 0;
  let sumBodyParts = 0;
  let sumelEctricity = 0;
  let statisticItems = {};
  generateSpareParts(items).filter((item) => {
    if (item.category == "variation") {
      sumVariation += 1;
      statisticItems["variation"] = sumVariation;
    } else if (item.category == "bodyParts") {
      sumBodyParts += 1;
      statisticItems["bodyParts"] = sumBodyParts;
    } else if (item.category == "electricity") {
      sumelEctricity += 1;
      statisticItems["electricity"] = sumelEctricity;
    }
  });
  return statisticItems;
}

function generateItemsData(items) {
  let result = {};
  result.spare_parts = generateSpareParts(items);
  result.statistics = itemsStatistics(items);

  return result;
}

const items = [
  "Spakbor Gordon|150000|variation",
  "Head Lamp",
  "USD KX150|8500000|bodyParts",
  "Handle Expedition|275000|variation",
  "Karet Body",
  "Body set KTM|1899950|bodyParts",
  "Jok Gordon|250000|variation",
  "Behel Bodyset Gordon",
  "CDI BRT KLX|625000|electricity",
  "Cover jok KLX|185000|variation",
];
const items2 = [
  ["KAYABA OS", "177380", "bodyParts"],
  ["KAYABA OC", "205800", "bodyParts"],
  ["Boba black"],
  ["Cover full tank", "159000", "variation"],
  ["Aki GS ASTRA MF", "196000", "electricity"],
  ["Fabio black"],
  ["Porte sling"],
];
console.log(generateItemsData(items));
console.log(generateItemsData(items2));
// console.log(convertItems(items2));
// console.log(filterItems(items2));
// console.log(generateSpareParts(items2));
// console.log(itemsStatistics(items2));

module.exports = {
  convertItems,
  filterItems,
  generateSpareParts,
  itemsStatistics,
  generateItemsData,
};
