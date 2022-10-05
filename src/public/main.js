const formUser = document.getElementById("needziao")
formUser.addEventListener("submit", (e)=>{
    e.preventDefault()
    let formData = formUser.elements
    const last_name = formData["last_name"].value;
    const name = formData["name"].value;
    const is_military = Number(formData["is_military"].value);
    const is_temporal = Number(formData["is_temporal"].value);
    const user_name = formData["user_name"].value;
    const password = formData["password"].value;
    const email = formData["email"].value;
    const email_verified = formData["email_verified"].value;
    const verification_token = formData["verification_token"].value;
    const address = formData["address"].value;
    const country_id = Number(formData["country_id"].value);
    const city = formData["city"].value;
    const phone = formData["phone"].value;
    const cellphone = formData["cellphone"].value;
    const emergency_name = formData["emergency_name"].value;
    const emergency_phone = formData["emergency_phone"].value;
    const document = formData["document"].value;
    const type_document_id = Number(formData["type_document_id"].value);
    const placeexpedition = formData["placeexpedition"].value;
    const dateexpedition = formData["dateexpedition"].value;
    sendForm(last_name, name, is_military, is_temporal, user_name, password, email, email_verified,verification_token, address, country_id, city, phone, cellphone, emergency_name, emergency_phone, document, type_document_id, placeexpedition, dateexpedition)
    formUser.reset()
})

async function sendForm(last_name, name, is_military, is_temporal, user_name, password, email, email_verified,verification_token, address, country_id, city, phone, cellphone, emergency_name, emergency_phone, document, type_document_id, placeexpedition, dateexpedition){
    const res = await fetch('http://localhost:4040/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        query: `
            mutation($last_name: String!, $name: String!, $is_military: Int!, $is_temporal: Int!, $user_name: String!, $password: String!, $email: String!, $email_verified: String!, $verification_token: String!, $address: String!, $country_id: Int!, $city: String!, $phone: String!, $cellphone: String!, $emergency_name: String!, $emergency_phone: String!, $document: String!, $type_document_id: Int!, $placeexpedition: String!, $dateexpedition: String!) {
                    createUser(
                        last_name: $last_name,
                        name: $name,
                        is_military: $is_military,
                        is_temporal: $is_temporal,
                        user_name: $user_name,
                        password: $password,
                        email: $email,
                        email_verified: $email_verified,
                        verification_token: $verification_token,
                        address: $address,
                        country_id: $country_id,
                        city: $city,
                        phone: $phone,
                        cellphone: $cellphone,
                        emergency_name: $emergency_name,
                        emergency_phone: $emergency_phone,
                        document: $document,
                        type_document_id: $type_document_id,
                        placeexpedition: $placeexpedition,
                        dateexpedition: $dateexpedition
                    ){
                        id
                    }
            }   
        `,
        variables: {
            last_name,
            name,
            is_military,
            is_temporal,
            user_name,
            password,
            email,
            email_verified,
            verification_token,
            address,
            country_id,
            city,
            phone,
            cellphone,
            emergency_name,
            emergency_phone,
            document,
            type_document_id,
            placeexpedition,
            dateexpedition,
        }, 
      }),
    })
    const data = await res.json()
    console.log(data)
}