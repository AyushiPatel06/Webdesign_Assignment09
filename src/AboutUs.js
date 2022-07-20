import React from 'react';
import images from './tea2_image.jpg';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";


class AboutUs extends React.Component{
      render() {
        return(
          <div>   
          <h1>About Us </h1>
          <p> 
          The Taste of Tea Shop ,was founded in India in the year 2005 by Aravind Poornachandra and had begun with just a single outlet<br/>
          <br/>

          Later it gained popularity among the locals and expanded across the country.
          <br/> <br/>
          Currently the Taste of Tea Shop has Outlets all across India from Jammu and Kashmir to Kanyakumari.
          <br/> <br/>
          <img src = {images}></img>
          <br/><br/>
          Quote - "There is something in the nature of tea that leads us into a world of quiet contemplation of life"
          <br/> <br/>
          The first International Outlet was opened in USA at Boston ,MA on January 1st 2021 and looking forward to expand across the whole country.
          <br/>

          



          </p>




          <Card
        style={{
          width: 400,
          backgroundColor: "Blue",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 16 }}
            color="textSecondary"
            gutterBottom
          >
            Greetings of the day
          </Typography>
          <Typography variant="body3" component="p">
          
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            
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

export default AboutUs;