var React = require('react');

//Banana is the pageof the name. Use it for the class and the module.exports.
// all the HTML goes between the bracket.

class First extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Products Page</h1>
            <h2>Hello { this.props.firstItem.id }!</h2>
            {/* this.props refer to the 2nd argument in the response.render  */}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = First;
