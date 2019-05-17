import React from "react";

class Input extends React.Component {
  render() {
    const { handleChange, label, name, type, placeholder } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input
          type={type}
          className="form-control"
          id={name}
          placeholder={placeholder}
          onChange={event => {
            console.info("@Input onChange value", event.target.value);
            handleChange({
              name: name,
              value: event.target.value
            });
          }}
        />
      </div>
    );
  }
}

export default Input;
