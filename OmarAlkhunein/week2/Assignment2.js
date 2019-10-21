var streetNumber = ['1132', '4421', '5553', '2312', '4431', '5454']

var streetName = ['Jabal Arraha', 'King Khalid', 'King Fahad', 'King Abdullah', 'Takhasusi', 'N.ring rode',]

var cityName = ['Riyadh', 'Mekkah', 'Madinah', 'Kharj', 'Qaseem', 'Hail', 'Jeddah']

var stateName = ['N', 'S', 'E','W','C']

var zipCode = ['116543', '101438', '132998', '343878', '112311', '15767']

function get(i) {
    return i[Math.floor((Math.random() * i.length))];
}

function generateAddress() {
    return `${get(streetNumber)} ${get(streetName)}, ${get(cityName)} ${get(stateName)}, ${get(zipCode)}`;
}

var address = generateAddress();
console.log(address);