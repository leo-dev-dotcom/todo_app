import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'

function Items(props) {
    return (
        <>
            <Grid >
                <Card >
                    <CardContent >
                        <Typography component="h5" variant="h5" >
                            Task: {props.item}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Status:  {props.status}
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
        </>
    )
}

export default Items
