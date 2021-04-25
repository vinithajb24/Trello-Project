import React, { Component } from "react";

import { Card, CardTitle, CardColumns } from "reactstrap";
import { Link } from "react-router-dom";

class IndexDashboard extends Component {
  render() {
    return (
      <div>
        <h2>
          <span>
            <img src="" alt="" className="imgtrello" />
          </span>
          Trello Board{" "}
        </h2>
        <CardColumns>
          <Link to="/board" className="link">
            <Card>
              <CardTitle tag="h5" class="cardtitle">
                Trello Project
              </CardTitle>
            </Card>
          </Link>
        </CardColumns>
      </div>
    );
  }
}

export default IndexDashboard;
