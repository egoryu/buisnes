import './App.css';
import {Footer} from "./components/Footer";
import {Header} from "./components/header/Header";
import {Menu} from "./components/Menu";
import {MainPage} from "./components/content/main/MainPage";
import {Trade} from "./components/content/trading/Trade";
import {Route, Routes} from "react-router-dom";
import {Stock} from "./components/content/trading/Stock";
import {RootProfile} from "./components/content/profile/RootProfile";

function App() {
  return (
    <div className='wrapper'>
        <Header />
        <div className={'menuContent'}>
            <Menu />

            <Routes>
                <Route path="/" element={<MainPage/> } />
                <Route path="trading" element={<Trade />} />
                <Route path="profile" element={<RootProfile />} />
                <Route path="trading/stock/:id" element={<Stock />}/>
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
