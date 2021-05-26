import {useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, compose} from 'redux';
import PropTypes from 'prop-types';
// --- Import utils
import createSelector from '~/utils/automations/createSelector';
// --- Import modules
// --- Main files
import exampleCoreSelectors from './exampleCoreSelectors';
import exampleCoreActions from './exampleCoreActions';
// ---
const mapStateToProp = createSelector({
  hotelDeals: exampleCoreSelectors.hotelDealsSelector,
  isLoadingHotelDeal: exampleCoreSelectors.isLoadingHotelDealSelector,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      onGetHotelDeal: exampleCoreActions.getHotelDeals,
    },
    dispatch,
  );

const ExampleCoreContainer = props => {
  const {render, onGetHotelDeal, hotelDeals, isLoadingHotelDeal} = props;

  useEffect(() => {
    const {onGetHotelDeal} = props;
    onGetHotelDeal();
  }, []);

  return render({
    // --- state
    // --- props
    hotelDeals,
    isLoadingHotelDeal,
    // --- function
  });
};

ExampleCoreContainer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default compose(connect(mapStateToProp, mapDispatchToProps))(
  ExampleCoreContainer,
);
