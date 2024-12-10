const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container">
      <div className="flex flex-col min-h-screen justify-center">
        {children}
      </div>
    </div>
  )
};

export default AppLayout;
