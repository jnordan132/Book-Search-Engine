import { gql } from "@apollo/client";

export const GET_USERS = gql`
    query Query {
        users {
            _id
            username
            email
            password
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;

export const GET_USER = gql`
    query Query($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            email
            password
            savedBooks {
                authors
                description
                bookId
                image
                link
                title
            }
        }
    }
`;