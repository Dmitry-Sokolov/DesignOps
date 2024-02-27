// /*
// GET REQUEST
// */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const fs = require('fs')


const getURL ='https://api.figma.com/v1/files/DWtds6T6W0V8gLjEyKZ3RV/variables/local/'

async function getData(){
    const request = new Request(getURL, {
        headers: {
            'X-Figma-Token': 'figd_k_Ax7wIBOkYxnNgKuyi5zZseRf2I-IPilo87guXX',
        }
    })
    const response = await fetch(request)

    const jsonData = await response.json()
    const data = JSON.stringify(jsonData, null, 4)

    fs.writeFile('../json/variable.json', data, 'utf8', (err) => {
        if(err){
            console.log('Error')
        }
    })

}

// getData()

/*
    POST REQUEST
*/

const postURL ='https://api.figma.com/v1/files/DWtds6T6W0V8gLjEyKZ3RV/variables/'
const variableCollectionId = "VariableCollectionId:2:5"

// const postURL ='https://api.figma.com/v1/files/JR5tmX06VVx9DLFKLRFOIK/variables';
// const variableCollectionId = "VariableCollectionId:1:2";


const testData = {
    "variables": [
        {
            "action": "UPDATE",
            "id": "VariableID:6:3",
            "variableCollectionId": variableCollectionId,
            "description": "test description",

        }
    ]
}

async function postData(){
 //   const jsonResponse = await fetch('./postVariable.json')
 //    const jsonData = await jsonResponse.json()
 //
    const response = await fetch(postURL, {
        method: 'POST',
        body: JSON.stringify(testData),
        headers: {
            'X-Figma-Token': 'figd_k_Ax7wIBOkYxnNgKuyi5zZseRf2I-IPilo87guXX',
            'Content-Type': 'application/json'
        },
    })
    const jsonData = await response.json()
    console.log(jsonData)
}

postData();




// const testData = {
//     "variables": [
//         {
//             "action": "CREATE",
//             "name": "colors/test-primary-blue",
//             "variableCollectionId": variableCollectionId,
//             "resolvedType": "COLOR",
//             "description": "",
//             "hiddenFromPublishing": false,
//             "valuesByMode": {
//                 "1:0": {
//                     "r": 0,
//                     "g": 0.5308057069778442,
//                     "b": 1,
//                     "a": 1
//                 }
//             },
//         }
//     ]
// }