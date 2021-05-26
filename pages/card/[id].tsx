import { GraphQLClient, gql } from 'graphql-request'

export const getServerSideProps = async ({params}) => {
    const cardId  = params.id;
    const endpoint = 'http://localhost:3000/api/graphql';
    const graphQLClient = new GraphQLClient(endpoint, {});
    const query = gql `
    query GetCard($input: String!) {
        getCard(id: $input) {
            name
            email
            phone

        }
    }
        
    `;

    const variables = {
        input: cardId,
    };

        const data = await graphQLClient.request(query, variables); 
        const card = data.getCard;
    console.log(data)

    return{
        props: {
            card,
        }
    }

   


    
}

export default function IDpage ({ card}) {
    return <div>{JSON.stringify(card)} </div>
}