import React from 'react'
import { MDBCol, MDBRow, MDBCard, MDBCardBody, MDBView } from 'mdbreact';
import GoogleMapReact from 'google-map-react';

const MapsPage = () => {
  return (
    <React.Fragment>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard className="mt-5">
            <MDBView className="gradient-card-header blue darken-2">
              <h4 className="h4-responsive text-white">
                Regular map
                </h4>
            </MDBView>
            <MDBCardBody style={{ width: '100%', height: '300px' }} className="text-center">
              {/* <GoogleMapReact
                  defaultCenter={{lat: 10, lng: 10}}
                  defaultZoom={7}
                 /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d14480.11730695678!2d67.0588089307076!3d24.86284794484293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d24.8655364!2d67.0583856!4m3!3m2!1d24.860114799999998!2d67.06376709999999!5e0!3m2!1sen!2s!4v1615645270592!5m2!1sen!2s"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy" />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
          <MDBCard className="mt-5">
            <MDBView className="gradient-card-header blue darken-2">
              <h4 className="h4-responsive text-white">
                Hybrid map
                </h4>
            </MDBView>
            <MDBCardBody style={{ width: '100%', height: '300px' }} className="text-center">
              <GoogleMapReact
                defaultCenter={{ lat: 10, lng: 10 }}
                defaultZoom={7}
                options={{
                  mapTypeId: 'hybrid'
                }}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard className="mt-5">
            <MDBView className="gradient-card-header blue darken-2">
              <h4 className="h4-responsive text-white">
                Satellite map
                </h4>
            </MDBView>
            <MDBCardBody style={{ width: '100%', height: '300px' }} className="text-center">
              <GoogleMapReact
                defaultCenter={{ lat: 10, lng: 10 }}
                defaultZoom={7}
                options={{
                  mapTypeId: 'satellite'
                }}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
          <MDBCard className="mt-5">
            <MDBView className="gradient-card-header blue darken-2">
              <h4 className="h4-responsive text-white">
                Terrain map
                </h4>
            </MDBView>
            <MDBCardBody style={{ width: '100%', height: '300px' }} className="text-center">
              <GoogleMapReact
                defaultCenter={{ lat: 10, lng: 10 }}
                defaultZoom={7}
                options={{
                  mapTypeId: 'terrain'
                }}
              />
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  )
}

export default MapsPage;