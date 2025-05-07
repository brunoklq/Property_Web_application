import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "@/components/nav";
import { Footer } from '@/components/footer';
import '@/styles/Home.module.css'
import styles from '../styles/Home.module.css';




import { Home } from '@/components/home';


export default function House() {
    return (

      

        <section>
          <Nav/>

      
          <div class="bg-dark"> 
          <Home/>
        
          </div>
          <Footer/>
        </section>

     
      );

    
};