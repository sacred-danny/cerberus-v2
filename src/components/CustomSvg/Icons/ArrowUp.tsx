import React from 'react';

import { CustomSvg } from '../index';
import { SvgProps } from '../../../core/interfaces/svg';

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <CustomSvg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M4.29688 17.4453H13.8359C15.3594 17.4453 16.1406 16.6641 16.1406 15.1641V5.58594C16.1406 4.07812 15.3594 3.29688 13.8359 3.29688H4.29688C2.77344 3.29688 1.99219 4.07031 1.99219 5.58594V15.1641C1.99219 16.6719 2.77344 17.4453 4.29688 17.4453ZM4.3125 16.4766C3.4375 16.4766 2.96094 16.0156 2.96094 15.1094V5.63281C2.96094 4.73438 3.4375 4.26562 4.3125 4.26562H13.8125C14.6797 4.26562 15.1719 4.73438 15.1719 5.63281V15.1094C15.1719 16.0156 14.6797 16.4766 13.8125 16.4766H4.3125ZM11.6094 12.2422C11.875 12.2422 12.0469 12.0469 12.0469 11.7656V7.86719C12.0469 7.52344 11.8594 7.375 11.5547 7.375H7.64062C7.35156 7.375 7.17188 7.54688 7.17188 7.8125C7.17188 8.07812 7.35938 8.25781 7.64844 8.25781H9.53125L10.6641 8.17969L9.60938 9.17188L6.22656 12.5547C6.14062 12.6406 6.07812 12.7578 6.07812 12.8828C6.07812 13.1562 6.25781 13.3359 6.53125 13.3359C6.67969 13.3359 6.78906 13.2734 6.875 13.1875L10.25 9.82031L11.2344 8.77344L11.1562 10.0547V11.7734C11.1562 12.0625 11.3359 12.2422 11.6094 12.2422Z"/>
    </CustomSvg>
  );
};

export default Icon;