import { Card ,CardHeader,Text ,Icon } from "@ui5/webcomponents-react";

import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import { useState } from "react";
import lineChartIcon from '@ui5/webcomponents-icons/dist/line-chart.js';
import barChartIcon from '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';




export function MyApp() {
  const [ToggleChart,setToggleChart] = useState('lineChart')
  const [Loading,setLoading] = useState(false)
  const dataset = [
    {
      month: "January",
      data: 65
    },
    {
      month: "February",
      data: 59
    },
    {
      month: "March",
      data: 80
    },
    {
      month: "April",
      data: 81
    },
    {
      month: "May",
      data: 56
    },
    {
      month: "June",
      data: 55
    },
    {
      month: "July",
      data: 40
    }
  ];
  

const handleHeaderClick =()=>{
  if(ToggleChart==='lineChart'){
    setToggleChart('barChart')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setToggleChart('barChart')
      
    }, 2000);

  }else
  {
    setToggleChart('lineChart')
    setLoading(true)
    setTimeout(() => {
      setLoading(false)   
      setToggleChart('lineChart')   
    }, 2000);
  }
  
}
const contentTitle = ToggleChart === 'lineChart' ? 'Line Chart' : 'Bar Chart';
const switchToChart = ToggleChart === 'lineChart' ? 'Bar Chart' : 'Line Chart';


    return(
    
    
    <div>
    <Card
     header={
     <CardHeader titleText="Card" interactive  onClick={handleHeaderClick}
     avatar={ <Icon name={ ToggleChart === "lineChart" ? lineChartIcon : barChartIcon } /> }
     subtitleText={`Click here to switch to ${switchToChart}`}

     /> } 
     style={{ width: "300px" }}>
      <Text style={spacing.sapUiContentPadding}>
      {contentTitle}
        </Text>

        {ToggleChart ==="lineChart" ? (
          <LineChart 
        dimensions={[{ accessor: "month" }]}
        measures={[{ accessor: "data", label: "Stock Price" }]}
        dataset={dataset}
        loading={Loading}
         />
        ):
          ( 
          <BarChart
          dimensions={[{ accessor: "month" }]}
          measures={[{ accessor: "data", label: "Stock Price" }]}
          dataset={dataset}
          loading={Loading}
        />
          )
}

    </Card>
  </div>
    )
  
    

  
     
  }
  