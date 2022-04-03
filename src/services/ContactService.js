import axios from "axios";

export class ContactService
{
    static serverURL = `http://localhost:9000`;

    /*
    Service for Contacts
    */
    static getAllContacts()
    {
        let response = axios.get(`${this.serverURL}/contacts`);
        return response;
    }

    static getContact(contactID)
    {
        let response = axios.get(`${this.serverURL}/contacts/${contactID}`);
        return response;
    }

    static createContact(contact)
    {
        let response = axios.post(`${this.serverURL}/contacts`, contact);
        return response;
    }

    static updateContact(contact, contactID)
    {
        let response = axios.put(`${this.serverURL}/contacts/${contactID}`, contact);
        return response;
    }

    static deleteContact(contactID)
    {
        let response = axios.delete(`${this.serverURL}/contacts/${contactID}`);
        return response;
    }

    /*
    Service for Groups
    */
    static getAllGroups()
    {
        let response = axios.get(`${this.serverURL}/groups`);
        return response;
    }

    static getGroup(contact)
    {
        let groupID = contact.groupId;
        let response = axios.get(`${this.serverURL}/groups/${groupID}`);
        return response;
    }
}