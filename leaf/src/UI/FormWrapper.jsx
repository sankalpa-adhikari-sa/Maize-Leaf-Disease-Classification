import React from 'react'

const  FormWrapper =(props) => {
  return (
    <form onSubmit={props?.onSubmit}>
        <fieldset>
            <legend>{props?.title}:</legend>
            {props?.children}
        </fieldset>
    </form>
  )
}

export default FormWrapper