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
                    <span>{el}, </span>
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
