import { useField } from 'formik'
import React from 'react'
import { TextArea,Label } from 'semantic-ui-react';

export default function HrmsFormTextAreaInput({...props}) {
    // console.log(props);

    const[field,meta] = useField(props)
    //console.log(meta);
    return (
        <TextArea error={meta.touched && !!meta.error}>
            <input {...field}{...props}/>
            {meta.touched && !!meta.error ? (
                 <Label pointing basic color="red" content={meta.error}></Label>
            ):null}
        </TextArea>
    )
}
