  

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen"> 
      <main className="flex-1 overflow-auto bg-[#0f1115]">
        {children}
      </main>
    </div>
  );
}
