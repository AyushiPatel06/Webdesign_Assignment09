import React from 'react';

import images from './job.jpg';
/*import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";*/




//import imageframe from './';

class Jobs extends React.Component{
      render() {
        return(
          <div>

          <h1>Jobs </h1>
          <p> 
           <br/>
           Cashier - Experience Required - 1-2 Years (1 Opening)
           <br/><br/>
           Manager - Experience Required - 3-4 Years (1 Opening)
           <br/><br/>
           Cleaner - No Experience Required (2 Openings)
           <br/><br/>
           <img src = {images}></img>
           <br/><br/>
           Please drop the resume to the following email : tasteoftea@gmail.com 
           <br/><br/>
           Please allow us a week time to respond you back with the response 
          </p>
           


           <Card
        style={{
          width: 400,
          backgroundColor: "Yellow",
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
            Check the details for applying
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

export default Jobs;