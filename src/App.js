
import react from 'react';
import { useState } from 'react';
import Axios from 'axios'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Receipe from './Component/Receipe';


const App = () => {
    const [querry, setQuerry] = useState("");
    const [recp, setRecp] = useState([]);

    const App_id = "32cfb61c";
    const App_key = "1f7b73c2a07ff2303fe050fc9c9c3fab";
    const url = `https://api.edamam.com/search?q=
    ${querry}&app_id=${App_id}&app_key=${App_key}&from=0&to=12&calories=591-722&health=alcohol-free`;
    const getdata = async () => {
        if (querry === "") {
            return;
        }
        var result = await Axios.get(url);
        console.log(result.data);

        setRecp(result.data.hits);
        setQuerry("");
    }
    const onChange = e => {
        setQuerry(e.target.value);
    }
    return (
        <>
            <div className='pos'>
                <div className='dhe1'>
                    <h1 className='he1'>Search Your Receipe</h1>
                </div>
                <div className='ds'>
                    <input type="text" autoComplete='off' className='search' onChange={onChange} value={querry} />
                    <button onClick={getdata} className="btn1">search</button>
                </div>
            </div>
            <div className='bd'>

                <div className='rec'>
                    {recp !== [] && recp.map(re =>

                        <Receipe
                            key={uuidv4()}
                            label={re.recipe.label}
                            img={re.recipe.image}
                            url={re.recipe.url}
                            ingr={re.recipe.ingredients}

                        />
                    )}
                </div>
            </div>

        </>
    )
}

export default App;