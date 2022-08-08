import {NextPage} from "next";
import client from "../../components/client"
import {gql} from "@apollo/client";

interface IData {
    title: string
    id: number
}

// @ts-ignore
const Movie : NextPage = ({data}: IData) => {
    {console.log(data)}
    return(
        <div className="bg-teal-300">
            Movies
        </div>
    )
}

export const getStaticProps = async () => {
    const {data} = await client.query({
      query : gql`
          {
              allMovies{
                  title
                  id
              }
          }
      `,
    })

  return {
        props:{
            data
        },
  }
}

export default  Movie