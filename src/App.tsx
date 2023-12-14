import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout } from "./pages/layout";
import { MenuLayout } from "./pages/menu/menu.layout";
import { GamePage } from "./pages/game.page";
import { MainPage } from "./pages/menu/main.page";
import { LoginPage } from "./pages/menu/login.page";
import { RegisterPage } from "./pages/menu/register.page";
import { PlayPage } from "./pages/menu/play.page";
import { TopPlayersPage } from "./pages/menu/topPlayers.page";
import { Provider } from "react-redux";
import { store } from "./reducers/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<MenuLayout/>}>
                            <Route path="/" element={<MainPage/>}/>
                            <Route path="login" element={<LoginPage/>}/>
                            <Route path="register" element={<RegisterPage/>}/>
                            <Route path="play" element={<PlayPage/>}/>
                            <Route path="top-players" element={<TopPlayersPage/>}/>
                        </Route>
                        <Route path="game/:gameType" element={<GamePage/>}/>
                    </Route>
                    <Route path="*" element={<div>Not Found</div>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
