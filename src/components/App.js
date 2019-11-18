import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import  StreamDelete  from './streams/streamDelete';
import  StreamEdit  from './streams/streamEdit';
import  StreamShow  from './streams/streamShow';
import  StreamList  from './streams/streamList';
import StreamCreate from './streams/streamCreate';

// const PageOne = () => {
//     return <div> PageOne
//         <Link to="/pagetwo">Navigate To Page Two</Link>
//     </div>
// }


// const PageTow = () => {
//     return <div> PageTwo
//     <Link to="/">Navigate To Page One</Link>
//     </div>
// }

const App =  () =>{
    return (
        <div>
            <BrowserRouter>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
             <Route path="/streams/edit" exact component={StreamEdit} />
             <Route path="/streams/delete" exact component={StreamDelete} />
             <Route path="/streams/show" exact component={StreamShow} />
                {/* <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTow} /> */}
            </BrowserRouter>
        </div>
    )
}
export default App; 