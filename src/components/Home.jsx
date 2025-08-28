
import Card from './Card';
// import { Button } from './Button';
import styles from './Home.module.css'
import  { ProjectPreview } from "./Projects"

const Home = () => {
  
  return (
    <div className={styles.home}>
      <div className={styles.homeFirst}>
        <div className={styles.homeFirst1}>
          <div>
          <h2 >
              Welcome to My Portfolio
            </h2>
          </div>
          <div>
            {/* <Button> See Github Repo</Button>
            <Button> See Github Repo</Button> */}
          </div>
        </div>
        <div className={styles.homeFirst2}>
          <img
            className={styles.homeFirst2Img}
            src="/HELAL-FINAL.png"
            alt="Helal Uddin"
          />
        </div>
      </div>

      <div className={styles.homeSecond }>
        <Card > <ProjectPreview/>  </Card>
        
      </div>
    </div>
  );
};

export default Home;
