import { FC, memo } from 'react';
import { IconBaseProps } from 'react-icons';
import { CiCircleInfo } from "react-icons/ci";
import { IoIosCheckmark, IoMdWarning } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

import { NotificationType } from 'types';

interface NotificationIconProps extends IconBaseProps {
  type?: NotificationType;
}

const NotificationIcon: FC<NotificationIconProps> = ({ type = NotificationType.ERROR, ...rest }) => {
  switch (type) {
    case 'info':
      return <CiCircleInfo size={24} {...rest} />;
    case 'warning':
      return <IoMdWarning color="red" size={24} {...rest} />;
    case 'error':
      return <MdErrorOutline {...rest} />;
    case 'success':
      return <IoIosCheckmark {...rest} />;
    default:
      return null;
  }
};

export default memo(NotificationIcon);
