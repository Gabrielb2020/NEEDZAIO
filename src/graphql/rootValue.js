import { addContactInfoTable, addUserDocumentTable, addUserTable } from "../config/mysql/factory.js";

const root = { 
    hello: () => 'Hello world!',
    createUser:async (args) => {
        const {last_name ,name, is_military, is_temporal, user_name, password, email, email_verified, verification_token, address,country_id,city,phone,cellphone,emergency_name,emergency_phone, document, type_document_id, placeexpedition, dateexpedition} = args;
        const fecha = new Date().getFullYear()+"-"+new Date().getMonth()+"-"+new Date().getDay();
        const result = await  addUserTable({last_name ,name, is_military,time_create: fecha, is_temporal, user_name, password, email, email_verified, verification_token}, "appuser_tb");

       setTimeout(async()=> {
        const result2 = await addContactInfoTable({user_id: result.id, address, country_id, city, phone, cellphone, emergency_name,emergency_phone}, "contacinfotb");

        const result3 = await addUserDocumentTable({user_id: result.id, document, type_document_id, placeexpedition, dateexpedition}, "userdocument_tb");
       }, 10);

        return result
    }
  };
  
 export {
    root
  }