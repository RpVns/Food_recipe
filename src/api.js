// // import { createElement } from 'react';
import react from 'react';
import { useState } from 'react';
import Axios from 'axios'
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Receipe from './Component/Receipe';


const App = () => {
    const [querry, setQuerry] = useState("");
    const [recp, setRecp] = useState([]);
    const [cbv, setCbv] = useState(true);

    
    const url = https://raw.githubusercontent.com/stefanbinder/countries-states/master/countries.json;
    const getdata = async () => {
        if (querry === "") {
            return;
        }
        var result = await Axios.get(url);
        console.log(result.data);

        setRecp(result.data.hits);
        setQuerry("");
    }
    const check = (e) => {
        setQuerry(e.target.value);
        setCbv(e.target.checked);
        console.log(cbv);
    }
    const getd = () => {
        getdata();
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
                <div className='cb'>
                    <div>
                        <label>
                            <input type='checkbox' onChange={(ch)=>{
                                setCbv(ch.target.checked)
                                console.log(cbv);
                            }}
                             value="Corn" autoComplete='off' />
                            <span>Corn</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type='checkbox' onChange={check} value="Curry" autoComplete='off' />
                            <span>Curry</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type='checkbox' onChange={check} value="Pizza" autoComplete='off' />
                            <span>Pizza</span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type='checkbox' onChange={check} value="Noodles" autoComplete='off' />
                            <span>Noodles</span>
                        </label>
                    </div>
                </div>

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