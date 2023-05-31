import Signup from "@/Components/Signup"
import PageWrapper from "../Components/PageWrapper"
import Sidebar from "../Components/Sidebar"
import Navbar from "../Components/Navbar"
function Index() {
    return (
      <PageWrapper>
        {/* <Sidebar />
        <Dashboard/> */}
      </PageWrapper>
    
    )
  }

  function Dashboard (){
    return ( <div className="p-5">I am the index page</div>)
  }

  export default Index