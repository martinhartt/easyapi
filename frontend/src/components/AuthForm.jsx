import React, { PropTypes } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import StyleConstant from './StyleConstant';
const Color = StyleConstant.Color;

const style = {
  width: 140,
  field: {
    marginBottom: 5,
  },
  error: {
    margin: 4,
    fontSize: 14,
    color: Color.red,
  }
}

const AuthForm = ({
  onSubmit,
  onChange,
  errors = {},
  email,
  password,
}) => (
  <div>
    <h1>Login</h1>
    <form action="/" onSubmit={(e) => {
      e.preventDefault();
      onSubmit({email, password});
    }} method="post">
      <div style={style.field}>
        <TextInput
          name="username"
          placeholder="Email"
          onChange={email => onChange({email})}
          text={email}
        />
        <p style={style.error}>{errors.email}</p>
      </div>
      <div style={style.field}>
        <TextInput
          name="password"
          placeholder="Password"
          onChange={password => onChange({password})}
          text={password}
        />
        <p style={style.error}>{errors.password}</p>
      </div>
      <div>
        <Button type="submit" text="Log In"/>
      </div>
    </form>
  </div>
)

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.array,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default AuthForm;
