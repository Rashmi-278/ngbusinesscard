import { useForm } from 'react-hook-form'
import { GraphQLClient, gql } from 'graphql-request'

export default function Add() {
    const { register, handleSubmit } = useForm();
    async function onFormSubmit(values){
        const endpoint = 'http://localhost:3000/api/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {})

        
        const query = gql`
                query{
            getAllCards{
                name
                email
            }
            }
        `;

        

        try {
            const data = await graphQLClient.request(query); 
        console.log(data)
        } catch (error) {
            console.log(error)
        }

        
    }
    return(
        <>
        <h1>All contact card</h1>
        <button type="button" onClick={handleSubmit(onFormSubmit)} className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-purple-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            list all
        </button>
        
        </>
    )
}