import React,{useState} from 'react'
import { Box,Grid,Typography,Card,CardContent,IconButton,Menu,MenuItem,Tooltip,Modal,Button,Divider,Select,FormControl,InputLabel } from '@mui/material'
import {
    MoreVert as MoreVertIcon,
    Info as InfoIcon,
    Close as CloseIcon,
    Download as DownloadIcon,
    Print as PrintIcon,
    Fullscreen as FullscreenIcon,
} from '@mui/icons-material';
import { BarChart } from '@mui/x-charts/BarChart';

const styles ={
    root : {
        flexGrow : 1,
        p : 3,
        bgcolor : '#FCFAFA',
        width : '100%',
        padding : '0'
    },
    mainContainer : {
        border : '1px solid #D9D9D9',
        borderRadius : '10px',
        overflow : 'hidden',
        bgcolor : 'background.paper',
    },
    card : {
        borderRadius : '0',
        boxShadow : 'none',
        bgcolor : 'transparent'
    },
    cardContent : {
        p : 0
    },
    headerContainer : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        mb: 2
    },
    metricCard : {
        p : 2,
        bgcolor : '#FCFAFA',
        height : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'space-between'
    },
    metricTitle : {
        fontSize : '0.87rem',
        fontWeight : 500,
        mb : 1
    },
    chartContainer : {
        height : 400,
        backgroundColor : 'white',
        borderRadius : '4px',
        p : 2
    },
    modalContainer : {
        position : 'absolute',
        top : '50%',
        left : '50%',
        transform : 'translate(-50%, -50%)',
        width : '95%',
        bgcolor : 'background.paper',
        boxShadow : 24,
        p : 4,
    },
    modalHeader : {
        display : 'flex',
        justifyContent : 'space-between',
        alignItems : 'center',
        mb : 3
    },
    expandedMetricCard : {
        p : 3,
        bgcolor : '#FCFAFA',
        height : '100%'
    },
    expandedChartContainer : {
        height : '60vh',
        backgroundColor : 'white',
        p : 2
    }
}
const DashboardContent = () => {
    const [anchorEl, setAnchorEl] = useState (null);
    const [timeRange, setTimeRange] = useState('weekly');
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedLocation,setSelectedLocation] = useState ('all');

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () =>{
        setAnchorEl(null);
    }
    const handleTimeRangeChange = (newValue) => {
        setTimeRange(newValue);
        handleMenuClose();
    }
    const handleModalOpen = () =>{
        setModalOpen(true);
        handleMenuClose();
    }
    const handleModalClose = () =>{
        setModalOpen(false);
    }
    const handleDownloadCSV = () =>{
        console.log('Downloading CSV for', timeRange, 'data');
        handleMenuClose();
    }
    const handlePrintChart = () =>{
        console.log('Printing chart for', timeRange, data);
        handleMenuClose();
    }
    const handleLocationChange = (event) =>{
        setSelectedLocation(event.target.value);
    };

    const locations = [
        "Location 1",
        "Location 2",
        "Location 3",
        "Location 4",
        "Location 5",
        "Location 6",
        "Location 7",
        "Location 8",
        "Location 9",
        "Location 10",
    ];

    const businessOverview = [
        {
            id : 'earnings',
            title : 'Total Earnings (All Locations)',
            value : '$2,340',
            color : '#2196F3'
        },
        {
            id : 'washes',
            title : 'Total Car Washes (All Locations)',
            value : '2,017',
            color : '#4CAF50'
        },
        {
            id : 'locations',
            title : 'Top performing Locations',
            value : '3',
            color : '#FF9800'
        },
        {
            id : 'subscriptions',
            title : 'New Subscriptions',
            value : '10',
            color : '#9C27B0'
        },

    ];

    const locationData = {
        weekly : {
            blueSeries1 : [5, 45, 55, 35, 40, 60, 30, 35, 40, 45],
            orangeSeries : [85, 65, 90, 45, 50, 80, 40, 45, 50, 55],
            blueSeries2 : [10, 50, 45, 30, 35, 70, 35, 25, 30, 35],
            blueSeries3 : [15, 55, 35, 25, 25, 50, 20, 40, 45, 25],
            blueSeries4 : [20, 60, 25, 20, 30, 40, 25, 20, 20, 40],
            blueSeries5 : [25, 30, 15, 15, 20, 30, 15, 10, 10, 15],
            blueSeries6 : [30, 25, 65, 10, 15, 20, 10, 15, 25, 30], 
        },
        monthly : {
            blueSeries1 : [5, 55, 65, 45, 50, 70, 40, 45, 50, 55],
            orangeSeries : [95, 75, 85, 55, 60, 90, 50, 55, 60, 65],
            blueSeries2 : [10, 50, 45, 30, 35, 70, 35, 25, 30, 35],
            blueSeries3 : [15, 55, 35, 25, 25, 50, 20, 40, 45, 25],
            blueSeries4 : [20, 60, 25, 20, 30, 40, 25, 20, 20, 40],
            blueSeries5 : [25, 30, 15, 15, 20, 30, 15, 10, 10, 15],
            blueSeries6 : [30, 25, 65, 10, 15, 20, 10, 15, 25, 30], 
        },
        yearly : {
            blueSeries1 : [8, 65, 75, 55, 60, 80, 50, 55, 60, 65],
            orangeSeries : [105, 85, 95, 65, 70, 100, 60, 65, 70, 75],
            blueSeries2 : [10, 50, 45, 30, 35, 70, 35, 25, 30, 35],
            blueSeries3 : [15, 55, 35, 25, 25, 50, 20, 40, 45, 25],
            blueSeries4 : [20, 60, 25, 20, 30, 40, 25, 20, 20, 40],
            blueSeries5 : [25, 30, 15, 15, 20, 30, 15, 10, 10, 15],
            blueSeries6 : [30, 25, 65, 10, 15, 20, 10, 15, 25, 30], 
        },
    };


  return (
    <Box sx={styles.root}>
        <Box sx={styles.mainContainer}>
            <Grid container spacing={0} sx={{display : 'block'}}>
                <Grid item xs={0}>
                    <Card sx={styles.card}>
                        <CardContent sx={styles.cardContent}>
                            <Grid container spacing={2} sx={{mb:3, backgroundColor : '#fcfafa', display: 'flex', justifyContent : 'space-between', padding : '20px'}}>
                                <div style={{display : 'flex', flexDirection: 'row'}}>
                                    <Typography variant='h6' sx={{display: 'flex', alignItems: 'center', fontWeight : 'bold'}}>Business Overview</Typography>
                                    {businessOverview.map((card,index)=>(
                                        <Grid item xs={12} sm={6} md={3} key={card.id} sx={{display: 'flex', marginLeft: '20px', justifyContent: 'space-evenly'}}>
                                            <Box sx={styles.metricCard}>
                                                <Typography
                                                 variant='subtitle 2'
                                                 color = 'text.secondary'
                                                 sx = {styles.metricTitle}
                                                 >
                                                    {card.title}
                                                 </Typography>
                                                 <Typography
                                                  variant='h4'
                                                  component="div"
                                                  sx={{fontWeight : 'bold', color: card.color, lineHeight : 1.2}}
                                                 >
                                                 {card.value}
                                                 </Typography>
                                            </Box>
                                        </Grid>
                                    ))}
                                    <FormControl fullWidth styles={{marginLeft : "20px"}}>
                                        <InputLabel>Select Location</InputLabel>
                                        <Select value={selectedLocation?? "all"} onChange={handleLocationChange}>
                                            <MenuItem value="all">All Locations</MenuItem>
                                            {locations.map((loc,index)=>(
                                                <MenuItem key={index} value={index}>
                                                    {loc}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                                <Box sx={[styles.headerContainer, {justifyContent: 'flex-end', marginBottom: '50px'}]}>

                                    <Box>
                                        <Tooltip title="Information about business overview">
                                            <IconButton size='small'>
                                                <InfoIcon fontSize='small'/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Expand View">
                                            <IconButton size='small' onClick={handleModalOpen}>
                                                <FullscreenIcon fontSize='small'/>
                                            </IconButton>
                                        </Tooltip>
                                        <IconButton
                                         size='small'
                                         onClick={handleMenuOpen}
                                         aria-controls='card-menu'
                                         aria-haspopup="true"
                                        >
                                            <MoreVertIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Grid>

                            <Box sx={styles.chartContainer}>
                                <div style={{display:'flex', justifyContent: 'flex-end'}}>
                                    <div style={{width : '20px', height: '20px', background: '#f57c00', marginRight:'5px'}}>

                                    </div>
                                    <Typography>
                                        Top performing
                                    </Typography>
                                </div>
                                <BarChart
                                 series={selectedLocation === null || selectedLocation === 'all'
                                 ?[
                                    {
                                        data : locationData[timeRange].blueSeries1,
                                        color : '#2196f3',
                                        label : "Blue Series 1",
                                    },
                                    {
                                        data : locationData[timeRange].blueSeries2,
                                        color : '#2196f3',
                                        label : "Blue Series 2",
                                    },
                                    {
                                        data : locationData[timeRange].blueSeries3,
                                        color : '#2196f3',
                                        label : "Blue Series 3",
                                    },
                                    {
                                        data : locationData[timeRange].blueSeries4,
                                        color : '#2196f3',
                                        label : "Blue Series 4",
                                    },
                                    {
                                        data : locationData[timeRange].blueSeries5,
                                        color : '#2196f3',
                                        label : "Blue Series 5",
                                    },
                                    {
                                        data : locationData[timeRange].blueSeries6,
                                        color : '#2196f3',
                                        label : "Blue Series 6",
                                    },
                                    {
                                        data : locationData[timeRange].orangeSeries,
                                        color : '#f57c00',
                                        label : 'Orange Series'
                                    }
                                 ] 
                                 : 
                                 [
                                    {
                                        data : [locationData[timeRange].blueSeries1[selectedLocation]],
                                        color : '#2196f3',
                                        label : 'Blue Series 1',
                                    },
                                    {
                                        data : [locationData[timeRange].blueSeries2[selectedLocation]],
                                        color : '#2196f3',
                                        label : 'Blue Series 2',
                                    },
                                    {
                                        data : [locationData[timeRange].blueSeries3[selectedLocation]],
                                        color : '#2196f3',
                                        label : 'Blue Series 3',
                                    },
                                    {
                                        data : [locationData[timeRange].blueSeries4[selectedLocation]],
                                        color : '#2196f3',
                                        label : 'Blue Series 4',
                                    },
                                    {
                                        data : [locationData[timeRange].blueSeries5[selectedLocation]],
                                        color : '#2196f3',
                                        label : 'Blue Series 5',
                                    },
                                    {
                                        data : [locationData[timeRange].blueSeries6[selectedLocation]],
                                        color : '#2196f3',
                                        label : 'Blue Series 6',
                                    },
                                    {
                                        data : [locationData[timeRange].orangeSeries[selectedLocation]],
                                        color : '#f57c00',
                                        label : 'Orange Series',
                                    },
                                 ]}

                                 xAxis={[{
                                    data : selectedLocation === null || selectedLocation === 'all'
                                    ? locations
                                    : [locations[selectedLocation]],
                                    scaleType: 'band',
                                    categoryGapRatio : 0.4,
                                    barGapRatio : 0.6,
                                    legend : {hidden : true}
                                 }]}
                                 yAxis={[{ min:0, max:110, label: 'Revenue ($)'}]}
                                 height={350}
                                 bottomAxis={{label : 'All franchise locations.'}}
                                 grid={{horizontal:true}}
                                 />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>

        <Menu
          id='card-menu'
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
        <MenuItem sx={{fontWeight : 'bold', color: 'text.secondary'}}>Time Range</MenuItem>
        <MenuItem onClick={()=> handleTimeRangeChange('weekly')}>Weekly</MenuItem>
        <MenuItem onClick={()=> handleTimeRangeChange('monthly')}>Monthly</MenuItem>
        <MenuItem onClick={()=> handleTimeRangeChange('yearly')}>Yearly</MenuItem>
        <Divider/>
        <MenuItem onClick={handleDownloadCSV}>
            <DownloadIcon fontSize='small' sx={{mr : 1}}/> Download CSV
        </MenuItem>
        <MenuItem onClick={handlePrintChart}>
            <PrintIcon fontSize='small' sx={{mr : 1}}/> Print Chart
        </MenuItem>
        </Menu>

        <Modal open={modalOpen} onClose={handleModalClose}>
            <Box sx={styles.modalContainer}>
                <Box sx={styles.modalHeader}>
                    <Typography variant='h5'>
                        Business Overview - {timeRange.charAt(0).toUpperCase() + timeRange.slice(1)} View
                    </Typography>
                    <Box>
                        <Button startIcon={<DownloadIcon/>} onClick={handleDownloadCSV} sx={{mr : 1}}>Download CSV</Button>
                        <Button startIcon={<PrintIcon/>} onClick={handlePrintChart} sx={{mr : 1}}>Print</Button>
                        <IconButton onClick={handleModalClose}><CloseIcon/></IconButton>
                    </Box>
                </Box>

                <Grid container spacing={3} sx={{mb:3}}>
                    {businessOverview.map((card)=>(
                        <Grid item xs={12} sm={6} md={3} key={card.id}>
                        <Box sx={styles.expandedMetricCard}>
                            <Typography variant='subtitle2' color='text.secondary' sx={{mb:1.5}}>
                                {card.title}
                            </Typography>
                            <Typography variant='h3' sx={{fontWeight: 'bold', color: card.color}}>
                                {card.value}
                            </Typography>
                        </Box>
                </Grid>
                    ))}
                </Grid>

                <Box sx={styles.expandedChartContainer}>
                    <BarChart
                    series={[
                        {data : locationData[timeRange].blueSeries1, color: '#2196f3'},
                        {data : locationData[timeRange].blueSeries2, color: '#2196f3'},
                        {data : locationData[timeRange].blueSeries3, color: '#2196f3'},
                        {data : locationData[timeRange].blueSeries4, color: '#2196f3'},
                        {data : locationData[timeRange].blueSeries5, color: '#2196f3'},
                        {data : locationData[timeRange].blueSeries6, color: '#2196f3'},
                        {data : locationData[timeRange].orangeSeries, color: '#f57c00'},
                    ]}

                    xAxis={[{
                        data: ['Location 1', 'Location 2', 'Location 3', 'Location 4', 'Location 5',
                                'Location 6', 'Location 7', 'Location 8', 'Location 9', 'Location 10'],
                        scaleType : 'band',
                        categoryGapRatio : 0.7,
                        barGapRatio : 0.6
                    }]}
                    yAxis={[{ min:0, max:110, label : 'Revenue ($)'}]}
                    height={350}
                    bottomAxis={{label: 'All franchise locations.'}}
                    grid={{horizontal:true}}
                    />
                </Box>
            </Box>
        </Modal>

    </Box> 
  );
};

export default DashboardContent
