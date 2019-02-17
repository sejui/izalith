import { FETCH_DATA } from "./type";

export const fetchData = () => dispatch => {
  console.log("fetching!!");
  console.log(this);
  fetch("http://www.sfu.ca/~seijuy/reference.json") //change it when deploy
    .then(response => response.json())
    .then(data =>
      dispatch({
        type: FETCH_DATA,
        // payload: data
        companyInfo: data.companyInfo,
        service: data.service,
        serviceList1: data.service.tags1,
        serviceList2: data.service.tags2,
        richmond: data.work[0],
        invoicing: data.work[1],
        team: data.team,
        teamBrief: data.team.teamBrief,
        teamStatements1: data.team.teamStatements[0],
        teamStatements2: data.team.teamStatements[1]
      })
    );
};
