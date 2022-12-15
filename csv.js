

const fs = require('fs');
const csv = fs.readFileSync("./MOCK_DATA.csv", "utf-8");


const csvToJson = async(csv)=>{
const rows = csv.split('\n');
const jsonArray = [];
const keys = rows[0].split(',');

for(let i = 1; i < rows.length; i++){
    let obj = {};
    let row = rows[i].split(",");
    for(let j=0; j < keys.length; j++){
        obj[keys[j]] = row[j];
    }
    jsonArray.push(obj);
}

await AppData.query(
    `INSERT INTO tags(
       id,
       name
        )VALUES ?
        `,[jsonArray])
}

