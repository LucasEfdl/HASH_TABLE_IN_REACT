import XLSX from "xlsx"

function getContactInHahsTable(hashTable) {
    const contactList = []
    for(let i = 0; i < hashTable.length; i++) {
        if(hashTable[i] != null && hashTable[i].hasBeenUsed != true) {

            const row = [3]
        
            row[0] = `${hashTable[i].name}\t\t`
            row[1] = `${hashTable[i].email}\t\t`
            row[2] = `${hashTable[i].phone}\t\t`

            contactList.push(row)
        }
    }
    return contactList
}


export default function exportContact(hashTable) {
    const list = XLSX.utils.book_new()

    list.Props = {
        Title: 'Meus Contatos',
        Subject: 'Contatos',
        Author: 'Lucas Emanuel e Murilo Lacerda',
        CreatedDate: new Date(),
    }

    list.SheetNames.push("Lista 1")

    
    const contactList = getContactInHahsTable(hashTable)
    console.log(contactList.length);
    
    if(contactList.length != 0) {
        const data = [
            [" ------- Nome -------- ", " -------- Email -------- ", " -------- Telefone -------- "]
            ,...contactList
        ]
        const datas = XLSX.utils.aoa_to_sheet(data)
    
        list.Sheets["Lista 1"] = datas
    
        XLSX.writeFile(list, "CONTACT_LIST.xlsx", {bookType: "xlsx", type: "bnary"})
    } else {
        console.log("Voce ainda não tem nenhumm contato cadastrado!");
    }
}