const db = require('./firebase.js');

//Get all users from experts collection
function getExperts(callback){
    return db.collection("experts").get()
        .then((refDoc)=>{
            var arrayExperts = [];
            refDoc.forEach((doc)=>{
                arrayExperts.push(doc.data());
                //console.log(doc.id, '=>', doc.data());
            })
            callback(arrayExperts);
        })
        .catch(e =>{
            //console.error("Error to get experts ", e);
            callback('Error to get Experts ', e);
        })
}

module.exports = {
    getExperts
}