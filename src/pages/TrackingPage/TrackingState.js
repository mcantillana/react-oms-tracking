import React, { Fragment } from "react";

export const TrackingState = (props) => {
  const {
    track_label,
    track_date,
    track_stage,
    track_status,
  } = props.status_history;
  
  const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const created = track_date 
    ? new Date(track_date).toLocaleDateString('es-CL', options) 
    : false;


  return (
    <div className="traking__state">
      <IconState data_state={track_stage} current_state={track_status} />
      <div className="traking__state__right">
        <p className="traking__state__date">
          <span>{created}</span>
        </p>
        <p className="traking__state__title">{track_label.toUpperCase()}</p>
      </div>
    </div>
  );
};

export const IconState = (props) => {
  const getStateClass = ({ data_state, current_state }) => {
    let _class = {
      block: "",
      icon: "",
    };

    switch (data_state) {
      case "received":
        _class.block = current_state
          ? "traking__state__left__end"
          : "traking__state__left__inactive";
        _class.icon = current_state
          ? "fa-check-circle complete"
          : "fa-circle inactive";
        break;
      case "in_progress":
      case "delivered_to_courier":
      case "in_delivery":
      case "delivered":
        _class.block = current_state
          ? "traking__state__left__complete"
          : "traking__state__left__inactive";
        _class.icon = current_state ? "fa-check-circle" : "fa-circle";
        break;

      default:
        break;
    }

    return _class;
  };

  return (
    <Fragment>
      {
        <div className={getStateClass(props).block}>
          <i className={`fas ${getStateClass(props).icon} traking__state__icon`}></i>
        </div>
      }
    </Fragment>
  );
};
