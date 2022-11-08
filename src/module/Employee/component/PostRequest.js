import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { onPostRequest } from '../../action';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const PostRequest = () => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (e.target.id == 'name') {
            //validation
            setName(e.target.value);
        }
        else if (e.target.id == 'job') {
            setJob(e.target.value);
        }
    }

    const handleSubmit = () => {
        // validation
        if (name.trim().length != '' && job.trim().length) {
            dispatch(onPostRequest({
                name,
                job
            }))
        }
        else {
            alert('please add data');
        }
    }

    return (
        <div>

            <TextField
                id="name"
                label="Enter Name"
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="Enter Name"
            />

            <p>{ }</p>

            <TextField
                id="job"
                label="Enter job"
                name="job"
                type="text"
                value={job}
                onChange={handleChange}
                placeholder="Enter job"
            />
            <p>{ }</p>


            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
            >
                Post Data
            </Button>
        </div>
    );
};

export default PostRequest;