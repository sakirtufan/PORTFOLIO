import React from 'react';
import './Book.css';

import { ThemeContext } from '../contexts/ThemeContext';

class Book extends React.Component {

  render() {

    return (
      <ThemeContext.Consumer>{(contextTheme) => {
        const { isDarkTheme, dark, light } = contextTheme;
        const theme = isDarkTheme ? dark : light;

        return (
          <div className="col-lg-4 col-sm-6 mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" target="_blank" rel="noopener noreferrer" data-toggle="modal" href={this.props.book.imageURL}>
                <div className="portfolio-hover" style={{ background: theme.hover }}>
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src={this.props.book.imageURL} alt="imageError" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">{this.props.book.title}</div>
                <div className="portfolio-caption-subheading text-muted">{this.props.book.author}</div>
                <div className="portfolio-caption-project-link">
                  <a target="_blank" rel="noopener noreferrer" href={this.props.book.codeURL}>
                    <button className="btn btn-outline-danger">Project Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      }}

      </ThemeContext.Consumer>
    );
  }
}

export default Book;