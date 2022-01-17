import { gql } from "@apollo/client";

export const GET_COVID_DATA = gql`
query country($code:String!){
    country(code:$code){
     name
    latest {
      confirmed
      deceased
      lastUpdated
    }
  }
}

`



// query country($code:String!){
//     country(code:$code){
//      name
//     latest {
//       confirmed
//       deceased
//       recovered
//       lastUpdated
//     }
//   }
// }



