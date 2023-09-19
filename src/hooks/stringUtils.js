function completeStringLength(binaryString, hashTableSize) {
    if (typeof binaryString === "string") {
        
        if (binaryString.length % hashTableSize != 0) {
            const remainingQuantity = binaryString.length % hashTableSize;
            const intendedSize = binaryString.length + (hashTableSize - remainingQuantity)
            
            binaryString = binaryString.padStart(intendedSize, '0')
            
            return binaryString
        }
        return binaryString
    } else {
        const err =  new Error("A entrada passada não é uma string")
        throw err
    }
}

function binaryAddition(seq1, seq2) {
    let binaryAdditionResult = '';
    for (let i = 0; i < seq1.length; i++) {
        if (seq1[i] === seq2[i]) {
            binaryAdditionResult += '0';
        } else {
            binaryAdditionResult += '1';
        }
    }
    return binaryAdditionResult;
}

export function stringToBinary(key) {
    if (typeof key === "string") {

        let binaryString = '';
        let asciiCode;
        let binaryChar;
    
        for (let i = 0; i < key.length; i++) {
            asciiCode = key.charCodeAt(i);
            binaryChar =asciiCode.toString(2).padStart(8, "0")

            binaryString += binaryChar;
        }
    
        const correctBinaryString = completeStringLength(binaryString, 5)

        return correctBinaryString
    } else {
        const err = new Error("A chave passada não é uma string")
        throw err
    }
}

export function sequenceAddition(binaryNumber) {
    if(typeof binaryNumber === "string") {

        const sequence01 = binaryNumber.slice(0, 5)
        const sequence02 = binaryNumber.slice(5, 10)

        let sequenceAdditionResult = binaryAddition(sequence01, sequence02)

        for (let i = 10; i < binaryNumber.length; i += 5) {
            const newSequence = binaryNumber.slice(i, i + 5)
            sequenceAdditionResult = binaryAddition(sequenceAdditionResult, newSequence)
        }

        return sequenceAdditionResult

    } else {
        console.log("erro");
        return 0;
    }
}
