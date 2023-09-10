export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
export const nestingSiteColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "location",
    headerName: "Location",
    width: 250,
  },
  {
    field: "beach",
    headerName: "Beach",
    width: 250,
  },
  {
    field: "latitude",
    headerName: "Latitude",
    width: 100,
  },
  {
    field: "longitude",
    headerName: "Longitude",
    width: 100,
  },
  {
    field: "count",
    headerName: "Count",
    width: 100,
  },
];
export const speciesNestingColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "species",
    headerName: "Species",
    width: 150,
  },
  {
    field: "nestCount",
    headerName: "Nest Count",
    width: 100,
  },
  {
    field: "hatchlingCount",
    headerName: "Hatchling Count",
    width: 150,
  },
  {
    field: "averageClutchSize",
    headerName: "Average Clutch Size",
    width: 150,
  },
  {
    field: "incubationDays",
    headerName: "Incubation Days",
    width: 150,
  },
];
export const nestingSeasonColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "year",
    headerName: "Year",
    width: 150,
  },
  {
    field: "nests",
    headerName: "Nests",
    width: 100,
  },
  {
    field: "hatchlings",
    headerName: "Hatchlings",
    width: 230,
  },
  {
    field: "averageHatchSuccess",
    headerName: "Average Hatch Success",
    width: 100,
  },
  {
    field: "averageEmergenceSuccess",
    headerName: "Average Emergence Success",
    width: 100,
  },
];
export const dailyNestingActivityColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "nests",
    headerName: "Nests",
    width: 100,
  },
  {
    field: "hatchlings",
    headerName: "Hatchlings",
    width: 230,
  },
  {
    field: "emergenceSuccess",
    headerName: "Emergence Success",
    width: 100,
  },
  {
    field: "relocation",
    headerName: "Relocation",
    width: 100,
  },
];
export const newLocationColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "originalLocation",
    headerName: "Original Location",
    width: 150,
  },
  {
    field: "newLocation",
    headerName: "New Location",
    width: 150,
  },
  {
    field: "relocationDate",
    headerName: "Relocation Date",
    width: 150,
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 200,
  },
];
export const nestSuccessColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "species",
    headerName: "Species",
    width: 150,
  },
  {
    field: "totalNests",
    headerName: "Total Nests",
    width: 150,
  },
  {
    field: "successfulNests",
    headerName: "Successful Nests",
    width: 150,
  },
  {
    field: "success",
    headerName: "Success",
    width: 200,
  },
];
export const nestingSiteTrendColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "year",
    headerName: "Year",
    width: 150,
  },
  {
    field: "nestCount",
    headerName: "Nest Count",
    width: 150,
  },
  {
    field: "hatchlingCount",
    headerName: "Hatchling Count",
    width: 150,
  },
  {
    field: "success",
    headerName: "Success",
    width: 200,
  },
  {
    field: "siteActivityTrend",
    headerName: "Site Activity Trend",
    width: 200,
  },
];
export const climateFactorColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "date",
    headerName: "Date",
    width: 150,
  },
  {
    field: "temperature",
    headerName: "Temperature (°C)",
    width: 150,
  },
  {
    field: "precipitation",
    headerName: "Precipitation (mm)",
    width: 150,
  },
  {
    field: "moonPhase",
    headerName: "Moon Phase",
    width: 200,
  },
  {
    field: "tidal",
    headerName: "Tidal Conditions",
    width: 200,
  },
  {
    field: "beachSlope",
    headerName: "Beach Slope",
    width: 200,
  },
  {
    field: "vegetation",
    headerName: "Vegetation",
    width: 200,
  },
  {
    field: "seaLevel",
    headerName: "Sea Level",
    width: 200,
  },
];
/* egg laying prediction table */
export const predictionColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "seaTurtleType",
    headerName: "Sea turtle type",
    width: 150,
  },
  {
    field: "area",
    headerName: "Area",
    width: 150,
  },
  {
    field: "beachSlope",
    headerName: "Beach Slope",
    width: 150,
  },
  {
    field: "Surface Current",
    headerName: "Moon Phase",
    width: 200,
  },
  {
    field: "Temperature",
    headerName: "Tidal Conditions",
    width: 200,
  },
  {
    field: "Tidal Range",
    headerName: "Beach Slope",
    width: 200,
  },
  {
    field: "vegetation",
    headerName: "Vegetation",
    width: 200,
  },
];
