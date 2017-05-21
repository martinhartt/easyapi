import React from 'react';
import PropTypes from 'prop-types';
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
  },
};

const AuthForm = ({
  onSubmit,
  onChange,
  errors = {},
  username,
  password,
}) => (
  <div>
    <h1>Welcome to EasyAPI!</h1>
    <p>If you are a new user, please create a new account by filling in the following fields.</p><p> If you are already a user, please enter your username and password.</p>
    <form
      action="/" onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ username, password });
      }} method="post"
    >
      <div style={style.field}>
        <TextInput
          name="username"
          placeholder="Username"
          onChange={username => onChange({ username })}
          text={username}
        />
        <p style={style.error}>{errors.username}</p>
      </div>
      <div style={style.field}>
        <TextInput
          name="password"
          placeholder="Password"
          type="password"
          onChange={password => onChange({ password })}
          text={password}
        />
        <p style={style.error}>{errors.password}</p>
      </div>
      <div>
        <Button type="submit" text="Next" />
      </div>
    </form>
  </div>
);

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.array,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
};

export default AuthForm;
