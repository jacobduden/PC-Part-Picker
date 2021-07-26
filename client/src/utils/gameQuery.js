const { REACT_APP_API_KEY } = process.env;
export const GameAction = () => {
    fetch(`https://thingproxy.freeboard.io/fetch/https://api.rawg.io/api/genres?key=${REACT_APP_API_KEY}`, {
        method: 'GET',
        headers: {
            'Content-type': "application/json"
        },
    }
).then(response=>{
     return response.json();
        
    }).then(data=>{
            /* let action = data.results[0].games
            let strategy = data.results[4].games
            let racing = data.results[11].games
            let adventure = data.results[2].games
            let simulation = data.results[7].games
            action.forEach(element => {
                console.log(element)
            });
            console.log(action); */
            
    }).catch(err=>{
        console.log(err)
    }) 
}


//0, 1, 3, 4, 5, 6, 8, 9, 11,12,13,15,16,17,18, 19