// import React from "react";

// // Components
// import CardFrame from "../cards/card-frame";
// import Button from "../buttons/button";
// // import Image from "next/image";

// interface ModalProps {
//   children?: React.ReactNode;
//   className?: string;
//   onClose?: () => void;
//   isOpen?: boolean;
//   btnText?: string;
//   isBtnRed?: boolean;
//   onClick?: () => void;
// }

// const Modal = ({
//   btnText,
//   children,
//   isBtnRed,
//   className,
//   isOpen,
//   onClose,
//   onClick,
// }: ModalProps) => {
//   return (
//     <div
//       className={`${isOpen ? "absolute" : "hidden"} -top-4 left-0 z-[1000] h-[102dvh] w-full bg-lightBlack flex items-center justify-center px-6`}
//     >
//       <CardFrame
//         className={`px-5 py-4 flex flex-col !rounded-2xl w-full min-w-[300px] sm:min-w-[400px] max-w-[400px] border-[#EAEAEA] ${className}`}
//       >
//         <div className="flex justify-end">
//           <Image
//             src="/assets/icons/Close.svg"
//             alt="close"
//             width={20}
//             height={20}
//             onClick={onClose}
//             className="cursor-pointer"
//           />
//         </div>

//         {children && children}
//       </CardFrame>
//     </div>
//   );
// };

// export default Modal;
