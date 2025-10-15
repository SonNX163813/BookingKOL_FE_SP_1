import { get, post } from "../../config/axios-config";
import { API_PATHS } from "../../constants/apiPath";

export const createBookingPackage = async (value) => {
    const data = {
        packageId: value.packageId,
        campaignName: value.campaignName,
        objective: value.objective,
        budgetMin : value.budgetMin,
        budgetMax : value.budgetMax,
        startDate: value.startDate,
        endDate: value.endDate,
        recurrencePattern: value.recurrencePattern,
        liveIds: value?.liveIds ?? undefined,
        kolIds: value?.kolIds ?? undefined,
        attachment: value?.attachment ?? undefined
    }

    const formData = new FormData

    formData.append("packageId", value.packageId)
    formData.append("campaignName", value.campaignName)
    formData.append("objective", value.objective)
    formData.append("budgetMin", value.budgetMin)
    formData.append("budgetMax", value.budgetMax)
    formData.append("startDate", value.startDate)
    formData.append("endDate", value.endDate)
    formData.append("recurrencePattern", value.recurrencePattern ? "WEEKLY" : "")
    if(value?.liveIds) {
        formData.append("liveIds", value.liveIds)
    }
    if(value?.kolIds) {
        formData.append("kolIds", value.kolIds)
    }
    if(value?.attachment) {
        formData.append("attachment", value.attachment)
    }

    return await post({
        url: API_PATHS.BOOKINGPACKAGE.createBookingPackage,
        data:formData

    });
};

export const getHistoryBookingPackage = async (page, size) => {
    return await get({
        url : API_PATHS.BOOKINGPACKAGE.getHistoryBookingPackage,
        data : {
            page: page,
            size: size
        }
    })
}