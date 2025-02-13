import { useDispatch } from "react-redux";
import { AppToastNotify } from "src/components/Common";
import {
  ApiConstants,
  AppConstants,
  DataConstants,
  EnvConstants,
} from "src/const";
import { semesterActions } from "src/redux-store/store";
import { SemesterService } from "src/services";

const useCreateSemester = () => {
  const dispatch = useDispatch();
  const handleCreateSemester = async (data) => {
    try {
      const newData = {
        ...data,
        startTime: data.startTime.format(AppConstants.DATE_FORMAT),
        endTime: data.endTime.format(AppConstants.DATE_FORMAT),
        status: data.status
          ? DataConstants.STATUS_TYPE.ACTIVE
          : DataConstants.STATUS_TYPE.INACTIVE,
      };
      const response = await SemesterService.createSemester(newData);
      if (response.status === ApiConstants.STT_OK) {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.SUCCESS,
          message: "Create semester success!",
        });
        dispatch(
          semesterActions.getSemesterListRequest(
            DataConstants.PAGINATION_DEFAULT
          )
        );
      } else {
        AppToastNotify({
          type: AppConstants.NOTIFY_TYPE.ERROR,
          message: response?.message || "Create semester failure!",
        });
      }
    } catch (error) {
      EnvConstants.IS_DEV && console.log(error);
      AppToastNotify({
        type: AppConstants.NOTIFY_TYPE.ERROR,
        message: error?.response?.data?.message || "An error occurred!",
      });
    }
  };

  return handleCreateSemester;
};

export default useCreateSemester;
