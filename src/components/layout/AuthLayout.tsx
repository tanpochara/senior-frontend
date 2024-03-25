interface Props {
  children: React.ReactNode;
  position: "left" | "right";
}
export const AuthLayout: React.FC<Props> = ({ children, position }) => {
  return (
    <div className="grid grid-cols-2 h-[95vh]">
      {position == "left" && (
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      )}
      <div className="w-[50vw] h-full bg-gradient-to-br from-primary to-secondary-blue" />
      {position == "right" && (
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};
