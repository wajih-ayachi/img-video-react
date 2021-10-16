import imageSrc from './imageInSrc.jpg';
import './style.css';

function App() {

  return (
 
<div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title red">Wajih-app</h1>
          <br />
          <img src={imageSrc} alt="lala" style={{maxWidth: '50%'}}/>
          <br />
          <img src="imageInPublic.jpg" alt="lala" style={{maxWidth: '50%'}}/>
        </div>
        <video width={320} height={240} controls>
          <source src="myVideo.mp4" type="video/mp4" />
        </video>
      </div>
  );
}

export default App;