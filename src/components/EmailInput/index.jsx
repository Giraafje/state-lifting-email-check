import React from 'react'

const EmailInput = ({email, onChange}) => {
    // const [email, setEmail] = useState('');

    const handleChange = (e) => {
        onChange({value: e.target.value, valid: e.target.value.includes('@') ? true : false })
    }
    
    return (
      <div className="validated-input">
        <input 
          type="email"
          value={email.value}
          onChange={handleChange}
        />
        { 
          email.valid 
          ? null 
          : <div className="invalid-msg">Invalid email address</div>
        }
      </div>
    )
  };

  export default EmailInput;