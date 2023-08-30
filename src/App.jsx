import "./App.css";
import {
  NavLink,
  Route,
  Routes,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <button type="button" onClick={handleLogout}>
      登出
    </button>
  );
};
const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <LogOut />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

const Post = () => {
  return (
    <>
      <p>this is POST page</p>
      <Outlet />
    </>
  );
};

const PostDetail = () => {
  let params = useParams();
  return <p>PostDetail:{params.postId}</p>;
};
function App() {
  return (
    <div className="container">
      <div className="nav-link">
        <NavLink to="/">
          <p>回到首頁</p>
        </NavLink>
        <NavLink to="/register">
          <p>註冊頁面</p>
        </NavLink>
        <NavLink to="/login">
          <p>登入頁面</p>
        </NavLink>
        <NavLink to="/todo">
          <p>Todo 頁面</p>
        </NavLink>
        <NavLink to="/post/post9999">
          <p>Post 詳細頁面</p>
        </NavLink>
      </div>
      {/* Routes, Route 練習區 */}
      {/* 練習區 */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/post" element={<Post />}>
          <Route path=":postId" element={<PostDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
