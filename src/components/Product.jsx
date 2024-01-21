// src/components/Product.jsx

// export const Product = ({
//   name = 'New product',
//   imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBkjGq749-Z6CGVjZvZAoyRNpVqxT-C5v6egAEhmgqA&s',
//   price = 999,
// }) => {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={imgUrl} alt={name} width="480" />
//       <p>Price: {price} credits</p>
//     </div>
//   );
// };

// export const BookList = ({ books }) => {
//   return (
//     <ul>
//       {books.map(book => {
//         // {books.map((book, index) => {
//         // return <li key={index}>{book.name}</li>;
//         return <li key={book.id}>{book.name}</li>;
//       })}
//     </ul>
//   );
// };

// export const Card = ({ text }) => {
//   return <div>{text}</div>;
// };

export const Card = ({ children }) => {
  return <div>{children}</div>;
};