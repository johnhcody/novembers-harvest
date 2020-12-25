import { useState } from "react";
import * as PostApiUtil from '../apiUtil/PostApi'


export const usePost = initialValue => {
    const [value, setValue] = useState(initialValue);

    return {
        value,
        handleChange: (e) => {
            setValues({
                ...value,
                [e.target.name]: e.target.value,
            });
        },
        reset: () => setValue(initialValue),
    };
};

export const createPost = data => {
    debugger
    return PostApiUtil.createPost(data);
}
