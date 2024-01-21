// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React is amazing</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// src/App.jsx

// import { Product } from './Product';
// import { BookList } from './Product';
// import { Card } from './Product';
import { Alert } from './Alert';

// const favouriteBooks = [
//   { id: 'id-1', name: 'JS for beginners' },
//   { id: 'id-2', name: 'React basics' },
//   { id: 'id-3', name: 'React Router overview' },
// ];

export default function App() {
  // return (
  //   <div>
  //     <h1>Best selling</h1>

  //     <Product
  //       name="Tacos With Lime"
  //       imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
  //       price={10.99}
  //     />
  //     <Product
  //       name="Fries and Burger"
  //       imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
  //       price={14.29}
  //     />
  //     <Product />
  //   </div>
  // );

  // return (
  //   <>
  //     <h1>Books of the week</h1>
  //     <BookList books={favouriteBooks} />
  //   </>
  // );

  // return (
  //   <>
  //     {/* <Card text="Message as a text prop" /> */}
  //     {/* <Card>Text between opening and closing tag</Card> */}
  //     <Card>
  //       <h1>Card title</h1>
  //       <p>Text between opening and closing tag</p>
  //     </Card>
  //     <Card>
  //       <h1>Card title 2</h1>
  //       <p>Text between opening and closing tag</p>
  //     </Card>
  //   </>
  // );

  return (
    <>
      <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </>
  );
}
