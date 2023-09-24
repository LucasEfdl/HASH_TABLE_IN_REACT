import XLSX from "xlsx"

function getContactInHahsTable(hashTable) {
    const contactList = []
    for(let i = 0; i < hashTable.length; i++) {
        if(hashTable[i] != null) {
            contactList.push(hashTable[i])
        }
    }
    return contactList
}

function setContactList(contactList) {
    const arrayOfconatct = []
    for(let i = 0; i < contactList.length; i++) {
        const row = [3]
        
        row[0] = `${contactList[i].name}\t\t`
        row[1] = `${contactList[i].email}\t\t`
        row[2] = `${contactList[i].phone}\t\t`
        
        arrayOfconatct.push(row)
    }

    return arrayOfconatct;
}

export default function importContact(hashTable) {
    const list = XLSX.utils.book_new()

    list.Props = {
        Title: 'Meus Contatos',
        Subject: 'Contatos',
        Author: 'Lucas Emanuel e Murilo Lacerda',
        CreatedDate: new Date(),
    }

    list.SheetNames.push("Lista 1")

    const contactList = getContactInHahsTable(hashTable)

    const arrayOfContatc = setContactList(contactList)

    const data = [
        [" ------- Nome -------- ", " -------- Email -------- ", " -------- Telefone -------- "]
        ,...arrayOfContatc
    ]

    const datas = XLSX.utils.aoa_to_sheet(data)

    list.Sheets["Lista 1"] = datas

    XLSX.writeFile(list, "CONTACT_LIST.xlsx", {bookType: "xlsx", type: "bnary"})
}