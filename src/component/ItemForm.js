import { Button, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField } from '@material-ui/core'
import React, { useState } from 'react'

export default function ItemForm(props) {
    const [item, setItem] = useState('')
    const [status, setStatus] = useState('')
    const handleItem = (e) => {
        setItem(e.target.value)
    }
    const handleStatus = (e) => {
        setStatus(e.target.value)

    }
    const formSubmit = (e) => {
        e.preventDefault();

        const data = {
            item: item,
            status: status,
        }
        props.onSaveItemsData(data)
        setItem('')
        setStatus('')
    }
    return (
        <>

            <Grid container >
                <form autoComplete="off" onSubmit={formSubmit}>
                    <TextField id="outlined-basic" label="Add Item" variant="outlined" value={item} onChange={handleItem} />
                    <FormLabel component="p">Status</FormLabel>
                    <RadioGroup aria-label="status" name="status1" value={status} onChange={handleStatus}>
                        <FormControlLabel value="done" control={<Radio />} label="Done" />
                        <FormControlLabel value="pending" control={<Radio />} label="Pending" />

                    </RadioGroup>
                    <Button type='submit' variant="contained" color="primary" >
                        Add
                    </Button>
                </form>
            </Grid>


        </ >
    )
}
