const uData =[4000, 3000, 2000, 2780, 1890, 2390, 3490];
const xLabels =[
    'Page A',
    'Page B',
    'Page C',
    'Page D',
    'Page E',
    'Page F',
    'Page G', 
];
export const locationDataAnalysis = {
    weekly : {
        RetentionInsight : 25.27,
        Asp : 12.09,
        Labour : 25.18,
        ChurnRate : 5,
        CustomerComplaint : 20,
        BaseCar : 23,
        ExtraCar : 24,
        RelInuData : [4000, 3000, 2000, 2780, 1890, 2390, 3490],
        RelInxlabels : xLabels,
        AspuData : [5000, 6000, 1200, 1780, 4590, 5390, 2490],
        AspxLabels : xLabels,
        ClockedIn : 98,
        LabourCar : 2.01,
        LabouruData : [0, 15, 40, 30, 10, 15, 0]
    },
    monthly : {
        RetentionInsight : 30.13,
        Asp : 10.09,
        Labour : 20.18,
        ChurnRate : 10,
        CustomerComplaint : 30,
        BaseCar : 25,
        ExtraCar : 26,
        RelInuData : [500, 1000, 3000, 6780, 6890, 4390, 490],
        RelInxlabels : xLabels,
        AspuData : [6000, 5000, 1200, 7180, 490, 390, 2490],
        AspxLabels : xLabels,
        ClockedIn : 100,
        LabourCar : 3.01,
        LabouruData : [2, 25, 30, 40, 5, 10, 3]
    },
    yearly : {
        RetentionInsight : 40.13,
        Asp : 12.09,
        Labour : 16.18,
        ChurnRate : 15,
        CustomerComplaint : 50,
        BaseCar : 27,
        ExtraCar : 28,
        RelInuData : [700, 800, 2500, 1980, 4890, 5390, 2490],
        RelInxlabels : xLabels,
        AspuData : [5600, 2200, 2200, 4180, 4490, 1390, 2490],
        AspxLabels : xLabels,
        ClockedIn : 95,
        LabourCar : 1.01,
        LabouruData : [7, 29, 32, 46, 55, 60, 13]
    }
};

export const locationDataAnalysisD = {
    weekly : {
        RetentionInsight : [25.27, 22.13, 24.45, 26.89, 20.15, 23.67, 25.89, 21.34, 22.78, 24.12],
        Asp : [12.09, 10.89, 11.34, 13.45, 12.78, 14.23, 10.56, 11.89, 12.67, 13.12],
        Labour : [25.18, 20.34, 22.56, 24.12, 21.78, 23.45, 26.78, 22.12, 20.67, 23.89],
        ChurnRate : [5, 4, 6, 7, 5, 6, 4, 5, 7, 6],
        CustomerComplaint : [20, 18, 25, 22, 19, 21, 23, 20, 24, 22],
        BaseCar : [23, 22, 21, 24, 23, 25, 22, 21, 24, 23],
        ExtraCar : [24, 23, 22, 25, 24, 26, 23, 22, 25, 24],
        RelInuData : [4001, 3070, 2080, 3100, 2200, 2390, 3490],
        AspuData : [5000, 6000, 1200, 1780, 4590, 5390, 2490],
        ClockedIn : [98, 97, 96, 95, 99, 98, 96, 97, 95, 94],
        LabourCar : [2.01, 2.12, 1.98, 2.34, 2.45, 2.78, 2.56, 2.11, 2.09, 2.67],
        LabouruData : [0, 15, 40, 30, 10, 15, 0, 20, 25, 30]
    },
    monthly : {
       RetentionInsight : [30.13, 28.56, 27.89, 31.45, 29.78, 30.34, 32.45, 31.12, 28.89, 30.67],
        Asp : [10.09, 9.89, 11.12, 10.56, 9.78, 10.23, 11.34, 10.67, 9.89, 10.45],
        Labour : [20.18, 19.34, 21.56, 22.12, 21.78, 22.45, 24.78, 21.12, 20.67, 22.89],
        ChurnRate : [10, 9, 11, 12, 10, 11, 9, 10, 12, 11],
        CustomerComplaint : [30, 28, 35, 32, 29, 31, 33, 30, 34, 32],
        BaseCar : [25, 24, 23, 26, 25, 27, 24, 23, 26, 25],
        ExtraCar : [26, 25, 24, 27, 26, 28, 25, 24, 27, 26],
        RelInuData : [4001, 3010, 2000, 3000, 2000, 2390, 3490],
        AspuData : [6000, 5000, 1200, 7180, 490, 390, 2490],
        ClockedIn : [100, 98, 99, 97, 96, 95, 94, 99, 98, 97],
        LabourCar : [3.01, 2.89, 3.12, 3.45, 2.78, 3.23, 3.34, 3.67, 2.89, 3.45],
        LabouruData : [2, 25, 30, 40, 5, 10, 3, 15, 22, 35]
    },
    yearly : {
        RetentionInsight : [40.13, 38.56, 39.89, 41.45, 39.78, 40.34, 42.45, 41.12, 38.89, 40.67],
        Asp : [12.09, 11.89, 13.12, 12.56, 11.78, 12.23, 13.34, 12.67, 11.89, 12.45],
        Labour : [16.18, 15.34, 17.56, 18.12, 17.78, 18.45, 19.78, 17.12, 16.67, 18.89],
        ChurnRate : [15, 14, 16, 17, 15, 16, 14, 15, 17, 16],
        CustomerComplaint : [50, 48, 55, 52, 49, 51, 53, 50, 54, 52],
        BaseCar : [27, 26, 25, 28, 27, 29, 26, 25, 28, 27],
        ExtraCar : [28, 27, 26, 29, 28, 30, 27, 26, 29, 28],
        RelInuData : [4001, 3010, 2000, 2780, 1890, 2390, 3490],
        AspuData : [5600, 2200, 2200, 4180, 4490, 1390, 2490],
        ClockedIn : [95, 94, 96, 93, 92, 91, 90, 97, 96, 95],
        LabourCar : [1.01, 0.89, 1.12, 1.45, 0.78, 1.23, 1.34, 1.67, 0.89, 1.45],
        LabouruData : [7, 29, 32, 46, 55, 60, 13, 25, 35, 50]
    }
};