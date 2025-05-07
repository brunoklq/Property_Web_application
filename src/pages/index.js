import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/Home.module.css'
import styles from '../styles/Home.module.css';




import { Home } from '@/components/home';


export default function House() {
    return (


      <div className={styles.wrapper}> 
        <section>

      
          <Home/>
      
        </section>

        </div>
      );

    
};