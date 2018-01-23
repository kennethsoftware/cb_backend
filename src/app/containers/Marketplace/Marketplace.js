import React from 'react';
import { connect } from 'react-redux';
import reduxConnectProps from '../../utils/redux-connect-props';

import { purchaseFighter, populateMarketplaceThunk } from '../../actions/marketplaceActions';
import { FIGHTERS_PER_PAGE } from '../../utils/constants';

import CardContainer from '../../components/Cards/CardContainer';

@connect(store => ({
  marketplace: store.marketplace,
  marketService: store.core.services.Marketplace
}))
class Marketplace extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { marketService, dispatch } = this.props
    dispatch(populateMarketplaceThunk(marketService))
  }

  fightersToShow(fighters) {
    const { marketplace } = this.props;

    return fighters.slice(0, (marketplace.pageCounter * FIGHTERS_PER_PAGE))
  }

  handleCardClick(id, price) {
    const { marketService, dispatch } = this.props
    dispatch(purchaseFighter(marketService, id, price))
  }

  render() {
    const { marketplace } = this.props
    const { fightersForSale, filteredFighters } = marketplace

    const showAllFighters = fightersForSale.length > 0 && filteredFighters.length === 0
    const showFilteredFighters = filteredFighters.length > 0

    return (
      <div className="page-container">
        {showAllFighters &&
          <CardContainer
            items={this.fightersToShow(fightersForSale)}
            handleClick={(id, price) => this.handleCardClick(id, price)}
            isMarketplace
            />
        }
        {showFilteredFighters &&
          <CardContainer
            items={this.fightersToShow(filteredFighters)}
            handleClick={(id, price) => this.handleCardClick(id, price)}
            isMarketplace
            />
        }
        {(!showAllFighters && !showFilteredFighters) && <p>No fighters in market!</p>}
      </div>
    )
  }
}

export default reduxConnectProps(Marketplace);
