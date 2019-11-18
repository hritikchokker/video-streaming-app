import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import  StreamDelete  from './streams/streamDelete';
import  StreamEdit  from './streams/streamEdit';
import  StreamShow  from './streams/streamShow';
import  StreamList  from './streams/streamList';
import StreamCreate from './streams/streamCreate';
import Header from './Header';


const App =  () =>{
    return (
        <div className="ui container">
            <BrowserRouter>
        <div>
        <Header />
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
             <Route path="/streams/edit" exact component={StreamEdit} />
             <Route path="/streams/delete" exact component={StreamDelete} />
             <Route path="/streams/show" exact component={StreamShow} />
                {/* <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTow} /> */}
        </div>
            </BrowserRouter>
        </div>
    )
}
export default App; 