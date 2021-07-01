import { Field, useField } from 'formik'
import React from 'react'
import { Label } from 'semantic-ui-react';

export default function HrmsFormTextAreaInput({...props}) {
    // console.log(props);

    const[field,meta] = useField(props)
    //console.log(meta);
    return (
        <Field error={meta.touched && !!meta.error}>
            <input {...field}{...props}/>
            {meta.touched && !!meta.error ? (
                 <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </Field>
    )
}
