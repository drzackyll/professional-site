import React, { useEffect, useState } from 'react';
import * as d3 from 'd3';
import { svg } from 'd3';

const getOrRefreshAccessToken = async () => {
  const clientId = '62049';
  const clientSecret = 'f048dc1d13104696812b699414f689411601de20';
  const code = '73a94e8eb43784b95dc68c0d0fb5e9f1102f0c05';
  let accessToken = JSON.parse(localStorage.getItem('accessToken'));
  let expiresAt = JSON.parse(localStorage.getItem('expiresAt'));
  let expired = expiresAt && expiresAt < new Date().getTime() / 1000;
  let grantType = expired ? 'refresh_token' : 'authorization_code';
  let refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
  let accessUrl = `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}&grant_type=${grantType}`;
  let refreshUrl = `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}&refresh_token=${refreshToken}`;
  
  const getToken = (url) => {
    fetch(url, {'method': 'POST'}).then(response => response.json())
                                  .then(data => {
                                    localStorage.setItem('accessToken', JSON.stringify(data.access_token));
                                    localStorage.setItem('refreshToken', JSON.stringify(data.refresh_token));
                                    localStorage.setItem('expiresAt', JSON.stringify(data.expires_at));
                                  })
  }

  if (expired) {
    await getToken(refreshUrl);
  } else if (!accessToken || accessToken === 'undefined') {
    await getToken(accessUrl);
  }
  return JSON.parse(localStorage.accessToken);
}

const showVis = (data) => {
  const margin = { top: 10, right: 30, bottom: 20, left: 50 };
  const height = 400 - margin.top - margin.bottom;
  const barWidth = 50;
  const barOffset = 5;
  const width = data.length * (barWidth + barOffset) - margin.left - margin.right;

  const svg = d3.select('#running')
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                // .style('background', 'blue')
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`)
                .selectAll('rect').data(data)
                .enter().append('rect')
                .style('fill', 'red')
                .attr('width', barWidth)
                .attr('height', d => d.distance / 60)
                .attr('x', (e, i) => i*(barWidth + barOffset))
                .attr('y', d => height - (d.distance / 60))

    const dates = data.map(d => new Date(d.start_date_local).toLocaleDateString());

    // const activityTypes = [...new Set(data.map(d => d.type))]
    
    const xAxis = d3.scaleBand()
                    .domain(dates)
                    .range([0, width])
                    .padding([0.2])
    svg.append('g')
     .attr('transform', `translate(0, ${height})`)
     .call(d3.axisBottom(xAxis).tickSizeOuter(0));

    const yAxis = d3.scaleLinear()
                .domain([0, 20])
                .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(yAxis));

    // const color = d3.scaleOrdinal()
    //   .domain(activityTypes)
    //   .range(['#e41a1c','#377eb8'])

    // const stackedData = d3.stack()
    //                       .keys(activityTypes)
    //                       (data)
    //   console.log(activityTypes, stackedData)

    // svg.append('g')
    //    .selectAll('g')
    //    .data(stackedData)
    //    .join('g')
    //     .attr('fill', d => color(d.key))
    //     .selectAll('rect')
    //     .data(d => d)
    //     .join('rect')
    //       .attr("x", d => xAxis(new Date(d.data.start_date_local).toLocaleDateString()))
    //       .attr("y", d => yAxis(d[1]))
    //       .attr('width', barWidth)
    //       // .attr('height', d => d.data.distance / 60)
    //       .attr('height', d => yAxis(d[0]) - yAxis(d[1]))
}

const Running = () => {
  const [runningData, setRunningData] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  
  useEffect(() => {
    (async function accessToken() {
      const token = await getOrRefreshAccessToken();
      setAccessToken(token);
    })();
  }, [])

  useEffect(() => {
    if (accessToken.length) {
      setRunningData(getData());
    }
  }, [accessToken])

  useEffect(() => {
    if (runningData) {
      showVis(runningData);
    }
    return () => {
      d3.select('svg').remove();
      d3.select('#svgContainer').remove();
    };
  }, [runningData])

  const getData = () => {
    const url = 'https://www.strava.com/api/v3/athlete/activities?after=1609477200&per_page=100';
    const body = {
      'async': true,
      'crossDomain': true,
      'method': 'GET',
      'headers': {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': '*/*',
        'Cache-Control': 'no-cache'
      }
    };
    
    fetch(url, body).then((response) => response.json())
                    .then(data => setRunningData(data))
  }

  return (
    <div id="running" />
  )
};

export default Running;