import { instanceAPIMain } from "src/api";
import { ApiConstants } from "src/const";

export const getSchedule = (params) =>
  instanceAPIMain.get(ApiConstants.VIEW_SCHEDULE, { params });

export const getScheduleDetail = (params) =>
  instanceAPIMain.get(ApiConstants.VIEW_SCHEDULE_DETAIL, { params });

export const deleteSchedule = (params) =>
  instanceAPIMain.delete(ApiConstants.DELETE_SCHEDULE, { params });

export const addSchedule = (data) => {
  const { date, semester } = data;
  return instanceAPIMain.post(
    `${ApiConstants.ADD_SCHEDULE}?date=${date}&semesterName=${semester}`,
    data
  );
};

export const editSchedule = (data) => {
  const { date } = data;
  return instanceAPIMain.put(
    `${ApiConstants.EDIT_SCHEDULE}?date=${date}`,
    data
  );
};

export const importSchedule = (data) => {
  const { date, ...body } = data;
  return instanceAPIMain.post(`${ApiConstants.IMPORT_SCHEDULE}?${date}`, body);
};
