import {
  checkInternetConnection,
  manageApiResponseCode,
} from '../Util/Utilities';
import config from '../config';
import modules from './index';

const GetApiCall = async (
  url,
  header,
  showNoInternetMessage = true,
  manageApiResponse = true,
) => {
  const isInternet = await checkInternetConnection();

  if (!isInternet) {
    if (showNoInternetMessage) {
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Check your internet connection',
      );
    }
    return null;
  }

  const rawResponse = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: !!config.Constant.USER_DATA.access_token
        ? `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiIxMTM2MjgiLCJ1c2VyX2lkIjoiYzZkOWIwZDg4OTU4Nzg5ZjJlNGM5YWM3IiwiZmlyc3RfbmFtZSI6IlRydXNoYWwiLCJsYXN0X25hbWUiOiIiLCJjb3VudHJ5X2NvZGUiOiIrOTEiLCJwaG9uZV9ubyI6Ijg1MzA0MzM2MzQiLCJmdWxsX3Bob25lX25vIjoiKzkxODUzMDQzMzYzNCIsImxldmVsIjoiRU5UUkVQUkVORVVSIiwid2hhdF9iZWNvbWUiOm51bGwsImVtYWlsIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0zMFQwMDoxNToxMC4wMDBaIiwiZG9iIjpudWxsLCJ1c2VyX3N0YXR1cyI6IkFDVElWRSIsImRvY192ZXJpZnkiOiJQRU5ESU5HIiwiaW5kdXN0cnlfaWQiOm51bGwsImxhbmd1YWdlIjpudWxsLCJ1c2VyX2ltYWdlIjpudWxsLCJjcmVkaXRfY3VycmVudCI6bnVsbCwiY3JlZGl0X3VzZWQiOm51bGwsInRvdGFsX2FjdGl2YXRpb25fY291cnNlX2xlZnQiOjAsImFjY2Vzc190b2tlbiI6bnVsbCwicGhvbmVfdmVyaWZ5Ijp0cnVlLCJyZWdpc3RyYXRpb25fZGF0ZSI6IjIwMjEtMDUtMjZUMDg6MzQ6MzQuMDAwWiIsInRva2VuX2V4cGlyZWRfdGltZSI6IjIwMjItMDUtMjZUMDg6MzQ6MzQuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDIxLTA1LTI2VDA4OjM0OjM0LjAwMFoifSwiaWF0IjoxNjIyMjgzNzA3LCJleHAiOjE2MjQ4NzU3MDd9.7wPKqyUj8jTfZh03rsNKs8YD1olcaubgX9Y4aTPYTAo`
        : '',
    },
  })
    .then(r => r.json())
    .then(response => {
      console.log('URL_DEBUG ---- URL ----'+url);
      console.log('URL_DEBUG Response Json:', JSON.stringify(response));
      return response;
    })
    .catch(exc => {
      config.Constant.showLoader.hideLoader();
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Something went wrong try again after sometime',
      );
      return null;
    });

  if (!manageApiResponse) {
    console.log('rawResponse1', rawResponse);
    return null;
  } else if (rawResponse === null) {
    console.log('rawResponse2', rawResponse);
    return null;
  } else if (rawResponse.success === undefined) {
    console.log('rawResponse3', rawResponse);
    return rawResponse;
  } else if (rawResponse.success === true) {
    console.log('rawResponse4', rawResponse);
    return rawResponse;
  } else {
    console.log('rawResponse5', rawResponse);
    //manageApiResponseCode(rawResponse);
    return null;
  }
};

const PostApiCall = async (
  url,
  payLoad,
  header,
  showNoInternetMessage = true,
  manageApiResponse = true,
) => {
  const isInternet = await checkInternetConnection();
  if (!isInternet) {
    if (showNoInternetMessage) {
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Check your internet connection',
      );
    }
    return null;
  }
  console.log(' ---- URL ----');
  console.log(url);
  console.log(' ---- payLoad ----');
  console.log(payLoad);
  
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: !!config.Constant.USER_DATA && !!config.Constant.USER_DATA.access_token
        ? `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOnsiaWQiOiIxMTM2MjgiLCJ1c2VyX2lkIjoiYzZkOWIwZDg4OTU4Nzg5ZjJlNGM5YWM3IiwiZmlyc3RfbmFtZSI6IlRydXNoYWwiLCJsYXN0X25hbWUiOiIiLCJjb3VudHJ5X2NvZGUiOiIrOTEiLCJwaG9uZV9ubyI6Ijg1MzA0MzM2MzQiLCJmdWxsX3Bob25lX25vIjoiKzkxODUzMDQzMzYzNCIsImxldmVsIjoiRU5UUkVQUkVORVVSIiwid2hhdF9iZWNvbWUiOm51bGwsImVtYWlsIjpudWxsLCJjcmVhdGVkX2F0IjoiMjAyMS0wNC0zMFQwMDoxNToxMC4wMDBaIiwiZG9iIjpudWxsLCJ1c2VyX3N0YXR1cyI6IkFDVElWRSIsImRvY192ZXJpZnkiOiJQRU5ESU5HIiwiaW5kdXN0cnlfaWQiOm51bGwsImxhbmd1YWdlIjpudWxsLCJ1c2VyX2ltYWdlIjpudWxsLCJjcmVkaXRfY3VycmVudCI6bnVsbCwiY3JlZGl0X3VzZWQiOm51bGwsInRvdGFsX2FjdGl2YXRpb25fY291cnNlX2xlZnQiOjAsImFjY2Vzc190b2tlbiI6bnVsbCwicGhvbmVfdmVyaWZ5Ijp0cnVlLCJyZWdpc3RyYXRpb25fZGF0ZSI6IjIwMjEtMDUtMjZUMDg6MzQ6MzQuMDAwWiIsInRva2VuX2V4cGlyZWRfdGltZSI6IjIwMjItMDUtMjZUMDg6MzQ6MzQuMDAwWiIsInVwZGF0ZWRfYXQiOiIyMDIxLTA1LTI2VDA4OjM0OjM0LjAwMFoifSwiaWF0IjoxNjIyMjgzNzA3LCJleHAiOjE2MjQ4NzU3MDd9.7wPKqyUj8jTfZh03rsNKs8YD1olcaubgX9Y4aTPYTAo`
        : '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payLoad),
  })
    .then(response => response.json())
    .then(response => {
      console.log('URL_DEBUG ---- URL ----');
      console.log(url);
      console.log('URL_DEBUG ---- payLoad ----');
      console.log(payLoad);
      console.log('URL_DEBUG Response Json:', JSON.stringify(response));
      return response;
    })
    .catch(exc => {
      console.log('Response exc:', exc);
      config.Constant.showLoader.hideLoader();
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Something went wrong try again after sometime',
      );
      return null;
    });

  if (!manageApiResponse) {
    console.log('rawResponse1', rawResponse);
    return null;
  } else if (rawResponse === null) {
    console.log('rawResponse2', rawResponse);
    return rawResponse;
  } else if (rawResponse.success === undefined) {
    console.log('rawResponse3', rawResponse);
    return rawResponse;
  } else if (rawResponse.success === true) {
    console.log('rawResponse4', rawResponse);
    return rawResponse;
  } else {
    console.log('rawResponse5', rawResponse);
    //manageApiResponseCode(rawResponse);
  }
};

const PostApiCallFormDate = async (
  url,
  payLoad,
  header,
  showNoInternetMessage = true,
  manageApiResponse = true,
) => {
  const isInternet = await checkInternetConnection();
  if (!isInternet) {
    if (showNoInternetMessage) {
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Check your internet connection',
      );
    }
    return null;
  }
  console.log(' ---- URL ----');
  console.log(url);
  console.log(' ---- payLoad ----');
  console.log(payLoad);
  
  const rawResponse = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: !!config.Constant.USER_DATA && !!config.Constant.USER_DATA.access_token
        ? `Bearer ${config.Constant.USER_DATA.access_token}`
        : '',
    },
    body: payLoad,
  })
    .then(response => response.json())
    .then(response => {
      console.log('URL_DEBUG ---- URL ----');
      console.log(url);
      console.log('URL_DEBUG ---- payLoad ----');
      console.log(payLoad);
      console.log('URL_DEBUG Response Json:', JSON.stringify(response));
      return response;
    })
    .catch(exc => {
      console.log('Response exc:', exc);
      config.Constant.showLoader.hideLoader();
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Something went wrong try again after sometime',
      );
      return null;
    });

  if (!manageApiResponse) {
    console.log('rawResponse1', rawResponse);
    return null;
  } else if (rawResponse === null) {
    console.log('rawResponse2', rawResponse);
    return rawResponse;
  } else if (rawResponse.success === undefined) {
    console.log('rawResponse3', rawResponse);
    return rawResponse;
  } else if (rawResponse.success === true) {
    console.log('rawResponse4', rawResponse);
    return rawResponse;
  } else {
    console.log('rawResponse5', rawResponse);
    //manageApiResponseCode(rawResponse);
  }
};

const DeleteApiCall= async (
  url,
  payLoad,
  header,
  showNoInternetMessage = true,
  manageApiResponse = true,
) => {
  const isInternet = await checkInternetConnection();
  if (!isInternet) {
    if (showNoInternetMessage) {
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Check your internet connection',
      );
    }
    return null;
  }
  console.log(' ---- URL ----');
  console.log(url);
  console.log(' ---- payLoad ----');
  console.log(payLoad);
  
  const rawResponse = await fetch(url, {
    method: 'DELETE',
    headers: {
      Authorization: !!config.Constant.USER_DATA && !!config.Constant.USER_DATA.access_token
        ? `Bearer ${config.Constant.USER_DATA.access_token}`
        : '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payLoad),
  })
    .then(response => response.json())
    .then(response => {
      console.log('Response Json:', JSON.stringify(response));
      return response;
    })
    .catch(exc => {
      console.log('Response exc:', exc);
      config.Constant.showLoader.hideLoader();
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Something went wrong try again after sometime',
      );
      return null;
    });

  if (!manageApiResponse) {
    console.log('rawResponse1', rawResponse);
    return null;
  } else if (rawResponse === null) {
    console.log('rawResponse2', rawResponse);
    return rawResponse;
  } else if (rawResponse.success === undefined) {
    console.log('rawResponse3', rawResponse);
    return rawResponse;
  } else if (rawResponse.success === true) {
    console.log('rawResponse4', rawResponse);
    return rawResponse;
  } else {
    console.log('rawResponse5', rawResponse);
    //manageApiResponseCode(rawResponse);
  }
};

const PutApiCall = async (
  url,
  payLoad,
  header,
  showNoInternetMessage = true,
  manageApiResponse = true,
) => {
  const isInternet = await checkInternetConnection();
  if (!isInternet) {
    if (showNoInternetMessage) {
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Check your internet connection',
      );
    }
    return null;
  }
  console.log(' ---- URL ----');
  console.log(url);
  console.log(' ---- payLoad ----');
  console.log(payLoad);
  
  const rawResponse = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: !!config.Constant.USER_DATA
        ? `Bearer ${config.Constant.USER_DATA.access_token}`
        : '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payLoad),
  })
    .then(response => response.json())
    .then(response => {
      console.log('URL_DEBUG ---- URL ----');
      console.log(url);
      console.log('URL_DEBUG ---- payLoad ----');
      console.log(payLoad);
      console.log('URL_DEBUG Response Json:', JSON.stringify(response));
      return response;
    })
    .catch(exc => {
      console.log('Response exc:', exc);
      config.Constant.showLoader.hideLoader();
      modules.DropDownAlert.showAlert(
        'error',
        '',
        'Something went wrong try again after sometime',
      );
      return null;
    });

  if (!manageApiResponse) {
    console.log('rawResponse1', rawResponse);
    return null;
  } else if (rawResponse === null) {
    console.log('rawResponse2', rawResponse);
    return rawResponse;
  } else if (rawResponse.success === undefined) {
    console.log('rawResponse3', rawResponse);
    return rawResponse;
  } else if (rawResponse.success === true) {
    console.log('rawResponse4', rawResponse);
    return rawResponse;
  } else {
    console.log('rawResponse5', rawResponse);
    //manageApiResponseCode(rawResponse);
  }
};

export default {
  GetApiCall,
  PostApiCall,
  PutApiCall,
  DeleteApiCall,
  PostApiCallFormDate
};
