import React from 'react';

import images from './Contact.jpg';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

//import imageframe from './';

class ContactUs extends React.Component{
      render() {
        return(
          <div>   
          <h1>Contact Us </h1>
          <p> 
           <br/>

           Reviews Email - tasteofteareviews@gmail.com

           <br/> <br/>

           Phone - 857 -(234)-5882

           <br/><br></br>
           
           General Email - tasteoftea@gmail.com
            
            
            
            
          </p>
          <img src = {images}></img>
          <Card
        style={{
          width: 400,
          backgroundColor: "Green",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Greetings of the day
          </Typography>
          <Typography variant="h5" component="h2">
          
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Please leave a voice message if the phone is busy
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Stay Safe.....</Button>
        </CardActions>
      </Card>













          </div>

         )


    }


    

}

export default ContactUs;