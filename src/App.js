import './App.css';

// components
import LandingPage from './components/landingpage/LandingPage';

// package
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

function App() {
    return (
        <>
            <Helmet>
                <title>Skyline Hectares</title>
                <meta name="description" content="App Description" />
                <meta name="theme-color" content="#008f68" />
            </Helmet>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
