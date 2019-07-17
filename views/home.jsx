var React = require('react');

//Banana is the pageof the name. Use it for the class and the module.exports.
// all the HTML goes between the bracket.

class Home extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>This is Home Truly where i know i must be</h1>
            <h2>Hello { this.props.personKey.name }!</h2>
            <h2>Her weight is { this.props.personKey.weight }kg!</h2>
            {/* this.props refer to the 2nd argument in the response.render  */}
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;
