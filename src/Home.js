import React from 'react' ;

import images from './tea10.jfif';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: 'Red'
        }

        //this.handleClick = this.handleClick.bind(this);
    }

    
 





    //handleClick = () =>{ 

      //  this.props.history.push("/contactUs");

     //}
     
     changeText = () => {

        this.setState({
            buttonText: 'Yellow'

        }


        )
     }


    render() {
        return(
             <div>
                 <h2>Welcome to the Taste Of Tea Shop </h2>
                 <p> </p>
                 <img src = {images}></img>
                
                 <Card
        style={{
          width: 400,
          backgroundColor: "Red",
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
            Give us 10-15 minutes to Serve the Order 
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

export default Home;