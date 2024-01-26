import './header.css';
import ServicesAres from './service';
import banner from './assets/option1.jpeg';
function HeaderAres (){
    return (
        <div className='background-container'>
            <img src={banner} className='background-image'/>
            <br/>
        </div>
    );
};

export default HeaderAres;