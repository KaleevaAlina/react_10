
    const Router = ReactRouterDOM.BrowserRouter;
    const Route = ReactRouterDOM.Route;
    const Switch = ReactRouterDOM.Switch;
    const NavLink = ReactRouterDOM.NavLink;
       
    class Home extends React.Component{
        render(){
            return <h2>Главная</h2>;
        }
    }
    
    class login extends React.Component{
        render(){
            return <h2>Введите логин и пароль</h2>;
        }
    }
    class News extends React.Component{
        render(){
            return <h2>Новости сайта</h2>;
        }
    }
    class NotFound extends React.Component{
        render(){
            return <h2>Ресурс не найден</h2>;
        }
    }
    class profile extends React.Component{
        render(){
            return <div>
                        <h2>Профиль</h2>
                    </div>;
        }
    }
    class Nav extends React.Component{
        render(){
            return <nav>
                    <NavLink to="/" activeClassName="active">Главная</NavLink>  
                    <NavLink to="/login" activeClassName="active">Вход на сайт</NavLink>
                    <NavLink to="/News" activeClassName="active">Новости</NavLink>  
                    <NavLink to="/profile" activeClassName="active">Профиль</NavLink>
                  </nav>;
        }
    }
    ReactDOM.render(
        <Router>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={login} />
                    <Route path="/News" component={News} />
                    <Route path="/profile" component={profile} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>,
        document.getElementById("app")
    )
