import React, { SVGProps } from "react";
type HeaderItemProps = {
  Icon: (
    props: SVGProps<SVGSVGElement> & {
      title?: string | undefined;
      titleId?: string | undefined;
    }
  ) => JSX.Element;
  title: string;
};
const HeaderItem = ({ Icon, title }: HeaderItemProps) => {
  return (
    <div className="flex flex-col items-center w-12 cursor-pointer group sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce " />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
