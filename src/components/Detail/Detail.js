import React from 'react';
import { connect } from 'react-redux';

const Detail = ({ restaurant }) =>
  restaurant ? (
    <div className="media">
      {restaurant.image_url && (
        <img
          className="align-self-start mr-3"
          width={200}
          src={restaurant.image_url}
          alt={restaurant.name}
        />
      )}
      <div className="media-body">
        <h5 className="mt-0">
          {restaurant.name}
          {restaurant.location.address1 && <small className="ml-2">{restaurant.location.city}</small>}
        </h5>
      </div>
    </div>
  ) : (
    <div>Select a show to view detail</div>
  );

const mapStateToProps = ({ restaurants }) => ({
  restaurant: restaurants.search[restaurants.selected],
});

export default connect(mapStateToProps)(Detail);