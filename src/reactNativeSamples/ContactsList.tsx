import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Contacts, { Contact } from 'react-native-contacts';
import { SafeAreaView } from 'react-native-safe-area-context';


const ContactsList = () => {

    const [users, setUsers] = useState<Contact[]>([])

    useEffect(() => {
        loadContacts()
    }
        , [])

        const loadContacts = () => {
            Contacts.getAll()
            .then(contacts => {
                setUsers(contacts)
            }
            )
            .catch(e => {
                console.log(e)
            })
        }


        const deleteUser = (contact:Contact) => {
            
            Contacts.deleteContact(contact)
            .then(() => {
                
                console.log("deleted");
                loadContacts()

                
            })
            .catch(e => {
                console.log("error", e)
            })
        }

    return (<>

       <FlatList
        data={users}
        renderItem={({ item }) => <Pressable onPress={() => deleteUser(item)}>
            <Text style={{fontSize:15}}>{item.recordID} / {item.familyName}</Text>
        </Pressable>}
        keyExtractor={item => item.recordID}
    /> 

    </>
    )
}

export default ContactsList