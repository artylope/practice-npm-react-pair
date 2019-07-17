var React = require('react');

//Banana is the pageof the name. Use it for the class and the module.exports.
// all the HTML goes between the bracket.

class Item extends React.Component {
  render() {
    return (
      <html>
        <body>
          <div>
            <h1>Single Item Page</h1>

            <p>{this.props.thisItem.product.title}</p>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Item;
