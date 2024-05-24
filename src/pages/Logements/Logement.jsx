import data from '../../data.json';

import { useParams } from 'react-router-dom';

import "./logement.scss";
import Dropdown from '../../components/Dropdown/Dropdown';
import Slider from '../../components/Slider/Slider';


export default function Logement() {

    // Get logement with id from URL
    let logement;
    let id = useParams().id
    data.forEach(log => {
        if (log.id === id) {
            logement = log;
        }
    })

    // Create array with filled/empty stars
    let stars = [];
    for(let i = 1; i < 6; i++) {
        if(i <= logement.rating) {
            stars.push(
                <li key={"star" + i}>
                    <svg className="star active" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"/>
                    </svg>
                </li>
            );
        } else {
            stars.push(
                <li>
                    <svg className="star" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"/>
                    </svg>
                </li>
            );
        }
    }


    return (
        <article id="logement">
            
            <Slider title={logement.title} pictures={logement.pictures} />

            <div id="logementCard">
                <div id="logementInfo">
                    <section id="logementTitle">
                        <h1 id="logementName">{logement.title}</h1>
                        <p id="logementLocation">{logement.location}</p>
                    </section>

                    <ul id="logementTags">
                        {logement.tags.map(tag=> {
                            return <li key={logement.id + tag} className='tag'>{tag}</li>                
                        })}
                    </ul>
                </div>

                <div id="logementSpecs">
                    <div id="logementOwner">
                        <span>
                            <p>{logement.host.name.split(' ')[0]}</p> 
                            <p>{logement.host.name.split(' ')[1]}</p>
                        </span>
                        <img src={logement.host.picture} alt={logement.host.name + "picture"}/>
                    </div>
                    <ul id="logementRating">
                        {stars.map(star => star)}
                    </ul>
                </div>
            </div>

            <ul id="logementDetails">

                <Dropdown title={"description"} content={logement.description} />
                <Dropdown title={"équipements"} content={logement.equipments} />

            </ul>

        </article>
    );
}