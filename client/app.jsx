import React from 'react';
import Home from './pages/home';
import parseRoute from './lib/parse-route';
import NotFound from './pages/not-found';
import AddBookForm from './pages/AddBookForm';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Home />;
    }
    if (route.path === 'addBook') {
      return < AddBookForm/>;
    }
    return <NotFound />;
  }

  render() {
    return (
      <>
        {this.renderPage()}
      </>
    );
  }
}
