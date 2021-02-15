import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import 'react-sortable-tree/style.css';

export default class Tree extends Component {
  constructor(props) {
    super(props);

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

  this.state = {
    treeData: [
        {title: 'Starbucks Team', children: [
            { title: 'Gustavo Canton', children: [{ title: 'Babette Siebold' }, {title: 'Tomas'}] },
            { title: 'Dinesh Matta', children: [{ title: 'Elias Tooloee' }, { title: 'Sharmila Muthu'}] },
            { title: this.props.selectedEmployee.name, children: this.props.selectedEmployee.reports.names}
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