import React from 'react'
import Toggle from 'react-toggled';
import c from 'classnames';

const Switch = () => (
  <Toggle>
    {({on, getElementTogglerProps}) => (
      <span
        className={c('nc-toggle', { 'nc-toggle-active': on })}
        role="switch"
        aria-checked={on.toString()}
        {...getElementTogglerProps()}
      >
        <span className="nc-toggle-background"/>
        <span className="nc-toggle-switch"/>
      </span>
    )}
  </Toggle>
);

export default Switch;