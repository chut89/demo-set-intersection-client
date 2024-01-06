'use client';
//import {useTime, Clock} from './clock.tsx'
import { Avatar, Profile } from './Profile.tsx'

function Card({ title, content }) {
    return (
      <div className="card">
        <div className="card-content">
          <h1>{title}</h1>
          {content}
        </div>
      </div>    
    );
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Profile
            person={{fullname: 'Maria Skłodowska-Curie', imageId: 'szV5sdG'}}
            size={60}
            profession={"physicist and chemist"}
            awards={['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal']}
            discovery={'polonium (chemical element)'}
        />
      </section>
      <section className="profile">
        <Profile
          person={{fullname: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
          size={100}
          profession={"geochemist"}
          awards={['Miyake Prize for geochemistry', 'Tanaka Prize']}
          discovery={'a method for measuring carbon dioxide in seawater'}
        />
      </section>
      <section className="profile">
          <Card 
            title="Photo"
            content={
              <Avatar 
                person={{fullname: 'Aklilu Lemma', imageId:'OKS67lh'}}
                size={70}
              />  
            }
          />
          <Card 
            title="About"
            content={<p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>}
          />  
      </section>
    </div>
  );
}

