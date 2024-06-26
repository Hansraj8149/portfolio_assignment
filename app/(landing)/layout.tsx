import Navbar from "@/components/Navbar";


const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
 

  return ( 
    <div className="h-full">
  
        <Navbar />
        {children}
    </div>
   );
}
 
export default DashboardLayout;