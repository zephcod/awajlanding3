
import { DashNav } from "../layouts/sidenav_dashboard";
import appwriteServerDBService from "@/db/appwrite_server_db";

async function NavName() {
    let name = ''
    const user = await appwriteServerDBService.getServerAwajUser()
    if (!user) {
        name = ''
    }
    else {
        const userName = user.name
        name = userName
        return(
            <DashNav name = {name}/>
            )
        }
}
export default NavName