import './App.css';

import { useState } from "react";
import axios from 'axios';
import { request, gql } from "graphql-request";

function App() {

  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)

  const handleSubmit = async () => {

    // axios

    // const gqlPayload = {
    //   query: `

    //     mutation{
    //       addBook(name: "${name}", price: ${price}){
    //         id, bookName
    //       }
    //     }

    //   `,
    //   variables: null

    // }

    // const response = await axios.post('/graphql', JSON.stringify(gqlPayload), { headers: { "Content-Type": 'application/json' } })

    // console.log(response.data)

    // gql 



    const myQuery = gql`
      mutation{
          addBook(name: "${name}", price: ${price}){
            id, bookName
        }
      }
    `

      const response = await request('/graphql', myQuery)
      console.log(response)
  }

  const getBooks = async () => {
    // axios

    const gqlPayload = {
      query: `
        {
          books{
            id, price, bookName
          }
        }
      `,
      variables: null

    }

    const response = await axios.post('/graphql', JSON.stringify(gqlPayload), { headers: { "Content-Type": 'application/json' } })

    console.log(response.data)
  }


  return (
    <div className="App">
      <input onChange={e => setName(e.target.value)} type="text" value={name} placeholder="Book Name" />
      <input onChange={e => setPrice(e.target.value)} type="number" value={price} placeholder="Price" />
      <button onClick={handleSubmit}>Send Data</button>
      <button onClick={getBooks}>Get Data</button>
    </div>
  );
}

export default App;
