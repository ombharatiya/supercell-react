import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Games from "./modules/games/Games";
import Home from "./modules/home/Home";
import HayDay from "./modules/hayday/HayDay";
import NotFound from "./NotFound";
import Layout from "./components/Layouts";
import NavigationBar from "./components/NavigationBar";
import Container from "react-bootstrap/esm/Container";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    <React.Fragment>
      <Container>
        <NavigationBar />
      </Container>
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route exact>
              <Route exact path="/games" component={Games} />
              <Route exact path="/hayday" component={HayDay} />
              <Route exact path="/games/hayday" component={HayDay} />
              <Route component={NotFound} />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Layout>
      <Footer />
    </React.Fragment>
  );
}

export default App;
