import React from 'react';
import Config from '../../Config';
import Gauge from '../core/front/Gauge';

class PartyHeader extends React.Component {
  render() {
    const { party, finalNote, mobileView } = this.props;
    return (
      <div className="header row">
        <h3 className="col-12 header-title">{party.name}</h3>

        <div className="header-img-container offset-3 col-6 offset-md-0 col-md-4 col-lg-3">
          <img className="header-img" src={`${Config.server}/${party.picture}`} alt={party.slug} />
        </div>
        <div className="header-text-container col-12 col-md-4 col-lg-6">
          <p className="header-description">{party.description}</p>
        </div>
        <div className="header-gauge-container offset-3 col-6 offset-md-0 col-md-4 col-lg-3">
          <Gauge finalNote={finalNote} />
          {mobileView ? null : (
            <p className="header-gauge-legend">
              {Math.round(finalNote)}% des votes des députés liés à ce Parti National protègent
              l'océan.
            </p>
          )}
        </div>
        {mobileView ? (
          <p className="header-gauge-legend">
            {Math.round(finalNote)}% des votes des députés liés à ce Parti National protègent
            l'océan.
          </p>
        ) : null}
      </div>
    );
  }
}

export default PartyHeader;
