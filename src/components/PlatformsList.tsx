import {
  FaAndroid,
  FaAppStore,
  FaLinux,
  FaPlaystation,
  FaXbox,
} from "react-icons/fa";
import type { Platform } from "./hooks/UseGames";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import type { ReactNode } from "react";

interface PlatformList {
  parent_platforms: { platform: Platform }[];
}

const PlatformList = function ({ parent_platforms }: PlatformList) {
  const icons:{[key:string]:ReactNode} = {
    pc: <FaPlaystation />,
    xbox: <FaXbox />,
    ios: <MdPhoneIphone />,
    android: <FaAndroid/>,
    mac: <FaAppStore/>,
    linux: <FaLinux/>,
    nintendo: <BsNintendoSwitch/>,
    web: <BsGlobe/>,
  };
  return (
    <div className = "flex gap-2">
      {parent_platforms.map(({ platform }) => (
        <div>
          {icons[platform.slug]}
        </div>
      ))}
    </div>
  );
};

export default PlatformList;
