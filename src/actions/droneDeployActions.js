import * as types from '../constants/action_types';

export default function setDronedeployAPI(api) {
  return {
    type: types.SET_DRONE_DEPLOY_API,
    payload: {
      api
    }
  };
}

export function exportImage(payload) {
  return {
    type: types.EXPORT_IMAGE,
    payload
  };
}
