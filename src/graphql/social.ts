import { gql } from "@apollo/client";

export const GET_SOCIALS_HOME = gql`
  query {
    social(where: { show_on_page: { _eq: true } }) {
      id
      name
      website
      image_url
    }
  }
`;

export const GET_SOCIALS = gql`
  query {
    social(order_by: { created_at: asc }) {
      id
      name
      website
      image_url
    }
    site_data_aggregate {
      aggregate {
        count
      }
    }
  }
`;
