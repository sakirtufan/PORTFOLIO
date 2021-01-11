import React from 'react';

export const BookContext = React.createContext();

class BookContextProvider extends React.Component {

  state = {
    books: [
      {
        title: "My Todo App",
        author: "Sakir Tufan",
        pageNum: 296,
        imageURL: "https://i.resmim.net/ByNbX.png"        
      },
      {
        title: "Movie-Seat-Booking",
        author: "Sakir Tufan",
        pageNum: 200,
        imageURL: "https://i.ibb.co/vDDmzvq/tiyatro.png",
      },

      {
        title: "Game Portal",
        author: "Sakir Tufan",
        pageNum: 296,
        imageURL: "https://i.resmim.net/ByuGb.png"
      },
      {
        title: "Genesis",
        author: "Sakir Tufan",
        pageNum: 296,
        imageURL: "https://i.resmim.net/ByviF.png"
      },
      {
        title: "React-Blog-App",
        author: "Gabriel Garcia Marquez",
        pageNum: 296,
        imageURL: "https://i.resmim.net/B19ql.jpg",
      },
      {
        title: "Q-A Rest Api",
        author: "Gabriel Garcia Marquez",
        pageNum: 296,
        imageURL: "https://i.resmim.net/B1kKn.jpg",
      }

    ]
  }

  render() {
    return (
      <BookContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </BookContext.Provider>
    )
  }


}



export default BookContextProvider;

