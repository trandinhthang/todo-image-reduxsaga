import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Button } from "reactstrap";
import AddImage from "./components/AddImage";
import ListImage from "./components/ListImage";
import HomePage from "./components/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <ToastContainer />
      <div style={{ margin: 10, padding: 10 }}>
        <Link style={{ paddingRight: 10 }} to="/">
          <Button color="success">Trang chủ</Button>
        </Link>
        <Link style={{ paddingRight: 10 }} to="/themhinhanh">
          <Button color="primary">Thêm hình ảnh yêu thích</Button>
        </Link>
        <Link to="/danhsachhinhanh">
          <Button color="warning">Danh sách hình ảnh yêu thích</Button>
        </Link>
      </div>
      <div style={{ margin: 20 }}>
        <Switch>
          <Route path="/themhinhanh">
            <AddImage />
          </Route>
          <Route path="/danhsachhinhanh">
            <ListImage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
