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
            callback(`Error to get experts ${e}`);
        })
}

function getExpert(id, callback){
    return db.collection('experts').doc(id).get()
        .then((doc)=>{
            callback(doc.data())
        })
        .catch((e)=>{
            callback(`Error to get expert ${e}`);
        })
}

function addExpert(expert, callback){
    return db.collection('experts').add(expert)
        .then(()=>{
            callback("Expert created")
        })
        .catch((e)=>{
            callback(`Error to add expert ${e}`);
        })
}

function updateExpertTotally(id, expert, callback){
    return db.collection('experts').doc(id).set(expert)
        .then(()=>{
            callback("Success");
        })
        .catch((e)=>{
            callback(`Error to update totally expert ${e}`);
        })
}

function updateExpertPartial(id, expert, callback){
    return db.collection('experts').doc(id).update(expert)
        .then(()=>{
            callback("Success");
        })
        .catch((e)=>{
            callback(`Error to update partial expert ${e}`);
        })
}

function deleteExpert(id, callback){
    return db.collection('experts').doc(id).delete()
        .then(()=>{
            callback("Success");
        })
        .catch((e)=>{
            callback(`Error to delete expert ${e}`);
        })
}

module.exports = {
    getExperts,
    getExpert,
    addExpert,
    updateExpertTotally,
    updateExpertPartial,
    deleteExpert
}