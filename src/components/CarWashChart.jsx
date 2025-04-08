import * as React from 'react';
import {
  Box, FormControl, InputLabel, Select, MenuItem,
  Grid, Paper, Typography, Checkbox, FormControlLabel
} from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import { LocationOn, AccessTime } from '@mui/icons-material';
import { carWashData, locations, timeFrames, timePeriodLabels } from './carWashData';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

const highlightScope = {
  highlight: 'series',
  fade: 'global',
};

const getTopThreeIndices = (arr) => {
  return [...arr]
    .map((value, index) => ({ value, index }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map(item => item.index);
};

export default function CarWashChart() {
  const [timeFrame, setTimeFrame] = React.useState('yearly');
  const [selectedLocation, setSelectedLocation] = React.useState('All Locations');
//   const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const getChartData = () => {
    if (selectedLocation === 'All Locations') {
      const series = timePeriodLabels[timeFrame].map((period, periodIndex) => {
        const periodValues = carWashData.map(location => location[timeFrame][periodIndex]);
        const topThreeIndices = getTopThreeIndices(periodValues);

        return {
          data: periodValues.map((value, idx) => ({
            value,
            highlight: topThreeIndices.includes(idx) ? 'highlight' : 'none'
          })),
          label: period,
          highlightScope,
        };
      });

      return {
        series: series.map(s => ({
          ...s,
          data: s.data.map(d => d.value),
        })),
        xLabels: locations,
        xAxisLabel: 'Locations',
        legendLabel: timeFrame === 'yearly' ? 'Months' :
                    timeFrame === 'monthly' ? 'Weeks' : 'Days',
      };
    } else {
      const locationData = carWashData.find(loc => loc.location === selectedLocation);
      return {
        series: [{
          data: locationData[timeFrame],
          label: selectedLocation,
          highlightScope,
        }],
        xLabels: timePeriodLabels[timeFrame],
        xAxisLabel: timeFrame === 'yearly' ? 'Months' :
                   timeFrame === 'monthly' ? 'Weeks' : 'Days',
        legendLabel: 'Revenue'
      };
    }
  };

  const { series, xLabels, xAxisLabel, legendLabel } = getChartData();

  return (
    <Box sx={{ p: 3, backgroundColor: '#f9f9f9', borderRadius: 2 }}>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 4 }}>
        <Typography variant="h5" fontWeight="bold" mb={3} textAlign="center">
          Car Wash Revenue Dashboard
        </Typography>

        <Grid container spacing={2} alignItems="center" justifyContent="center" mb={3}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="time-frame-label">Time Frame</InputLabel>
              <Select
                labelId="time-frame-label"
                value={timeFrame}
                label="Time Frame"
                onChange={handleTimeFrameChange}
              >
                {timeFrames.map((frame) => (
                  <MenuItem key={frame.value} value={frame.value}>
                    <AccessTime sx={{ mr: 1 }} />
                    {frame.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                value={selectedLocation}
                label="Location"
                onChange={handleLocationChange}
              >
                <MenuItem value="All Locations">
                  <LocationOn sx={{ mr: 1 }} /> All Locations
                </MenuItem>
                {locations.map((location) => (
                  <MenuItem key={location} value={location}>
                    <LocationOn sx={{ mr: 1 }} />
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <BarChart
          height={500}
          series={series}
          xAxis={[{
            data: xLabels,
            scaleType: 'band',
            label: xAxisLabel
          }]}
          yAxis={[{
            label: 'Revenue ($)',
            sx: {
              [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
                transform: 'translateX(-10px)',
              },
            }
          }]}
          colors={['#ff7f0e', '#1f77b4']}
          slotProps={{
            legend: {
              label: legendLabel
            }
          }}
          
          margin={{ left: 100, right: 100 }}
        />
      </Paper>
    </Box>
  );
}
