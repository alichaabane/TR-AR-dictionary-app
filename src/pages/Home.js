import './Home.scss';
import Button from '@mui/material/Button';
import {CardActions, CardContent, CardHeader, Grid, IconButton, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import {Link} from 'react-router-dom';

function Home() {
    const AppName = 'My Tunisian-Turkish Dictionary'
    return (
        <div className={'card-page'}>
            <Grid container spacing={2} className={'row-container'}>
                <Grid item xs={12} md={12} sm={12}>
                    <Card className={'card cyan'}>
                        <IconButton className={'IconButton'}>
                            <MenuBookIcon className={'IconButton'}/>
                        </IconButton>
                        <CardHeader
                            className='card-header'
                            title={AppName}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                {'Welcome to our Turkish-Tunisian dictionary that will help you to learn major important words in the two languages'}
                            </Typography>
                        </CardContent>
                        <CardActions className={'card-action'}>
                            <Button variant="outlined" size="medium">
                                <Link to="/dictionary">Lets Start ! </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
