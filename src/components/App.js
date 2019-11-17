import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

const PageOne = () => {
    return <div> PageOne</div>
}


const PageTow = () => {
    return <div> PageTwo</div>
}

const App =  () =>{
    return (
        <div>
            <BrowserRouter>
                <Route path="/" component={PageOne} />
                <Route path="/pagetwo" component={PageTow} />
            </BrowserRouter>
        </div>
    )
}
export default App;