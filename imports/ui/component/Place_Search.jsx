import algoliasearch from 'algoliasearch/lite';
import React, { Component, Fragment } from 'react';
import { InstantSearch, ClearRefinements } from 'react-instantsearch-dom';
import {GoogleMapsLoader,GeoSearch,Marker,Control,} from 'react-instantsearch-dom-maps';
import Places from './places/widget';


const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

class Place_Search extends Component {
  render() {
    return (
      <div className="ais-InstantSearch">
        <InstantSearch indexName="airports" searchClient={searchClient}>
          <div className="search-panel">
            {/* <div className="search-panel__filters">
              <ClearRefinements />
            </div> */}

            <div className="search-panel__results">
              <Places
                defaultRefinement={{
                  lat: 37.7793,
                  lng: -122.419,
                }}
                updateLocation = {this.props.updateLocation}
              />
              {/* For including a Google Map */}
              {/* <div style={{ height: 500 }}> */}
                {/* <GoogleMapsLoader apiKey="AIzaSyBawL8VbstJDdU5397SUX7pEt9DslAwWgQ"> */}
                  {/* {google => (
                    <GeoSearch google={google}>
                      {({ hits }) => (
                        <Fragment>
                          <Control />
                          {hits.map(hit => (
                            <Marker key={hit.objectID} hit={hit} />
                          ))}
                        </Fragment>
                      )}
                    </GeoSearch>
                  )} */}
                {/* </GoogleMapsLoader> */}
              {/* </div> */}
            </div>
          </div>
        </InstantSearch>
      </div>
    );
  }
}

export default Place_Search;