import React, {Fragment} from 'react';
import reduce from 'lodash/reduce';
//
import {useLockPortrait} from '~/utils/hooks';
// ---
export default views => {
  return reduce(
    views,
    (prev, curr) => {
      const composeScreen = {
        name: curr.name,
        component: props => {
          useLockPortrait(props);
          return (
            <Fragment>
              <curr.component {...props} />
            </Fragment>
          );
        },
        params: curr.params,
      };
      prev.push(composeScreen);
      return prev;
    },
    [],
  );
};
