import React, { useState } from "react";

const OpenImage = ({ imagesrc }) => {
  return (
    <>
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-12">
            <div
              className="modal fade"
              id="modal1"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="myModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-lg" role="document">
                {/*Content*/}
                <div className="modal-content">
                  {/*Footer*/}
                  <div className="modal-footer justify-content-left">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-rounded btn-md ml-4"
                      data-dismiss="modal"
                    >
                      <i class="fa fa-times" aria-hidden="true"></i>  
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="main">
                      <img
                        src={imagesrc}
                        style={{ width: "100%", height: "100%" }}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenImage;
