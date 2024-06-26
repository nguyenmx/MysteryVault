// import React, { useState, useEffect } from 'react';

// const PokemonCard = () => {
//     const [cardData, setCardData] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch('https://api.pokemontcg.io/v2/cards/xy7-54', {
//             headers: {
//                 'X-Api-Key': 'd66ca84c-5882-4e99-8e62-a1e87f9937b3',
//             },
//         })
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 setCardData(data.data); // Store the entire card data object
//                 setIsLoading(false);
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 setIsLoading(false);
//             });
//     }, []);

//     if (isLoading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div>
//             <h1>{cardData.name}</h1>
//             <img src={cardData.images.large} alt={cardData.name} />
//         </div>
//     );
// };

// export default PokemonCard;
import { Center } from '@react-three/drei';
import React, { useState } from 'react';

const PokemonCard = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = () => {
        setIsLoading(true);
        setError(null);
        fetch(`https://api.pokemontcg.io/v2/cards?q=name:${query}`, {
            headers: {
                'X-Api-Key': 'your_api_key_here',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setResults(data.data); // Assuming data.data contains an array of card objects
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setIsLoading(false);
            });
    };

    return (
        <div>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for a card"
            />
            <button onClick={handleSearch}>Search</button>

            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px', justifyContent: 'center', alignItems: 'center' }}>
                {results.map((card) => (
                    <div key={card.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        {/* <h2 style={{ fontSize: '16px', margin: '0 0 10px 0' }}>{card.name}</h2> */}
                        <img src={card.images.small} alt={card.name} style={{ width: '140px', height: 'auto' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokemonCard;


