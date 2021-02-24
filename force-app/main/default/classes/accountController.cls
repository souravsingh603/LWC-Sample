public inherited sharing class accountController {
   
    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountList(){
        return [select id , name , AnnualRevenue from Account where AnnualRevenue!= null limit 5];
    }

    @AuraEnabled(cacheable = true)
    public static List<Account> getAccountById(Id accId){
        return [select id , name , AnnualRevenue from Account where id= :accId limit 5];
    }

    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        return [select id , name from contact limit 10];
    }
}
