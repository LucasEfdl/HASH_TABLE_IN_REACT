import { sequenceAddition, stringToBinary } from "./stringUtils";

export function useHashKey(email) {
    let key = stringToBinary(email);
    key = sequenceAddition(key);
    return parseInt(key, 2)
}


export function createHashTable() {
    let hashTable = new Array(32).fill(null);
    console.log('Hash table successfully created');
    return hashTable
}

export function hashInsertion(hashTable, contact, key){
    if(hashTable[key] == null || hashTable[key].hasBeenUsed == true){
        hashTable[key] = contact;
    } else{
        for(let i = key+1; i < hashTable.length; i++){
            if(hashTable[i] == null || hashTable[i].hasBeenUsed == true){
                hashTable[i] = contact;
                console.log("Insercao concluida")
                break;
            } else if (i == 31) {
                console.log("Erro ao inserir: sem espaço")
            }
        }
    }
}

export function hashRemoval(hashTable, contact, key){
    if(hashTable[key] != null){
        hashTable[key] = {
            hasBeenUsed: true,
            name: "",
            email: "",
            phone: ""
        };

        console.log(hashTable);
        if(hashTable[key+1] != null) {
            var nextKey = useHashKey(hashTable[key+1].email)
        }
        if (nextKey == key) {
            console.log("O contato " + contact.name + " foi removido com sucesso")
            hashInsertion(hashTable, hashTable[key+1], key)
            hashRemoval(hashTable, hashTable[nextKey + 1], nextKey+1)
        }
        console.log(hashTable);
    } 
}

export function hashSearch(hashTable, contact,  key) {
    if (hashTable[key].email == contact.email) {
        return hashTable[key]
    }else if(hashTable[key + 1].hashBeenUsed == true){
        for(let i = key + 1; i < hashTable.length; i++ ){
            if(hashTable[i].email == contact.email) {
                return hashTable[i]
            }
        }
    } else {
        return null
    }
}