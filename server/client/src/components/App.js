import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Header from './Header.js';
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
        <div>
          {/*constant header component on all routes*/}
          <Header />

          {/*routed components*/}
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
