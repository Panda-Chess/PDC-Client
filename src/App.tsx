import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Layout } from "./pages/layout";
import { MenuLayout } from "./pages/menu/menuLayout";
import { Game } from "./pages/game";
import { Main } from "./pages/menu/main";
import { Login } from "./pages/menu/login";
import { Register } from "./pages/menu/register";
import { Play } from "./pages/menu/play";
import { TopPlayers } from "./pages/menu/topPlayers";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<MenuLayout/>}>
                        <Route path="/" element={<Main/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="play" element={<Play/>}/>
                        <Route path="top-players" element={<TopPlayers/>}/>
                    </Route>
                    <Route path="game/:gameType" element={<Game/>}/>
                </Route>
                <Route path="*" element={<div>Not Found</div>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
