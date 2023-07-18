import React from "react";
// import 'normalize.css';
import "./Project.css"; // Import the separate CSS file
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';




export default function Project({ isDarkMode }) {
 const containerClassName = `project-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
  const textClassName = `project-text ${isDarkMode ? 'dark-text' : 'light-text'}`; 

  return (
<div>
    <Typography variant="h1" className="project-header">
    Recent Projects
  </Typography>
  <hr />

    <div className={containerClassName}>


     
        <Card className="project-card">
          <CardActionArea>
          <a href="https://github.com/itlleat/mongo-mango-social-club">
          <div className="card-media">
        <div className="background-image-1"> 
        </div>
      </div>
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={textClassName}>
               NoSQL Social Media API
              </Typography>
              <Typography variant="body2" className={textClassName}>
              Custom API for a social network that uses Express for routing, a MongoDB database, and the Mongoose ODM.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <CardActionArea>
            <a className="repo-link" href="https://github.com/itlleat/mongo-mango-social-club">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                <a href="https://expressjs.com/">
                    <img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
                </a>
                <a href="https://www.mongodb.com/">

<img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="MongoDb" />

</a>

                </CardActionArea>
          </CardActions>
        </Card>
      
        <Card className="project-card">
          <CardActionArea>
          <a href="https://text-cairn.herokuapp.com/">
          <div className="card-media">
        <div className="background-image-2"> 
        </div>
      </div>
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={textClassName}>
               PWA Text Editor
              </Typography>
              <Typography variant="body2" className={textClassName}>
              Created with the indexedDB API, this app features a number of data persistence techniques that create redundancy for browser support and the ability for it to be downloaded and used offline.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <CardActionArea>
            <a className="repo-link" href="https://github.com/itlleat/mongo-mango-social-club">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                </CardActionArea>
          </CardActions>
        </Card>

        <Card className="project-card">
          <CardActionArea>
          <a href="https://github.com/itlleat/ethical-capitalism-simulator">
          <div className="card-media">
        <div className="background-image-3"> 
        </div>
      </div>
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={textClassName}>
               E-Commerce Back End
              </Typography>
              
              <Typography variant="body2" className={textClassName}>
              ORM back-end for internet retail using Express.js API routing to use Sequelize to interact with a MySQL database.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <CardActionArea>
            <a className="repo-link" href="https://github.com/itlleat/ethical-capitalism-simulator">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                </CardActionArea>
          </CardActions>
        </Card>

        <Card className="project-card">
          <CardActionArea>
          <a href="https://github.com/itlleat/biz-bank/tree/main">
          <div className="card-media">
        <div className="background-image-4"> 
        </div>
      </div>
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={textClassName}>
              CMS Employee Tracker
              </Typography>
              <Typography variant="body2" className={textClassName}>
              CMS application designed to help non-developers interact with and view information stored in databases using Node.js, Inquirer, and MySQL.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <CardActionArea>
            <a className="repo-link" href="https://github.com/itlleat/biz-bank/tree/main">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                </CardActionArea>
          </CardActions>
        </Card>
       
    </div>
    </div>
  );
}




