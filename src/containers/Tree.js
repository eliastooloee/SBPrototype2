import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import {getTreeFromFlatData} from 'react-sortable-tree';
import {employeeData} from "../data";
import 'react-sortable-tree/style.css';

export default class Tree extends Component {
  constructor(props) {
    super(props);

    const treeData = getTreeFromFlatData(employeeData)

    // const treeData = this.props.employees.map(employee => ({ title: employee.name, children:employee.reports }));
    // // const childData = this.props.employees.reports.map(report => ({title: report.name}));
    // // console.log(childData)
    
    // this.state = {
    //     treeData: treeData
    // }




//     this.state = {
//       treeData: [
//             { title: 'Starbucks Team', children: [
//                 { title: this.props.selectedEmployee.name, children: this.props.selectedEmployee.reports }
//             ]}],
//     };
//   }

  // this.state = {
  //   treeData: [
  //       {title: 'Starbucks Team', children: [
  //           { title: 'Gustavo Canton', children: [{ title: 'Babette Siebold' }, {title: 'Tomas'}] },
  //           { title: 'Dinesh Matta', children: [{ title: 'Elias Tooloee' }, { title: 'Sharmila Muthu'}] },
  //           { title: this.props.selectedEmployee.name, children: this.props.selectedEmployee.reports.names}
  //       ]}
  //   ],
  // };
  this.state = {
    treeData: [
        {title: 'Elpida Ormanidou', expanded: true, children: [
            { title: 'Gustavo Canton', children: [{ title: 'Babette Siebold', children: [{title:'Elyse Kadokura'}, {title:'Pan Chen'}, {title:'Tyler Norrish'}]}, {title: 'Tomas Gartner', children: [{title:'Cameron Bartok'}, {title:'Kyle Mana'}, {title:'Phi Hoang'}, {title:'Melissa Bain'}, {title:'Kyle Chezik'}]}, {title: 'Anuja Jain'}, {title: 'Matt Thomas'}, {title: 'Jason Salazer', children: [{title: 'Esmaeel Moradi'}, {title: 'Wayne Chen'}]}] },
            { title: 'Gregory Baumgardner', children: [{ title: 'Ed Daroza' }, { title: 'Chris Dorr'}] },
            // { title: this.props.selectedEmployee.name, children: this.props.selectedEmployee.reports.names}
        ]}
    ],
  };
}





  render() {
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          
        />
      </div>
    );
  }
}