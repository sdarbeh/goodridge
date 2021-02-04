import React, { useState } from 'react'
import strSimilarity from 'string-similarity'
import { useQuery } from '@apollo/client';

import { GET_SIMILAR_PROJECT_NAME } from '../../../../../../graphql/project';
// items
import { Container, Match, Loading } from './NoProjectStyle'
import { LinkButton, LoadingSpinner } from '../../../../../../components/widgets';
import { appProjectRoute } from '../../../../../../utils/routes';

export default ({ name }: any) => {
  const [similarProjs, setSimilarProjs] = useState<any>([])

  const { loading } = useQuery(GET_SIMILAR_PROJECT_NAME, {
    variables: {
      name: `%${name}%`
    },
    onCompleted: (data: any) => {
      if (data?.project) {
        let arr: any = []
        data.project.forEach((proj: any) => {
          arr.push(proj.name)
        })
        setSimilarProjs(arr)
      }
    },
    onError: (err) => {
      console.log(err);
    }
  });

  let matches;
  if (similarProjs.length) {
    matches = strSimilarity.findBestMatch(name, similarProjs);
  }

  return (
    <Container>
      <h1>No project found with that name</h1>
      {loading && !matches && (
        <Loading>
          <div>Finding similar projects...</div>
          <LoadingSpinner size={15} />
        </Loading>
      )}
      {!loading && matches && (
        <Match>
          <span>Are you looking for&nbsp;</span>
          <LinkButton to={appProjectRoute(matches.bestMatch.target)}>
            {matches.bestMatch.target}
          </LinkButton>
          <span>?</span>
        </Match>
      )}
    </Container>
  )
}