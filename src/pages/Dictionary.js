import './Dictionary.scss';
import {CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography} from "@mui/material";
import Card from "@mui/material/Card";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import image1 from '../static/salute.jpg';
import image2 from '../static/foods.jpg';
import image3 from '../static/shopping.jpg';
import image4 from '../static/love.jpg';
import image5 from '../static/questions.jpg';

function Dictionary() {
    return (
        <div>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className={'row-container'}
            >
                <Grid item className={'spacing-card'}>
                    <Card className={'card cyan'}>
                        <CardMedia
                            component="img"
                            className={'images'}
                            image={image1}
                            alt=""
                        />
                        <IconButton className={'IconButton'}>
                            <MenuBookIcon className={'IconButton'}/>
                        </IconButton>
                        <CardHeader
                            className='card-header'
                            title={'Ettahiet / Selamlamak'}
                        />
                        <CardContent>
                            <Typography className={'text'} variant="body2" color="textSecondary">
                                {'Welcome to our Turkish-Tunisian dictionary that will help you to learn major important words in the two languages'}
                            </Typography>
                        </CardContent>
                        <CardActions className={'card-action'}>
                            <Button variant="outlined" size="medium">
                                <Link to="/salute">Lets Start ! </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={'spacing-card'}>
                    <Card className={'card cyan'}>
                        <CardMedia
                            component="img"
                            className={'images'}
                            image={image2}
                            alt=""
                        />
                        <IconButton className={'IconButton'}>
                            <MenuBookIcon className={'IconButton'}/>
                        </IconButton>
                        <CardHeader
                            className='card-header'
                            title={'Mekla / Gıdalar'}
                        />
                        <Typography className={'text'} variant="body2" color="textSecondary">
                            {'Welcome to our Turkish-Tunisian dictionary that will help you to learn major important words in the two languages'}
                        </Typography>
                        <CardActions className={'card-action'}>
                            <Button variant="outlined" size="medium">
                                <Link to="/food">Lets Start ! </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={'spacing-card'}>
                    <Card className={'card cyan'}>
                        <CardMedia
                            component="img"
                            className={'images'}
                            image={image3}
                            alt=""
                        />
                        <IconButton className={'IconButton'}>
                            <MenuBookIcon className={'IconButton'}/>
                        </IconButton>
                        <CardHeader
                            className='card-header'
                            title={'Shopping / alışveriş yapmak'}
                        />
                        <Typography className={'text'} variant="body2" color="textSecondary">
                            {'Welcome to our Turkish-Tunisian dictionary that will help you to learn major important words in the two languages'}
                        </Typography>
                        <CardActions className={'card-action'}>
                            <Button variant="outlined" size="medium">
                                <Link to="/shopping">Lets Start ! </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={'spacing-card'}>
                    <Card className={'card cyan'}>
                        <CardMedia
                            component="img"
                            className={'images'}
                            image={image4}
                            alt=""
                        />
                        <IconButton className={'IconButton'}>
                            <MenuBookIcon className={'IconButton'}/>
                        </IconButton>
                        <CardHeader
                            className='card-header'
                            title={'Hob / Aşk'}
                        />
                        <Typography className={'text'} variant="body2" color="textSecondary">
                            {'Welcome to our Turkish-Tunisian dictionary that will help you to learn major important words in the two languages'}
                        </Typography>
                        <CardActions className={'card-action'}>
                            <Button variant="outlined" size="medium">
                                <Link to="/love">Lets Start ! </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item className={'spacing-card'}>
                    <Card className={'card cyan'}>
                        <CardMedia
                            component="img"
                            className={'images'}
                            image={image5}
                            alt=""
                        />
                        <IconButton className={'IconButton'}>
                            <MenuBookIcon className={'IconButton'}/>
                        </IconButton>
                        <CardHeader
                            className='card-header'
                            title={'Soueelat / Sorular'}
                        />
                        <Typography className={'text'} variant="body2" color="textSecondary">
                            {'Welcome to our Turkish-Tunisian dictionary that will help you to learn major important words in the two languages'}
                        </Typography>
                        <CardActions className={'card-action'}>
                            <Button variant="outlined" size="medium">
                                <Link to="/ask">Lets Start ! </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default Dictionary;
