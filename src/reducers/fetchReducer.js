import { FETCH_DATA } from "../redux/type";

const intialState = {
  companyInfo: [],
  service: [],
  serviceList1: [],
  serviceList2: [],
  richmond: [],
  invoicing: [],
  team: [],
  teamBrief: [],
  teamStatements1: [],
  teamStatements2: []
};

export default function(state = intialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      console.log("reducer");
      return {
        ...state,
        companyInfo: action.companyInfo,
        service: action.service,
        serviceList1: action.serviceList1,
        serviceList2: action.serviceList2,
        richmond: action.richmond,
        invoicing: action.invoicing,
        team: action.team,
        teamBrief: action.teamBrief,
        teamStatements1: action.teamStatements1,
        teamStatements2: action.teamStatements2
      };
    default:
      return state;
  }
}
