import {
  ArrowRightCircleIcon,
  BuildingStorefrontIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-[20px] w-[70px] p-[10px] h-screen bg-white text-center items-center">
      <img src="/assets/images/logo-only.png" alt="Logo" className="w-[50px]" />
      <hr className="border-[#F7F7F7] border-2 border-solid w-[100%]" />
      <ArrowRightCircleIcon className="size-10 text-[#6392F3]" />
      <hr className="border-[#F7F7F7] border-2 border-solid w-[100%]" />
      <BuildingStorefrontIcon className="size-10 text-[#6392F3]" />
      <DocumentTextIcon className="size-10 text-[#6392F3]" />
      <Cog6ToothIcon className="size-10 text-[#6392F3]" />
    </div>
  );
};

export default Sidebar;
