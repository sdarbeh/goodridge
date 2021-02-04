import React from 'react'
// https://www.npmjs.com/package/react-infinite-scroll-component
import InfiniteScroll from 'react-infinite-scroll-component';

import { Ellipsis, CenterDiv } from '../../widgets'
import { reloadIcon, refreshIcon } from '../../../assets/icons/widgets'
import { finishLineIcon } from '../../../assets/icons/widgets'

import { EndMessage, Refresh } from './InfiniteScrollStyle'

interface props {
  length: number;
  onNext: any;
  hasMore: boolean;
  onRefresh: any;
  items: any;
  hideEndMessage?: boolean;
}

export default ({ length, onNext, hasMore, onRefresh, items, hideEndMessage, ...rest }: props) => {
  return (
    <InfiniteScroll
      dataLength={length}
      next={onNext}
      hasMore={hasMore}
      loader={<CenterDiv><Ellipsis /></CenterDiv>}
      endMessage={!hideEndMessage && (
        <EndMessage>
          <div>
            <span>{finishLineIcon}</span>
            <span>You have reached the end</span>
          </div>
        </EndMessage>
      )}
      refreshFunction={onRefresh}
      pullDownToRefresh
      pullDownToRefreshThreshold={50}
      pullDownToRefreshContent={
        <Refresh>
          <div>
            <span>Pull down to refresh</span>
            <CenterDiv>{reloadIcon}</CenterDiv>
          </div>
        </Refresh>
      }
      releaseToRefreshContent={
        <Refresh>
          <div>
            <span>Release to refresh</span>
            <CenterDiv>{refreshIcon}</CenterDiv>
          </div>
        </Refresh>
      }
      {...rest}
    >
      {items}
    </InfiniteScroll>
  )
}