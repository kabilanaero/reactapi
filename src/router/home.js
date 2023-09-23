import  React ,{ useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import { useNavigate} from 'react-router-dom'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './home.css'


const Home = () =>  {
  const Navigate = useNavigate();
    const [posts,setPosts] = useState([]);
    console.log(posts);

     const getposts =() =>{
        fetch('https://api.spacexdata.com/v3/launches/')
        .then((response) => response.json())
        .then((json) => setPosts(json))
        .catch((err) => console.log(err))
     }

     useEffect(() => {
        getposts()
     },[])

     


     const product =  id => {
      Navigate(`/detail/${id}`)
     }

  return (
<div className='container'>
<div className='row'>
  
 {posts.map ((post,index) => 
    <div className='col'  key={index}>

    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"

        image={post.links.mission_patch }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {post.mission_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {post.details}
        </Typography>
      </CardContent>
      <CardActions>
         <Button size="small" onClick= {() => product (post.flight_number)} >details</Button>
         <Button size="small" >Learn More</Button> 
      </CardActions>
    </Card>
 
    </div>
    )}

    </div>
    </div>
  );
}
export default Home