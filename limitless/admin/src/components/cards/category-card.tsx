// import { useCallback, useEffect, useRef, useState } from "react";
// import check from "../../assets/check.png";
// import EditIcon from "../../assets/edit.png";
// import Trash from "../../assets/trash.png";
// import Profile from "../../assets/Avatar.png";
// import { HiOutlineDotsVertical } from "react-icons/hi";
// import { Category } from "@/types/categories";
// import { deleteCategory } from "@/api/categories";
// import { toast, ToastContainer } from "react-toastify";
// import DialogDemo from "@/views/dashboard/categories/create-form";

// const CategoryCard = (category: Category) => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false); // Manage edit modal state
//   const [editData, setEditData] = useState<Category | null>(null); // Store data for editing
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const toggleMenu = useCallback(() => {
//     setIsMenuOpen(!isMenuOpen);
//   }, [isMenuOpen]);

//   const handleDelete = async (category_id: number) => {
//     const data = await deleteCategory(category_id);
//     if (data) {
//       toast("Category Deleted Successfully", { type: "success" });
//       setTimeout(() => {
//         window.location.reload();
//       }, 1000);
//     }
//   };

//   const handleEdit = () => {
//     setEditData(category); // Set the current category data for editing
//     setIsEditModalOpen(true); // Open the edit modal
//     setIsMenuOpen(false); // Close dropdown
//   };

//   useEffect(() => {
//     const handleOutsideClick = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node) &&
//         isMenuOpen
//       ) {
//         setIsMenuOpen(false);
//       }
//     };

//     if (isMenuOpen) {
//       document.addEventListener("mousedown", handleOutsideClick);
//     } else {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, [isMenuOpen, toggleMenu]);

//   return (
//     <div className="bg-white w-full h-[268px] shadow-lg rounded-2xl">
//       <ToastContainer autoClose={3000} position="top-right" />
//       <div className="flex justify-between items-center px-4 py-4">
//         <img
//           src={category.icon || Profile}
//           className="w-[60px] h-[36px]"
//           alt=""
//         />
//         <div className="relative" ref={dropdownRef}>
//           <HiOutlineDotsVertical
//             className="w-[24px] h-[24px] cursor-pointer"
//             onClick={toggleMenu}
//           />
//           {isMenuOpen && (
//             <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-10">
//               <div className="w-fit">
//                 {/* Edit Button */}
//                 <div
//                   className="flex items-center px-4 cursor-pointer"
//                   onClick={handleEdit}
//                 >
//                   <img
//                     src={EditIcon}
//                     alt="Edit"
//                     className="w-[20px] h-[20px]"
//                   />
//                   <p className="block px-4 py-2 text-gray-800">Edit</p>
//                 </div>
//                 {/* Delete Button */}
//                 <div className="flex items-center px-4 cursor-pointer">
//                   <img src={Trash} alt="Trash" className="w-[20px] h-[20px]" />
//                   <a
//                     href="#"
//                     className="block px-4 py-2 text-red-600"
//                     onClick={() => handleDelete(category.id)}
//                   >
//                     Delete
//                   </a>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       <h1 className="px-4 font-medium md:text-2xl text-sm">{category.name}</h1>
//       <div className="grid grid-cols-2 px-4 py-4 w-full">
//         {category.material_types.map((type, index) => (
//           <div key={index} className="flex md:gap-1 items-center h-fit py-2">
//             <img src={check} alt="" className="w-[20px] h-[20px]" />
//             <p className="text-sm text-[#51595A]">{type}</p>
//           </div>
//         ))}
//       </div>

//       {/* Edit Modal */}
//       {isEditModalOpen && editData && (
//         <DialogDemo
//           type="edit"
//           data={editData} // Pass current category data to the modal
//           isEditModalOpen={isEditModalOpen}
//           setIsEditModalOpen={setIsEditModalOpen}
//         />
//       )}
//     </div>
//   );
// };

// export default CategoryCard;
