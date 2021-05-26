import { useForm } from 'react-hook-form'
import { GraphQLClient, gql } from 'graphql-request'

export default function Add() {
    const { register, handleSubmit } = useForm();
    async function onFormSubmit(values){
        const endpoint = 'http://localhost:3000/api/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {})

        
        const mutation = gql`
        mutation AddCard($input: CardInput!) {
            addCard(input: $input){
                name
                id
                email
            }
        }
        `;

        const variables = {
            input: values,
        }

        try {
            const data = await graphQLClient.request(mutation, variables); 
        console.log(data)
        } catch (error) {
            console.log(error)
        }

        
    }
    return(
        <>
        <h1>Add contact card</h1>
        <form onSubmit={handleSubmit(onFormSubmit)} className="form bg-white p-6 my-10 relative">
       <div className = ""> 
        <div className=" relative ">
            <input {...register("name", { required: true})} type="text" id="name" className="  appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your contact name"/>
        </div>
        <div className=" relative ">
            <input {...register("email", { required: true})}  type="text" id="email" className="  appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder=" email "/>
        </div>
        <div className=" relative ">
            <input  {...register("biography", { required: true})} type="text" id="biography" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="biogrpahy "/>
        </div>
        <div className=" relative ">
            <input  {...register("phone", { required: true})} type="text" id="phone" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="phone"/>
        </div>
        <div className=" relative ">
            <input  {...register("github", { required: true})} type="text" id="github" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="github"/>
        </div>
        <div className=" relative ">
            <input  {...register("twitter", { required: true})} type="text" id="twitter" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="twitter"/>
        </div>
        <div className=" relative ">
            <input  {...register("website", { required: true})} type="text" id="website" className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="website"/>
        </div>
        
        </div>
        <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-purple-900 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
            Add contact
        </button>
        </form>
        </>
    )
}