import React, { useEffect, useState } from 'react'
import { Card,CardContent,Typography,IconButton,Grid,Tooltip } from '@mui/material';
import { MoreVert,Info,Fullscreen } from '@mui/icons-material';
import { ChartContainer } from '@mui/x-charts';
import { AreaPlot } from '@mui/x-charts';
import {locationDataAnalysis} from './mock'
import { locationDataAnalysisD } from './mock';

const xLabels = [
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G',
];


const LaborStaffMonitoring = (props) => {
    debugger;
    const[filteredData,setFilteredData] = useState ({});
    useEffect(()=>{
        if(!props?.timeRange || !locationDataAnalysis[props?.timeRange]) return;

        if(props.selectedLocation === 'all'){
            setFilteredData(locationDataAnalysis[props?.timeRange]);
        }else{
            setFilteredData({
                Labour : locationDataAnalysisD[props?.timeRange].labour[props.selectedLocation]?? 0,
                ClockedIn : locationDataAnalysisD[props?.timeRange].ClockedIn[props.selectedLocation] ?? 0,
                LabourCar : locationDataAnalysisD[props?.timeRange].LabourCar[props.selectedLocation] ?? 0,
                RelInuData : [locationDataAnalysisD[props?.timeRange].RelInuData],
                AspuData : [locationDataAnalysisD[props?.timeRange].AspuData],
                LabouruData : locationDataAnalysisD[props?.timeRange]?.LabouruData != undefined ? locationDataAnalysisD[props?.timeRange]?.LabouruData : [7, 29, 32, 46, 55, 60, 13],
                RelInxLabels : [
                    'Page A',
                    'Page B',
                    'Page C',
                    'Page D',
                    'Page E',
                    'Page F',
                    'Page G',
                ] 
            })
        }
    },[])
  return (
    <>

    </>
  )
}

export default LaborStaffMonitoring