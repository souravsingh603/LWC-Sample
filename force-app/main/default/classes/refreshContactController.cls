public inherited sharing class refreshContactController {
  
    @AuraEnabled(cacheable = true)
    public static list<contact> getContacts(){
        return [select id , FirstName , LastName , Email from Contact Limit 10];
    }
}
