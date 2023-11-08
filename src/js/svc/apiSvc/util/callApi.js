import axios from "axios";
import getApiUrl from "@apiSvc/util/getApiUrl.js";

const callApi = async (route, requestObject) => {
  const minCallDuration = 500;
  const startTime = new Date();

  requestObject.jwt = localStorage.getItem("jwt");
  const apiUrl = getApiUrl();
  let response = null;
  try {
    const resultJson = await axios.post(
      `${apiUrl}/routes/${route}.php`,
      requestObject,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = { status: resultJson.status, data: resultJson.data };
  } catch (error) {
    response = error.response?.data
      ? { status: error.response.status, data: error.response.data }
      : { status: error.status, data: error };
  }

  const endTime = new Date();
  const runTime = endTime.getTime() - startTime.getTime();
  const remainingTime =
    minCallDuration - runTime < 0 ? 0 : minCallDuration - runTime;

  await delay(remainingTime);

  return response;
};

// TODO should be part of svc
const delay = async (remainingTime) => {
  return new Promise((resolve) => {
    setTimeout(resolve, remainingTime);
  });
};

export default callApi;
