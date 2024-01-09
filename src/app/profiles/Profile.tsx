import Panel from './Panel.tsx';

function getImageUrl(imageId, size = 's') {
  return ('https://i.imgur.com/' +
    imageId +
    size +
    '.jpg'
  );
}

export function Avatar({ person, size }) {
    return (
            <img
                  className="avatar"
                  src={getImageUrl(person.imageId, size < 90 ? 's' : 'b')}
                  alt={person.fullname}
                  width={size}
                  height={size}
            />
    );
}

function Header({ person }) {
    return <h2>{person.fullname}</h2>
}

export function Profile({ person, size, profession, awards, discovery }) {
  return (
        <Panel>   
            <Header person = {person} />
            <Avatar
                  person = {person}
                  size = {size}
            />
            <ul>
              <li>
                <b>Profession: </b> 
                {profession}
              </li>
              <li>
                <b>Awards: {awards.length} </b>
                <br/>
                ({awards.map(el => (
                    <span key={el.id}>{el.award}, </span>
                ))})
              </li>
              <li>
                <b>Discovered: </b>
                {discovery}
              </li>
            </ul> 
        </Panel>
  );
}

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

export function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <Profile
            person={{fullname: 'Maria Skłodowska-Curie', imageId: 'szV5sdG'}}
            size={60}
            profession={"physicist and chemist"}
            awards={[{id:0, award:'Nobel Prize in Physics'}, {id:1, award:'Nobel Prize in Chemistry'}, {id:2, award:'Davy Medal'}, {id:3, award:'Matteucci Medal'}]}
            discovery={'polonium (chemical element)'}
        />
      </section>
      <section className="profile">
        <Profile
          person={{fullname: 'Katsuko Saruhashi', imageId: 'YfeOqp2'}}
          size={100}
          profession={"geochemist"}
          awards={[{id:0, award:'Miyake Prize for geochemistry'}, {id:1, award:'Tanaka Prize'}]}
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
