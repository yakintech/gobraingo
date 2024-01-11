import { View, Text, Button } from 'react-native'
import React from 'react'
import Contacts, { Contact } from 'react-native-contacts';


const AddNewcontact = () => {

    const addNewContact = () => {
        
        var newPerson = {
            emailAddresses: [{
              label: "work",
              email: "nietzsche@example.com",
            }],
            displayName: "Friedrich Nietzsche",
            familyName: "Nietzsche",
            givenName: "Friedrich",
            phoneNumbers: [{
              label: "mobile",
              number: "(555) 555-5555",
            }],


          }


          Contacts.addContact(newPerson).then(contact => {
            console.log("Success!");
            console.log(contact);
          }
            )
          
        //   Contacts.openContactForm(newPerson).then(contact => {   
        //     console.log("Success!");
        //     console.log(contact);

        //   })


    }

  return (<>
        <Button title='Add New Contact' onPress={addNewContact}></Button>
  </>
  )
}

export default AddNewcontact