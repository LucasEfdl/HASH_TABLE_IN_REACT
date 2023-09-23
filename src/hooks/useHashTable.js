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
    if((hashTable[key] == null || hashTable[key].hasBeenUsed == true)){
        hashTable[key] = contact;
        return true
    } else{
        if((contact.email != hashTable[key].email)){
            for(let i = key+1; i < hashTable.length; i++){
                if(hashTable[i] == null || hashTable[i].hasBeenUsed == true){
                    hashTable[i] = contact;
                    console.log("Insercao concluida")
                    return true;
                } else if (i == 31) {
                    console.log("Erro ao inserir: sem espaço")
                    return "Lista de contatos já esta cheia"
                }
            }
        }
        return null
    }
}

export function hashRemoval(hashTable, contact, key){
    if(hashTable[key].email == contact.email){
        hashTable[key] = {
            hasBeenUsed: true,
            name: "",
            email: "",
            phone: ""
        };

        if(hashTable[key+1] != null) {
            var nextKey = useHashKey(hashTable[key+1].email)
        }

        if (nextKey == key) {
            console.log("O contato " + contact.name + " foi removido com sucesso")
            hashInsertion(hashTable, hashTable[key+1], key)
            hashRemoval(hashTable, hashTable[nextKey + 1], nextKey+1)
        }
    } else {
        for (let i = key + 1; i < hashTable.length; i++) {
            if(hashTable[i].email == contact.email) {
                hashTable[i] = {
                    hasBeenUsed: true,
                    name: "",
                    email: "",
                    phone: ""
                };
                return console.log("Remoção concluida");
            }
        }
        console.log("Erro na remoção");
    }
}

export function hashSearch(hashTable, email, key) {
    if(hashTable[key]?.email == email){
        return hashTable[key]
    } else {
        for(let i = key + 1; i < hashTable.length; i++) {
            if(hashTable[i]?.email == email){
                return hashTable[i]
            }
        }
    } 
    console.log("Contato não encontrado");
}