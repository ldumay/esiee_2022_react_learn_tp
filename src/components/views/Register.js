
import { useState } from "react"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

function Register(){
    const [inputFirstName,setFirstName]         = useState()
    const [inputLastName,setLastName]           = useState()
    const [inputAge,setage]                     = useState()
    const [inputPhone_number,setPhone_number]   = useState()
    const [inputEmail,setEmail]                 = useState()

    function checkValue(type,value){
        switch (type) {
            case "LastName":
                const LastName = value.replace(/[^a-zA-Z\s]/g,"");
                setLastName(LastName)
                //console.log(type,firstName)
                break

            case "firstName":
                const firstName = value.replace(/[^a-zA-Z\s]/g,"");
                setFirstName(firstName)
                //console.log(type,firstName)
                break

            case 'age':
                const NotNumber = !isNaN(+value)
                const age = value.replace(/[^0-9]*/g,"");
                if (NotNumber){
                    if (age <= 122){
                    setage(age)   
                    }
                    console.log(age)
                }
                break 

            case 'email':
                const emailform = !! value.match(/.+@.+/);
                const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (value.match(regEmail)){
                    console.log("Bon format")
                    
                }
                else{
                    console.log("mauvais format")
                }
                break

            default:
              return null
          }
    }


    return (
        <div>
            <h1>Inscription</h1>

            <form>
                <label> Nom         : <input    type="text"
                                                value={inputLastName}
                                                onChange={(e) => checkValue("LastName",e.target.value)} /> 
                </label><br/>
                <label> Prénom      : <input    type="text" 
                                                value={inputFirstName} 
                                                onChange={(e) => checkValue("firstName",e.target.value)} />  
                </label><br/>
                <label> Âge         : <input    type="text" 
                                                value={inputAge}         
                                                onChange={(e) => checkValue("age",e.target.value)} /> 
                </label><br/>
                <label> Téléphone   : <PhoneInput   type="text" 
                                                    value={inputPhone_number}   
                                                    onChange={setPhone_number} 
                                                    maxLength={14}/> 
                </label><br/>
                <label> E-mail      : <input    type="email" 
                                                value={inputEmail}       
                                                onChange={(e) => checkValue("email",e.target.value)} /> 
                </label><br/>

                <input type="submit" onClick={() => alert(inputFirstName)} value="Validation RGPD" />
            </form>
        </div> 
    )
}
export default Register