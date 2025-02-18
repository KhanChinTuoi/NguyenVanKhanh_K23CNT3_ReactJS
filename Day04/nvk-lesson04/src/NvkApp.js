import './App.css';
import NvkFuncComp from './components/NvkFuncComp';
import NvkFuncComp1 from './components/NvkFuncComp1';
import NvkClassComp from './components/NvkClassComp';

function NvkApp() {
  // object
  const users = {
    fullName:'Nguyen Van Khanh',
    age:20,
    phone:"0984915173"
  }
  return (
    <div className="container border mt-3">
        <h1>Demo Components - Props - State</h1>
        <hr/>
        <div className='alert alert-danger'>
            <NvkFuncComp name="Nguyen Van Khanh" address="28 Dai Linh" company = "IDK" />
            <hr/>
            <NvkFuncComp name="Bui Duc Huy" address="K23CNT2" company="Fit-NTU" />
        </div>
        <div className='alert alert-info'>
          <NvkFuncComp1 renderInfo={users} />
        </div>
        <NvkClassComp />
        {/* chuyển dữ liệu từ NvkApp -> xuống NvkClassComp */}
        <NvkClassComp renderName="K23CNT3" renderUsers={users} />
    </div>
  );
}

export default NvkApp;
