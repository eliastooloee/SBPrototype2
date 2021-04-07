import * as React from "react";
import { Chart } from "react-google-charts";

export default class QBRView extends React.Component {
    render() {
      return (
        <div className={"my-pretty-chart-container"}>
         <Chart
            width={'100%'}
            height={'500px'}
            chartType="Bar"
            loader={<div>Loading Chart</div>}
            data={[
                ['KPI', 'Number of Reports', 'No. Employees/No. Managers', 'Avg. Span of Control'],
                ['2014', 1000, 400, 200],
                ['2015', 1170, 460, 250],
                ['2016', 660, 1120, 300],
                ['2017', 1030, 540, 350],
            ]}
            options={{
                // Material design options
                chart: {
                title: 'Quarterly Business Review',
                subtitle: 'Key Performance Indicators',
                },
                colors: ['#00704A', '#C0C0C0', '#98ff98']
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
        />
        </div>
      );
    }
  }