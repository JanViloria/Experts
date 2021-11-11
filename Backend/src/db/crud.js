const db = require('./firebase.js');

//Get all users from experts collection
function getExperts(){
    return db.collection("experts").get()
        .then((refDoc)=>{
            refDoc.forEach((doc)=>{
                console.log(doc.id, '=>', doc.data());
            })
        })
        .catch(e =>{
            console.error("Error to get experts ", e);
        })
}

module.exports = {
    getExperts
}