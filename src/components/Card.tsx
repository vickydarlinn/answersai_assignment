interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Card: React.FC<CardProps> = ({ className = "", children, ...props }) => {
  const cardClasses = `
    rounded bg-card text-card-foreground border border-border p-2 
  ${className}
`;
  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
