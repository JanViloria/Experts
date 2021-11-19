const db = require('./firebase.js');

function getUser(id, callback){
    return db.collection('users').doc(id).get()
        .then((doc)=>{
            callback(doc.data())
        })
        .catch((e)=>{
            callback(`Error to get user ${e}`);
        })
}

function addUser(user, callback){
    return db.collection('users').add(user)
        .then(()=>{
            callback("User created")
        })
        .catch((e)=>{
            callback(`Error to add user ${e}`);
        })
}

function updateUserTotally(id, user, callback){
    return db.collection('users').doc(id).set(user)
        .then(()=>{
            callback("Success");
        })
        .catch((e)=>{
            callback(`Error to update user ${e}`);
        })
}

function deleteUser(id, callback){
    return db.collection('users').doc(id).delete()
        .then(()=>{
            callback("Success");
        })
        .catch((e)=>{
            callback(`Error to update user ${e}`);
        })
}

module.exports = {
    getUser,
    addUser,
    updateUserTotally,
    deleteUser
}