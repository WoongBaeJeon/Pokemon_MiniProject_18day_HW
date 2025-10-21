import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { fetchPokemonDataById } from "./RTK/thunk";
import { Routes, Route, Link } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
/*
    포켓몬 번호 data.id
    포켓몬 이름 data.names.find((el) => el.language.name === "ko").name
    포켓몬 이미지 앞뒤
    포켓몬 종류? data.genera.find((el) => el.language.name === "ko").genus
    포켓몬 설명 data.flavor_text_entries.find(
            (el) => el.language.name === "ko" && el.version.name === "x"
          ).flavor_text 
*/
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemonDataById(151));
  }, []);

  return (
    <>
      <h1 className="text-[100px] text-center">포켓몬 도감</h1>
      <nav className="flex gap-10 justify-center mb-7 font-bold text-4xl">
        <Link to={"/"}>메인</Link>
        <Link to={"/detail"}>디테일</Link>
        <Link to={"/search"}>검색</Link>
        <Link to={"/favorite"}>찜목록</Link>
      </nav>
      <main className="flex flex-wrap justify-center gap-5 p-[10px]">
        <Routes>
          <Route path={"/"} element={<Main />}>
            Main
          </Route>
          <Route path={"/detail/:pokemonId"} element={<Detail />}>
            Detail
          </Route>
          <Route path={"/search"} element={<Search />}>
            search
          </Route>
          <Route path={"/favorite"} element={<Favorite />}>
            favorite
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
