import { useFormik } from "formik";
import { useState } from "react";
import Button from "../../components/buttons/button";
// import Modal from "react-modal";
import { Box, Modal } from "@mui/material";
import CancelModal from "../../assets/Cancel.png";
import TextArea from "../../components/inputs/text-area";
import { useRejectUserHook } from "../../services/users/reject-user";
export function RejectionModal({ userId }: { userId: number }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutateAsync } = useRejectUserHook();

  const initialValues: {
    rejection_reason: string;
  } = {
    rejection_reason: "",
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit: async (values) => {
      const payload = {
        id: userId,
        rejection_reason: values.rejection_reason,
      };
      await mutateAsync(payload);
    },
  });

  const { values, handleChange, handleSubmit } = formik;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    formik.resetForm();
    setIsModalOpen(false);
  };

  return (
    <div className="">
      <Button
        text="Reject"
        className="bg-[white]  text-[#F9382D] outline-[0.5px] outline-[#F9382D] rounded-xl mr-6"
        isDetailsButton={true}
        onClick={openModal}
      />

      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          className="bg-white rounded-2xl md:w-[649px] min-h-[445px] p-8 relative overflow-hidden flex flex-col max-h-[445px] shadow-lg"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col h-full">
            <div className="flex  justify-end   w-full">
              <img
                src={CancelModal}
                alt="Close Modal"
                className="cursor-pointer w-8 h-8 mb-4 mt-[-12px] flex justify-end "
                onClick={closeModal}
              />
            </div>
            <h1 className="text-center font-bold text-4xl text-[#292929] pb-4">
              Reason
            </h1>
            <TextArea
              label="Reason of rejection"
              placeholder="Write Reason of Rejection"
              onChange={handleChange}
              value={values.rejection_reason}
              name="rejection_reason"
            />
            <div className="flex py-2 w-full mt-4 bg-black text-white rounded-2xl">
              <Button
                text="Done"
                className="w-full text-[18px]"
                type="submit"
              />
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
export default RejectionModal;
