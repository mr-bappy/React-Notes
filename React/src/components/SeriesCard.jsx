import './Netflix.css'
import styled from 'styled-components'

export const SeriesCard = ({item}) => {

    const {
        id, img_url, name, rating, description, cast, genre, watch_url
    } = item;

    // const buttonStyle = {
    //     border: 'none',
    //     outline: 'none',
    //     padding: '1.2rem 1.4rem',
    //     fontSize: '1.6rem',
    //     fontWeight: 'bold',
    //     backgroundColor: `${rating>=8.5? '#7dcea0' : '#f7dc6f'}`,
    //     color: '#000',
    //     cursor: 'pointer'
    // };

    const ButtonStyle = styled.button`
        border: none;
        outline: none;
        padding: 1.2rem 1.4rem;
        font-size: 1.6rem;
        font-weight: bold;
        background-color: ${
                (props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"
            };
        color: #000;
        cursor: pointer;
    `;

    return (
        <div className="card">
            <div>
                <img 
                src={img_url} 
                alt={name} 
                width={'100%'}
                height={'100%'}/>
            </div>
            <div className="card-content">
                <h1>Name: {name}</h1> 
                <h2 style={{fontSize: '2rem'}}>Rating: <span className={`rating ${rating>=8.5 ?'super_hit':'average'}`}>{rating}</span> </h2>
                <p style={{margin:'1.2rem 0'}}>Summary: {description} </p>
                <p style={{margin:'1.2rem 0'}}>Genre: {genre}</p>
                <p style={{margin:'1.2rem 0'}}>Cast: {cast}</p>
                <a href={watch_url} target='_blank'>
                    {/* <button style={buttonStyle}>Watch Now</button> */}
                    <ButtonStyle rating={rating}>Watch Now</ButtonStyle>
                </a>
            </div>
           
        </div>
    )
}