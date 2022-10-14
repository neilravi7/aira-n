import { useState } from "react";
import { Col } from "reactstrap";

const CarDetailPane = (props) => {

  const [activeTab, setActiveTab] = useState("feature");
  const features = props.features;
  const description = props.description;

  return (
    <Col md="12">
      <ul className="nav nav-pills mb-3 nav-fill" id="pills-tab" role="tablist">
        <li className="nav-item">
          <a className={activeTab === 'feature' ? "nav-link active" : "nav-link"} onClick={() => setActiveTab('feature')} id="pills-feature-tab" data-toggle="pill" href="#pills-feature" role="tab" aria-controls="pills-home" aria-selected="true">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'description' ? "nav-link active" : "nav-link"} onClick={() => setActiveTab('description')} id="pills-description-tab" data-toggle="pill" href="#pills-description" role="tab" aria-controls="pills-profile" aria-selected="false">
            Description
          </a>
        </li>
        <li className="nav-item">
          <a className={activeTab === 'review' ? "nav-link active" : "nav-link"} onClick={() => setActiveTab('review')} id="pills-review-tab" data-toggle="pill" href="#pills-review" role="tab" aria-controls="pills-contact" aria-selected="false">
            Reviews
          </a>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        <div className={activeTab === "feature" ? "tab-pane fade show active" : "tab-pane fade"} id="pills-feature" role="tabpanel" aria-labelledby="pills-feature-tab">
          <div className="row bg-light rounded ">
            <div className="col-md-3">
              <ul className="features">
                <li className="check"><span className="ion-ios-checkmark"></span>Airconditions</li>
                <li className="check"><span className="ion-ios-checkmark"></span>Child Seat</li>
                <li className="check"><span className="ion-ios-checkmark"></span>GPS</li>
                <li className="check"><span className="ion-ios-checkmark"></span>Luggage</li>
                <li className="check"><span className="ion-ios-checkmark"></span>Music</li>
              </ul>
            </div>
            <div className="col-md-3 bg-light  rounded">
              <ul className="features">
                <li className="check"><span className="ion-ios-checkmark"></span>Seat Belt</li>
                <li className="remove"><span className="ion-ios-close"></span>Sleeping Bed</li>
                <li className="check"><span className="ion-ios-checkmark"></span>Water</li>
                <li className="check"><span className="ion-ios-checkmark"></span>Bluetooth</li>
                <li className="remove"><span className="ion-ios-close"></span>Onboard computer</li>
              </ul>
            </div>
            <div className="col-md-3 bg-light rounded">
              <ul className="features">
                <li className="check"><span className="ion-ios-checkmark"></span>Audio input</li>
                <li className="check"><span className="ion-ios-checkmark"></span>Long Term Trips</li>
                <li className="check"><span className="ion-ios-checkmark"></span>Car Kit</li>
                <li className="check"><span className="ion-ios-checkmark"></span>Remote central locking</li>
                <li className="check"><span className="ion-ios-checkmark"></span>Climate control</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={activeTab === "description" ? "tab-pane fade show active" : "tab-pane fade"} id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">
          <div className="p-4 mb-3 bg-light text-primary rounded">
            {/* <h4 className="fst-italic">About</h4> */}
            <p className="mb-0">{description}.</p>
          </div>
        </div>
        <div className={activeTab === "review" ? "tab-pane fade show active" : "tab-pane fade"} id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">
          <div className="p-4 mb-3 bg-light text-primary rounded">
            {/* <h4 className="fst-italic">About</h4> */}
            <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
          </div>
        </div>
      </div>
    </Col>
  );
}
export default CarDetailPane;