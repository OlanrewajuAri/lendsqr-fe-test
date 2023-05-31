import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Images/SwitchOrg.svg';
import Dashboard from "../Images/Dashboard.svg"
import UserImage from "../Images/User.svg"
import Loanm from "../Images/Loans.svg"
import LoanRequestm from '../Images/LoanRequest.svg';
import Decisionm from "../Images/Decison.svg"
import Karmam from "../Images/Karma.svg"
import WhiteListm from '../Images/WhiteList.svg';
import Savningsm from "../Images/Savings.svg"
import Grantorsm from "../Images/Gurantors.svg"
import Business1 from "../Images/Business1.svg"
import Business2 from "../Images/Business2.svg"
import Business3 from "../Images/Business3.svg"
import Business4 from "../Images/Business4.svg"
import Business5 from "../Images/Business5.svg"
import Business6 from "../Images/Business6.svg"
import Business7 from "../Images/Business7.svg"
import Business8 from "../Images/Business8.svg"
import Business9 from "../Images/Business9.svg"
import Settings1 from "../Images/Settings1.svg"
import { useNavigate } from 'react-router-dom';
import "./Sidebar.scss"



interface User {
    id: number;
    name: string;
}


const Sidebar: React.FC = () => {
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const [showUsers, setShowUsers] = useState(false);
    const [showUsersMe, setShowUsersMe] = useState(false);
    const navigate = useNavigate()
    const users: User[] = [
        { id: 1, name: 'Organization1' },
        { id: 2, name: 'Organization 2' },
        { id: 3, name: 'Organization 3' },
    ];

    const handleUserChange = (user: User) => {
        setSelectedUser(user);
    };


    const handleGurantorsClick = ()=>{
        setShowUsersMe(!showUsersMe);
    }

    return (
        <div className="sidebar overflow-y-auto">
            <div className='sidebar-parent'>
                <div className="select-wrapper">
                    <img src={Logo} alt="Logo" className="option-logo" />
                    <select
                        value={selectedUser ? selectedUser.id : ''}
                        onChange={(e) => {
                            const userId = parseInt(e.target.value);
                            const user = users.find((user) => user.id === userId);
                            if (user) {
                                handleUserChange(user);
                            } else {
                                setSelectedUser(null);
                            }
                        }}
                    >
                        <option value="" className="switch-option">  Switch Organization</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.name}
                            </option>
                        ))}
                    </select>
                </div>
           
            <div className='dashboard-item'>
                <img src={Dashboard} alt='Dashboard' className='dashboard-item__image' />
                <h6 className='dashboard-item__text'>Dashboard</h6>
            </div>



            <div className='user-Customer'>
                <h6>CUSTOMERS</h6>
                <Link to="/users" className="users-toggle"  >
                    <img src={UserImage} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Users</p>
                </Link>
              
            </div>
        
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Grantorsm} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Gurantors</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Loanm} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Loans</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Decisionm} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Decision Models</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div   className="users-toggle" >
                    <img src={Savningsm} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Savings</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div  className="users-toggle" >
                    <img src={LoanRequestm} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Loan Requests</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div   className="users-toggle" >
                    <img src={WhiteListm} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Whitelist</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Karmam} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Karma</p>
                </div>
            </div>

            <div className='user-Customer'>
                <h6>BUSINESSES</h6>

                
                <div className="users-toggle" >
                    <img src={Business1} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Organization</p>
                </div>
            </div>
        
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Business2} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Loan Products</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Business3} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Savings Products</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div  className="users-toggle" >
                    <img src={Business4} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Fees and Charges</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Business5} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Transactions</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div  className="users-toggle" >
                    <img src={Business6} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Services</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Business7} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Service Account</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Business8} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Settlements</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Business9} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Reports</p>
                </div>
            </div>


            <div className='user-Customer'>
                <h6>SETTINGS</h6>

                
                <div className="users-toggle" >
                    <img src={Settings1} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Preferences</p>
                </div>
            </div>
        
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Business2} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Fees and Pricing</p>
                </div>
            </div>
            <div className='user-Gurantor'>
              
                <div className="users-toggle" >
                    <img src={Business3} alt="userImage" className='dashboard-item__image'/>
                    <p className='dashboard-item__text'>Audit Logs</p>
                </div>
            </div>
    


            
           
            </div>
        </div>
    );
};

export default Sidebar;
