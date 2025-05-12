import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav_loged } from "@/components/nav_loged";
import { Footer } from '@/components/footer';
import '@/styles/Home.module.css'
import styles from '../styles/Home.module.css';




import { Home } from '@/components/home';


export default function House() {
    return (

      

        <section>
          <Nav_loged/>

      
          <div class="bg-dark"> 
          <Home/>
        
          </div>
          <Footer/>
        </section>

     
      );

    
};