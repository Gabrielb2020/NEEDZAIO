import { cnx } from './connection.js'

async function addCountryTable({CountryCode,CountryName },table){
    let [rows,fields] = await cnx.promise().query(`INSERT INTO ${table} (id, CountryCode, CountryName) VALUES (NULL, '${CountryCode}', '${CountryName}') `);

    return {id: rows.insertId,CountryCode,CountryName }
}

async function addUserTable({last_name ,name, is_military,time_create, is_temporal, user_name, password, email, email_verified, verification_token },table){
    let [rows,fields] = await cnx.promise()
    .query(`INSERT INTO ${table} (id, last_name ,name, is_military,time_create, is_temporal, user_name, password, email, email_verified, verification_token) VALUES (NULL, '${last_name}', '${name}', '${is_military}', '${time_create}', '${is_temporal}', '${user_name}', '${password}', '${email}', '${email_verified}', '${verification_token}') `);

    return {id: rows.insertId}
}

async function addContactInfoTable({user_id,address,country_id,city,phone,cellphone,emergency_name,emergency_phone },table){
    let [rows,fields] = await cnx.promise()
    .query(`INSERT INTO ${table} (id, user_id,address,country_id,city,phone,cellphone,emergency_name,emergency_phone) VALUES (NULL, '${user_id}','${address}', '${country_id}', '${city}', '${phone}', '${cellphone}', '${emergency_name}', '${emergency_phone}') `);

    return {id: rows.insertId}
}

async function addUserDocumentTable({user_id,document,type_document_id,placeexpedition,dateexpedition },table){
    let [rows,fields] = await cnx.promise()
    .query(`INSERT INTO ${table} (user_id,document,type_document_id,placeexpedition,dateexpedition) VALUES ('${user_id}','${document}', '${type_document_id}', '${placeexpedition}', '${dateexpedition}')`);

    return {id: rows.affectedRows}
}

export {
    addCountryTable,
    addUserTable,
    addContactInfoTable,
    addUserDocumentTable
}