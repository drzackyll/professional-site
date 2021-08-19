// import React from 'react';

const Portfolio = () => {
  return (
    <div className="container-fluid">
      <h1 style={{textAlign: "center"}}>Data Vis Portfolio</h1>
      <h3 style={{textAlign: "center"}}>R3D</h3>
      <br />
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <img className="img-thumbnail" src="../../images/hac-rcce-dash.jpg" alt="UNICEF R3D Screen Shot" />
        </div>
        <div className="col-sm-6 col-sm-offset-3">
          <a href="https://superset.unicef.io/" target="_blank" rel="noreferrer"><h4>R3D - HAC RCCE Dashboard</h4></a>
          this dashboard is intended to aid in reporting the COVID-19 Risk Communication and Community Engagement (RCCE) Situation Report / Humanitarian Action for Children (HAC) Indicators via the RapidPro platform. it displays variations of each of three indicators along with disaggregations by gender, location, and age.<br /><br />
        <b>built with:</b> apache superset <br /><br />
        </div>
      </div>
      <div><br /></div>

      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <img className="img-thumbnail" src="../../images/workspace-dash.jpg" alt="UNICEF R3D Screen Shot" />
        </div>
        <div className="col-sm-6 col-sm-offset-3">
          <a href="https://superset.unicef.io/" target="_blank" rel="noreferrer"><h4>R3D - Workspace Dashboard</h4></a>
          this is a generalized dashboard provided to each of 190+ workspaces in the rapidpro ecosystem. it provides information on engagement, demographics, and performance of rapidpro programmes.<br /><br />
        <b>built with:</b> apache superset <br /><br />
        </div>
      </div>
      <hr />
      <div><br /></div>

      <h3 style={{textAlign: "center"}}>eTools</h3>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          <img className="img-thumbnail" src="../../images/monitoring-dash.png" alt="UNICEF eTools Monitoring Dashboard Screen Shot" />
        </div>
        <div className="col-sm-6 col-sm-offset-3">
          <h4>eTools Monitoring Dashboard</h4>
          the etools monitoring dashboard marries data from 15 database tables to provide insights on unicef country offices and their partnerships.<br /><br />
        <b>built with:</b> microsoft power bi <br /><br />
        </div>
      </div>
      <hr />
      <div><br /></div>
      </div>
  )
}

export default Portfolio;