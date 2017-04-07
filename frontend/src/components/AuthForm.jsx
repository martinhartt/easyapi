import React, { PropTypes } from 'react';
import TextInput from './TextInput';
import Button from './Button';
import { Color } from './StyleConstant';

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
  username,
  password,
}) => (
  <div>
    <h1>Login</h1>
    <form action="/" onSubmit={(e) => {
      e.preventDefault();
      onSubmit({username, password});
    }} method="post">
      <div style={style.field}>
        <TextInput
          name="username"
          placeholder="Username"
          onChange={username => onChange({username})}
          text={username}
        />
        <p style={style.error}>{errors.username}</p>
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
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default AuthForm;
