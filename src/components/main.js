import '../main.css';

function Main() {
  return (
    <div>
      <h1>Josh Stotts</h1>
      <div id='bio'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium numquam quisquam pariatur, quaerat fugit, in alias voluptatum nemo magni illum modi quibusdam soluta porro voluptate fugiat aliquid officiis voluptatem odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illo quae nihil ad esse facilis asperiores minima voluptas maiores eos repudiandae, voluptate perferendis optio omnis, saepe atque enim voluptatibus voluptates.
      </div>
      <h2>Skills</h2>
        <div id='logo'>
          <img src="https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png" alt="React logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript logo" />
          <img src="https://www.logolynx.com/images/logolynx/97/97e9aeba921974016df5da3abe701319.png" alt="HTML 5" />
          <img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/042015/css3.png?itok=OlYIVwA0" alt="CSS 3" />
          <img src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt="MongoDB logo" />
          <img src="https://openjsf.org/wp-content/uploads/sites/84/2019/10/jquery-logo-vertical_large_square.png" alt="jQuery logo" />

        </div>
      <h2>Projects</h2>
      <div id='projects'>
        <h3 id='p1' >Mario Kart</h3>
        <div id='mario' ><img id='mariopic' src="https://i.imgur.com/b3SwPCe.png" alt="Mario Kart homepage" /></div>
        <div id='travel' ><img id='travelpic' src="https://i.imgur.com/cEZZSt5.png" alt="travel homepage" /></div>
        <h3 id='p2' >World Traveler</h3>
        <h3 id='p3' >Pokedex</h3>
        <div id='pokedex'><img id='pokedexpic' src="https://i.imgur.com/kkXkFBC.png" alt="pokedex homepage" /></div>
      </div>
      {/* <h2>About Me</h2>
      <p></p> */}
      <h4>Contact Me!</h4>

      <div id='c1'>
        <img id='emailicon' src="https://olc-wordpress-assets.s3.amazonaws.com/uploads/2020/05/new-email-icon.png" alt="email icon" />
        <p id='email' >joshstotts@outlook.com</p>
      </div>

      <div id='c2'>
        <img id='phoneicon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRslmAJE0i0prxQAj_pueZKmLCZhWy3frKr60a1nZUie5hRpgNGThuVGOJ2k_ularlGAI0&usqp=CAU" alt="phone icon" />
        <p id='phone' >515-657-1096</p>
      </div>

    <div>
        <a href="www.linkedin.com/in/joshstotts">
            <img id='linkedin' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/768px-LinkedIn_logo_initials.png" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/joshstotts">
            <img id='github' src="https://logodownload.org/wp-content/uploads/2019/08/github-logo-2.png" alt="LinkedIn logo" />
        </a>
    </div>
      
    </div>
  );
}

export default Main;
