import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, CardMedia } from '@mui/material';
import { useDispatch } from 'react-redux';
import { onDelete } from '../../action';

const EmployeeDisplay = ({ employeeData }) => {

    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(onDelete(id));
    }

    const employeeList = employeeData.length ? (

        employeeData.map(item => {
            return (
                <React.Fragment key={item.id}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {item.email}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={() => handleDelete(item.id)}>Delete</Button>
                        </CardActions>
                    </Card>
                </React.Fragment>
            )
        })) : ('No Posts Yet')


    return (
        <>
            {employeeList}
        </>
    )

};

export default EmployeeDisplay;

