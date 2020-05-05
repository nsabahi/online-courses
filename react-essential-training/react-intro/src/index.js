import React, { Component } from 'react'
import { render } from 'react-dom'

// let bookList = [
//   {title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260},
//   {title: "White Teeth", author: "Zadie Smith", pages: 480},
//   {title: "Cat's Cradle", author: "Kurt Vonnegut", pages: 304}
// ]

// const Book = ({title, author, pages, freeBookmark}) => {
//   return(
//     <section>
//       <h2>{title}</h2>
//       <p>by: {author}</p>
//       <p>Pages: {pages} pages</p>
//       <p>Free bookmark today: {freeBookmark ? 'yes!' : 'no!'} </p>
//     </section>
//   )
// }

// const Hiring = () =>
//   <div>
//     <p>The Library is hiring! Visit www.thelibrary.com/hiring for more.</p>
//   </div>

// const NotHiring = () =>
//   <div>
//     <p>The Library is not hiring. Check back for more details.</p>
//   </div>

// class Library extends Component {
//   state = { 
//     open: true,
//     freeBookmark: true,
//     hiring: true,
//     data: [],
//     loading: false,
//   }

//   componentDidMount() {
//     this.setState({loading: true})
//     fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
//       .then(data => data.json())
//       .then(data => this.setState({data, loading: false}))
//   }

//   // Arrow functions automatically bind 'this'
//   toggleOpenClosed = () => {
//     this.setState( prevState => ({
//       open:!prevState.open
//     }))
//   }

//   render() {
//     const { books } = this.props
//     return (
//       <div>
//         {this.state.hiring ? <Hiring /> : <NotHiring />}
//         {this.state.loading
//           ? 'loading...'
//           : <div>
//             {this.state.data.map( product => {
//               return(
//                 <div key={product.id}>
//                   <h3>Library Product of the Week!</h3>
//                   <h4>{product.name}</h4>
//                   <img alt={product.name} src={product.image} height={100}/>
//                 </div>
//               )
//             })}
//           </div> }
//         <h1>The library is: {this.state.open ? 'Open' : 'Closed'}</h1>
//         <button onClick={this.toggleOpenClosed}>Change</button>
//         {books.map(
//           (book, i) => <Book 
//             key={i}
//             title={book.title}
//             author={book.author}
//             pages={book.pages}
//             freeBookmark={this.state.freeBookmark}/>
//         )}
//       </div>
//     )
//   }
// }

class FavoriteColorForm extends Component {
  state = { value: '' }

  newColor = e => {
    this.setState({ value: e.target.value})
  }

  submit = e => {
    console.log(`New color: ${this.state.value}`)
    e.preventDefault()
  }

  render() {
    return(
      <form onSubmit={this.submit}>
        <label>Favorite Color: 
          <input 
            type='color' 
            onChange={this.newColor}/> 
        </label>
        <button>Submit</button>
      </form>
    )
  }
}

render(
  <FavoriteColorForm />,
  document.getElementById('root')
)