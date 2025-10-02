import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

interface CardSubcomponentProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  return (
    <div className="flex flex-col items-center space-y-2 w-[50%]">
      {children}
    </div>
  );
};

Card.Title = ({ children }: CardSubcomponentProps) => {
  return <div>{children}</div>;
};

Card.Subtitle = ({ children }: CardSubcomponentProps) => {
  return <div>{children}</div>;
};

Card.Content = ({ children }: CardSubcomponentProps) => {
  return <div>{children}</div>;
};

export default Card;
