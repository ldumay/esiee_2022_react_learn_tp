import 'react-phone-number-input/style.css'
//const [inputEmail, setEmail] = useState();

function RegisterCheckUser(props){
    const userInJson = "TOTO@TOTO.fr"

    return (
        <div>
            <h1>CheckUser Sheet</h1>
            Mail : {props.inputEmail}
        </div> 
    )
}
export default RegisterCheckUser