import React from 'react';

let data = {
    // Card Data
    info: {
        name: "Talk is Cheap",
        avatar_url: "https://s-media-cache-ak0.pinimg.com/236x/c3/43/13/c343139997dbc466f520243c882efd5a--music-bands.jpg",
        fav_Song: "https://www.youtube.com/watch?v=aQZDyyIyQMA"
    }
};

class Card extends React.Component {

    render() {
        return (
            <div style={{ display: 'inline-block', background: 'smoke', width: '320px' }}>
                <a style={{ color: 'silver', textDecoration: 'none' }} href={data.info.fav_Song}>
                    <img width="95" style={{ borderRadius: '8px', borderRight: '5px solid gold' }} src={data.info.avatar_url} />
                    <div style={{ display: 'inline-block', marginLeft: 10 }}>
                        <div style={{ color: 'Green', fontSize: '1.5em', fontWeight: 'bold' }}> {data.info.name} </div>
                        <div> Chet Faker </div>
                    </div>
                </a>
            </div>
        );
    }
}

export default Card; 