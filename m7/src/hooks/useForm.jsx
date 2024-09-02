import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setvalue] =useState(initialValues);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setvalue({
            ...value,
            [name]: value,
        });
    }

    return [values]
}

export default useForm;