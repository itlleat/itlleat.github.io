import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import "./Intro.css";
import CardMedia from '@mui/material/CardMedia';
import "./Project.js";

export default function Choose({ isDarkMode }) {
    const containerClassName = `intro-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
    // const textClassName = `intro-text ${isDarkMode ? 'dark-text' : 'light-text'}`; 

    return (
        <>
            <Typography variant="h1" className="intro-header">
                Scott Schulman
            </Typography>
            <hr />
            <Typography gutterBottom variant="h6" component="div" className='intro-header'>
                Full Stack Developer - University of Denver, Colorado
            </Typography> 
            <Typography gutterBottom variant="p" component="div" className='intro-header'>
                I specialize in building custom, dynamic applications driven by data and user demand with an extensive background in Project Management.
            </Typography> 
            {/* <Card className={containerClassName}>
                <CardContent>
                    <div className="grid-container technologies">
                        <div className="container">
                            <a href="https://webplatform.github.io/docs/html/html5/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML" />
                            </a>
                            <a href="https://www.w3.org/Style/CSS/Overview.en.html#:~:text=Cascading%20Style%20Sheets%20(CSS)%20is,from%20the%20CSS%20working%20group.">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS" />
                            </a>
                            <a href="https://www.javascript.com/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" />
                            </a>
                            <a href="https://react.dev/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React" />
                            </a>
                            <a href="https://nodejs.org/en">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJs" />
                            </a>
                            <a href="https://expressjs.com/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" />
                            </a>
                            <a href="https://www.mongodb.com/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="MongoDb" />
                            </a>
                            <a href="https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values.">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain-wordmark.svg" alt="SQL" />
                            </a>
                            <a href="https://graphql.org/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="GraphQL" />
                            </a>
                            <a href="https://aws.amazon.com/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" alt="AWS" />
                            </a>
                            <a href="https://wordpress.com/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain-wordmark.svg" alt="WordPress" />
                            </a>
                            <a href="https://www.python.org/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" alt="Python" />
                            </a>
                            <a href="https://getbootstrap.com/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="Bootstrap" />
                            </a>
                            <a href="https://www.typescriptlang.org/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="TypeScript" />
                            </a>
                            <a href="https://jquery.com/">
                                <img className="grid-item logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="jQuery" />
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card> */}
            <Card className={containerClassName}>
            <CardMedia 
  className='bgimg'
  component="img"
  height="194"
  image={isDarkMode ? require('./images/my_stack.png') : require('./images/my_stack.png')}
  alt="dumas"
/>
            </Card>
        </>
    );
}
