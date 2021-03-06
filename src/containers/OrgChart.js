import React from "react";
import OrganizationChart from "../ChartLogic/ChartContainer";
import OrgNode from "../components/OrgNode";
import {Container} from 'react-bootstrap';
import {nestedPartners} from "../nestedPartners";
import { MapInteractionCSS } from 'react-map-interaction';

const OrgChart = (props) => {
    const { employees, orgChartSource } = props;

//Testing data, no longer in use
  const ds = {
    id: "n2",
    age: 31,
    name: "Elpida Ormanidou",
    title: " ",
    managerId: 100,
    "phone": "+1 (925) 561-2553",
    "hired": "2017-05-07T06:31:11 +07:00",
    children: [
        {
            id: "n0",
            "isActive": true,
            age: 34,
            name: "Gustavo Canton",
            title: "male",
            managerId: 2,
            "phone": "+1 (967) 428-3874",
            "hired": "2016-03-24T04:32:08 +07:00",
            children: [
              {
                  id: "n1",
                  "isActive": true,
                  age: 38,
                  name: "Babette Siebold",
                  title: "female",
                  managerId: 0,
                  "phone": "+1 (882) 547-3581",
                  "hired": "2016-08-08T12:46:19 +07:00",
                  children: [
                    {
                        id: "n10",
                        "isActive": true,
                        age: 37,
                        name: "Elyse Kadokura",
                        title: "female",
                        managerId: 1,
                        "phone": "+1 (958) 558-2389",
                        "hired": "2015-08-15T04:44:49 +07:00",
                        children: [
                          
                        ]
                      },
                      {
                        id: "n11",
                        "isActive": false,
                        age: 29,
                        name: "Pan Chen",
                        title: "male",
                        managerId: 1,
                        "phone": "+1 (881) 574-3927",
                        "hired": "2015-02-16T12:11:11 +08:00",
                        children: [
                          
                        ]
                      },
                      {
                        id: "n12",
                        "isActive": false,
                        age: 32,
                        name: "Tyler Norrish",
                        title: "male",
                        managerId: 1,
                        "phone": "+1 (990) 506-2830",
                        "hired": "2019-09-17T06:29:16 +07:00",
                        children: [
                          
                        ]
                      }
                  ]
                },
                {
                  id: "n3",
                  "isActive": true,
                  age: 26,
                  name: "Tomas Gartner",
                  title: "male",
                  managerId: 0,
                  "phone": "+1 (974) 421-3321",
                  "hired": "2015-01-22T08:26:21 +08:00",
                  children: [
                    {
                        id: "n13",
                        "isActive": false,
                        age: 38,
                        name: "Cameron Bartok",
                        title: "male",
                        managerId: 3,
                        "phone": "+1 (851) 507-2360",
                        "hired": "2015-04-23T03:48:55 +07:00",
                        children: [
                          
                        ]
                      },
                      {
                        id: "n14",
                        "isActive": false,
                        age: 27,
                        name: "Kyle Mana",
                        title: "male",
                        managerId: 3,
                        "phone": "+1 (948) 448-2904",
                        "hired": "2020-10-14T02:28:38 +07:00",
                        children: [
                        
                        ]
                      },
                      {
                          id: "n15",
                          "isActive": false,
                          age: 27,
                          name: "Phi Hoang",
                          title: "male",
                          managerId: 3,
                          "phone": "+1 (948) 448-2904",
                          "hired": "2020-10-14T02:28:38 +07:00",
                          children: [
                          
                          ]
                        },
                        {
                          id: "n16",
                          "isActive": false,
                          age: 27,
                          name: "Melissa Bain",
                          title: "female",
                          managerId: 3,
                          "phone": "+1 (948) 448-2904",
                          "hired": "2020-10-14T02:28:38 +07:00",
                          children: [
                          
                          ]
                        },
                        {
                          id: "n17",
                          "isActive": false,
                          age: 27,
                          name: "Kyle Chezik",
                          title: "male",
                          managerId: 3,
                          "phone": "+1 (948) 448-2904",
                          "hired": "2020-10-14T02:28:38 +07:00",
                          children: [
                          
                          ]
                        },
                  ]
                },
                {
                  id: "n4",
                  "isActive": true,
                  age: 28,
                  name: "Anjua Jain",
                  title: "female",
                  managerId: 0,
                  "phone": "+1 (851) 426-2152",
                  "hired": "2018-04-01T01:21:58 +07:00",
                  children: [
                    
                  ]
                },
                {
                  id: "n5",
                  "isActive": false,
                  age: 39,
                  name: "Matt Thomas",
                  title: "male",
                  managerId: 0,
                  "phone": "+1 (848) 538-2483",
                  "hired": "2014-11-11T11:20:56 +08:00",
                  children: [
                    
                  ]
                },
                {
                  id: "n6",
                  "isActive": false,
                  age: 31,
                  name: "Jason Salazer",
                  title: "male",
                  managerId: 0,
                  "phone": "+1 (840) 546-2133",
                  "hired": "2015-10-21T10:13:59 +07:00",
                  children: [
                    {
                        id: "n18",
                        "isActive": false,
                        age: 27,
                        name: "Wayne Chen",
                        title: "male",
                        managerId: 6,
                        "phone": "+1 (948) 448-2904",
                        "hired": "2020-10-14T02:28:38 +07:00",
                        children: [
                        
                        ]
                      },
                      {
                        id: "n19",
                        "isActive": false,
                        age: 27,
                        name: "Esmaeel Moradi",
                        title: "male",
                        managerId: 6,
                        "phone": "+1 (948) 448-2904",
                        "hired": "2020-10-14T02:28:38 +07:00",
                        children: [
                        
                        ]
                      }
                  ]
                },
              
            ]
          },
          
          
          {
            id: "n7",
            "isActive": false,
            age: 40,
            name: "Gregory Baumgardner",
            title: "male",
            managerId: 2,
            "phone": "+1 (980) 592-2261",
            "hired": "2017-06-17T02:44:44 +07:00",
            children: [
              {
                  id: "n8",
                  "isActive": false,
                  age:39,
                  name: "Ed Daroza",
                  title: "male",
                  managerId: 7,
                  "phone": "+1 (864) 493-2361",
                  "hired": "2018-02-12T02:39:43 +08:00",
                  children: [
                    
                  ]
                },
                {
                  id: "n9",
                  "isActive": true,
                  age: 22,
                  name: "Chris Dorr",
                  title: "male",
                  managerId: 7,
                  "phone": "+1 (858) 556-3721",
                  "hired": "2018-03-01T03:27:39 +08:00",
                  children: [
                    
                  ]
                }
            ]
        }
      
    ]
  };

  return <div>
  {/* <MapInteractionCSS> */}
  {/* <Container fluid> */}
        <OrganizationChart 
        chartClass="myChart"
        datasource={orgChartSource} 
        draggable={true} 
        // pan={true} 
        // zoom={true} zoominLimit={2} zoomoutLimit={0.6}
        collapsible={true} 
        NodeTemplate={OrgNode} />
    {/* </Container> */}
    {/* </MapInteractionCSS> */}
  </div>;
};

export default OrgChart;