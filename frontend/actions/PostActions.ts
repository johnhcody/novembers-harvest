import { useState } from "react";
import * as PostApiUtil from './apiUtil/PostApi'


export const createPost = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        setValue,
        reset: () => setValue(''),
        bind: {
            value,
            onChange: event => {
                setValue(event.target.value);
            }
        },
        submit: (data) => PostApiUtil.createPost(data)
    };
};