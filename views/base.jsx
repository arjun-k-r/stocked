'use strict';

let React = require('react');

class StockedLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Stocked | {this.props.pageTitle}</title>
                    <meta httpEquiv='X-UA-Compatible' content='IE=Edge' />
                    <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                    <meta charSet='UTF-8' />
                    <meta name='description' content='Fun little stock tracking site' />
                    <meta name='keywords' content='Stocked, stock, tracking' />
                    <meta name='author' content='DeveloperDemetri' />
                    <link type='text/css' rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons' />
                    <link type='text/css' rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css' media='screen,projection' />
                    <link rel='shortcut icon' href='https://storage.googleapis.com/stocked/stocked.png' />
                    <script type='text/javascript' src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
                    <script type='text/javascript' src='https://use.fontawesome.com/dcbb5f6e26.js'></script>
                </head>
                <body>
                    <nav>
                        <div className="nav-wrapper green accent-3 grey-text text-lighten-4">
                            <a href="https://github.com/developerDemetri/stocked" className="brand-logo right" target="_blank">Stocked</a>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                {/** TODO add tabs */}
                            </ul>
                        </div>
                    </nav>
                    <div className='container'>
                        {this.props.children}
                    </div>
                </body>
                <footer>
                    {/** TODO add footer */}
                </footer>
            </html>
        );
    }
}

module.exports = StockedLayout;
