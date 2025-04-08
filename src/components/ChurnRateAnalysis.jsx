import React, {useState, useEffect} from 'react';
import {Box, Card, CardContent, Typography, IconButton, Grid, Tooltip} from '@mui/material';
import {
        MoreVert as MoreVertIcon,
        Info as InfoIcon,
        Close as CloseIcon,
        Download as DownloadIcon,
        Print as PrintIcon,
        Fullscreen as FullscreenIcon
} from '@mui/icons-material';
import MovingIcon from "@mui/icons-material/Moving"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import { BarChart } from '@mui/x-charts/BarChart';
import { locationDataAnalysis } from './mock';
import { locationDataAnalysisD } from './mock';

const styles = {
    headerContainer : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        mb : 2
    }
}

const data1 = [
    {name : "A", value : 40},
    {name : "B", value : 60},
    {name : "C", value : 80},
    {name : "D", value : 70},
    {name : "E", value : 60},
    {name : "F", value : 50},
    {name : "G", value : 65},
];

const data2 = [
    {name : "A", value : 40},
    {name : "B", value : 60},
    {name : "C", value : 80},
    {name : "D", value : 70},
    {name : "E", value : 60},
    {name : "F", value : 50},
    {name : "G", value : 65},
];

const ChurnRateAnalysis = (props) =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    
    const handleMenuClose = () =>{
        setAnchorEl(null);
    }

    const handleModalOpen = () =>{
        setModalOpen(true);
        handleMenuClose();
    };

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const [filteredData, setFilteredData] = useState({});

    useEffect (()=>{
        if(!props?.timeRange || !locationDataAnalysis[props.timeRange]) return;

        if(props.selectedLocation === "all"){
            setFilteredData(locationDataAnalysis[props?.timeRange]);
        }else{
            setFilteredData({
                RetentionInsight : locationDataAnalysisD[props?.timeRange].RetentionInsight[props.selectedLocation] ?? 0,
                ChurnRate : locationDataAnalysisD[props?.timeRange].ChurnRate[props.selectedLocation] ?? 0,
                CustomerComplaint : locationDataAnalysisD[props?.timeRange].CustomerComplaint[props.selectedLocation] ?? 0,
                Asp : locationDataAnalysisD[props?.timeRange].Asp[props.selectedLocation] ?? 0,
                BaseCar : locationDataAnalysisD[props?.timeRange].BaseCar[props.selectedLocation] ?? 0,
                ExtraCar : locationDataAnalysisD[props?.timeRange].ExtraCar[props.selectedLocation] ?? 0,
                RelInuData : locationDataAnalysisD[props?.timeRange]?.RelInuData ?? [[4000, 3000, 2000, 2780, 1890, 2390, 3490]],
                AspuData : locationDataAnalysisD[props?.timeRange]?.AspuData ?? [[5000, 6000, 1200, 1780, 4590, 5390, 2490]],
                RelInxLabels : [
                    'Page A',
                    'Page B',
                    'Page C',
                    'Page D',
                    'Page E',
                    'Page F',
                    'Page G',
                ],
                AspxLabels : [
                    'Page A',
                    'Page B',
                    'Page C',
                    'Page D',
                    'Page E',
                    'Page F',
                    'Page G',
                ],
            });
        }
    },[props?.timeRange, props.selectedLocation])
    
    return (
      <div>
        <Typography variant='h6' sx={{display:'flex', alignItems : 'center', fontWeight : 'bold', marginBottom: '10px'}}>
            Churn Rate Analysis
        </Typography>

        <Grid container spacing={2}>
            {/* First Card */}
            <Grid item xs={12} sm={6} md={6}>
                <Card sx={{borderRadius : 3, boxShadow : 2}}>
                    <CardContent>
                        <div style={{display: 'flex', justifyContent: "space-between", alignItems:"center"}}>
                            <Typography variant='subtitle2' color='textSecondary' fontWeight={600}>
                                customer & Retention insights <span><ArrowDropDownIcon/></span>
                            </Typography>

                            <Box sx={{display : "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Box>
                                    <Tooltip title="Information about business overview">
                                        <IconButton size='small'>
                                            <InfoIcon fontSize='small'/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Expand View">
                                        <IconButton size='small'>
                                            <FullscreenIcon fontSize='small' onClick={handleModalOpen}/>
                                        </IconButton>
                                    </Tooltip>
                                    <IconButton
                                    size='small'
                                    onClick={handleMenuOpen}
                                    aria-controls='card-menu'
                                    aria-haspopup='true'
                                    >
                                        <MoreVertIcon fontSize='small'/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </div>

                        <div style={{display: 'flex', justifyContent: "space-between", alignItems:"center", marginTop: 8}}>
                            <Typography variant='h4' fontWeight={600}>{filteredData?.RetentionInsight}%</Typography>
                            <div style={{width:80, height:40}}>
                                <BarChart
                                    width={80}
                                    height={40}
                                    margin={{top:0, right:0, bottom:0, left:0}}
                                    series={[{data:filteredData?.RelInuData?.[0] || [], color:'#f57c00'}]}
                                    xAxis={[{scaleType:'band', data:filteredData?.RelInxLabels || []}]}
                                    colors={['#f57c00']}
                                />
                            </div>
                        </div>
                        <div style={{marginTop : 8}}>
                            <Typography variant='body2' color='textSecondary'>
                                Churn Rate <span style={{float: "right", fontWeight:600}}>{filteredData?.ChurnRate}%</span>
                            </Typography>
                            <Typography variant='body2' color='textSecondary' mt={1}>
                                Customer Complaint <span style={{float: "right", fontWeight:600}}>{filteredData?.CustomerComplaint}</span>
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>

            {/* second Card */}
            <Grid item xs={12} sm={6} md={6}>
                <Card sx={{borderRadius : 3, boxShadow : 2}}>
                    <CardContent>
                        <div style={{display: 'flex', justifyContent: "space-between", alignItems:"center"}}>
                            <Typography variant='subtitle2' color='textSecondary' fontWeight={600}>
                                ASP <span><MovingIcon/></span>
                            </Typography>

                            <Box sx={{display : "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <Box>
                                    <Tooltip title="Information about business overview">
                                        <IconButton size='small'>
                                            <InfoIcon fontSize='small'/>
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="Expand View">
                                        <IconButton size='small'>
                                            <FullscreenIcon fontSize='small' onClick={handleModalOpen}/>
                                        </IconButton>
                                    </Tooltip>
                                    <IconButton
                                    size='small'
                                    onClick={handleMenuOpen}
                                    aria-controls='card-menu'
                                    aria-haspopup='true'
                                    >
                                        <MoreVertIcon fontSize='small'/>
                                    </IconButton>
                                </Box>
                            </Box>
                        </div>

                        <div style={{display: 'flex', justifyContent: "space-between", alignItems:"center", marginTop: 8}}>
                            <Typography variant='h4' fontWeight={600}>${filteredData?.Asp ?? 0}</Typography>
                            <div style={{width:80, height:40}}>
                                <BarChart
                                    width={80}
                                    height={40}
                                    margin={{top:0, right:0, bottom:0, left:0}}
                                    series={[{data:filteredData?.AspuData?.[0] || [], color:'#2196f3'}]}
                                    xAxis={[{scaleType:'band', data:filteredData?.AspxLabels || []}]}
                                    colors={['#2196f3']}
                                />
                            </div>
                        </div>
                        <div style={{marginTop : 8}}>
                            <Typography variant='body2' color='textSecondary'>
                                Base $/Car <span style={{float: "right", fontWeight:600}}>${filteredData?.BaseCar}</span>
                            </Typography>
                            <Typography variant='body2' color='textSecondary' mt={1}>
                                Extra $/Car <span style={{float: "right", fontWeight:600}}>${filteredData?.ExtraCar}</span>
                            </Typography>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
      </div>
    );
};
export default ChurnRateAnalysis;