
import { gql } from "urql";

export const GET_POSTS = gql`
    query {
        posts {
            data {
                id
                title
                body
                user {
                    id
                }
            }
        }
    }
`;

// Hardcoded userId as "1"
export const GET_POST = gql`
    query {
        user(id: "1") {  
            posts {
                data {
                    id
                    title
                    body
                }
            }
        }
    }
`;



export const CREATE_OR_UPDATE_POST = gql`
    mutation ($input: CreatePostInput, $id: ID) {
        createPost(input: $input) {
            id
            title
            body
        }
        updatePost(id: $id, input: $input) {
            id
            body
        }
    }
`

export const DELETE_POST = gql`
    mutation ($id: ID!) {
        deletePost(id: $id)
    }
`