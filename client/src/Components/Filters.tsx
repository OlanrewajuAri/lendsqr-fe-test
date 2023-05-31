import React from 'react'
import Filter1 from "../Images/Filter1.svg"
import Filter2 from "../Images/Filter2.svg"
import Filter3 from "../Images/Filter3.svg"
import "./Filter.scss"
import { useNavigate, Link } from 'react-router-dom';
import queryString from "query-string";



interface TableData {
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  status: string;
}

type FiltersProps = {
  onClose: () => void;
  selectedItem: TableData;
};


const Filters: React.FC<FiltersProps> = ({ onClose, selectedItem }) => {
  const navigate = useNavigate();


  const handleViewDetailsClick = (item: TableData, index: number) => {

    const query = queryString.stringify({
      itemId: encodeURIComponent(JSON.stringify(item)),
      index: index,
    });
    navigate(`/user-details?${query}`);
    return
  };

  return (
    <div>
      <div className='filter-main'>
        <div className='filter-sub' onClick={() => handleViewDetailsClick(selectedItem, 0)}>
          <img src={Filter1} />
          <p className='cursor-pointer'>View Details</p>
        </div>
        <div className='filter-sub'>
          <img src={Filter2} />
          <p className='cursor-pointer'>Blacklist User</p>
        </div>
        <div className='filter-sub'>
          <img src={Filter3} />
          <p className='cursor-pointer'>Activate User</p>
        </div>
      </div>

     

    </div>
  )
}

export default Filters

