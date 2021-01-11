import React from 'react';

export const BookContext = React.createContext();

class BookContextProvider extends React.Component {

  state = {
    books: [
      {
        title: "React-Blog-App",
        author: "Gabriel Garcia Marquez",
        pageNum: 296,
        imageURL: "https://i.resmim.net/B19ql.jpg",
        codeURL:"https://github.com/sakirtufan/react-blog-comment"
      },
      {
        title: "My Todo App",
        author: "Sakir Tufan",
        pageNum: 296,
        imageURL: "https://i.resmim.net/ByNbX.png",
        codeURL: "https://github.com/FbW35D/start-sakirtufan"    
      },
      {
        title: "Movie-Seat-Booking",
        author: "Sakir Tufan",
        pageNum: 200,
        imageURL: "https://i.ibb.co/vDDmzvq/tiyatro.png",
        codeURL:"https://github.com/sakirtufan/Movie-Seat-Booking"
      },

      {
        title: "Game Portal",
        author: "Sakir Tufan",
        pageNum: 296,
        imageURL: "https://i.resmim.net/ByuGb.png",
        codeURL:"https://github.com/sakirtufan/sakirtufan.github.io"
      },
      {
        title: "Genesis",
        author: "Sakir Tufan",
        pageNum: 296,
        imageURL: "https://i.resmim.net/ByviF.png",
        codeURL:"https://github.com/sakirtufan?tab=repositories"
      },
      {
        title: "Q-A Rest Api",
        author: "Gabriel Garcia Marquez",
        pageNum: 296,
        imageURL: "https://i.resmim.net/B1kKn.jpg",
        codeURL:"https://github.com/sakirtufan/Question-Answer-Rest-Api"
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

