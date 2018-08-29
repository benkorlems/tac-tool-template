import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
export default class Raisecom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgStyle: {
        textAlign: "center",
        marginTop: "2em",
        marginBottom: "2em"
      }
    };
  }
  render() {
    return (
      <div className="col-lg-6 ont-status">
        <div className="card-box">
          <div className="ont-img" style={this.state.imgStyle}>
            <img
              src="http://i67.tinypic.com/28lz7zn.png"
              alt="Raisecom_HT803_W2"
            />
          </div>
          <hr />
          <div className="ont-indicators">
            <div className="led-lights">
              <div className="led-row1">
                <span id="ont-pon">
                  <div className="pon_led led" />
                  <p id="pon-led-label" className="led-label">
                    pon
                  </p>
                </span>
                <span id="ont-wlan">
                  <div className="wlan_led led" />
                  <p className="led-label">wlan</p>
                </span>
                <span id="ont-lan1">
                  <div className="lan1_led led" />
                  <p id="lan1-led-label" className="led-label">
                    lan1
                  </p>
                </span>
                <span id="ont-lan2">
                  <div className="lan2_led led" />
                  <p id="lan2-led-label" className="led-label">
                    lan2
                  </p>
                </span>
                <span id="ont-lan3">
                  <div className="lan3_led led" />
                  <p id="lan3-led-label" className="led-label">
                    lan3
                  </p>
                </span>
                <span id="ont-lan4">
                  <div className="lan4_led led" />
                  <p id="lan4-led-label" className="led-label">
                    lan4
                  </p>
                </span>
                <span id="ont-los">
                  <div className="los_led led" />
                  <p className="led-label">los</p>
                </span>
              </div>
              <div className="led-row2">
                <span id="ont-internet">
                  <div className="inter_led led" />
                  <p className="led-label">internet</p>
                </span>
                <span id="ont-phone1">
                  <div className="phone1_led led" />
                  <p id="phone1-led-label" className="led-label">
                    phone1
                  </p>
                </span>
                <span id="ont-phone2">
                  <div className="phone2_led led" />
                  <p id="phone2-led-label" className="led-label">
                    phone2
                  </p>
                </span>
                <span id="ont-wps">
                  <div className="wps_led led" />
                  <p className="led-label">wps</p>
                </span>
                <span id="ont-auth">
                  <div className="auth_led led" />
                  <p id="auth-led-label" className="auth_label">
                    auth
                  </p>
                </span>
                <span id="ont-usb">
                  <div className="usb_led led" />
                  <p className="usb_label">usb</p>
                </span>
                <span id="ont-vid">
                  <div className="vid_led led" />
                  <p id="vid_led_label" className="vid_label">
                    vid
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
