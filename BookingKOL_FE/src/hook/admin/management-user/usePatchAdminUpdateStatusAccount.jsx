import { useMutation } from "@tanstack/react-query"
import { patchAdminUpdateStatusAccount } from "../../../services/ManagementUserService"
import { toast } from "react-toastify"
import { useState } from "react"

export const usePatchAdminUpdateStatusAccount = (onSuccessCallback) => {
    const [userId, setUserId] = useState(undefined)
    const {
        isPending: isLoadingAdminUpdateStatusAccount,
        mutateAsync: usePatchAdminUpdateStatusAcountMutation
    } = useMutation({
        mutationKey: ["usePatchAdminUpdateStatusAccount"],
        mutationFn: patchAdminUpdateStatusAccount,
        onError: (err) => {
            toast.error(err.message || "Có lỗi xảy ra vui lòng thử lại sau ít phút.")
        },
        onSuccess: () => {
            onSuccessCallback?.()
            setUserId(undefined)
        }
    })

    const handleUpdateStatusAccount = (value) => {
        setUserId(value.userId)
        usePatchAdminUpdateStatusAcountMutation(value)
    }


    return {
        isLoadingAdminUpdateStatusAccount,
        handleUpdateStatusAccount,
        userId
    }
}
