import "../main.css";

function Main() {
  return (
    <div>
      <div id="start">
        <img id="me" src="https://i.imgur.com/d0z9IrJ.jpeg" alt="pic of me" />
        <h1>Josh Stotts</h1>
        <div id="bio">
          Hi, my name is Josh! I am a dedicated software engineer recently
          graduating from the outstanding software engineering bootcamp General
          Assembly has to offer. Making a career change from the golf industry
          to the tech industry was a big jump for me but more often than not the
          hardest part is the first step. I've now completed the first step and
          eager to keep pushing in the only direction I know, forward. In my
          free time I love to emmerse myself in the world of sports, mainly
          basketball and golf, watch marvel movies and hang out with friends.
        </div>
      </div>
      <h2>Skills</h2>
      <div id="logo">
        <img
          src="https://cdn.iconscout.com/icon/free/png-256/react-4-1175110.png"
          alt="react logo"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/javascript-2752148-2284965.png"
          alt="JavaScript logo"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/html5-42-1175210.png"
          alt="HTML 5"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/css3-8-1175200.png"
          alt="CSS 3"
        />
      </div>
      <div id="logo">
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/mongodb-5-1175140.png"
          alt="MongoDB logo"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/python-1-226045.png"
          alt="python logo"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/jquery-8-1175153.png"
          alt="jQuery logo"
        />
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
          alt="express logo"
        />
      </div>
      <div id="logo">
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/heroku-9-1175212.png"
          alt="heroku logo"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/nodejs-2-226035.png"
          alt="node.js logo"
        />
        <img
          src="https://cdn.iconscout.com/icon/free/png-128/postgresql-11-1175122.png"
          alt="postgreSQL logo"
        />
      </div>
      <div id="p-color">
        <h2>Projects</h2>
        <div id="projects">
        <h3 id="p1">WatchList</h3>
          <a
            href="https://shows-frontjps.herokuapp.com/movies"
            id="watch"
            target="_blank"
          >
            <img
              id="watchlistpic"
              src="https://i.imgur.com/laS7Pa2.png"
              alt="WatchList homepage"
            />
          </a>
          <h3 id="p4">MY MCU</h3>
          <a href="https://mymcu.herokuapp.com/" id="My MCU" target="_blank">
            
            <img
              id="mcupic"
              src="https://i.imgur.com/QwT3V18.png"
              alt="My MCU homepage"
            />
          </a>
        </div>
          <h3 id="p2">WORLD TRAVELER</h3>
          <a
            href="https://travel-app-sp.netlify.app/"
            id="travel"
            target="_blank"
          >
            <img
              id="travelpic"
              src="https://i.imgur.com/cEZZSt5.png"
              alt="travel homepage"
            />
          </a>
      </div>

      <h2>Hobbies</h2>
      <div id="hobbie">
        <img src="https://cdn.iconscout.com/icon/free/png-128/golf-348-435431.png" alt="golf icon" />
        <img src="https://cdn.iconscout.com/icon/free/png-128/basketball-255-458055.png" alt="basketball icon" />
        <img src="https://cdn.iconscout.com/icon/free/png-128/music-tune-6-475001.png" alt="music icon" />
        <img src="https://cdn.iconscout.com/icon/free/png-128/movies-4089608-3387647.png" alt="movie icon" />
      </div>
      <div id="hobbie">
        <img src="https://cdn.iconscout.com/icon/free/png-128/code-development-coding-programming-language-44592.png" alt="code icon" />
        <img src="https://cdn.iconscout.com/icon/free/png-128/travel-plane-fly-flight-international-tour-6-4774.png" alt="travel icon" />
        <img src="https://cdn.iconscout.com/icon/free/png-128/snow-boarding-459341.png" alt="snowboard icon" />
        <img src="https://cdn.iconscout.com/icon/free/png-128/weights-4863896-4042858.png" alt="lifting icon" />
      </div>
      <div id="contact">
        <h4>Contact Me!</h4>
        <div>
          <a href="https://www.linkedin.com/in/joshstotts" target="_blank">
            <img
              id="linkedin"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png"
              alt="LinkedIn logo"
            />
          </a>
          <a href="https://github.com/joshstotts" target="_blank">
            <img
              id="github"
              src="https://logodownload.org/wp-content/uploads/2019/08/github-logo-2.png"
              alt="LinkedIn logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
