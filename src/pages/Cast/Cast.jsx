import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "services/api";
import { Title, List, Item, Wrapp, Img, TextName, TextDesc } from "./Cast.styled";

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';


  const Cast = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const   { id }   = useParams()
    console.log(id)

    useEffect(() => {
        setIsLoading(true)
        getCast(id)
        .then(({ cast }) => {
        setData({...cast})
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }, [id])

  

    return (
        <>
           {!isLoading && (
        <div>
          <Title>Actors</Title>
          <List>
            {data.map(({ cast_id, original_name, profile_path, character }) => (
              <Item key={cast_id}>
                <Wrapp>
                  {profile_path ? (
                    <Img
                      src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                      alt={original_name}
                    />
                  ) : (
                    <Img src={defaultImg} alt={original_name} />
                  )}
                </Wrapp>
                <TextName>Name: {original_name}</TextName>
                <TextDesc >Character: {character}</TextDesc>
              </Item>
            ))}
          </List>
        </div>
      )}
        </>
        )
  

}

export default Cast
