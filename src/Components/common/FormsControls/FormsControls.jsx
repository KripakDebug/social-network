import React from "react"
import { Field } from "redux-form";
import c from './FormsControls.module.css'

export const Element = Element => ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={c.formControl + ' ' + (hasError ? c.error : '')}>
           <div>
              <Element {...input} {...props} />
           </div>
           {hasError &&  <span>{meta.error}</span>}
        </div>
    )
}

export const CreateField = (placeholder, name, component, validators, type, text = '') => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} type={type} /> {text}
    </div>
}