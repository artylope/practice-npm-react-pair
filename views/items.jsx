var React = require('react');

//Banana is the pageof the name. Use it for the class and the module.exports.
// all the HTML goes between the bracket.

class Items extends React.Component {
  render() {

    const items = this.props.itemsKey.map( item => {
      return <li><a href="items/{item.product.index}">{item.product.title}</a></li>
    });


    return (
      <html>
        <body>
          <div>
            <h1>All items page</h1>

            {/* this.props refer to the 2nd argument in the response.render  */}

             <ul>{items}</ul>


          </div>
        </body>
      </html>
    );
  }
}

module.exports = Items;
