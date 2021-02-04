import { gql } from '@apollo/client';

export const CREATE_MESSAGE = gql`
    mutation message($name: String, $email: String, $phone: String, $message: String) {
        insert_message(objects: {
            name: $name,  
            email: $email, 
            phone: $phone,
            message: $message, 
        }) {
        affected_rows
        returning {
            id
            name
            email
            phone
            message
            created_at
            updated_at
        }
      }
    }
`

export const GET_MESSAGE_PK = gql`
    query message($id: uuid!) {
        message_by_pk(id: $id) {
            id
            name
            email
            phone
            message
            status_visits
            responded 
            created_at
            updated_at
        }
    }
`

export const GET_MESSAGE_PK_CLIENT = gql`
    query message($id: uuid!) {
        message_by_pk(id: $id) {
            id
            name
            email
            message
            status_visits
            responded 
            created_at
        }
    }
`

export const UPDATE_MESSAGE_VISITS_PK = gql`
    mutation message($id: uuid!, $visits: Int!) {
        update_message_by_pk(pk_columns: {id: $id}, _set: {status_visits: $visits}) {
            id
            name
            email
            phone
            message
            status_visits
            responded 
            created_at
            updated_at
        }
    }
`