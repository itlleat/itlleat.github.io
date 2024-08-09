import React from "react";
// import 'normalize.css';
import "./Project.css"; // Import the separate CSS file
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';



// <Choose isDarkMode={isDarkMode} />
// <Stack spacing={2}>
// <About isDarkMode={isDarkMode} />
// <AboutTwo isDarkMode={isDarkMode} />
// <AboutThree isDarkMode={isDarkMode} />
// <AboutFour isDarkMode={isDarkMode} />
// </Stack> 

export default function Project({ isDarkMode }) {
  const containerClassName = `project-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
  const textClassName = `project-text ${isDarkMode ? 'dark-text' : 'light-text'}`;

  return (
    <div>
      <Typography variant="h1" className="project-header">
        Server Side Projects
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
        
            <Typography gutterBottom variant="h5" component="div" className="project-link">
              NoSQL Social Media API
            </Typography>
            </a>
            <CardContent>
         
              <Typography variant="body2" className={textClassName}>
                Custom API for a social network that uses Express for routing, a MongoDB database, and the Mongoose ODM.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <CardActionArea className="tech-bar">
              <a className="repo-link" href="https://github.com/itlleat/mongo-mango-social-club">
                <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </a>
              <a href="https://expressjs.com/">
                <img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
              </a>
              <a href="https://www.mongodb.com/">

                <img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="MongoDb" />

              </a>
              <a href="https://nodejs.org/en">

<img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJs" />

</a>
<a href="https://www.javascript.com/">

<img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"  alt="JavaScript" />

</a>

            </CardActionArea>
          </CardActions>
        </Card>




        <Card className="project-card">
          <CardActionArea>
            <a href="https://github.com/itlleat/text-cairn">
              <div className="card-media">
                <div className="background-image-2">
                </div>
              </div>
          
           
              <Typography gutterBottom variant="h5" component="div" className="project-link">
                PWA Text Editor
              </Typography>
              </a>
              <CardContent>
              <Typography variant="body2" className={textClassName}>
                Created with the indexedDB API, this app uses data persistence techniques that create redundancy for browser support and the ability for it to be downloaded and used offline.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <CardActionArea className="tech-bar">
              <a className="repo-link" href="https://github.com/itlleat/text-cairn">
                <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </a>
              <a href="https://expressjs.com/">
                <img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
              </a>
              <a href="https://nodejs.org/en">

<img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJs" />

</a>
<a href="https://www.javascript.com/">

<img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"  alt="JavaScript" />

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
         
          
              <Typography gutterBottom variant="h5" component="div" className="project-link">
                E-Commerce Back End
              </Typography>
              </a>
              <CardContent>
              <Typography variant="body2" className={textClassName}>
                ORM back-end for internet retail using Express.js API routing to use Sequelize to interact with a MySQL database.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <CardActionArea className="tech-bar">
              <a className="repo-link" href="https://github.com/itlleat/ethical-capitalism-simulator">
                <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </a>
              <a href="https://expressjs.com/">
                    <img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
                </a>
                <a href="https://nodejs.org/en">

<img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJs" />

</a>
<a href="https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.">

<img class="grid-item" className="logo"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="MySQL" />

</a>
<a href="https://www.javascript.com/">

<img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"  alt="JavaScript" />

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
          
          
              <Typography gutterBottom variant="h5" component="div" className="project-link">
                CMS Employee Tracker
              </Typography>
              </a>
              <CardContent>
              <Typography variant="body2" className={textClassName}>
                CMS application designed to help non-developers interact with and view information stored in databases using Node.js, Inquirer, and MySQL.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <CardActionArea className="tech-bar">
              <a className="repo-link" href="https://github.com/itlleat/biz-bank/tree/main">
                <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
              </a>
              <a href="https://nodejs.org/en">

<img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJs" />

</a>
<a href="https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.">

<img class="grid-item" className="logo"  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="MySQL" />

</a>
<a href="https://www.javascript.com/">

<img class="grid-item" className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"  alt="JavaScript" />

</a>

            </CardActionArea>
          </CardActions>
        </Card>

      </div>
    </div>
  );
}




