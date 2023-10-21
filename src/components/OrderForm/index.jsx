import React, {useState} from 'react'
import EmailInput from '../EmailInput';

const OrderForm = () => {
    const [email, setEmail] = useState({
        value: 'pokusnik.kokosnik@example.com',
        valid: true,
      });

    const handleEmailChange = (newEmail) => {
        setEmail(newEmail)
    }

    return (
        <form>
            <EmailInput email={email} onChange={handleEmailChange}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default OrderForm;