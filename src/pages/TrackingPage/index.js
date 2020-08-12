import React, { useState, useEffect } from "react";
import { Layout } from "../../components/common/Layout";

import { TrackingHeader } from "./TrackingHeader";
import { TrackingInformation } from "./TrackingInformation";
import { TrackingState } from "./TrackingState";

import { getTracking } from "../../services/tracking.api";

import { Spinner } from '../../components/common/Spinner';


  export const TrackingPage = ({ match: { params: { tracking_params } } }) => {
    const [tracking, setTracking] = useState(null);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      
      setLoading(true);    

      getTracking(JSON.parse(atob(tracking_params))).then(
        (response) => {
          console.log('data: ', response.data);
          setLoading(false);
          setTracking(response.data);
        },
        (error) => {
          setLoading(false);
          console.log('error: ', error);
        }
        );
        return () => {
          console.log("will unmount");
        }

      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      {loading ? (
        <Spinner />

      ) : (
        <React.Fragment>
          <TrackingInformation tracking={tracking} />
          {tracking && (
            <section className="traking">
              <TrackingHeader tracking={tracking} />
              <div className="traking__states">
                {tracking.status_history.map((status_history, key) => {
                  return (
                    <TrackingState key={key} status_history={status_history} />
                  );
                })}
              </div>
            </section>
          )}
        </React.Fragment>
      )}
    </Layout>
  );
};
