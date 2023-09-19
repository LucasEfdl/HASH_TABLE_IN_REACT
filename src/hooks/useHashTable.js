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
    if(hashTable[key] == null){
        hashTable[key] = contact;
    } else{
        for(let i = key+1; i < hashTable.length; i++){
            if(hashTable[i] == null){
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
        hashTable[key] = null;
        console.log("O contato " + contact.name + " foi removido com sucesso")
    }
}

export function hashSearch(hashTable, key) {
    if (hashTable[key]) {
        return hashTable[key]
    }else {
        return null
    }
}